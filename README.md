# dsh-gemini

面向 **Gemini 3 及后续模型**的 DSH 原生适配器，直接调用 Gemini `streamGenerateContent` API，支持思考强度与内置 Google 搜索。使用 **GPL-3.0-only**，完整条款见 [LICENSE](LICENSE)。

验证版本：DSH **0.2.2-rc.1 / 0.2.2-rc.3**、Cordis 4.1、Node.js 24。兼容范围为 `>=0.2.2-rc.1 <0.2.3-0`；开发依赖固定到 rc.3，避免精确 peer 版本阻止同系列宿主安装。

## 原有 UI

不提供额外前端 bundle，不修改 DSH 页面、聊天布局或工具执行界面。

- 模型列表增加 `Google Gemini (Native)`，provider ID 为 `google-native`，与原有 pi-ai 的 `google` 可以共存。
- 思考强度通过 DSH 原生模型元数据声明，复用聊天输入区已有的思考强度选择器。
- Google 搜索通过现有插件配置设置。回答和思考摘要仍在原有位置展示；搜索来源以 Markdown 链接附在回答末尾。
- 内置搜索由 Google 服务端执行，不伪装成需要 DSH 执行的本地工具。

## 安装

从 [GitHub Releases](https://github.com/chinoll/dsh-gemini/releases) 下载安装包，或从源码打包：

```sh
git clone https://github.com/chinoll/dsh-gemini.git
cd dsh-gemini
npm ci
npm run check
npm pack
```

在已有 DSH 环境安装生成的包：

```sh
dsh plugin --profile web add /absolute/path/dsh-gemini-0.1.1.tgz
```

如果没有全局 `dsh`，可在已有的 DSH npm 项目里执行 `npm exec -- dsh plugin --profile web add /absolute/path/dsh-gemini-0.1.1.tgz`。插件管理器需要 pnpm 位于 PATH 中。安装包带有 `cordis.patch.yml`，会挂载 `llm-google-native`。

在 DSH 凭据服务中保存 `GEMINI_API_KEY`，或在启动 DSH 前设置同名环境变量，再重启对应 profile。然后在原有模型选择器中选择 **Google Gemini (Native)** 下的模型。未配置凭据时，适配器保留配置入口，但不会向可用模型列表添加不可调用的模型。

如果现有 Google 配置使用另一个凭据引用，将插件的 `apiKeyEnv` 设为同一个引用即可，不需要复制密钥。`baseURL` 应指向原生 Gemini API 根路径（默认包含 `/v1beta`）；OpenAI-compatible `/chat/completions` 端点不能用作本适配器的地址。

## 配置

可通过 DSH 现有插件设置修改 schema 暴露的字段，或使用 Cordis 配置。手动挂载示例：

```yaml
- insert:
    - id: llm-google-native
      name: dsh-gemini
      config:
        apiKeyEnv: GEMINI_API_KEY
        baseURL: https://generativelanguage.googleapis.com/v1beta
        googleSearch: true
        includeThoughts: true
        models:
          - id: gemini-3.1-pro-preview
            name: Gemini 3.1 Pro
            contextWindow: 1048576
            reasoning: high
          - id: gemini-3-flash-preview
            name: Gemini 3 Flash
            contextWindow: 1048576
            reasoning: medium
```

已通过 bundle 安装时不要再次插入同一个插件；用现有设置或 [覆盖 patch](examples/google.patch.yml) 修改它。

| 字段 | 默认值 | 用途 |
| --- | --- | --- |
| `apiKeyEnv` | `GEMINI_API_KEY` | DSH 凭据引用；没有凭据服务时读取启动环境 |
| `baseURL` | `https://generativelanguage.googleapis.com/v1beta` | Gemini 原生 API 地址，可改为兼容代理 |
| `googleSearch` | `true` | 允许模型使用内置 Google 搜索；由模型决定是否搜索 |
| `includeThoughts` | `true` | 请求模型的思考摘要；不决定思考强度 |
| `reasoning` | 留空 | 提供方默认思考强度，必须适用于所有未单独覆盖的模型 |
| `models` | 3.1 Pro、3 Flash、3 Pro 的 preview ID | 可选择模型；配置此数组会替换默认目录 |
| `maxTokens` | 留空 | 输出上限，留空使用模型/API 默认值 |
| `streamIdleTimeoutMs` | `120000` | 请求及流读取的空闲超时 |
| `retryPolicy` | DSH normal，最多 5 次 | 交给宿主 `dsh-llm-retry` 执行，适配器不叠加重试 |

每个 `models` 条目可设置 `id`、`name`、`contextWindow`、`maxTokens`、`reasoning`、`googleSearch` 和 `thinkingLevels`。思考强度的优先级是：**会话选择 > 模型默认 > 提供方默认 > Google 默认**。搜索开关的优先级是：**模型覆盖 > 提供方设置**。

凭据引用、端点、模型列表和生成参数通过 Cordis volatile 配置生效；已经准备好的请求保留准备时的配置，避免配置切换把旧模型能力与新端点拼在一起。修改后如客户端未刷新目录，可重新打开原有模型选择器。

## 思考强度与后续模型

直接发送 `generationConfig.thinkingConfig.thinkingLevel`，不使用 `thinkingBudget`，不支持 Gemini 2.x，也不把不支持的档位静默映射成其他值。

| 模型 | 内置可选档位 |
| --- | --- |
| Gemini 3 Pro | `low`、`high` |
| Gemini 3.1 Pro | `low`、`medium`、`high` |
| Gemini 3 Flash、3.1 Flash-Lite、3.5 Flash/Flash-Lite、3.6 Flash | `minimal`、`low`、`medium`、`high` |
| Gemini 3.7/3.8 Flash、4 Carbon/Argon | `low`、`medium`、`high` |
| Gemini 4 Hydrogen | `low`、`medium`、`high`、`xhigh` |

`minimal` 不表示保证完全关闭思考；选择器不提供 `off`。这些映射依据 [Google 思考配置文档](https://ai.google.dev/gemini-api/docs/generate-content/thinking)，其中 3.7 的档位另见 [Interactions 思考文档](https://ai.google.dev/gemini-api/docs/thinking)。

适配器注册了 Google `/models` 分页发现接口，过滤旧代模型以及 image、audio、live、tts、embedding 等专用模型。发现结果是可供配置采纳的候选，不会自动修改已保存的模型列表。API 的模型发现结果不包含完整思考档位信息：对于尚未收录的 Gemini 3+ ID，适配器只提供保守的 `low`、`high`；如服务商支持不同档位，应显式声明，例如：

```yaml
models:
  - id: gemini-4-hydrogen
    thinkingLevels: [low, medium, high, xhigh]
    reasoning: high
```

模型是否已向账户开放、是否仍有效，以 Google API 返回为准。此插件只处理文本回答、思考摘要、图片输入和函数调用；不提供图片生成、实时音视频或自动续接长输出功能。

## Google 搜索与多轮工具调用

开启搜索时发送 `tools: [{googleSearch: {}}]`，并设置 `toolConfig.includeServerSideToolInvocations: true`。DSH 本地工具通过 `functionDeclarations` 与搜索一起传给 Google；不会丢弃已有工具。组合调用及其预览状态见 [Google 官方说明](https://ai.google.dev/gemini-api/docs/generate-content/tool-combination)。

原生 `toolCall`、`toolResponse`、`functionCall`、空文本签名片段和 `thoughtSignature` 按原顺序保存到 DSH 的 `replayState`，后续同模型请求原样返回。并行工具响应匹配原生 call ID。元数据逐块关联，DSH 因输出截断移除工具调用时也同步移除其重放信息。切换模型不会发送旧模型签名；外部工具历史使用 Google 文档针对导入历史提供的占位签名。签名行为依据 [Google thought signatures 文档](https://ai.google.dev/gemini-api/docs/generate-content/thought-signatures)。

完整 `groundingMetadata`（查询、来源、支持片段、Search Suggestions HTML）保存在响应重放信息中；原有聊天 UI 显示安全的来源链接，不直接注入 Google 返回的 HTML。需要展示 Google 原样 Search Suggestions 的客户端可读取 `replayState.response.groundingMetadata.searchEntryPoint`，本包不添加自定义渲染界面。元数据字段见 [Google Search 文档](https://ai.google.dev/gemini-api/docs/generate-content/google-search)。

## 验证

```sh
npm run check
```

25 项测试使用真实 Cordis、DSH LlmRuntime、BlockAssembler 和本地 HTTP SSE 服务，覆盖原生选择器元数据、配置更新、请求字段、分页模型发现、流式 UTF-8/CRLF、搜索和并行工具的跨轮重放、持久化后签名保真、取消与超时、错误映射、凭据脱敏、图片输入与截断工具清理。

安装包另外通过 `dsh plugin --profile web add` 安装到隔离 DSH home，验证了完整 Web profile 启动、bundle 自动挂载、设置表单自动生成、模型目录以及通过宿主设置服务修改搜索开关和默认思考强度。示例 patch 也通过实际 profile 合成验证。浏览器工具当时被其他会话占用，因此未进行浏览器界面验收；现有 DSH 安装与前端均未修改。

外部 Google 请求尚未用真实账户验收；本地协议测试不代表 Google 已接受特定账户、模型或代理端点。配置凭据后，可在 DSH 中选择一个支持的模型，切换思考档位，再要求它“搜索今天的某项信息，列出来源，并用本地计算工具处理结果”进行账户级验收。
