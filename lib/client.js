window.__ModuleLoader__.load({id:"dsh-gemini",factory:(require)=>{var module={exports:{}};var exports=module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.ts
var index_exports = {};
__export(index_exports, {
  apply: () => apply2,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);

// vendor/ui-settings-models/src/client/ModelsSection.tsx
var import_react8 = require("react");
var import_dsh_client_ui_primitives8 = require("@deepseek-ai/dsh-client-ui-primitives");

// vendor/ui-settings-models/src/client/CustomProviderCard.tsx
var import_react5 = require("react");

// vendor/ui-settings-models/src/client/apiKey.ts
var LEGAL_API_KEY = /^[\x21-\x7E]+$/;
var ENV_LINE = /^[A-Z][A-Z0-9_]*=[^=]/;
function isQuoted(value) {
  const first = value[0];
  if (first !== '"' && first !== "'" && first !== "`") return false;
  return value.length > 1 && value.endsWith(first);
}
function apiKeyFailure(draft) {
  if (draft.length === 0) return void 0;
  const value = draft.trim();
  if (value.length === 0) return "keyBlank";
  if (ENV_LINE.test(value) || isQuoted(value)) return "keyIllegalCharacters";
  if (!LEGAL_API_KEY.test(value)) return "keyIllegalCharacters";
  return void 0;
}

// vendor/ui-settings-models/src/client/ApiKeyInput.tsx
var import_react = require("react");

// vendor/ui-settings-models/src/client/ModelsSection.module.css
var ModelsSection_default = {
  section: "ModelsSection_section",
  title: "ModelsSection_title",
  intro: "ModelsSection_intro",
  notice: "ModelsSection_notice",
  savedNotice: "ModelsSection_savedNotice",
  rows: "ModelsSection_rows",
  rowCard: "ModelsSection_rowCard",
  rowHead: "ModelsSection_rowHead",
  rowIdentity: "ModelsSection_rowIdentity",
  rowName: "ModelsSection_rowName",
  rowTag: "ModelsSection_rowTag",
  credentialDot: "ModelsSection_credentialDot",
  credentialDotConfigured: "ModelsSection_credentialDotConfigured",
  credentialDotMissing: "ModelsSection_credentialDotMissing",
  accountStatus: "ModelsSection_accountStatus",
  rowActions: "ModelsSection_rowActions",
  primaryButton: "ModelsSection_primaryButton",
  secondaryButton: "ModelsSection_secondaryButton",
  addButton: "ModelsSection_addButton",
  dangerButton: "ModelsSection_dangerButton",
  linkButton: "ModelsSection_linkButton",
  addModelButton: "ModelsSection_addModelButton",
  iconButton: "ModelsSection_iconButton",
  customizedSummary: "ModelsSection_customizedSummary",
  editor: "ModelsSection_editor",
  editorHeader: "ModelsSection_editorHeader",
  editorTitle: "ModelsSection_editorTitle",
  editorRoute: "ModelsSection_editorRoute",
  field: "ModelsSection_field",
  fieldLabel: "ModelsSection_fieldLabel",
  helpButton: "ModelsSection_helpButton",
  advancedHint: "ModelsSection_advancedHint",
  editorActions: "ModelsSection_editorActions",
  addBlock: "ModelsSection_addBlock",
  addActions: "ModelsSection_addActions",
  addModes: "ModelsSection_addModes",
  addPanel: "ModelsSection_addPanel",
  addCard: "ModelsSection_addCard",
  setupCard: "ModelsSection_setupCard",
  customized: "ModelsSection_customized",
  retryFold: "ModelsSection_retryFold",
  customizedBody: "ModelsSection_customizedBody",
  modelCatalog: "ModelsSection_modelCatalog",
  modelCatalogHeading: "ModelsSection_modelCatalogHeading",
  modelCatalogTitle: "ModelsSection_modelCatalogTitle",
  modelCatalogMeta: "ModelsSection_modelCatalogMeta",
  modelEmpty: "ModelsSection_modelEmpty",
  modelList: "ModelsSection_modelList",
  modelListHead: "ModelsSection_modelListHead",
  modelEntry: "ModelsSection_modelEntry",
  "model-row": "ModelsSection_model-row",
  modelRow: "ModelsSection_modelRow",
  modelName: "ModelsSection_modelName",
  modelNameLabel: "ModelsSection_modelNameLabel",
  modelDragHandle: "ModelsSection_modelDragHandle",
  modelDragPreview: "ModelsSection_modelDragPreview",
  iconButtonDanger: "ModelsSection_iconButtonDanger",
  modelAdvanced: "ModelsSection_modelAdvanced",
  retryBody: "ModelsSection_retryBody",
  retryCodeChoices: "ModelsSection_retryCodeChoices",
  retryCodeAdd: "ModelsSection_retryCodeAdd",
  retryCount: "ModelsSection_retryCount",
  retryBackoff: "ModelsSection_retryBackoff",
  modelField: "ModelsSection_modelField",
  modelInputTypes: "ModelsSection_modelInputTypes",
  modelInputChoices: "ModelsSection_modelInputChoices",
  modelFieldLabel: "ModelsSection_modelFieldLabel",
  modelReasoning: "ModelsSection_modelReasoning",
  modelReasoningLabel: "ModelsSection_modelReasoningLabel",
  modelReasoningHead: "ModelsSection_modelReasoningHead",
  modelReasoningRow: "ModelsSection_modelReasoningRow",
  selectInput: "ModelsSection_selectInput",
  modelReasoningValueInput: "ModelsSection_modelReasoningValueInput",
  input: "ModelsSection_input",
  keyInput: "ModelsSection_keyInput",
  savedKeyInput: "ModelsSection_savedKeyInput",
  keyInputFilled: "ModelsSection_keyInputFilled",
  keyToggle: "ModelsSection_keyToggle",
  error: "ModelsSection_error",
  deleteDialog: "ModelsSection_deleteDialog",
  deleteConfirm: "ModelsSection_deleteConfirm",
  hiddenLabel: "ModelsSection_hiddenLabel",
  switchThumb: "ModelsSection_switchThumb",
  fetchDialog: "ModelsSection_fetchDialog",
  candidateToolbar: "ModelsSection_candidateToolbar",
  candidateSearch: "ModelsSection_candidateSearch",
  candidateList: "ModelsSection_candidateList",
  candidate: "ModelsSection_candidate",
  candidateLabel: "ModelsSection_candidateLabel",
  candidateId: "ModelsSection_candidateId",
  candidateEmpty: "ModelsSection_candidateEmpty"
};

// vendor/ui-settings-models/src/client/ApiKeyInput.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var EYE_CONTOUR = "M1.5 8C2.9 5.25 5.25 3.5 8 3.5C10.75 3.5 13.1 5.25 14.5 8C13.1 10.75 10.75 12.5 8 12.5C5.25 12.5 2.9 10.75 1.5 8Z";
var EYE_PATH = `${EYE_CONTOUR}M10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8Z`;
var EYE_OFF_PATH = `${EYE_CONTOUR}M2.5 2.5L13.5 13.5`;
function ApiKeyInput({ value, saved, t, ...props }) {
  const [revealedValue, setRevealedValue] = (0, import_react.useState)();
  const canReveal = saved === void 0 && value.length > 0 && props.disabled !== true;
  const revealed = canReveal && revealedValue === value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `${ModelsSection_default["keyInput"]} ${saved === void 0 ? "" : ModelsSection_default["savedKeyInput"]}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      {
        ...props,
        className: `${ModelsSection_default["input"]} ${canReveal ? ModelsSection_default["keyInputFilled"] : ""}`,
        type: revealed ? "text" : "password",
        autoComplete: "new-password",
        value,
        placeholder: saved === void 0 ? props.placeholder : saved.masked,
        onCopy: (event) => {
          if (saved !== void 0) event.preventDefault();
        },
        onCut: (event) => {
          if (saved !== void 0) event.preventDefault();
        },
        onKeyDown: (event) => {
          if (saved !== void 0 && (event.key === "Backspace" || event.key === "Delete")) {
            event.preventDefault();
            saved.clear?.();
          }
        },
        onChange: (event) => {
          setRevealedValue(void 0);
          props.onChange?.(event);
        }
      }
    ),
    !canReveal ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: ModelsSection_default["keyToggle"],
        "aria-label": t(revealed ? "keyHide" : "keyReveal"),
        "aria-pressed": revealed,
        onClick: () => {
          setRevealedValue(revealed ? void 0 : value);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: revealed ? EYE_OFF_PATH : EYE_PATH }) })
      }
    )
  ] });
}

// vendor/ui-settings-models/src/client/EditorFooter.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function EditorFooter(props) {
  const { t } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: ModelsSection_default["editorActions"], children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        className: ModelsSection_default["secondaryButton"],
        disabled: props.busy,
        onClick: props.onCancel,
        children: t(props.cancelLabelKey ?? "cancel")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        className: ModelsSection_default["primaryButton"],
        disabled: props.submitDisabled,
        onClick: props.onSubmit,
        children: props.busy ? t(props.submitBusyLabelKey) : t(props.submitLabelKey)
      }
    )
  ] });
}

// vendor/ui-settings-models/src/client/DeepSeekModelsEditor.tsx
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");

// vendor/ui-settings-models/src/client/ModelRow.tsx
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

// vendor/ui-settings-models/src/client/ModelInputTypes.tsx
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime3 = require("react/jsx-runtime");
function ModelInputTypes({ model, field, position, disabled, fallback, t, onChange }) {
  const modalities = model[field];
  const selected = Array.isArray(modalities) && modalities.length > 0 ? modalities : fallback ?? ["text"];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("fieldset", { className: ModelsSection_default["modelInputTypes"], "aria-label": `${t("modelInputTypes")} ${String(position)}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("legend", { className: ModelsSection_default["modelFieldLabel"], children: t("modelInputTypes") }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: ModelsSection_default["modelInputChoices"], children: ["text", "image"].map((modality) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_dsh_client_ui_primitives.Checkbox,
      {
        label: t(modality === "text" ? "modelInputText" : "modelInputImage"),
        checked: selected.includes(modality),
        disabled: disabled || selected.length === 1 && selected.includes(modality),
        onChange: (checked) => {
          const nextSelected = ["text", "image"].filter((value) => value === modality ? checked : selected.includes(value));
          const next = { ...model, [field]: nextSelected };
          if (field === "inputModalities" && !nextSelected.includes("image")) {
            Reflect.deleteProperty(next, "imagePixelBudget");
            Reflect.deleteProperty(next, "imageMaxBytes");
          }
          onChange(next);
        }
      },
      modality
    )) })
  ] });
}

// vendor/ui-settings-models/src/client/ModelReasoningEfforts.tsx
var import_react2 = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime4 = require("react/jsx-runtime");
var INITIAL_LEVELS = ["off", "low", "medium", "high"];
function defaultValue(level) {
  return level === "off" ? null : level;
}
function acceptedValue(level, wire) {
  return typeof wire === "string" ? wire.length > 0 : wire === null && level === "off";
}
function readEfforts(model) {
  const value = model["reasoningEfforts"];
  if (value === null) return [];
  if (typeof value !== "object" || Array.isArray(value)) return void 0;
  return Object.entries(value);
}
function withEfforts(model, entries) {
  const next = { ...model };
  if (entries === void 0) {
    Reflect.deleteProperty(next, "reasoningEfforts");
    return next;
  }
  next["reasoningEfforts"] = Object.fromEntries(entries);
  return next;
}
function outsideLevels(only, level, wire) {
  return !only.includes(level) || wire !== level;
}
function validateReasoningEfforts(value, only) {
  for (const [index, model] of modelDrafts(value).entries()) {
    const entries = readEfforts(model);
    if (entries === void 0) continue;
    if (only !== void 0 && entries.some(([level, wire]) => outsideLevels(only, level, wire))) {
      return { index, key: "modelReasoningLevelsOnly" };
    }
    if (entries.some(([level, wire]) => !acceptedValue(level, wire))) return { index, key: "modelReasoningValueRequired" };
    if (!entries.some(([level]) => level !== "off")) return { index, key: "modelReasoningNeedsLevel" };
  }
  return void 0;
}
function ModelReasoningEfforts(props) {
  const { model, levels, levelsOnly, position, disabled, t, onChange } = props;
  const entries = readEfforts(model);
  const [typing, setTyping] = (0, import_react2.useState)(void 0);
  const label = `${t("modelReasoning")} ${String(position)}`;
  const used = entries?.map(([level]) => level) ?? [];
  const write2 = (next) => {
    onChange(withEfforts(model, next));
  };
  const replaceAt = (current, index, entry) => current.map((existing, at) => at === index ? entry : existing);
  const changeLevel = (current, index, from2, wire, to) => {
    const carried = !levelsOnly && typeof wire === "string" && wire.length > 0 && wire !== from2 && from2 !== "off" && to !== "off";
    write2(replaceAt(current, index, [to, carried ? wire : defaultValue(to)]));
  };
  const addLevel = (current) => {
    const highest = Math.max(-1, ...used.map((level2) => levels.indexOf(level2)));
    const level = levels.find((candidate, index) => index > highest && !used.includes(candidate)) ?? levels.find((candidate) => !used.includes(candidate));
    if (level === void 0) return;
    write2([...current, [level, defaultValue(level)]]);
  };
  const editValue = (current, index, level, text) => {
    setTyping({ level, text });
    const trimmed = text.trim();
    write2(replaceAt(current, index, [level, trimmed.length === 0 ? defaultValue(level) : trimmed]));
  };
  const leaveValue = (current, index, level, wire) => {
    setTyping(void 0);
    if (!acceptedValue(level, wire)) write2(replaceAt(current, index, [level, defaultValue(level)]));
  };
  const choicesFor = (level) => [
    ...levels.includes(level) ? [] : [level],
    ...levels.filter((choice) => choice === level || !used.includes(choice))
  ];
  const initialEntries = INITIAL_LEVELS.filter((level) => levels.includes(level)).map((level) => [level, defaultValue(level)]);
  const refused = entries?.some(([level, wire]) => !acceptedValue(level, wire)) === true;
  const missingLevel = entries !== void 0 && !used.some((level) => level !== "off");
  const outside = levelsOnly && entries?.some(([level, wire]) => outsideLevels(levels, level, wire)) === true;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ModelsSection_default["modelReasoning"], role: "group", "aria-label": label, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ModelsSection_default["modelReasoningHead"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: `${ModelsSection_default["modelFieldLabel"]} ${ModelsSection_default["modelReasoningLabel"]}`, children: [
        t("modelReasoning"),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("modelReasoningHelpText"), side: "right", delayMs: 0, focusDelayMs: 0, portal: true, openOnClick: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: ModelsSection_default["helpButton"], "aria-label": t("modelReasoningHelp"), children: "?" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_dsh_client_ui_primitives2.Switch,
        {
          checked: entries !== void 0,
          label,
          disabled,
          onChange: (on) => {
            write2(on ? initialEntries : void 0);
          }
        }
      )
    ] }),
    entries === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ModelsSection_default["modelReasoningRow"], "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: ModelsSection_default["modelFieldLabel"], children: t("modelReasoningLevel") }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: ModelsSection_default["modelFieldLabel"], children: t("modelReasoningValue") })
      ] }) : null,
      entries.map(([level, wire], index) => (
        // A row is the entry at this position of the stored dict: changing its
        // level edits that entry in place and rows keep no state of their own,
        // so the position is the row's identity. Keying by level would remount
        // the select on every change and drop keyboard focus.
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ModelsSection_default["modelReasoningRow"], children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "select",
            {
              className: `${ModelsSection_default["input"]} ${ModelsSection_default["selectInput"]}`,
              value: level,
              "aria-label": `${t("modelReasoningLevel")} ${String(index + 1)}`,
              disabled,
              onChange: (event) => {
                changeLevel(entries, index, level, wire, event.target.value);
              },
              children: choicesFor(level).map((choice) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: choice, children: choice }, choice))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              className: `${ModelsSection_default["input"]} ${ModelsSection_default["modelReasoningValueInput"]}`,
              type: "text",
              value: typing?.level === level ? typing.text : typeof wire === "string" ? wire : "",
              placeholder: level === "off" ? t("modelReasoningOffValuePlaceholder") : level,
              "aria-label": `${level} ${t("modelReasoningValue")}`,
              "aria-invalid": !acceptedValue(level, wire),
              disabled: disabled || level === "off" || levelsOnly,
              onChange: (event) => {
                editValue(entries, index, level, event.target.value);
              },
              onBlur: () => {
                leaveValue(entries, index, level, wire);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              className: `${ModelsSection_default["iconButton"]} ${ModelsSection_default["iconButtonDanger"]}`,
              "aria-label": `${t("modelReasoningRemove")} ${level}`,
              title: t("modelReasoningRemove"),
              disabled,
              onClick: () => {
                write2(entries.filter((_entry, at) => at !== index));
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives2.IconTrashOutlineRegular, { size: 14 })
            }
          )
        ] }, index)
      )),
      outside ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: ModelsSection_default["error"], children: t("modelReasoningLevelsOnly") }) : refused ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: ModelsSection_default["error"], children: t("modelReasoningValueRequired") }) : missingLevel ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: ModelsSection_default["error"], children: t("modelReasoningNeedsLevel") }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "button",
        {
          type: "button",
          className: ModelsSection_default["addModelButton"],
          disabled: disabled || levels.every((level) => used.includes(level)),
          onClick: () => {
            addLevel(entries);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives2.IconPlusOutlineRegular, { size: 14 }),
            t("modelReasoningAdd")
          ]
        }
      )
    ] })
  ] });
}

// vendor/ui-settings-models/src/client/ModelRow.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function rowHalf(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  return event.clientY < rect.top + rect.height / 2 ? "before" : "after";
}
function ModelRow(props) {
  const { model, position, t, disabled } = props;
  const preview = (0, import_dsh_client_ui_primitives3.useRowDragPreview)(ModelsSection_default["modelDragPreview"]);
  const modelField = (field) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: `${ModelsSection_default["modelField"]} ${field === "name" ? ModelsSection_default["modelName"] : ""}`, children: [
    field === "name" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: `${ModelsSection_default["modelFieldLabel"]} ${ModelsSection_default["modelNameLabel"]}`, children: t("modelName") }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "input",
      {
        className: ModelsSection_default["input"],
        type: "text",
        value: typeof model[field] === "string" ? model[field] : "",
        placeholder: t(field === "id" ? "modelId" : "modelName"),
        "aria-label": `${t(field === "id" ? "modelId" : "modelName")} ${String(position)}`,
        disabled,
        onFocus: field === "name" && !props.expanded ? props.onToggle : void 0,
        onChange: (event) => {
          const value = event.target.value;
          props.onFieldChange(field, field === "name" && value === "" ? void 0 : value);
        },
        onBlur: field === "id" ? (event) => props.onIdBlur?.(event.target.value) : void 0
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: ModelsSection_default["modelEntry"],
      "data-row-key": props.rowKey,
      "data-dragging": props.order.dragging || void 0,
      "data-drop-target": props.order.dragging ? void 0 : props.order.target,
      onDragOver: (event) => {
        if (!props.order.canDrop) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        props.order.onOver(rowHalf(event));
      },
      onDragLeave: (event) => {
        if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
        props.order.onLeave();
      },
      onDrop: (event) => {
        if (!props.order.canDrop) return;
        event.preventDefault();
        props.order.onDrop(rowHalf(event));
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: ModelsSection_default["modelRow"], "data-expanded": props.expanded || void 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives3.Tooltip, { label: t("reorderModelHelp"), portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            type: "button",
            className: `${ModelsSection_default["iconButton"]} ${ModelsSection_default["modelDragHandle"]}`,
            "aria-label": `${t("reorderModel")} ${String(position)}`,
            "aria-keyshortcuts": "ArrowUp ArrowDown",
            "aria-description": t("reorderModelHelp"),
            disabled,
            draggable: !disabled,
            onDragStart: (event) => {
              event.dataTransfer.effectAllowed = "move";
              event.dataTransfer.setData("application/x-dsh-model-order", String(position));
              props.order.onStart();
              preview.start(event, event.currentTarget.closest("[data-row-key]"));
            },
            onDragEnd: () => {
              if (preview.clear()) props.order.onEnd();
            },
            onKeyDown: (event) => {
              if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
              event.preventDefault();
              event.stopPropagation();
              props.order.onMove(event.key === "ArrowUp" ? -1 : 1);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives3.IconDragHandleOutlineRegular, { size: 14 })
          }
        ) }),
        modelField("id"),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            type: "button",
            className: ModelsSection_default["iconButton"],
            "aria-label": `${t("modelAdvanced")} ${String(position)}`,
            "aria-expanded": props.expanded,
            title: t("modelAdvanced"),
            onClick: (event) => {
              event.currentTarget.focus();
              props.onToggle();
            },
            children: props.expanded ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives3.IconChevronDownOutlineRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives3.IconChevronRightOutlineRegular, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            type: "button",
            className: `${ModelsSection_default["iconButton"]} ${ModelsSection_default["iconButtonDanger"]}`,
            "aria-label": `${t("removeModel")} ${String(position)}`,
            title: t("removeModel"),
            disabled,
            onClick: props.onRemove,
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives3.IconTrashOutlineRegular, { size: 14 })
          }
        ),
        modelField("name"),
        props.expanded ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: ModelsSection_default["modelAdvanced"], children: [
          ["contextWindow", "maxTokens"].map((field) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: ModelsSection_default["modelField"], children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: ModelsSection_default["modelFieldLabel"], children: t(field) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "input",
              {
                className: ModelsSection_default["input"],
                type: "text",
                inputMode: "numeric",
                value: props[field].value,
                placeholder: props[field].placeholder,
                "aria-label": `${t(field)} ${String(position)}`,
                disabled,
                onChange: (event) => {
                  props[field].onChange(event.target.value);
                },
                onBlur: props[field].onBlur
              }
            )
          ] }, field)),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            ModelInputTypes,
            {
              model,
              field: props.inputField,
              position,
              fallback: props.inputFallback,
              disabled: disabled || props.inputLoading === true || props.inputReadOnly === true,
              t,
              onChange: props.onChange
            }
          ),
          props.reasoningLevels !== void 0 && props.reasoningLevels.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            ModelReasoningEfforts,
            {
              model,
              levels: props.reasoningLevels,
              levelsOnly: props.reasoningLevelsOnly === true,
              position,
              disabled,
              t,
              onChange: props.onChange
            }
          ) : null
        ] }) : null
      ] })
    }
  );
}

// vendor/ui-settings-models/src/client/useModelRows.ts
var import_react3 = require("react");
function createRow(key) {
  return { key, expanded: false, editing: /* @__PURE__ */ new Map() };
}
function useModelRows(models, onChange, disabled) {
  const nextKey = (0, import_react3.useRef)(0);
  const [stored, setRows] = (0, import_react3.useState)(() => models.map(() => createRow(nextKey.current++)));
  const [dragged, setDragged] = (0, import_react3.useState)();
  const [target, setTarget] = (0, import_react3.useState)();
  const entries = models.map((model, index) => ({ model, state: stored[index] ?? createRow(nextKey.current++) }));
  const rows = entries.map((entry) => entry.state);
  if (stored.length !== models.length) setRows(rows);
  const endDrag = () => {
    setDragged(void 0);
    setTarget(void 0);
  };
  const move = (from2, to) => {
    if (disabled || from2 === to || from2 < 0 || to < 0 || to >= models.length) return;
    const order = [...entries];
    const moved = order.splice(from2, 1);
    order.splice(to, 0, ...moved);
    setRows(order.map((entry) => entry.state));
    onChange(order.map((entry) => entry.model));
  };
  return {
    rows: entries.map(({ model, state }, index) => ({
      ...state,
      model,
      order: {
        dragging: dragged === state.key,
        target: target?.key === state.key ? target.half : void 0,
        canDrop: !disabled && dragged !== void 0,
        onStart: () => {
          setDragged(state.key);
        },
        onEnd: endDrag,
        onOver: (half) => {
          setTarget((current) => current?.key === state.key && current.half === half ? current : { key: state.key, half });
        },
        onLeave: () => {
          setTarget((current) => current?.key === state.key ? void 0 : current);
        },
        onDrop: (half) => {
          const from2 = rows.findIndex((row) => row.key === dragged);
          const insertion = index + (half === "after" ? 1 : 0);
          move(from2, insertion > from2 ? insertion - 1 : insertion);
          endDrag();
        },
        onMove: (offset) => {
          move(index, index + offset);
        }
      }
    })),
    toggle: (index) => {
      setRows(rows.map((row, at) => at === index ? { ...row, expanded: !row.expanded } : row));
    },
    edit: (index, field, text) => {
      setRows(rows.map((row, at) => {
        if (at !== index) return row;
        const editing = new Map(row.editing);
        if (text === void 0) editing.delete(field);
        else editing.set(field, text);
        return { ...row, editing };
      }));
    },
    forget: (removed) => {
      setRows(rows.filter((_row, index) => !removed.has(index)));
      endDrag();
    },
    reset: () => {
      setRows(models.map(() => createRow(nextKey.current++)));
      endDrag();
    }
  };
}

// vendor/ui-settings-models/src/client/DeepSeekModelsEditor.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var CAPACITY_PATTERN = /^(\d+(?:\.\d+)?)([km])?$/i;
var CAPACITY_SCALE = { k: 1e3, m: 1e6 };
function parseCapacity(text) {
  const trimmed = text.trim();
  if (trimmed.length === 0) return void 0;
  const match = CAPACITY_PATTERN.exec(trimmed);
  if (match === null) return Number.NaN;
  const suffix = match[2]?.toLowerCase();
  const scale = suffix === "k" || suffix === "m" ? CAPACITY_SCALE[suffix] : 1;
  const scaled = Number(match[1]) * scale;
  const rounded = Math.round(scaled);
  return Math.abs(scaled - rounded) < 1e-6 ? rounded : scaled;
}
function formatCapacity(value) {
  if (!Number.isInteger(value) || value <= 0) return String(value);
  if (value % CAPACITY_SCALE.m === 0) return `${String(value / CAPACITY_SCALE.m)}M`;
  if (value % CAPACITY_SCALE.k === 0) return `${String(value / CAPACITY_SCALE.k)}K`;
  return String(value);
}
function modelDrafts(value) {
  if (!Array.isArray(value)) return [];
  return value.map((entry) => typeof entry === "object" && entry !== null && !Array.isArray(entry) ? entry : {});
}
function validateDeepSeekModels(value) {
  if (value === void 0) return void 0;
  const models = modelDrafts(value);
  const seen = /* @__PURE__ */ new Set();
  for (const [index, model] of models.entries()) {
    const id = model["id"];
    const trimmed = typeof id === "string" ? id.trim() : void 0;
    if (trimmed === void 0 || trimmed.length === 0) return { index, key: "modelIdRequired" };
    if (seen.has(trimmed)) return { index, key: "modelIdDuplicate" };
    seen.add(trimmed);
    const name = model["name"];
    if (name !== void 0 && (typeof name !== "string" || name.length === 0)) {
      return { index, key: "modelNameInvalid" };
    }
    const contextWindow = model["contextWindow"];
    if (contextWindow !== void 0 && (typeof contextWindow !== "number" || !Number.isInteger(contextWindow) || contextWindow <= 0)) {
      return { index, key: "modelContextInvalid" };
    }
    const maxTokens = model["maxTokens"];
    if (maxTokens !== void 0 && (typeof maxTokens !== "number" || !Number.isInteger(maxTokens) || maxTokens <= 0)) {
      return { index, key: "modelMaxTokensInvalid" };
    }
  }
  return void 0;
}
function DeepSeekModelsEditor(props) {
  const rowState = useModelRows(props.models, props.onChange, props.disabled);
  const update = (index, key, value) => {
    const next = props.models.map((model, at) => {
      const copy = { ...model };
      if (at !== index) return copy;
      if (value === void 0) Reflect.deleteProperty(copy, key);
      else copy[key] = value;
      return copy;
    });
    props.onChange(next);
  };
  const remove = (index) => {
    rowState.forget(/* @__PURE__ */ new Set([index]));
    props.onChange(props.models.filter((_model, at) => at !== index).map((model) => ({ ...model })));
  };
  const reset = () => {
    rowState.reset();
    props.onReset();
  };
  const capacityText = (model, index, field) => {
    const typed = rowState.rows[index]?.editing.get(field);
    if (typed !== void 0) return typed;
    const value = model[field];
    return typeof value === "number" ? formatCapacity(value) : "";
  };
  const settleCapacity = (index, field) => {
    const typed = rowState.rows[index]?.editing.get(field);
    if (typed === void 0) return;
    const parsed = parseCapacity(typed);
    if (parsed !== void 0 && Number.isNaN(parsed)) return;
    rowState.edit(index, field, void 0);
  };
  const capacityInput = (model, index, field, fallback) => ({
    value: capacityText(model, index, field),
    placeholder: fallback === void 0 ? props.t(field === "contextWindow" ? "contextWindowPlaceholder" : "maxTokensPlaceholder") : formatCapacity(fallback),
    onChange: (text) => {
      rowState.edit(index, field, text);
      update(index, field, parseCapacity(text));
    },
    onBlur: () => {
      settleCapacity(index, field);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: ModelsSection_default["modelCatalog"], "aria-label": props.t("models"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ModelsSection_default["modelListHead"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ModelsSection_default["modelCatalogHeading"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: ModelsSection_default["modelCatalogTitle"], children: props.t("models") }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: ModelsSection_default["modelCatalogMeta"], children: props.overridden ? props.t("modelsCustomized") : props.t("modelsInherited") })
      ] }),
      props.overridden ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          className: ModelsSection_default["linkButton"],
          disabled: props.disabled,
          onClick: reset,
          children: props.t("resetModels")
        }
      ) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_dsh_client_ui_primitives4.AnimatedRows, { className: ModelsSection_default["modelList"], rowKeys: rowState.rows.map((row) => String(row.key)), ready: true, resetKey: "", children: [
      props.models.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ModelsSection_default["modelEmpty"], children: props.t("modelsEmpty") }) : null,
      rowState.rows.map(({ model, key, expanded, order }, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        ModelRow,
        {
          rowKey: key,
          order,
          model,
          position: index + 1,
          inputField: "inputModalities",
          expanded,
          disabled: props.disabled,
          t: props.t,
          contextWindow: capacityInput(model, index, "contextWindow", props.defaultContextWindow),
          maxTokens: capacityInput(model, index, "maxTokens", props.defaultMaxTokens),
          onFieldChange: (field, value) => {
            update(index, field, value);
          },
          onIdBlur: (value) => {
            const trimmed = value.trim();
            if (trimmed !== value) update(index, "id", trimmed);
          },
          onChange: (next) => {
            props.onChange(props.models.map((row, at) => at === index ? next : row));
          },
          onToggle: () => {
            rowState.toggle(index);
          },
          onRemove: () => {
            remove(index);
          }
        },
        key
      ))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "button",
      {
        type: "button",
        className: ModelsSection_default["addModelButton"],
        disabled: props.disabled,
        onClick: () => {
          props.onChange([...props.models.map((model) => ({ ...model })), { id: "" }]);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives4.IconPlusOutlineRegular, { size: 14 }),
          props.t("addModel")
        ]
      }
    )
  ] });
}

// vendor/ui-settings-models/src/client/ModelListEditor.tsx
var import_react4 = require("react");
var import_dsh_client_ui_primitives5 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime7 = require("react/jsx-runtime");
function textOf(model, key) {
  const value = model[key];
  return typeof value === "string" ? value : "";
}
function numberOf(model, key) {
  const value = model[key];
  return typeof value === "number" ? value : void 0;
}
var CAPACITY_HINT = {
  contextWindow: "1M",
  maxTokens: "128K"
};
function capacitySpelling(value) {
  return value === void 0 ? "" : formatCapacity(value);
}
function adopt(candidate) {
  return {
    id: candidate.id,
    ...candidate.name === void 0 ? {} : { name: candidate.name },
    ...candidate.contextWindow === void 0 ? {} : { contextWindow: candidate.contextWindow },
    ...candidate.maxTokens === void 0 ? {} : { maxTokens: candidate.maxTokens },
    ...candidate.inputModalities === void 0 ? {} : { input: [...candidate.inputModalities] }
  };
}
function ModelListEditor(props) {
  const { models, onChange, probe, operations, t, disabled, onBusyChange } = props;
  const { catalogProvider } = props;
  const [busy, setBusy] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    onBusyChange(busy);
  }, [busy, onBusyChange]);
  const [failure, setFailure] = (0, import_react4.useState)(void 0);
  const [inheritedCatalog, setInheritedCatalog] = (0, import_react4.useState)(void 0);
  (0, import_react4.useEffect)(() => {
    if (catalogProvider === void 0) return;
    let current = true;
    void operations.discoverModels(probe.settingsNs, { provider: catalogProvider }).then((answer) => {
      if (!current) return;
      setInheritedCatalog({ provider: catalogProvider, models: answer.kind === "found" ? answer.models : [] });
      setFailure(answer.kind === "refused" ? answer.message : void 0);
    });
    return () => {
      current = false;
    };
  }, [catalogProvider, operations, probe.settingsNs]);
  const catalog = inheritedCatalog?.provider === catalogProvider ? inheritedCatalog?.models : void 0;
  const inputDefaults = (0, import_react4.useMemo)(() => new Map(catalog?.map((model) => [model.id, model.inputModalities])), [catalog]);
  const [candidates, setCandidates] = (0, import_react4.useState)(void 0);
  const [flipped, setFlipped] = (0, import_react4.useState)(/* @__PURE__ */ new Set());
  const [candidateQuery, setCandidateQuery] = (0, import_react4.useState)("");
  const rowState = useModelRows(models, onChange, disabled);
  const editCapacity = (index, field, text) => {
    rowState.edit(index, field, text);
    patch(index, { [field]: parseCapacity(text) });
  };
  const capacityText = (model, index, field) => rowState.rows[index]?.editing.get(field) ?? capacitySpelling(numberOf(model, field));
  const patch = (index, next) => {
    onChange(models.map((model, at) => {
      if (at !== index) return model;
      const cleared = new Set(
        Object.entries(next).filter(([, value]) => value === void 0 || value === "").map(([key]) => key)
      );
      return Object.fromEntries(
        Object.entries({ ...model, ...next }).filter(([key]) => !cleared.has(key))
      );
    }));
  };
  const fetchModels = async () => {
    setBusy(true);
    setFailure(void 0);
    try {
      const answer = await operations.discoverModels(probe.settingsNs, {
        ...probe.provider === void 0 ? {} : { provider: probe.provider },
        ...probe.baseURL === void 0 || probe.baseURL.length === 0 ? {} : { baseURL: probe.baseURL },
        ...probe.api === void 0 ? {} : { api: probe.api },
        ...probe.apiKey === void 0 ? {} : { apiKey: probe.apiKey }
      });
      if (answer.kind === "refused") {
        setFailure(answer.message);
        return;
      }
      const found = answer.models;
      if (catalogProvider !== void 0) setInheritedCatalog({ provider: catalogProvider, models: found });
      if (found.length === 0) {
        setFailure(t("fetchEmpty"));
        return;
      }
      setCandidateQuery("");
      setFlipped(/* @__PURE__ */ new Set());
      setCandidates([...new Map(found.map((model) => [model.id, model])).values()]);
    } finally {
      setBusy(false);
    }
  };
  const closePicker = () => {
    setCandidates(void 0);
    setFlipped(/* @__PURE__ */ new Set());
    setCandidateQuery("");
  };
  const configuredIds = new Set(models.map((model) => textOf(model, "id")).filter((id) => id.length > 0));
  const pickedByDefault = (id) => configuredIds.size === 0 || configuredIds.has(id);
  const isPicked = (id) => pickedByDefault(id) !== flipped.has(id);
  const activeCandidates = candidates ?? [];
  const listed = new Set(activeCandidates.map((candidate) => candidate.id));
  const removedRows = /* @__PURE__ */ new Set();
  models.forEach((model, at) => {
    const id = textOf(model, "id");
    if (listed.has(id) && !isPicked(id)) removedRows.add(at);
  });
  const keptRows = models.filter((_model, at) => !removedRows.has(at));
  const keptIds = new Set(keptRows.map((model) => textOf(model, "id")));
  const addedRows = activeCandidates.filter((candidate) => isPicked(candidate.id) && !keptIds.has(candidate.id)).map(adopt);
  const emptiesList = models.length > 0 && keptRows.length === 0 && addedRows.length === 0;
  const adoptPicked = () => {
    onChange([...keptRows, ...addedRows]);
    rowState.forget(removedRows);
    closePicker();
  };
  const toggle = (id) => {
    setFlipped((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  };
  const normalizedCandidateQuery = candidateQuery.trim().toLowerCase();
  const visibleCandidates = normalizedCandidateQuery.length === 0 ? activeCandidates : activeCandidates.filter((candidate) => candidate.id.toLowerCase().includes(normalizedCandidateQuery) || candidate.name?.toLowerCase().includes(normalizedCandidateQuery) === true);
  const allVisibleCandidatesPicked = visibleCandidates.length > 0 && visibleCandidates.every((candidate) => isPicked(candidate.id));
  const toggleVisibleCandidates = () => {
    const target = !allVisibleCandidatesPicked;
    setFlipped((current) => {
      const next = new Set(current);
      for (const candidate of visibleCandidates) {
        if (pickedByDefault(candidate.id) === target) next.delete(candidate.id);
        else next.add(candidate.id);
      }
      return next;
    });
  };
  const askable = probe.provider !== void 0 || probe.baseURL !== void 0 && probe.baseURL.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: ModelsSection_default["modelCatalog"], "aria-label": t("models"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ModelsSection_default["modelListHead"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ModelsSection_default["modelCatalogHeading"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: ModelsSection_default["modelCatalogTitle"], children: t("models") }),
        props.overridden === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: ModelsSection_default["modelCatalogMeta"], children: props.overridden ? t("modelsCustomized") : t("modelsInherited") })
      ] }),
      props.overridden === true && props.onReset !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          type: "button",
          className: ModelsSection_default["linkButton"],
          disabled,
          onClick: () => {
            rowState.reset();
            props.onReset?.();
          },
          children: t("resetModels")
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          type: "button",
          className: ModelsSection_default["linkButton"],
          disabled: disabled || busy || !askable || props.probeBlocked !== void 0,
          title: props.probeBlocked !== void 0 ? t(props.probeBlocked) : askable ? void 0 : t("fetchNeedsBaseUrl"),
          onClick: () => {
            void fetchModels();
          },
          children: busy ? t("fetching") : t("fetchModels")
        }
      )
    ] }),
    models.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: ModelsSection_default["modelEmpty"], children: t("modelsEmpty") }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives5.AnimatedRows, { className: ModelsSection_default["modelList"], rowKeys: rowState.rows.map((row) => String(row.key)), ready: true, resetKey: "", children: rowState.rows.map(({ model, key, expanded, order }, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ModelRow,
      {
        inputReadOnly: props.inputReadOnly,
        rowKey: key,
        order,
        model,
        position: index + 1,
        inputField: "input",
        inputFallback: inputDefaults.get(textOf(model, "id")) ?? props.defaultInput,
        inputLoading: catalogProvider !== void 0 && catalog === void 0,
        reasoningLevels: props.reasoningLevels,
        reasoningLevelsOnly: props.reasoningLevelsOnly,
        expanded,
        disabled,
        t,
        contextWindow: {
          value: capacityText(model, index, "contextWindow"),
          placeholder: CAPACITY_HINT.contextWindow,
          onChange: (text) => {
            editCapacity(index, "contextWindow", text);
          }
        },
        maxTokens: {
          value: capacityText(model, index, "maxTokens"),
          placeholder: CAPACITY_HINT.maxTokens,
          onChange: (text) => {
            editCapacity(index, "maxTokens", text);
          }
        },
        onFieldChange: (field, value) => {
          patch(index, { [field]: value });
        },
        onChange: (next) => {
          onChange(models.map((row, at) => at === index ? next : row));
        },
        onToggle: () => {
          rowState.toggle(index);
        },
        onRemove: () => {
          onChange(models.filter((_model, at) => at !== index));
          rowState.forget(/* @__PURE__ */ new Set([index]));
        }
      },
      key
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "button",
      {
        type: "button",
        className: ModelsSection_default["addModelButton"],
        disabled,
        onClick: () => {
          onChange([...models, { id: "" }]);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives5.IconPlusOutlineRegular, { size: 14 }),
          t("addModel")
        ]
      }
    ),
    failure !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: ModelsSection_default["error"], children: failure }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_dsh_client_ui_primitives5.Modal,
      {
        open: candidates !== void 0,
        onClose: closePicker,
        title: t("fetchTitle"),
        closeLabel: t("close"),
        description: t("fetchDescription"),
        className: ModelsSection_default["fetchDialog"],
        footer: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives5.Button, { variant: "outline", onClick: closePicker, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_dsh_client_ui_primitives5.Button,
            {
              variant: "outline",
              disabled: emptiesList,
              title: emptiesList ? t("fetchKeepOne") : void 0,
              onClick: adoptPicked,
              children: t("fetchAdopt")
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ModelsSection_default["candidateToolbar"], children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              {
                className: `${ModelsSection_default["input"]} ${ModelsSection_default["candidateSearch"]}`,
                type: "search",
                value: candidateQuery,
                placeholder: t("fetchSearch"),
                "aria-label": t("fetchSearch"),
                onChange: (event) => {
                  setCandidateQuery(event.target.value);
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_dsh_client_ui_primitives5.Button,
              {
                variant: "ghost",
                size: "sm",
                disabled: visibleCandidates.length === 0,
                onClick: toggleVisibleCandidates,
                children: t(allVisibleCandidatesPicked ? "fetchDeselectAll" : "fetchSelectAll")
              }
            )
          ] }),
          visibleCandidates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: ModelsSection_default["candidateEmpty"], role: "status", children: t("fetchNoMatches") }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { className: ModelsSection_default["candidateList"], children: visibleCandidates.map((candidate) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: ModelsSection_default["candidate"], children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: ModelsSection_default["candidateLabel"], children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              {
                type: "checkbox",
                checked: isPicked(candidate.id),
                onChange: () => {
                  toggle(candidate.id);
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: ModelsSection_default["candidateId"], title: candidate.name ?? candidate.id, children: candidate.id })
          ] }) }, candidate.id)) })
        ]
      }
    )
  ] });
}

// vendor/ui-settings-models/src/client/store.ts
var import_dsh_client_store = require("@deepseek-ai/dsh-client-store");
var PROBE_ROUTE = "\0probe";
function joinProviderDirectory(registered, directory) {
  const active = new Set(registered.map((provider) => provider.id));
  const declared = new Set(directory.map((entry) => entry.provider));
  const rows = directory.map((entry) => ({
    provider: entry.provider,
    displayName: entry.displayName,
    settingsNs: entry.settingsNs,
    settingsPath: [...entry.settingsPath],
    active: active.has(entry.provider),
    ...entry.declared === void 0 ? {} : { declared: entry.declared },
    ...entry.defaultBaseURL === void 0 ? {} : { defaultBaseURL: entry.defaultBaseURL },
    ...entry.baseURLEnv === void 0 ? {} : { baseURLEnv: entry.baseURLEnv },
    ...entry.nativeAuth === void 0 ? {} : { nativeAuth: entry.nativeAuth },
    ...entry.error === void 0 ? {} : { error: entry.error }
  }));
  for (const provider of registered) {
    if (declared.has(provider.id)) continue;
    rows.push({
      provider: provider.id,
      displayName: provider.name,
      settingsNs: "",
      settingsPath: [],
      active: true
    });
  }
  return rows.toSorted((left, right) => (left.provider === "deepseek-account" ? 0 : left.provider === "deepseek-official" ? 1 : 2) - (right.provider === "deepseek-account" ? 0 : right.provider === "deepseek-official" ? 1 : 2));
}
function deriveKeyRef(provider) {
  return `${provider.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}_API_KEY`;
}
function protocolChoices(namespace, schema) {
  if (namespace === void 0) return [];
  const node = schema.nodeAtPath(schema.rehydrate(namespace.schema), ["providers", PROBE_ROUTE, "api"]);
  const list = node;
  if (list?.type !== "union" || list.list === void 0) return [];
  return list.list.map((entry) => entry.value).filter((value) => typeof value === "string");
}
function reasoningLevelChoices(namespace, schema) {
  if (namespace === void 0) return [];
  const path = ["providers", PROBE_ROUTE, "models", "0", "reasoningEfforts"];
  const node = schema.nodeAtPath(schema.rehydrate(namespace.schema), path);
  const branches = node?.list ?? [];
  const keys = branches.find((branch) => branch.type === "dict")?.sKey;
  return (keys?.list ?? []).map((entry) => entry.value).filter((value) => typeof value === "string");
}
function apiKeyEnvOf(namespace, path, schema) {
  if (namespace === void 0) return void 0;
  const profile = schema.getPath(namespace.value, path);
  if (typeof profile !== "object" || profile === null) return void 0;
  const ref = profile.apiKeyEnv;
  return typeof ref === "string" && ref.length > 0 ? ref : void 0;
}
var ModelsSettingsStore = class {
  /**
   * @param ctx - the page plugin's context, whose `remote.llm` and
   * `remote.credentials` namespaces carry the directory and credential reads.
   * @param schema - settings-owned schema and immutable path operations.
   * @param describeFace - the shared mirror's describe face (namespace views and writability).
   */
  constructor(ctx, schema, describeFace) {
    this.ctx = ctx;
    this.schema = schema;
    this.describeFace = describeFace;
  }
  /** The snapshot the section renders from (uSES-safe store). */
  store = (0, import_dsh_client_store.createSnapshotStore)({
    status: "idle",
    error: null,
    credentialError: null,
    writable: false,
    rows: [],
    namespaces: /* @__PURE__ */ new Map()
  });
  /** Latest load wins; an older response never overwrites a newer one. */
  generation = 0;
  /** Callers follow the current refresh's outcome, including callers whose read was superseded. */
  pendingLoads = /* @__PURE__ */ new Set();
  /**
   * Refresh the whole page snapshot: the provider directory and the mirror's
   * settings answer in parallel, then one batched credential describe over
   * every referenced ref. Provider failure or absence of an initial settings
   * answer keeps the last good rows and surfaces an error; a failed settings
   * refresh reuses the mirror's held view. Concurrent callers resolve only
   * after the current refresh publishes its ready or error snapshot.
   * @returns resolution after the current snapshot is published.
   * @throws the current read's unexpected rejection; superseded rejections are ignored.
   */
  load() {
    const pending = Promise.withResolvers();
    this.pendingLoads.add(pending);
    const generation = ++this.generation;
    void this.read(generation).then(
      () => {
        this.settleLoads(generation, (load) => {
          load.resolve();
        });
      },
      (error) => {
        this.settleLoads(generation, (load) => {
          load.reject(error);
        });
      }
    );
    return pending.promise;
  }
  /** Publish one joined answer; stale answers leave the current refresh in charge. */
  async read(generation) {
    this.store.update((s) => {
      s.status = "loading";
      s.error = null;
    });
    const [registered, declared] = await Promise.all([
      this.ctx.remote.llm.listProviders(),
      this.ctx.remote.llm.listConfigurableProviders(),
      this.describeFace.ensure()
    ]);
    if (generation !== this.generation) return;
    if (!registered.ok) {
      this.failLoad(registered.error.message);
      return;
    }
    if (!declared.ok) {
      this.failLoad(declared.error.message);
      return;
    }
    const mirrored = this.describeFace.getSnapshot();
    if (mirrored.view === void 0) {
      if (mirrored.error === null) throw new Error("settings describe settled with neither a view nor an error");
      this.failLoad(mirrored.error);
      return;
    }
    const providers = joinProviderDirectory(registered.value, declared.value);
    const writable = mirrored.view.writable;
    const views = mirrored.view.namespaces;
    const namespaces = new Map(views.map((view) => [view.ns, view]));
    const rows = providers.map((entry) => {
      const namespace = namespaces.get(entry.settingsNs);
      const configured = namespace !== void 0 && (entry.settingsPath.length === 0 || this.schema.getPath(namespace.value, entry.settingsPath) !== void 0);
      const removable = namespace !== void 0 && entry.settingsPath.length > 0 && this.schema.hasPath(namespace.user, entry.settingsPath) && !this.schema.hasPath(namespace.base, entry.settingsPath);
      return {
        entry,
        configured,
        removable,
        apiKeyEnv: entry.provider === "deepseek-account" ? void 0 : apiKeyEnvOf(namespace, entry.settingsPath, this.schema),
        credential: void 0
      };
    });
    if (rows.some((row) => row.entry.provider === "deepseek-account")) {
      const catalog = await this.ctx.remote.session.modelCatalog();
      for (const row of rows) {
        if (row.entry.provider === "deepseek-account") row.accountAvailable = catalog.ok && catalog.value.groups.some((group) => group.id === "deepseek-account" && group.models.length > 0);
      }
    }
    const refs = [...new Set(rows.filter((row) => row.entry.provider !== "deepseek-account").flatMap((row) => row.apiKeyEnv === void 0 ? [deriveKeyRef(row.entry.provider), ...row.entry.nativeAuth?.env ?? []] : [row.apiKeyEnv]))];
    const credentials = {};
    let credentialError = null;
    for (let index = 0; index < refs.length; index += 64) {
      const response = await this.ctx.remote.credentials.describe(refs.slice(index, index + 64));
      if (response.ok) Object.assign(credentials, response.value);
      else {
        credentialError = response.error.message;
        break;
      }
    }
    if (generation !== this.generation) return;
    this.store.update((s) => {
      s.status = "ready";
      s.error = null;
      s.credentialError = credentialError;
      s.writable = writable;
      s.rows = rows.filter((row) => row.entry.provider !== "deepseek-account" || row.accountAvailable === true).map((row) => {
        if (row.entry.provider === "deepseek-account") return row;
        const named = row.apiKeyEnv === void 0 ? void 0 : credentials[row.apiKeyEnv];
        const derived = row.apiKeyEnv !== void 0 ? void 0 : credentials[deriveKeyRef(row.entry.provider)];
        return {
          ...row,
          ...named === void 0 ? {} : { credential: named },
          ...derived === void 0 ? {} : { derivedCredential: derived },
          ...credentialError === null ? { credentialChecks: Object.fromEntries(
            (row.apiKeyEnv === void 0 ? row.entry.nativeAuth?.env ?? [] : [row.apiKeyEnv]).flatMap((ref) => {
              const info = credentials[ref];
              return info === void 0 ? [] : [[ref, info]];
            })
          ) } : {}
        };
      });
      s.namespaces = namespaces;
    });
  }
  /** Settle callers only while this read still owns the current refresh. */
  settleLoads(generation, settle) {
    if (generation !== this.generation) return;
    const pending = [...this.pendingLoads];
    this.pendingLoads.clear();
    for (const load of pending) settle(load);
  }
  /** Publish the current joined read's failure text. */
  failLoad(message) {
    this.store.update((s) => {
      s.status = "error";
      s.error = message;
    });
  }
};
function providerUsable(row) {
  if (!row.entry.active) return false;
  if (row.entry.provider === "deepseek-account") return row.accountAvailable === true;
  if (row.apiKeyEnv === void 0) return true;
  return row.credential?.configured === true;
}
function onboardingReadiness(state) {
  if ((state.status === "idle" || state.status === "loading") && state.rows.length === 0) {
    return { kind: "loading" };
  }
  if (state.status === "error") {
    return {
      kind: "unavailable",
      reason: "load-failed"
    };
  }
  if (state.rows.some(providerUsable)) return { kind: "provider-ready" };
  const row = state.rows.find((candidate) => candidate.entry.provider === "deepseek-official" && candidate.entry.settingsNs === "llm-deepseek" && candidate.entry.settingsPath.length === 0);
  if (row === void 0) return { kind: "adapter-absent" };
  if (!row.entry.active) {
    return {
      kind: "unavailable",
      reason: "provider-inactive"
    };
  }
  if (state.credentialError !== null || row.credential === void 0) {
    return {
      kind: "unavailable",
      reason: "credentials-unavailable"
    };
  }
  if (!state.writable) {
    return {
      kind: "unavailable",
      reason: "settings-read-only"
    };
  }
  if (!row.credential.writable) {
    return {
      kind: "unavailable",
      reason: "credential-read-only"
    };
  }
  return { kind: "credential-missing" };
}

// vendor/ui-settings-models/src/client/protocol-label.ts
var PROTOCOL_LABEL_KEYS = {
  "openai-completions": "protocolOpenAiCompletions",
  "openai-responses": "protocolOpenAiResponses",
  "anthropic-messages": "protocolAnthropicMessages",
  "google-generative-ai": "protocolGemini"
};
function protocolLabel(t, protocol) {
  const key = PROTOCOL_LABEL_KEYS[protocol];
  return key === void 0 ? protocol : t(key);
}

// vendor/ui-settings-models/src/client/protocol-rules.ts
var GEMINI = "google-generative-ai";
var GEMINI_LEVELS = ["minimal", "low", "medium", "high"];
function protocolNeedsKey(protocol) {
  return protocol === GEMINI;
}
function protocolReasoningLevels(protocol, levels) {
  if (protocol !== GEMINI) return { levels, levelsOnly: false };
  return { levels: levels.filter((level) => GEMINI_LEVELS.includes(level)), levelsOnly: true };
}

// vendor/ui-settings-models/src/client/CustomProviderCard.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var NS = "llm-pi-ai";
var ROUTE_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
var BASE_URL_PLACEHOLDERS = {
  "anthropic-messages": "customAnthropicBaseUrlPlaceholder",
  "google-generative-ai": "customGeminiBaseUrlPlaceholder"
};
function isHttpUrl(value) {
  try {
    const protocol = new URL(value).protocol;
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
function CustomProviderCard(props) {
  const { taken, protocols, reasoningLevels, operations, t, onBusyChange } = props;
  const [openedAt] = (0, import_react5.useState)(() => props.revision);
  const [route, setRoute] = (0, import_react5.useState)("");
  const [displayName, setDisplayName] = (0, import_react5.useState)("");
  const [baseURL, setBaseURL] = (0, import_react5.useState)("");
  const [protocol, setProtocol] = (0, import_react5.useState)(protocols[0] ?? "");
  const [keyDraft, setKeyDraft] = (0, import_react5.useState)("");
  const [models, setModels] = (0, import_react5.useState)([]);
  const [busy, setBusy] = (0, import_react5.useState)(false);
  const [listBusy, setListBusy] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    onBusyChange?.(busy || listBusy);
  }, [busy, listBusy, onBusyChange]);
  const [failure, setFailure] = (0, import_react5.useState)(void 0);
  const [committed, setCommitted] = (0, import_react5.useState)(false);
  const disabled = props.readOnly || busy;
  const profileDisabled = disabled || committed;
  const routeInvalid = route.length > 0 && !ROUTE_PATTERN.test(route);
  const routeTaken = taken.includes(route);
  const normalizedBaseURL = baseURL.trim();
  const baseUrlInvalid = baseURL.length > 0 && !isHttpUrl(normalizedBaseURL);
  const reasoning = protocolReasoningLevels(protocol, reasoningLevels);
  const modelFailure = validateDeepSeekModels(models) ?? validateReasoningEfforts(models, reasoning.levelsOnly ? reasoning.levels : void 0);
  const keyMissing = protocolNeedsKey(protocol) && keyDraft.trim().length === 0;
  const keyFailure = keyMissing ? "keyRequired" : apiKeyFailure(keyDraft);
  const keyValue = keyDraft.trim();
  const ready = route.length > 0 && !routeInvalid && !routeTaken && normalizedBaseURL.length > 0 && !baseUrlInvalid && models.length > 0 && modelFailure === void 0 && keyFailure === void 0;
  const hint = failure !== void 0 || ready || keyFailure !== void 0 || route.length === 0 || routeInvalid || routeTaken || baseUrlInvalid ? void 0 : normalizedBaseURL.length === 0 ? t("customNeedsBaseUrl") : modelFailure !== void 0 ? `${t("model")} ${String(modelFailure.index + 1)}: ${t(modelFailure.key)}` : t("customNeedsModels");
  const createOnce = async () => {
    const keyRef = deriveKeyRef(route);
    const storesKey = keyValue.length > 0;
    if (!committed) {
      const profile = {
        ...displayName.length === 0 ? {} : { displayName },
        // The profile names the conventional reference only when this card is
        // about to store a key, matching the editor: a route declared with the
        // key left blank keeps its provider-native auth path (a credential
        // chain, ADC) instead of resolving a reference nothing ever sets.
        ...storesKey ? { apiKeyEnv: keyRef } : {},
        api: protocol,
        baseURL: normalizedBaseURL,
        models: models.map((model) => ({ ...model }))
      };
      const written = await operations.writeSettings(
        NS,
        [{ op: "set", path: ["providers", route], value: profile }],
        openedAt
      );
      if (written.kind !== "written") {
        return written.kind === "conflict" ? t("conflict") : written.message;
      }
      setCommitted(true);
    }
    if (storesKey) {
      const stored = await operations.storeCredential(keyRef, keyValue);
      if (stored !== void 0) return stored;
    }
    return void 0;
  };
  const create = async () => {
    setBusy(true);
    setFailure(void 0);
    try {
      const outcome = await createOnce();
      if (outcome !== void 0) {
        setFailure(outcome);
        return;
      }
      props.onClose(true);
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: ModelsSection_default["editor"], children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: ModelsSection_default["field"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("customRoute") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          className: ModelsSection_default["input"],
          type: "text",
          value: route,
          placeholder: "acme-gateway",
          "aria-label": t("customRoute"),
          disabled: profileDisabled,
          onChange: (event) => {
            setRoute(event.target.value);
          }
        }
      )
    ] }),
    routeInvalid || routeTaken ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: ModelsSection_default["error"], children: t(routeInvalid ? "customRouteInvalid" : "customRouteTaken") }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: ModelsSection_default["advancedHint"], children: t("customRouteHint") }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: ModelsSection_default["field"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("customDisplayName") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          className: ModelsSection_default["input"],
          type: "text",
          value: displayName,
          placeholder: route.length === 0 ? t("customDisplayName") : route,
          "aria-label": t("customDisplayName"),
          disabled: profileDisabled,
          onChange: (event) => {
            setDisplayName(event.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: ModelsSection_default["field"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("baseUrl") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          className: ModelsSection_default["input"],
          type: "text",
          value: baseURL,
          placeholder: t(BASE_URL_PLACEHOLDERS[protocol] ?? "customBaseUrlPlaceholder"),
          "aria-label": t("baseUrl"),
          "aria-invalid": baseUrlInvalid,
          disabled: profileDisabled,
          onChange: (event) => {
            setBaseURL(event.target.value);
          }
        }
      )
    ] }),
    baseUrlInvalid ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: ModelsSection_default["error"], children: t("customBaseUrlInvalid") }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: ModelsSection_default["field"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("customApi") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "select",
        {
          className: `${ModelsSection_default["input"]} ${ModelsSection_default["selectInput"]}`,
          value: protocol,
          "aria-label": t("customApi"),
          disabled: profileDisabled,
          onChange: (event) => {
            setProtocol(event.target.value);
          },
          children: protocols.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: choice, children: protocolLabel(t, choice) }, choice))
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: ModelsSection_default["field"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("keyInput") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        ApiKeyInput,
        {
          t,
          value: keyDraft,
          placeholder: t("keyPlaceholder"),
          "aria-label": t("keyInput"),
          required: protocolNeedsKey(protocol),
          disabled,
          onChange: (event) => {
            setKeyDraft(event.target.value);
          }
        }
      ),
      keyFailure === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: ModelsSection_default[keyMissing ? "advancedHint" : "error"], children: t(keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ModelListEditor,
      {
        models,
        onChange: setModels,
        reasoningLevels: reasoning.levels,
        reasoningLevelsOnly: reasoning.levelsOnly,
        probe: {
          settingsNs: NS,
          baseURL: normalizedBaseURL,
          api: protocol,
          ...keyValue.length === 0 ? {} : { apiKey: keyValue }
        },
        probeBlocked: baseUrlInvalid ? "customBaseUrlInvalid" : keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure,
        operations,
        t,
        disabled: profileDisabled,
        onBusyChange: setListBusy
      }
    ),
    failure !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: ModelsSection_default["error"], children: failure }) : null,
    hint === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: ModelsSection_default["advancedHint"], children: hint }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      EditorFooter,
      {
        t,
        busy,
        submitDisabled: disabled || !ready,
        submitLabelKey: "create",
        submitBusyLabelKey: "creating",
        onCancel: () => {
          props.onClose(committed);
        },
        onSubmit: () => {
          void create();
        }
      }
    )
  ] });
}

// vendor/ui-settings-models/src/client/ProviderEditor.tsx
var import_react7 = require("react");
var import_dsh_client_ui_primitives7 = require("@deepseek-ai/dsh-client-ui-primitives");

// vendor/ui-settings-models/src/client/RetryPolicyEditor.tsx
var import_react6 = require("react");
var import_dsh_client_ui_primitives6 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime9 = require("react/jsx-runtime");
var LABELS = /* @__PURE__ */ new Map([
  ["normal", "retryModeNormal"],
  ["always", "retryModeAlways"],
  ["maxRetries", "retryMaxRetries"],
  ["retryableCodes", "retryCodes"],
  ["backoff", "retryBackoff"],
  ["initialDelayMs", "retryInitialDelay"],
  ["maxDelayMs", "retryMaxDelay"],
  ["jitterRatio", "retryJitter"]
]);
var MODE_HINTS = /* @__PURE__ */ new Map([["always", "retryAlwaysHint"]]);
var CODE_LABELS = /* @__PURE__ */ new Map([
  ["EMPTY_RESPONSE", "retryCodeEmptyResponse"],
  ["RATE_LIMIT", "retryCodeRateLimit"],
  ["SERVER", "retryCodeServer"],
  ["TIMEOUT", "retryCodeTimeout"],
  ["TRANSPORT", "retryCodeTransport"],
  ["STREAM_CLOSED", "retryCodeStreamClosed"],
  ["MALFORMED_RESPONSE", "retryCodeMalformedResponse"],
  ["QUOTA", "retryCodeQuota"]
]);
var DECIMAL = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/iu;
var DELAY_ORDER = [["backoff", "initialDelayMs"], ["backoff", "maxDelayMs"]];
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function fieldAt(value, path) {
  return path.reduce((node, key) => isRecord(node) ? node[key] : void 0, value);
}
function modeOf(branch) {
  const mode = branch.dict?.["mode"]?.value;
  return typeof mode === "string" ? mode : void 0;
}
function choicesOf(node) {
  return (node.inner?.list ?? []).flatMap((branch) => {
    const value = branch.type === "const" ? branch.value : void 0;
    return typeof value === "string" ? [value] : [];
  });
}
function fieldsOf(node) {
  return Object.entries(node.dict ?? {}).filter(([key]) => key !== "mode");
}
function retryPolicyDefaults(schema, node, inherited) {
  const branches = new Map((node.list ?? []).flatMap((branch) => {
    const mode = modeOf(branch);
    return mode === void 0 ? [] : [[mode, branch]];
  }));
  const modes = [...branches.keys()];
  const stored = schema.getPath(inherited, ["mode"]);
  return {
    modes,
    mode: typeof stored === "string" && branches.has(stored) ? stored : modes[0] ?? "",
    branch: (mode) => typeof mode === "string" ? branches.get(mode) : void 0,
    value: (branch, path) => {
      const value = schema.getPath(inherited, path);
      if (value !== void 0) return value;
      const fallback = schema.nodeAtPath(branch, path)?.meta.default;
      return fallback;
    }
  };
}
function numberFailure(node, value, t) {
  if (typeof value !== "number" || !Number.isFinite(value)) return t("retryValueNumber");
  const { min, max, step } = node.meta;
  if (step === 1 && !Number.isInteger(value)) return t("retryValueInteger");
  if (min === Number.MIN_VALUE && value <= 0) return t("retryValuePositive");
  if (typeof min === "number" && value < min) return t("retryValueMin").replace("{min}", () => String(min));
  if (typeof max === "number" && value > max) return t("retryValueMax").replace("{max}", () => String(max));
  return void 0;
}
function retryPolicyFailure(schema, node, policy, defaults, t) {
  if (policy === void 0) return void 0;
  const whole = () => {
    const message = schema.validate(node, policy);
    return message === void 0 ? void 0 : { message };
  };
  if (!isRecord(policy)) return whole();
  const branch = defaults.branch(policy["mode"]);
  if (branch === void 0) return whole();
  const read = (path) => schema.getPath(policy, path) ?? defaults.value(branch, path);
  const check = (owner, base) => {
    for (const [key, field] of fieldsOf(owner)) {
      const path = [...base, key];
      if (field.type === "object") {
        const nested = check(field, path);
        if (nested !== void 0) return nested;
      } else if (field.type === "number") {
        const value = read(path);
        const message = value === void 0 ? void 0 : numberFailure(field, value, t);
        if (message !== void 0) return { message, path };
      } else if (field.type === "array") {
        const stored = schema.getPath(policy, path);
        if (stored === void 0) continue;
        if (schema.validate(field, stored) !== void 0) return { message: t("retryCodesInvalid"), path };
        if (Array.isArray(stored) && new Set(stored).size !== stored.length) return { message: t("retryCodesDuplicate"), path };
      }
    }
    return void 0;
  };
  const failure = check(branch, []);
  if (failure !== void 0) return failure;
  const [lowerPath, upperPath] = DELAY_ORDER;
  const lower = read(lowerPath);
  const upper = read(upperPath);
  if (typeof lower === "number" && typeof upper === "number" && lower > upper) {
    return { message: t("retryDelayOrder"), path: lowerPath };
  }
  return whole();
}
function textOf2(value) {
  return typeof value === "number" || typeof value === "string" ? String(value) : "";
}
function withField(policy, path, value) {
  const [key, ...rest] = path;
  if (key === void 0) return policy;
  const result = { ...policy };
  const prior = result[key];
  const next = rest.length === 0 ? value : withField(isRecord(prior) ? prior : {}, rest, value);
  if (next === void 0 || isRecord(next) && Object.keys(next).length === 0) Reflect.deleteProperty(result, key);
  else result[key] = next;
  return result;
}
function RetryPolicyEditor(props) {
  const { t, disabled, defaults, failure } = props;
  const current = isRecord(props.policy) ? props.policy : {};
  const branch = defaults.branch(current["mode"]);
  const mode = branch === void 0 ? void 0 : String(current["mode"]);
  const [texts, setTexts] = (0, import_react6.useState)({});
  const [added, setAdded] = (0, import_react6.useState)({});
  const [openFolds] = (0, import_react6.useState)(() => new Set(Object.keys(current).filter((key) => isRecord(current[key]))));
  const label = (key) => {
    const labelKey = LABELS.get(key);
    return labelKey === void 0 ? key : t(labelKey);
  };
  const invalidAt = (path) => failure?.path?.join(".") === path.join(".");
  const numberField = (root, path, node, className) => {
    const id = path.join(".");
    const invalid = invalidAt(path);
    const storedValue = fieldAt(current, path);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: ModelsSection_default["modelFieldLabel"], children: label(path[path.length - 1]) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "input",
        {
          className: ModelsSection_default["input"],
          type: "text",
          inputMode: node.meta.step === 1 ? "numeric" : "decimal",
          value: texts[id] ?? textOf2(storedValue),
          placeholder: textOf2(defaults.value(root, path)),
          "aria-invalid": invalid,
          "aria-describedby": invalid ? props.failureId : void 0,
          disabled,
          onChange: (event) => {
            const trimmed = event.target.value.trim();
            setTexts((previous) => ({ ...previous, [id]: trimmed.length === 0 ? "" : event.target.value }));
            const value = DECIMAL.test(trimmed) ? Number(trimmed) : trimmed;
            props.onChange(withField(current, path, value === "" ? void 0 : value));
          }
        }
      )
    ] }, id);
  };
  const codesField = (root, path, node) => {
    const id = path.join(".");
    const strings = (value) => Array.isArray(value) ? value.filter((code) => typeof code === "string") : [];
    const inherited = strings(defaults.value(root, path));
    const storedCodes = fieldAt(current, path);
    const selected = Array.isArray(storedCodes) ? strings(storedCodes) : inherited;
    const choices = [.../* @__PURE__ */ new Set([...choicesOf(node), ...inherited, ...selected, ...added[id] ?? []])];
    const invalid = invalidAt(path);
    const select = (next) => {
      const inherits = next.length === inherited.length && next.every((value) => inherited.includes(value));
      props.onChange(withField(current, path, inherits ? void 0 : [...next]));
    };
    const draftCode = (texts[id] ?? "").trim();
    const add = () => {
      if (draftCode.length === 0) return;
      setAdded((previous) => ({ ...previous, [id]: [.../* @__PURE__ */ new Set([...previous[id] ?? [], draftCode])] }));
      setTexts((previous) => ({ ...previous, [id]: "" }));
      if (!selected.includes(draftCode)) select([...selected, draftCode]);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "fieldset",
      {
        className: ModelsSection_default["modelInputTypes"],
        "aria-invalid": invalid,
        "aria-describedby": invalid ? props.failureId : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("legend", { className: ModelsSection_default["modelFieldLabel"], children: label(path[path.length - 1]) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: ModelsSection_default["retryCodeChoices"], children: choices.map((code) => {
            const labelKey = CODE_LABELS.get(code);
            return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              import_dsh_client_ui_primitives6.Checkbox,
              {
                label: labelKey === void 0 ? code : t(labelKey),
                checked: selected.includes(code),
                disabled: disabled || selected.length === 1 && selected.includes(code),
                onChange: (checked) => {
                  select(choices.filter((value) => value === code ? checked : selected.includes(value)));
                }
              },
              code
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: ModelsSection_default["retryCodeAdd"], children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "input",
              {
                className: ModelsSection_default["input"],
                type: "text",
                value: texts[id] ?? "",
                placeholder: t("retryCodeCustom"),
                "aria-label": t("retryCodeCustom"),
                disabled,
                onChange: (event) => {
                  const value = event.target.value;
                  setTexts((previous) => ({ ...previous, [id]: value }));
                },
                onKeyDown: (event) => {
                  if (event.key !== "Enter" || event.nativeEvent.isComposing) return;
                  event.preventDefault();
                  add();
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                type: "button",
                className: ModelsSection_default["secondaryButton"],
                disabled: disabled || draftCode.length === 0,
                onClick: add,
                children: t("retryCodeAdd")
              }
            )
          ] })
        ]
      },
      path.join(".")
    );
  };
  const fields = (root, owner, base) => fieldsOf(owner).map(([key, node]) => {
    const path = [...base, key];
    if (node.type === "number") {
      return numberField(root, path, node, base.length === 0 ? `${ModelsSection_default["modelField"]} ${ModelsSection_default["retryCount"]}` : ModelsSection_default["modelField"]);
    }
    if (node.type === "array") return codesField(root, path, node);
    if (node.type === "object") {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("details", { className: ModelsSection_default["retryFold"], open: openFolds.has(key), children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("summary", { className: ModelsSection_default["customizedSummary"], children: label(key) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: ModelsSection_default["retryBackoff"], children: fields(root, node, path) })
      ] }, key);
    }
    return null;
  });
  const labelId = `${props.failureId}-label`;
  const hint = mode === void 0 ? void 0 : MODE_HINTS.get(mode);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: ModelsSection_default["field"], role: "group", "aria-labelledby": labelId, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { id: labelId, className: ModelsSection_default["fieldLabel"], children: t("retryPolicy") }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "select",
      {
        className: `${ModelsSection_default["input"]} ${ModelsSection_default["selectInput"]}`,
        value: mode ?? "",
        "aria-labelledby": labelId,
        "aria-describedby": failure !== void 0 && failure.path === void 0 ? props.failureId : void 0,
        disabled,
        onChange: (event) => {
          const next = defaults.branch(event.target.value);
          setTexts({});
          if (next === void 0) {
            props.onChange(void 0);
            return;
          }
          const declared = new Set(fieldsOf(next).map(([key]) => key));
          const kept = Object.fromEntries(Object.entries(current).filter(([key]) => declared.has(key)));
          props.onChange({ ...kept, mode: event.target.value });
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "", children: t("retryModeDefault").replace("{mode}", () => label(defaults.mode)) }),
          defaults.modes.map((value) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value, children: label(value) }, value))
        ]
      }
    ),
    hint === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: ModelsSection_default["advancedHint"], children: t(hint) }),
    branch === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: ModelsSection_default["retryBody"], children: fields(branch, branch, []) }),
    failure === void 0 || !props.showFailure ? null : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { id: props.failureId, className: ModelsSection_default["error"], children: failure.message })
  ] });
}

// vendor/ui-settings-models/src/client/ProviderEditor.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function draftAt(schema, namespace, path) {
  const subtree = schema.getPath(namespace.user, path);
  if (typeof subtree !== "object" || subtree === null || Array.isArray(subtree)) return {};
  return structuredClone(subtree);
}
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function pathOps(base, before, after) {
  const previous = isRecord2(before) ? before : {};
  const ops = [];
  for (const [key, value] of Object.entries(after)) {
    const prior = previous[key];
    if (JSON.stringify(prior) === JSON.stringify(value)) continue;
    if (isRecord2(value) && (prior === void 0 || isRecord2(prior))) ops.push(...pathOps([...base, key], prior, value));
    else ops.push({ op: "set", path: [...base, key], value });
  }
  for (const key of Object.keys(previous)) {
    if (!(key in after)) ops.push({ op: "unset", path: [...base, key] });
  }
  return ops;
}
function layoutOf(ns) {
  if (ns === "llm-google-native") return "gemini";
  if (ns === "llm-deepseek") return "deepseek";
  if (ns === "llm-pi-ai") return "pi-ai";
  return "unknown";
}
function refFor(schema, namespace, path, provider) {
  const profile = schema.getPath(namespace.value, path);
  const named = typeof profile === "object" && profile !== null ? profile.apiKeyEnv : void 0;
  return typeof named === "string" && named.length > 0 ? named : deriveKeyRef(provider);
}
function ProviderEditor(props) {
  const { namespace, schema, settingsPath, operations, t } = props;
  const [draft, setDraft] = (0, import_react7.useState)(() => {
    const loaded = draftAt(schema, namespace, settingsPath);
    const policy = loaded["retryPolicy"];
    if (!isRecord2(policy) || policy["mode"] !== void 0) return loaded;
    const path = [...settingsPath, "retryPolicy"];
    const node2 = schema.nodeAtPath(schema.rehydrate(namespace.schema), path);
    if (node2 === void 0) return loaded;
    const { mode } = retryPolicyDefaults(schema, node2, schema.getPath(namespace.base, path));
    return { ...loaded, retryPolicy: { ...policy, mode } };
  });
  const [keyDraft, setKeyDraft] = (0, import_react7.useState)();
  const keyText = typeof keyDraft === "string" ? keyDraft : "";
  const keyRemoval = typeof keyDraft === "object" ? keyDraft : void 0;
  const [busy, setBusy] = (0, import_react7.useState)(false);
  const [listBusy, setListBusy] = (0, import_react7.useState)(false);
  const { onBusyChange } = props;
  (0, import_react7.useEffect)(() => {
    onBusyChange?.(busy || listBusy);
  }, [busy, listBusy, onBusyChange]);
  const [failure, setFailure] = (0, import_react7.useState)(void 0);
  const [customizedOpen, setCustomizedOpen] = (0, import_react7.useState)(false);
  const [committedOriginal, setCommittedOriginal] = (0, import_react7.useState)(
    () => schema.getPath(namespace.user, settingsPath)
  );
  const [expectedRevision, setExpectedRevision] = (0, import_react7.useState)(() => namespace.revision);
  const root = (0, import_react7.useMemo)(() => schema.rehydrate(namespace.schema), [namespace.schema, schema]);
  const node = (0, import_react7.useMemo)(() => schema.nodeAtPath(root, settingsPath), [root, schema, settingsPath]);
  const fallback = schema.getPath(namespace.value, settingsPath);
  const disabled = props.readOnly || busy;
  const layout = layoutOf(namespace.ns);
  const keyRef = refFor(schema, namespace, settingsPath, props.provider);
  const protocols = (0, import_react7.useMemo)(
    () => layout === "pi-ai" ? protocolChoices(namespace, schema) : [],
    [layout, namespace, schema]
  );
  const stringAt = (source, key) => {
    const value = schema.getPath(source, [key]);
    return typeof value === "string" && value.trim().length > 0 ? value : void 0;
  };
  const setField = (key, next) => {
    const value = next === void 0 || next.trim().length === 0 ? void 0 : next;
    setDraft((current) => value === void 0 ? schema.deletePath(current, [key]) : schema.setPath(current, [key], value));
  };
  const clearsDerivedRef = keyRemoval !== void 0 && layout === "pi-ai" && props.nativeAuth !== void 0 && stringAt(draft, "apiKeyEnv") === deriveKeyRef(props.provider);
  const schemaReasoningLevels = (0, import_react7.useMemo)(
    () => layout === "pi-ai" && props.declared === true ? reasoningLevelChoices(namespace, schema) : [],
    [layout, props.declared, namespace, schema]
  );
  const probeApi = stringAt(draft, "api") ?? stringAt(fallback, "api");
  const reasoning = protocolReasoningLevels(probeApi, schemaReasoningLevels);
  const editsReasoning = reasoning.levels.length > 0;
  const validateModels = (value) => validateDeepSeekModels(value) ?? (editsReasoning ? validateReasoningEfforts(value, reasoning.levelsOnly ? reasoning.levels : void 0) : void 0);
  const modelFailure = validateModels(schema.getPath(draft, ["models"]) ?? (reasoning.levelsOnly ? schema.getPath(fallback, ["models"]) : void 0));
  const retryNode = (0, import_react7.useMemo)(
    () => layout === "unknown" ? void 0 : schema.nodeAtPath(root, [...settingsPath, "retryPolicy"]),
    [layout, root, schema, settingsPath]
  );
  const retryDefaults = retryNode === void 0 ? void 0 : retryPolicyDefaults(schema, retryNode, schema.getPath(namespace.base, [...settingsPath, "retryPolicy"]));
  const retryFailure = retryNode === void 0 || retryDefaults === void 0 || props.credentialOnly === true ? void 0 : retryPolicyFailure(schema, retryNode, schema.getPath(draft, ["retryPolicy"]), retryDefaults, t);
  const keyFailure = apiKeyFailure(keyText);
  const keyValue = keyText.trim();
  const protocolNeedsKeyHere = layout === "pi-ai" && protocolNeedsKey(probeApi) && stringAt(draft, "apiKeyEnv") === void 0 && stringAt(fallback, "apiKeyEnv") === void 0;
  const protocolKeyMissing = protocolNeedsKeyHere && keyValue.length === 0;
  const credentialRequiredFailure = props.credentialRequired === true && keyText.length > 0 && keyValue.length === 0 || protocolKeyMissing ? "keyRequired" : void 0;
  const shownKeyFailure = credentialRequiredFailure ?? keyFailure;
  const probeBaseURL = stringAt(draft, "baseURL") ?? stringAt(fallback, "baseURL");
  const probe = {
    settingsNs: namespace.ns,
    // Naming the route lets an adapter that already describes it answer from
    // its own registry — better metadata, no network call, no endpoint needed.
    provider: props.provider,
    ...probeBaseURL === void 0 ? {} : { baseURL: probeBaseURL },
    ...probeApi === void 0 ? {} : { api: probeApi },
    ...keyValue.length === 0 ? {} : { apiKey: keyValue }
  };
  const applyOnce = async () => {
    const ns = namespace.ns;
    const profileDraft = clearsDerivedRef ? schema.deletePath(draft, ["apiKeyEnv"]) : draft;
    const next = layout === "pi-ai" && stringAt(profileDraft, "apiKeyEnv") === void 0 && stringAt(schema.getPath(namespace.base, settingsPath), "apiKeyEnv") === void 0 && keyValue.length > 0 ? schema.setPath(profileDraft, ["apiKeyEnv"], keyRef) : profileDraft;
    if (props.credentialOnly !== true) {
      const failure2 = validateModels(schema.getPath(next, ["models"]));
      if (failure2 !== void 0) {
        return `${t("model")} ${String(failure2.index + 1)}: ${t(failure2.key)}`;
      }
    }
    if (props.credentialOnly !== true && node !== void 0 && settingsPath.length === 0) {
      const sectionError = schema.validate(node, next);
      if (sectionError !== void 0) return sectionError;
    }
    const materializesNativeProfile = layout === "pi-ai" && fallback === void 0 && committedOriginal === void 0 && Object.keys(next).length === 0;
    const ops = props.credentialOnly === true ? [] : materializesNativeProfile ? [{ op: "set", path: [...settingsPath], value: {} }] : pathOps(settingsPath, committedOriginal, next);
    if (keyRemoval !== void 0 && keyRemoval.removed !== true) {
      const removed = await operations.removeCredential(keyRemoval.ref);
      if (removed !== void 0) return removed;
      setKeyDraft({ ...keyRemoval, removed: true });
    }
    if (ops.length > 0) {
      const written = await operations.writeSettings(ns, ops, expectedRevision);
      if (written.kind !== "written") return written.kind === "conflict" ? t("conflict") : written.message;
      setCommittedOriginal(schema.getPath(written.view.user, settingsPath));
      setExpectedRevision(written.view.revision);
      setDraft(next);
    }
    if (keyValue.length > 0) {
      const stored = await operations.storeCredential(keyRef, keyValue);
      if (stored !== void 0) return stored;
    }
    setKeyDraft("");
    return void 0;
  };
  const apply3 = async () => {
    setBusy(true);
    setFailure(void 0);
    try {
      const failure2 = await applyOnce();
      if (failure2 !== void 0) {
        setFailure(failure2);
        return;
      }
      props.onClose(true);
    } finally {
      setBusy(false);
    }
  };
  if (node === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: ModelsSection_default["error"], children: [
      props.provider,
      ": ",
      props.t("settingsPathUnresolvable")
    ] });
  }
  const inheritedModels = () => {
    const pinned = schema.getPath(namespace.base, [...settingsPath, "models"]);
    return pinned ?? schema.nodeAtPath(root, [...settingsPath, "models"])?.meta.default;
  };
  const curatedFields = (family) => {
    const ownsIdentity = family === "pi-ai" && props.declared === true;
    const customModels = schema.getPath(draft, ["models"]);
    const modelsOverridden = schema.hasPath(draft, ["models"]);
    const models = modelDrafts(modelsOverridden ? customModels : inheritedModels());
    const defaultContextWindow = schema.getPath(fallback, ["defaultContextWindow"]);
    const defaultMaxTokens = schema.getPath(fallback, ["maxTokens"]);
    const defaultInput = schema.getPath(fallback, ["defaultInput"]);
    const baseURL = stringAt(fallback, "baseURL") ?? props.defaultBaseURL;
    const endpointEnv = props.baseURLEnv ?? [];
    const endpointHint = family === "deepseek" ? t("deepSeekEndpointHint") : baseURL === void 0 && endpointEnv.length > 0 ? t("baseUrlEnvironment").replace("{env}", () => endpointEnv.join(", ")) : void 0;
    const namedRef = clearsDerivedRef ? stringAt(schema.getPath(namespace.base, settingsPath), "apiKeyEnv") : stringAt(fallback, "apiKeyEnv");
    const nativeAuth = namedRef === void 0 ? props.nativeAuth : void 0;
    const authRefs = namedRef === void 0 ? (nativeAuth?.env ?? []).filter((ref) => !endpointEnv.includes(ref)) : [namedRef];
    const visibleRefs = authRefs.filter((ref) => !ref.toLowerCase().includes("oauth"));
    const keyHint = visibleRefs[0];
    const checkedRefs = authRefs.map((ref) => [
      ref,
      props.credentialChecks?.[ref] ?? (ref === namedRef ? props.credential : void 0)
    ]);
    const detected = checkedRefs.find(([, info]) => info?.configured === true);
    const detectedRef = detected?.[0];
    const detectedVisibleRef = detectedRef === void 0 || !visibleRefs.includes(detectedRef) ? void 0 : detectedRef;
    const missingRefs = checkedRefs.length > 0 && checkedRefs.every(([, info]) => info?.configured === false);
    const savedCredential = detected?.[1]?.source === "file" && detectedVisibleRef !== void 0;
    const credentialHint = props.credentialRequired === true ? void 0 : keyText.length > 0 ? savedCredential ? t("keyReplacePending") : void 0 : keyRemoval !== void 0 ? keyRemoval.removed === true ? t("keyRemoveApplied") : keyHint === void 0 ? t("keyRemovePending") : t("keyRemovePendingEnvironment").replace("{hint}", () => keyHint) : keyHint === void 0 ? void 0 : savedCredential ? t("keySaved") : t(detectedRef === void 0 ? missingRefs ? "keyFallbackMissing" : "keyFallbackUnchecked" : detectedVisibleRef === void 0 ? "keyFallbackDetectedHidden" : "keyFallbackDetected").replace("{hint}", () => detectedVisibleRef ?? keyHint);
    const keyHelp = visibleRefs.length === 0 ? void 0 : t("keyHelp").replace("{env}", () => visibleRefs.join(" / "));
    const authHelp = keyHelp === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives7.Tooltip, { label: keyHelp, side: "right", delayMs: 0, focusDelayMs: 0, portal: true, openOnClick: true, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", className: ModelsSection_default["helpButton"], "aria-label": t("authHelp"), children: "?" }) });
    const keylessNativeAuth = nativeAuth?.env.length === 0 && nativeAuth.oauth;
    const keyPlaceholder = keyHint === void 0 || props.credentialRequired === true ? t("keyPlaceholder") : t("keyPlaceholderFallback").replace("{hint}", () => keyHint);
    const catalogProps = {
      models,
      overridden: modelsOverridden,
      t,
      disabled,
      onChange: (next) => {
        setDraft((current) => schema.setPath(current, ["models"], next));
      },
      onReset: () => {
        setDraft((current) => schema.deletePath(current, ["models"]));
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      keylessNativeAuth ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ModelsSection_default["field"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: ModelsSection_default["fieldLabel"], children: [
          t("keyInput"),
          authHelp
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          ApiKeyInput,
          {
            t,
            value: keyText,
            ...keyDraft === void 0 && savedCredential ? {
              saved: {
                masked: detected[1].masked ?? "",
                ...detected[1].writable ? { clear: () => {
                  setKeyDraft({ ref: detected[0] });
                  setFailure(void 0);
                } } : {}
              }
            } : {},
            placeholder: keyPlaceholder,
            "aria-label": t("keyInput"),
            "aria-invalid": shownKeyFailure !== void 0 && !protocolKeyMissing,
            "aria-describedby": credentialHint === void 0 ? void 0 : `${props.provider}-credential-hint`,
            required: props.credentialRequired === true || protocolNeedsKeyHere,
            autoFocus: props.autoFocusCredential === true,
            disabled: disabled || keyRemoval?.removed === true,
            onChange: (event) => {
              setKeyDraft(event.target.value === "" && savedCredential ? detected[1].writable ? { ref: detected[0] } : void 0 : event.target.value);
              setFailure(void 0);
            }
          }
        ),
        credentialHint === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { id: `${props.provider}-credential-hint`, className: ModelsSection_default[keyRemoval !== void 0 || missingRefs ? "notice" : keyText.length > 0 || detectedRef === void 0 ? "advancedHint" : "savedNotice"], children: credentialHint }),
        shownKeyFailure === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: ModelsSection_default[protocolKeyMissing ? "advancedHint" : "error"], children: t(shownKeyFailure) })
      ] }),
      props.credentialOnly === true ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "details",
        {
          className: ModelsSection_default["customized"],
          onToggle: (event) => {
            setCustomizedOpen(event.currentTarget.open);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("summary", { className: ModelsSection_default["customizedSummary"], children: t("customized") }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ModelsSection_default["customizedBody"], children: [
              ownsIdentity ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ModelsSection_default["field"], children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("customDisplayName") }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "input",
                  {
                    className: ModelsSection_default["input"],
                    type: "text",
                    value: stringAt(draft, "displayName") ?? "",
                    placeholder: stringAt(schema.getPath(namespace.base, settingsPath), "displayName") ?? props.provider,
                    "aria-label": t("customDisplayName"),
                    disabled,
                    onChange: (event) => {
                      setField("displayName", event.target.value);
                    }
                  }
                )
              ] }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ModelsSection_default["field"], children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("baseUrl") }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "input",
                  {
                    className: ModelsSection_default["input"],
                    type: "text",
                    value: stringAt(draft, "baseURL") ?? "",
                    placeholder: family === "deepseek" ? t("deepSeekBaseUrl") : baseURL === void 0 ? t(endpointEnv.length > 0 ? "baseUrlConfigured" : "baseUrlDefault") : t("baseUrlPlaceholder").replace("{url}", () => baseURL),
                    "aria-describedby": endpointHint === void 0 ? void 0 : `${props.provider}-endpoint-hint`,
                    "aria-label": t("baseUrl"),
                    disabled,
                    onChange: (event) => {
                      setField("baseURL", event.target.value === "" ? void 0 : event.target.value);
                    }
                  }
                ),
                endpointHint === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { id: `${props.provider}-endpoint-hint`, className: ModelsSection_default["advancedHint"], children: endpointHint })
              ] }),
              ownsIdentity ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ModelsSection_default["field"], children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("customApi") }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                  "select",
                  {
                    className: `${ModelsSection_default["input"]} ${ModelsSection_default["selectInput"]}`,
                    value: probeApi ?? "",
                    "aria-label": t("customApi"),
                    disabled,
                    onChange: (event) => {
                      setField("api", event.target.value);
                    },
                    children: [
                      probeApi === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "", children: t("customApiUnset") }) : null,
                      protocols.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: choice, children: protocolLabel(t, choice) }, choice))
                    ]
                  }
                )
              ] }) : null,
              family === "gemini" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ModelsSection_default["field"], children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  import_dsh_client_ui_primitives7.Checkbox,
                  {
                    label: t("googleSearch"),
                    checked: (schema.getPath(draft, ["googleSearch"]) ?? schema.getPath(fallback, ["googleSearch"])) !== false,
                    disabled,
                    onChange: (checked) => setDraft((current) => schema.setPath(current, ["googleSearch"], checked))
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: ModelsSection_default["advancedHint"], children: t("googleSearchHint") })
              ] }) : null,
              retryDefaults === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                RetryPolicyEditor,
                {
                  policy: schema.getPath(draft, ["retryPolicy"]),
                  defaults: retryDefaults,
                  failure: retryFailure,
                  failureId: `${props.provider}-retry-failure`,
                  showFailure: customizedOpen,
                  t,
                  disabled,
                  onChange: (next) => {
                    setDraft((current) => next === void 0 ? schema.deletePath(current, ["retryPolicy"]) : schema.setPath(current, ["retryPolicy"], next));
                  }
                }
              ),
              family === "deepseek" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                DeepSeekModelsEditor,
                {
                  ...catalogProps,
                  defaultContextWindow: typeof defaultContextWindow === "number" ? defaultContextWindow : void 0,
                  defaultMaxTokens: typeof defaultMaxTokens === "number" ? defaultMaxTokens : void 0
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                ModelListEditor,
                {
                  ...catalogProps,
                  inputReadOnly: family === "gemini",
                  catalogProvider: props.declared === true ? void 0 : props.provider,
                  reasoningLevels: reasoning.levels,
                  reasoningLevelsOnly: reasoning.levelsOnly,
                  defaultInput: family === "gemini" ? ["text", "image"] : Array.isArray(defaultInput) ? defaultInput : void 0,
                  probe,
                  probeBlocked: keyRemoval !== void 0 ? "keyRemovePending" : shownKeyFailure,
                  operations,
                  onBusyChange: setListBusy
                }
              )
            ] })
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: props.credentialOnly === true ? ModelsSection_default["addBlock"] : ModelsSection_default["editor"], children: [
    props.hideTitle === true ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ModelsSection_default["editorHeader"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: ModelsSection_default["editorTitle"], children: props.displayName }),
      props.provider !== props.displayName ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: ModelsSection_default["editorRoute"], children: props.provider }) : null
    ] }),
    layout === "unknown" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: ModelsSection_default["advancedHint"], children: `${t("advancedHint")} (${namespace.ns})` }) : curatedFields(layout),
    failure !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: ModelsSection_default["error"], children: failure }) : null,
    props.credentialOnly === true || modelFailure === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: ModelsSection_default["advancedHint"], children: `${t("model")} ${String(modelFailure.index + 1)}: ${t(modelFailure.key)}` }),
    retryFailure === void 0 || customizedOpen ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { id: `${props.provider}-retry-failure`, className: ModelsSection_default["error"], children: retryFailure.message }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      EditorFooter,
      {
        t,
        busy,
        submitDisabled: disabled || layout === "unknown" || props.credentialOnly !== true && modelFailure !== void 0 || retryFailure !== void 0 || shownKeyFailure !== void 0 || props.credentialRequired === true && keyValue.length === 0,
        submitLabelKey: props.submitLabelKey ?? "apply",
        submitBusyLabelKey: props.submitBusyLabelKey ?? "applying",
        cancelLabelKey: keyRemoval?.removed === true ? "close" : props.cancelLabelKey ?? "cancel",
        onCancel: () => {
          props.onClose(false);
        },
        onSubmit: () => {
          props.onSubmitCredential?.();
          void apply3();
        }
      }
    )
  ] });
}

// vendor/ui-settings-models/src/client/ModelsSection.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function renderProviderEditor({ target, row, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    ProviderEditor,
    {
      provider: target.provider,
      displayName: target.displayName,
      settingsPath: target.settingsPath,
      ...target.declared === true ? { declared: true } : {},
      ...target.defaultBaseURL === void 0 ? {} : { defaultBaseURL: target.defaultBaseURL },
      ...target.baseURLEnv === void 0 ? {} : { baseURLEnv: target.baseURLEnv },
      ...target.nativeAuth === void 0 ? {} : { nativeAuth: target.nativeAuth },
      ...row.credential === void 0 ? {} : { credential: row.credential },
      ...row.credentialChecks === void 0 ? {} : { credentialChecks: row.credentialChecks },
      ...props
    }
  );
}
async function removeProviderProfile(operations, controller, target) {
  if (target.credentialRef !== void 0) {
    const credential = await operations.removeCredential(target.credentialRef);
    if (credential !== void 0) return credential;
  }
  const written = await operations.writeSettings(
    target.settingsNs,
    [{ op: "unset", path: [...target.settingsPath] }],
    void 0
  );
  if (written.kind !== "written") return written.message;
  await controller.load();
  return void 0;
}
function needsSetup(row, anyUsable) {
  if (anyUsable || row.entry.provider === "deepseek-account") return false;
  if (row.entry.settingsPath.length > 0) return false;
  return row.credential?.configured !== true;
}
function keyConfiguredOf(row) {
  return row.apiKeyEnv !== void 0 ? row.credential?.configured === true : row.derivedCredential?.configured === true;
}
function targetOf(row) {
  const managedRef = deriveKeyRef(row.entry.provider);
  const credentialRef = row.apiKeyEnv === managedRef && row.credential?.configured === true && row.credential.writable ? managedRef : void 0;
  return {
    provider: row.entry.provider,
    displayName: row.entry.displayName,
    settingsNs: row.entry.settingsNs,
    settingsPath: row.entry.settingsPath,
    ...credentialRef === void 0 ? {} : { credentialRef },
    // Only declared routes may expose route-owned fields.
    ...row.entry.declared === true ? { declared: true } : {},
    ...row.entry.defaultBaseURL === void 0 ? {} : { defaultBaseURL: row.entry.defaultBaseURL },
    ...row.entry.baseURLEnv === void 0 ? {} : { baseURLEnv: row.entry.baseURLEnv },
    ...row.entry.nativeAuth === void 0 ? {} : { nativeAuth: row.entry.nativeAuth }
  };
}
function providerTargetLabel(target) {
  return target.provider === target.displayName ? target.provider : `${target.displayName} (${target.provider})`;
}
function providerCopy(template, target) {
  return template.replace("{provider}", () => providerTargetLabel(target));
}
function ModelsSection(props) {
  const { controller, useSnapshot, operations, schema, t, renderSlot } = props;
  if (controller === void 0 || useSnapshot === void 0 || operations === void 0 || schema === void 0 || t === void 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Loaded, { injected: { controller, useSnapshot, operations, schema, t }, renderSlot });
}
function Loaded({ injected, renderSlot }) {
  const { controller, operations, schema, t } = injected;
  const snapshot2 = injected.useSnapshot((value) => value);
  const state = { ...snapshot2, rows: snapshot2.rows.map((row) => row.entry.provider === "deepseek-account" ? { ...row, entry: { ...row.entry, displayName: t("deepSeekAccount") } } : row) };
  const [hasReadySnapshot, setHasReadySnapshot] = (0, import_react8.useState)(state.status === "ready");
  if (state.status === "ready" && !hasReadySnapshot) setHasReadySnapshot(true);
  if (state.status === "error" && hasReadySnapshot) setHasReadySnapshot(false);
  const [editing, setEditing] = (0, import_react8.useState)(void 0);
  const [addOpen, setAddOpen] = (0, import_react8.useState)(false);
  const [addMode, setAddMode] = (0, import_react8.useState)("catalog");
  const [visited, setVisited] = (0, import_react8.useState)(() => /* @__PURE__ */ new Set());
  const [catalogBusy, setCatalogBusy] = (0, import_react8.useState)(false);
  const [customBusy, setCustomBusy] = (0, import_react8.useState)(false);
  const addId = (0, import_react8.useId)();
  const [deleteTarget, setDeleteTarget] = (0, import_react8.useState)(void 0);
  const [deleting, setDeleting] = (0, import_react8.useState)(false);
  const [deleteFailure, setDeleteFailure] = (0, import_react8.useState)(void 0);
  const [savedTarget, setSavedTarget] = (0, import_react8.useState)(void 0);
  const [dismissedSetup, setDismissedSetup] = (0, import_react8.useState)(() => /* @__PURE__ */ new Set());
  const announceSaved = (target) => {
    void controller.load().then(() => {
      setSavedTarget(target);
    });
  };
  const closeAdd = () => {
    setEditing(void 0);
    setAddOpen(false);
    setCatalogBusy(false);
    setCustomBusy(false);
  };
  const closeEditor = (changed, target) => {
    closeAdd();
    if (changed) announceSaved(target);
  };
  const closeSetup = (changed, target) => {
    setDismissedSetup((previous) => /* @__PURE__ */ new Set([...previous, target.provider]));
    if (changed) announceSaved(target);
  };
  const closeDelete = () => {
    if (deleting) return;
    setDeleteTarget(void 0);
    setDeleteFailure(void 0);
  };
  const confirmDelete = () => {
    if (deleteTarget === void 0 || deleting) return;
    setDeleting(true);
    setDeleteFailure(void 0);
    void removeProviderProfile(operations, controller, deleteTarget).then((failure) => {
      if (failure !== void 0) {
        setDeleteFailure(failure);
        return;
      }
      setDeleteTarget(void 0);
    }).finally(() => {
      setDeleting(false);
    });
  };
  if (state.status === "idle") void controller.load();
  if (state.status === "error") {
    const errorText = state.error ?? "";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ModelsSection_default["section"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: ModelsSection_default["error"], children: `${t("loadFailed")}: ${errorText}` }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", className: ModelsSection_default["secondaryButton"], onClick: () => {
        void controller.load();
      }, children: t("retry") })
    ] });
  }
  if (!hasReadySnapshot && state.status !== "ready") {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ModelsSection_default["section"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: ModelsSection_default["title"], children: t("title") }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: ModelsSection_default["intro"], children: t("intro") })
    ] });
  }
  const savedRow = savedTarget === void 0 ? void 0 : state.rows.find((row) => row.entry.provider === savedTarget.provider);
  const savedIdentity = savedRow === void 0 ? savedTarget : { provider: savedRow.entry.provider, displayName: savedRow.entry.displayName };
  const anyUsable = state.rows.some(providerUsable);
  const configured = state.rows.filter((row) => row.configured);
  const configurable = state.rows.filter((row) => state.namespaces.has(row.entry.settingsNs));
  const addable = state.rows.flatMap((row) => {
    const namespace = state.namespaces.get(row.entry.settingsNs);
    return namespace === void 0 || row.configured ? [] : [{ row, namespace }];
  });
  const piAi = state.namespaces.get("llm-pi-ai");
  const protocols = protocolChoices(piAi, schema);
  const reasoningLevels = reasoningLevelChoices(piAi, schema);
  const catalogOffered = configurable.length > 0;
  const catalogEnabled = addable.length > 0;
  const customOffered = piAi !== void 0;
  const customEnabled = protocols.length > 0;
  const bothOffered = catalogOffered && customOffered;
  const mode = bothOffered ? addMode : customOffered ? "custom" : "catalog";
  const mounted = (candidate) => mode === candidate || visited.has(candidate);
  const switchLocked = catalogBusy || customBusy;
  const draft = (() => {
    if (!addOpen || !catalogOffered) return void 0;
    const kept = editing === void 0 ? void 0 : state.namespaces.get(editing.settingsNs);
    if (editing !== void 0 && kept !== void 0) return { target: editing, namespace: kept };
    const first = addable[0];
    return first === void 0 ? void 0 : { target: targetOf(first.row), namespace: first.namespace };
  })();
  const addRow = draft === void 0 ? void 0 : state.rows.find((row) => row.entry.provider === draft.target.provider);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ModelsSection_default["section"], children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: ModelsSection_default["title"], children: t("title") }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: ModelsSection_default["intro"], children: t("intro") }),
    !state.writable && state.status === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: ModelsSection_default["notice"], children: t("readOnly") }) : null,
    savedIdentity === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: ModelsSection_default["savedNotice"], role: "status", "aria-live": "polite", children: providerCopy(t("savedProvider"), savedIdentity) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { className: ModelsSection_default["rows"], children: configured.map((row) => {
      const target = targetOf(row);
      const namespace = state.namespaces.get(target.settingsNs);
      if (namespace === void 0) return null;
      const error = row.entry.error === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { role: "alert", className: ModelsSection_default["error"], children: row.entry.error });
      if (needsSetup(row, anyUsable) && !dismissedSetup.has(row.entry.provider)) {
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { className: ModelsSection_default["setupCard"], children: [
          error,
          renderProviderEditor({
            target,
            row,
            namespace,
            schema,
            operations,
            t,
            readOnly: !state.writable,
            onClose: (changed) => {
              closeSetup(changed, target);
            }
          }),
          renderSlot(
            "settings.models.provider-card",
            { provider: row.entry, configured: row.configured, keyConfigured: keyConfiguredOf(row) },
            { entryKey: row.entry.settingsNs }
          )
        ] }, row.entry.provider);
      }
      const open = !addOpen && editing?.provider === row.entry.provider;
      const credentialConfigured = row.credential?.configured === true;
      const credentialMissing = !credentialConfigured && row.apiKeyEnv !== void 0 && row.credential?.configured === false;
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { className: ModelsSection_default["rowCard"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ModelsSection_default["rowHead"], children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: ModelsSection_default["rowIdentity"], children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: ModelsSection_default["rowName"], children: row.entry.displayName }),
            row.entry.declared === true ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: ModelsSection_default["rowTag"], children: t("customTag") }) : null,
            row.entry.provider === "deepseek-account" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: ModelsSection_default["accountStatus"], children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: `${ModelsSection_default["credentialDot"]} ${ModelsSection_default["credentialDotConfigured"]}`, "aria-hidden": "true" }),
              t("accountSignedIn")
            ] }) : null,
            credentialConfigured ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "span",
              {
                className: `${ModelsSection_default["credentialDot"]} ${ModelsSection_default["credentialDotConfigured"]}`,
                role: "img",
                "aria-label": t("credentialConfigured"),
                title: t("credentialConfigured")
              }
            ) : credentialMissing ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "span",
              {
                className: `${ModelsSection_default["credentialDot"]} ${ModelsSection_default["credentialDotMissing"]}`,
                role: "img",
                "aria-label": t("credentialMissing"),
                title: t("credentialMissing")
              }
            ) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: ModelsSection_default["rowActions"], children: [
            row.entry.provider === "deepseek-account" ? null : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                type: "button",
                className: ModelsSection_default["secondaryButton"],
                "aria-label": providerCopy(t("editProvider"), target),
                disabled: !open && state.status !== "ready",
                onClick: () => {
                  if (!open && controller.store.getSnapshot().status !== "ready") return;
                  setSavedTarget(void 0);
                  setAddOpen(false);
                  setEditing(open ? void 0 : target);
                },
                children: t("edit")
              }
            ),
            row.removable ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                type: "button",
                className: ModelsSection_default["dangerButton"],
                "aria-label": providerCopy(t("removeProvider"), target),
                disabled: !state.writable || state.status !== "ready",
                onClick: () => {
                  if (controller.store.getSnapshot().status !== "ready") return;
                  setSavedTarget(void 0);
                  setDeleteFailure(void 0);
                  setDeleteTarget(target);
                },
                children: t("remove")
              }
            ) : null
          ] })
        ] }),
        error,
        renderSlot(
          "settings.models.provider-card",
          { provider: row.entry, configured: row.configured, keyConfigured: keyConfiguredOf(row) },
          { entryKey: row.entry.settingsNs }
        ),
        open ? renderProviderEditor({
          target,
          row,
          namespace,
          schema,
          operations,
          t,
          readOnly: !state.writable,
          onClose: (changed) => {
            closeEditor(changed, target);
          }
        }) : null
      ] }, row.entry.provider);
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: ModelsSection_default["addBlock"], children: addOpen ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ModelsSection_default["addCard"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ModelsSection_default["addModes"], children: [
        bothOffered ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_dsh_client_ui_primitives8.SegmentedControl,
          {
            id: addId,
            label: t("addMode"),
            value: mode,
            disabled: switchLocked,
            options: [
              {
                value: "catalog",
                label: t("addCatalog"),
                disabled: !catalogEnabled,
                ...catalogEnabled ? {} : { title: t("addCatalogExhausted") }
              },
              {
                value: "custom",
                label: t("addCustom"),
                disabled: !customEnabled,
                ...customEnabled ? {} : { title: t("addCustomUnavailable") }
              }
            ],
            onChange: (next) => {
              setAddMode(next);
              setVisited((previous) => /* @__PURE__ */ new Set([...previous, next]));
            }
          }
        ) : (
          // One mode alone has no switch to name it, so the card
          // carries the mode as its title instead.
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: ModelsSection_default["editorHeader"], children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: ModelsSection_default["editorTitle"], children: t(mode === "catalog" ? "addCatalog" : "addCustom") }) })
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: ModelsSection_default["advancedHint"], children: t(mode === "catalog" ? "addCatalogHint" : "addCustomHint") })
      ] }),
      mounted("catalog") && draft !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "div",
        {
          id: `${addId}-catalog-panel`,
          ...bothOffered ? { role: "tabpanel", "aria-labelledby": `${addId}-catalog` } : {},
          hidden: mode !== "catalog",
          className: ModelsSection_default["addPanel"],
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ModelsSection_default["field"], children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: ModelsSection_default["fieldLabel"], children: t("provider") }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "select",
                {
                  className: `${ModelsSection_default["input"]} ${ModelsSection_default["selectInput"]}`,
                  value: draft.target.provider,
                  "aria-label": t("provider"),
                  disabled: catalogBusy,
                  onChange: (event) => {
                    const picked = addable.find((candidate) => candidate.row.entry.provider === event.target.value);
                    if (picked === void 0) return;
                    setEditing(targetOf(picked.row));
                  },
                  children: addable.map(({ row }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: row.entry.provider, children: row.entry.displayName }, row.entry.provider))
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              ProviderEditor,
              {
                provider: draft.target.provider,
                displayName: draft.target.displayName,
                hideTitle: true,
                namespace: draft.namespace,
                schema,
                settingsPath: draft.target.settingsPath,
                operations,
                ...draft.target.defaultBaseURL === void 0 ? {} : { defaultBaseURL: draft.target.defaultBaseURL },
                ...draft.target.baseURLEnv === void 0 ? {} : { baseURLEnv: draft.target.baseURLEnv },
                ...draft.target.nativeAuth === void 0 ? {} : { nativeAuth: draft.target.nativeAuth },
                ...addRow?.credentialChecks === void 0 ? {} : { credentialChecks: addRow.credentialChecks },
                t,
                readOnly: !state.writable,
                onClose: (changed) => {
                  closeEditor(changed, draft.target);
                },
                onBusyChange: setCatalogBusy
              },
              draft.target.provider
            ),
            addRow === void 0 ? null : renderSlot(
              "settings.models.provider-card",
              { provider: addRow.entry, configured: addRow.configured, keyConfigured: keyConfiguredOf(addRow) },
              { entryKey: addRow.entry.settingsNs }
            )
          ]
        }
      ) : null,
      mounted("custom") && piAi !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "div",
        {
          id: `${addId}-custom-panel`,
          ...bothOffered ? { role: "tabpanel", "aria-labelledby": `${addId}-custom` } : {},
          hidden: mode !== "custom",
          className: ModelsSection_default["addPanel"],
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            CustomProviderCard,
            {
              taken: state.rows.map((row) => row.entry.provider),
              protocols,
              reasoningLevels,
              revision: piAi.revision,
              operations,
              t,
              readOnly: !state.writable,
              onClose: (changed) => {
                closeAdd();
                if (changed) void controller.load();
              },
              onBusyChange: setCustomBusy
            }
          )
        }
      ) : null
    ] }) : catalogOffered || customOffered ? (
      // One entry for both ways to gain a provider; the card behind it
      // splits them. Full width, so it lines up with the rows above.
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: ModelsSection_default["addActions"], children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "button",
        {
          type: "button",
          className: ModelsSection_default["addButton"],
          disabled: !state.writable || state.status !== "ready" || !catalogEnabled && !customEnabled,
          onClick: () => {
            if (controller.store.getSnapshot().status !== "ready") return;
            const first = addable[0];
            const initial = catalogEnabled ? "catalog" : "custom";
            setSavedTarget(void 0);
            setEditing(first === void 0 ? void 0 : targetOf(first.row));
            setAddMode(initial);
            setVisited(/* @__PURE__ */ new Set([initial]));
            setAddOpen(true);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_dsh_client_ui_primitives8.IconPlusOutlineRegular, { size: 14 }),
            t("add")
          ]
        }
      ) })
    ) : null }),
    renderSlot("settings.models.footer", {}),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_dsh_client_ui_primitives8.Modal,
      {
        open: deleteTarget !== void 0,
        onClose: closeDelete,
        title: deleteTarget === void 0 ? "" : providerCopy(t("deleteTitle"), deleteTarget),
        closeLabel: t("close"),
        description: deleteTarget === void 0 ? "" : providerCopy(
          deleteTarget.credentialRef === void 0 ? t("deleteDescription") : t("deleteDescriptionWithCredential"),
          deleteTarget
        ),
        className: ModelsSection_default["deleteDialog"],
        footer: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_dsh_client_ui_primitives8.Button, { variant: "outline", "data-modal-autofocus": true, disabled: deleting, onClick: closeDelete, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            import_dsh_client_ui_primitives8.Button,
            {
              variant: "outline",
              className: ModelsSection_default["deleteConfirm"],
              disabled: deleting,
              onClick: confirmDelete,
              children: deleteTarget === void 0 ? "" : providerCopy(deleting ? t("deleting") : t("deleteConfirm"), deleteTarget)
            }
          )
        ] }),
        children: deleteFailure === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: ModelsSection_default["error"], children: deleteFailure })
      }
    )
  ] });
}

// vendor/ui-settings-models/src/client/DeepSeekOnboardingDialog.tsx
var import_react10 = require("react");

// vendor/ui-settings-models/src/client/OnboardingModal.tsx
var import_react9 = require("react");
var import_dsh_client_ui_primitives9 = require("@deepseek-ai/dsh-client-ui-primitives");

// vendor/ui-settings-models/src/client/OnboardingModal.module.css
var OnboardingModal_default = {
  dialog: "OnboardingModal_dialog",
  content: "OnboardingModal_content",
  title: "OnboardingModal_title",
  body: "OnboardingModal_body"
};

// vendor/ui-settings-models/src/client/OnboardingModal.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var ignoreImplicitDismiss = () => {
};
function OnboardingModal({
  title,
  focusTitle = false,
  children
}) {
  const titleRef = (0, import_react9.useRef)(null);
  (0, import_react9.useEffect)(() => {
    const appRoot = document.getElementById("root");
    if (appRoot === null) return;
    const previous = appRoot.inert;
    appRoot.inert = true;
    return () => {
      appRoot.inert = previous;
    };
  }, []);
  (0, import_react9.useEffect)(() => {
    if (focusTitle) titleRef.current?.focus();
  }, [focusTitle]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_dsh_client_ui_primitives9.Modal,
    {
      open: true,
      title,
      onClose: ignoreImplicitDismiss,
      headless: true,
      className: OnboardingModal_default.dialog,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: OnboardingModal_default.content, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { ref: titleRef, className: OnboardingModal_default.title, tabIndex: focusTitle ? -1 : void 0, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: OnboardingModal_default.body, children })
      ] })
    }
  );
}

// vendor/ui-settings-models/src/client/DeepSeekOnboardingDialog.module.css
var DeepSeekOnboardingDialog_default = {
  description: "DeepSeekOnboardingDialog_description",
  editor: "DeepSeekOnboardingDialog_editor"
};

// vendor/ui-settings-models/src/client/DeepSeekOnboardingDialog.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function assertNever(_value) {
  throw new Error("unexpected DeepSeek onboarding state");
}
function DeepSeekOnboardingDialog(props) {
  const { complete, controller, useModels, operations, schema, t, renderSlot, automatic, explicit = false } = props;
  const [apiKey, setApiKey] = (0, import_react10.useState)(explicit);
  const state = useModels((snapshot2) => snapshot2);
  const readiness = onboardingReadiness(state);
  (0, import_react10.useEffect)(() => {
    if ((automatic || explicit) && state.status === "idle") void controller.load();
  }, [controller, state.status, automatic, explicit]);
  (0, import_react10.useEffect)(() => {
    if (!automatic && !explicit || readiness.kind === "adapter-absent" || !explicit && readiness.kind === "provider-ready" || readiness.kind === "unavailable") complete();
  }, [complete, readiness.kind, explicit, automatic]);
  if (!automatic && !explicit) return null;
  switch (readiness.kind) {
    case "loading":
    case "adapter-absent":
    case "unavailable":
      return null;
    case "provider-ready":
      if (!explicit) return null;
      break;
    case "credential-missing":
      break;
    /* v8 ignore next -- every current readiness variant is handled above */
    default:
      return assertNever(readiness);
  }
  const row = state.rows.find((candidate) => candidate.entry.provider === "deepseek-official" && candidate.entry.settingsNs === "llm-deepseek" && candidate.entry.settingsPath.length === 0);
  const namespace = state.namespaces.get("llm-deepseek");
  if (row === void 0 || namespace === void 0) return null;
  const finishCredential = (changed) => {
    if (!changed) {
      complete();
      return;
    }
    void controller.load();
  };
  const editor = /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(OnboardingModal, { title: t("onboardingTitle"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: DeepSeekOnboardingDialog_default.description, children: t("onboardingDescription") }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: DeepSeekOnboardingDialog_default.editor, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      ProviderEditor,
      {
        provider: row.entry.provider,
        displayName: row.entry.displayName,
        namespace,
        schema,
        settingsPath: row.entry.settingsPath,
        operations,
        t,
        readOnly: false,
        hideTitle: true,
        credentialOnly: true,
        onSubmitCredential: () => {
          props.track?.("api_key_save_click", {});
        },
        credentialRequired: true,
        autoFocusCredential: true,
        cancelLabelKey: "onboardingLater",
        submitLabelKey: "onboardingSave",
        submitBusyLabelKey: "onboardingSaving",
        onClose: finishCredential
      }
    ) })
  ] });
  return apiKey ? editor : renderSlot("settings.models.sign-in", { complete, useApiKey: () => {
    setApiKey(true);
  } }, { fallback: editor });
}

// vendor/ui-settings-models/src/client/WelcomeNotice.tsx
var import_react11 = require("react");
var import_dsh_client_ui_primitives10 = require("@deepseek-ai/dsh-client-ui-primitives");

// vendor/ui-settings-models/src/client/WelcomeNotice.module.css
var WelcomeNotice_default = {
  copy: "WelcomeNotice_copy",
  error: "WelcomeNotice_error",
  actions: "WelcomeNotice_actions",
  primary: "WelcomeNotice_primary"
};

// vendor/ui-settings-models/src/client/WelcomeNotice.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function WelcomeNotice(props) {
  const { complete, controller, useWelcome, t } = props;
  const state = useWelcome((snapshot2) => snapshot2);
  const finished = (0, import_react11.useRef)(false);
  const finish = (0, import_react11.useCallback)(() => {
    if (finished.current) return;
    finished.current = true;
    complete();
  }, [complete]);
  (0, import_react11.useEffect)(() => {
    if (state.status === "idle") void controller.load();
  }, [controller, state.status]);
  (0, import_react11.useEffect)(() => {
    if (state.acknowledged) finish();
  }, [finish, state.acknowledged]);
  if (state.status === "idle" || state.status === "loading" || state.acknowledged) return null;
  const acknowledge = async () => {
    if (await controller.acknowledge()) finish();
  };
  const paragraphs = t("welcomeBody").split("\n\n");
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(OnboardingModal, { title: t("welcomeTitle"), focusTitle: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: WelcomeNotice_default.copy, children: paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: paragraph }, paragraph)) }),
    state.error === null ? null : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: WelcomeNotice_default.error, role: "alert", children: t("welcomeError") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: WelcomeNotice_default.actions, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_dsh_client_ui_primitives10.Button,
      {
        variant: "primary",
        className: WelcomeNotice_default.primary,
        disabled: state.status === "saving",
        onClick: () => {
          void acknowledge();
        },
        children: t("welcomeContinue")
      }
    ) })
  ] });
}

// vendor/ui-settings-models/src/client/welcome-store.ts
var import_dsh_client_store2 = require("@deepseek-ai/dsh-client-store");

// vendor/ui-settings-models/src/onboarding-copy.ts
var WELCOME_NOTICE_SETTINGS_NAMESPACE = "ui-settings-general";
var WELCOME_NOTICE_ACK_FIELD = "welcomeNoticeVersion";
var WELCOME_NOTICE_VERSION = "2026-09-28.1";

// vendor/ui-settings-models/src/client/welcome-store.ts
function assertNever2(_value) {
  throw new Error("unexpected welcome settings status");
}
var WelcomeNoticeStore = class {
  constructor(scope) {
    this.scope = scope;
  }
  /** uSES-safe state source shared by the registered welcome step. */
  store = (0, import_dsh_client_store2.createSnapshotStore)({
    status: "idle",
    acknowledged: false,
    error: null
  });
  saving = false;
  following;
  /**
   * Begin following the bound scope (idempotent) and publish its current answer.
   * @returns settlement after the current answer is published.
   */
  load() {
    this.following ??= this.scope.subscribe(() => {
      this.derive();
    });
    this.derive();
    return Promise.resolve();
  }
  /**
   * Persist this copy version through the scope. Success is judged against the
   * state the write left behind, so a refused or failed write reports false
   * after its recovery read settles.
   * @returns true when the Host holds the acknowledgement.
   */
  async acknowledge() {
    this.saving = true;
    this.store.update((state) => {
      state.status = "saving";
      state.error = null;
    });
    try {
      await this.scope.set(WELCOME_NOTICE_ACK_FIELD, WELCOME_NOTICE_VERSION);
    } finally {
      this.saving = false;
    }
    this.derive();
    const { acknowledged } = this.store.getSnapshot();
    if (!acknowledged) {
      this.store.update((state) => {
        state.status = "error";
        state.error = "the acknowledgement did not persist";
      });
    }
    return acknowledged;
  }
  /** Stop following the scope. */
  dispose() {
    this.following?.();
    this.following = void 0;
  }
  derive() {
    if (this.saving) return;
    const scope = this.scope.getSnapshot();
    switch (scope.status) {
      case "loading":
        this.store.update((state) => {
          state.status = "loading";
          state.error = null;
        });
        return;
      case "unavailable":
        this.store.update((state) => {
          state.status = "error";
          state.acknowledged = false;
          state.error = "welcome acknowledgement settings are unavailable";
        });
        return;
      case "ready": {
        const acknowledged = scope.value?.[WELCOME_NOTICE_ACK_FIELD] === WELCOME_NOTICE_VERSION;
        this.store.update((state) => {
          state.status = "ready";
          state.acknowledged = acknowledged;
          state.error = null;
        });
        return;
      }
      /* v8 ignore next -- every current settings scope status is handled above */
      default:
        return assertNever2(scope.status);
    }
  }
};

// vendor/ui-settings-models/src/client/operations.ts
function createModelsOperations(ctx) {
  return {
    storeCredential: async (ref, value) => {
      const response = await ctx.remote.credentials.set(ref, value);
      return response.ok ? void 0 : response.error.message;
    },
    removeCredential: async (ref) => {
      const response = await ctx.remote.credentials.unset(ref);
      return response.ok ? void 0 : response.error.message;
    },
    writeSettings: async (ns, ops, expectedRevision) => {
      const response = await ctx.remote.settings.mutate(ns, ops, expectedRevision);
      if (response.ok) return { kind: "written", view: response.value };
      const { code, message } = response.error;
      return code === "settings/conflict" ? { kind: "conflict", message } : { kind: "refused", message };
    },
    discoverModels: async (settingsNs, request) => {
      const response = await ctx.remote.llm.discoverModels(settingsNs, request);
      return response.ok ? { kind: "found", models: response.value } : { kind: "refused", message: response.error.message };
    }
  };
}

// vendor/ui-settings-models/src/client/schema-operations.ts
function createSettingsSchemaOperations(service) {
  return {
    rehydrate: (serialized) => service.rehydrate(serialized),
    validate: (schema, draft) => service.validate(schema, draft),
    nodeAtPath: (root, path) => service.nodeAtPath(root, path),
    getPath: (value, path) => service.getPath(value, path),
    hasPath: (value, path) => service.hasPath(value, path),
    setPath: (root, path, value) => service.setPath(root, path, value),
    deletePath: (root, path) => service.deletePath(root, path)
  };
}

// vendor/ui-settings-models/src/client/locales.ts
var en = {
  googleSearch: "Google Search",
  googleSearchHint: "Allow Gemini to use the Google API\u2019s built-in search when needed. Saved changes apply to the next request.",
  nav: "Models",
  deepSeekAccount: "DeepSeek Account",
  title: "Models",
  intro: "Enter your API keys to use models from the following providers.",
  edit: "Edit",
  editProvider: "Edit {provider}",
  remove: "Delete",
  removeProvider: "Delete {provider}",
  deleteTitle: "Delete {provider}?",
  deleteDescription: "Deleting {provider} removes its configuration. Any credential it uses is managed elsewhere and will be kept.",
  deleteDescriptionWithCredential: "Deleting {provider} removes its configuration and stored API key.",
  deleteConfirm: "Delete {provider}",
  deleting: "Deleting {provider}\u2026",
  add: "Add model provider",
  addMode: "How to add",
  addCatalog: "Third-party model provider",
  addCustom: "Custom model API",
  addCatalogHint: "Pick OpenAI, Anthropic, Kimi, or another provider from the built-in catalog and enter its API key.",
  addCustomHint: "Connect a relay, a self-hosted server, or any other OpenAI-, Anthropic-, or Gemini-compatible endpoint by its base URL, protocol, and models.",
  addCatalogExhausted: "Every catalog provider is already configured.",
  addCustomUnavailable: "No API protocol is available to declare.",
  provider: "Provider",
  close: "Close",
  cancel: "Cancel",
  apply: "Apply",
  applying: "Applying\u2026",
  savedProvider: "Saved {provider}.",
  credentialConfigured: "API key configured",
  credentialMissing: "API key missing",
  accountSignedIn: "Signed in",
  readOnly: "The settings document is read-only in this deployment.",
  loadFailed: "Loading the provider directory failed",
  conflict: "Someone else changed these settings while this card was open. Close it and reopen to edit the current values.",
  retry: "Retry",
  keyInput: "API key",
  keyReveal: "Show secret",
  keyHide: "Hide secret",
  keyPlaceholder: "Enter your API key",
  keyPlaceholderFallback: "Leave blank to use env as auth ({hint})",
  keySaved: "Use the existing saved API key.",
  keyReplacePending: "Apply to replace the saved API key.",
  keyRemovePending: "Apply to clear the saved API key and use environment authentication.",
  keyRemovePendingEnvironment: "Apply to clear the saved API key. Environment authentication will be used ({hint}).",
  keyRemoveApplied: "Key cleared. Apply again to finish settings; this deletion cannot be undone.",
  keyFallbackMissing: "Env var not detected. Enter an API key, or configure {hint} in your env.",
  keyFallbackDetected: "Env var detected. ({hint})",
  keyFallbackDetectedHidden: "Env var detected.",
  keyFallbackUnchecked: "Environment credential status has not been confirmed.",
  keyHelp: "Saved credentials are used first. Environment fallbacks shown here, in order: {env}. Sources are launch environment, $cwd/.env, then $DSH_HOME/.env.",
  authHelp: "Authentication details",
  customized: "Customized settings",
  baseUrl: "Base URL",
  baseUrlDefault: "No default endpoint",
  baseUrlEnvironment: "Provider endpoint configuration: {env}",
  baseUrlConfigured: "Provider-configured endpoint",
  baseUrlPlaceholder: "{url}",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic (Default to use DEEPSEEK_BASE_URL)",
  deepSeekEndpointHint: "Use an API endpoint compatible with Anthropic Messages.",
  retryPolicy: "Retry policy",
  retryModeDefault: "Default ({mode})",
  retryModeNormal: "Transient errors",
  retryModeAlways: "All errors",
  retryAlwaysHint: "Failed requests retry until they succeed or the turn is stopped.",
  retryMaxRetries: "Max retries",
  retryCodes: "Error codes",
  retryCodeEmptyResponse: "Empty response",
  retryCodeRateLimit: "Rate limited",
  retryCodeServer: "Server error",
  retryCodeTimeout: "Timeout",
  retryCodeTransport: "Network error",
  retryCodeStreamClosed: "Stream closed early",
  retryCodeMalformedResponse: "Malformed response",
  retryCodeQuota: "Quota exceeded",
  retryCodeCustom: "Custom error code",
  retryCodeAdd: "Add",
  retryInitialDelay: "Initial delay (ms)",
  retryMaxDelay: "Max delay (ms)",
  retryJitter: "Jitter ratio",
  retryBackoff: "Backoff",
  retryValueNumber: "Enter a number.",
  retryValueInteger: "Enter a whole number.",
  retryValuePositive: "Must be greater than 0.",
  retryValueMin: "Must be at least {min}.",
  retryValueMax: "Must be at most {max}.",
  retryCodesInvalid: "Error codes must be non-empty text.",
  retryCodesDuplicate: "Each error code may appear once.",
  retryDelayOrder: "Initial delay cannot exceed max delay.",
  models: "Models",
  modelsInherited: "Using the adapter defaults",
  modelsCustomized: "Customized model catalog",
  resetModels: "Restore defaults",
  model: "Model",
  modelId: "Model ID",
  modelName: "Display name",
  modelNamePlaceholder: "Uses the model ID when empty",
  contextWindow: "Context window",
  contextWindowPlaceholder: "Uses the provider default",
  maxTokens: "Max output tokens",
  maxTokensPlaceholder: "Uses the provider default",
  modelAdvanced: "Model options",
  modelInputTypes: "Input types",
  modelInputText: "Text",
  modelInputImage: "Image",
  modelReasoning: "Reasoning levels",
  modelReasoningLevel: "Level",
  modelReasoningValue: "API value",
  modelReasoningHelp: "About reasoning levels",
  modelReasoningHelpText: "The API value is sent in the request's reasoning-effort field, such as OpenAI's reasoning_effort. It defaults to the level name; where the model provider's API documentation specifies a different value, follow it. Off turns reasoning off and needs no value; a value already written in the configuration is kept and sent.",
  modelReasoningNeedsLevel: "Add at least one level besides Off, or turn reasoning levels off.",
  modelReasoningValueRequired: "Every level besides Off needs an API value, and no value can be empty.",
  modelReasoningLevelsOnly: "This API protocol accepts only the minimal, low, medium, and high levels, each with its level name as the API value. Change or remove the other levels.",
  modelReasoningAdd: "Add level",
  modelReasoningRemove: "Delete level",
  modelReasoningOffValuePlaceholder: "Turns reasoning off",
  addModel: "Add model",
  removeModel: "Delete model",
  reorderModel: "Reorder model",
  reorderModelHelp: "Drag to reorder, or use the up and down arrow keys.",
  modelsEmpty: "No models will be shown in the selector. Unlisted IDs can still be sent directly.",
  keyBlank: "Enter the API key, or leave the field empty to keep the stored one.",
  keyBlankNew: "Enter the API key, or leave the field empty if this provider authenticates another way.",
  keyIllegalCharacters: "This API key is not in a valid format. Please check it.",
  modelIdRequired: "Model ID is required.",
  modelIdDuplicate: "Model ID must be unique.",
  modelNameInvalid: "Display name cannot be empty.",
  modelContextInvalid: "Context window must be a positive count, like 131072, 256K, or 1M.",
  modelMaxTokensInvalid: "Max output tokens must be a positive count, like 8192, 64K, or 1M.",
  advancedHint: "Other fields live in cordis.patch.yml; edit that section directly.",
  modelCapacityInvalid: "A capacity must be a number, optionally suffixed K or M.",
  modelDuplicate: "Each model ID may appear once.",
  fetchModels: "Fetch available models",
  fetching: "Asking the provider\u2026",
  fetchNeedsBaseUrl: "Enter the base URL first, then fetch.",
  fetchEmpty: "The provider listed no models. Add them by hand.",
  fetchTitle: "Choose models",
  fetchDescription: "These are the models this provider has available. Checked models make up the list.",
  fetchSearch: "Search models",
  fetchNoMatches: "No matching models.",
  fetchSelectAll: "Select all",
  fetchDeselectAll: "Deselect all",
  fetchAdopt: "Update list",
  fetchKeepOne: "Keep at least one model checked.",
  customTag: "Custom",
  customRoute: "Provider ID",
  customRouteHint: "Lowercase identifier, starting with a letter, that uniquely names this provider in requests and as its credential name.",
  customRouteInvalid: "Start with a lowercase letter; then lowercase letters, digits, and dashes.",
  customRouteTaken: "A provider already uses this ID.",
  customDisplayName: "Display name",
  customApi: "API protocol",
  customApiUnset: "Not selected",
  protocolOpenAiCompletions: "OpenAI Chat Completions",
  protocolOpenAiResponses: "OpenAI Responses",
  protocolAnthropicMessages: "Anthropic Messages",
  protocolGemini: "Gemini API",
  customNeedsBaseUrl: "A custom provider needs a base URL.",
  customBaseUrlInvalid: "Enter a valid HTTP or HTTPS URL.",
  customNeedsModels: "A custom provider needs at least one model.",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
  customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
  settingsPathUnresolvable: "unresolvable settings path",
  create: "Create provider",
  creating: "Creating\u2026",
  welcomeTitle: "Preview Notice",
  welcomeBody: "DeepSeek Harness 0.2 is still in preview, and many areas need continued improvement and refinement. We welcome feedback and suggestions from all developers and users. The new desktop app now targets a broad range of users, while developer-related advanced features can be enabled in the settings. DeepSeek Harness\u2019s product features and plugin APIs are expected to continue rapid iteration and evolution, and will gradually stabilize over time.\n\nWe look forward to exploring the limits of intelligence together with users and developers around the world, building on open-source, reusable, and composable infrastructure. We welcome everyone to bring their ideas to life with DeepSeek Harness and participate in the community to enrich the plugin ecosystem.",
  welcomeContinue: "Continue",
  welcomeError: "The acknowledgement could not be saved. Please try again.",
  onboardingTitle: "Add an API key to get started",
  onboardingDescription: "Configure the official DeepSeek provider to start building.",
  onboardingLater: "Configure later",
  onboardingSave: "Save and continue",
  onboardingSaving: "Saving\u2026",
  keyRequired: "Enter an API key to continue."
};
var zh = {
  googleSearch: "Google \u5185\u7F6E\u641C\u7D22",
  googleSearchHint: "\u5141\u8BB8 Gemini \u6309\u9700\u8C03\u7528 Google API \u5185\u7F6E\u641C\u7D22\u3002\u4FDD\u5B58\u540E\u4ECE\u4E0B\u4E00\u6B21\u8BF7\u6C42\u751F\u6548\u3002",
  nav: "\u6A21\u578B",
  deepSeekAccount: "DeepSeek \u8D26\u53F7",
  title: "\u6A21\u578B",
  intro: "\u586B\u5165\u5404\u63D0\u4F9B\u5546\u7684 API \u5BC6\u94A5\u5373\u53EF\u4F7F\u7528\u5176\u6A21\u578B\u3002",
  edit: "\u7F16\u8F91",
  editProvider: "\u7F16\u8F91 {provider}",
  remove: "\u5220\u9664",
  removeProvider: "\u5220\u9664 {provider}",
  deleteTitle: "\u5220\u9664 {provider}\uFF1F",
  deleteDescription: "\u5220\u9664 {provider} \u4F1A\u79FB\u9664\u5176\u914D\u7F6E\uFF1B\u5176\u4F7F\u7528\u7684\u51ED\u8BC1\uFF08\u5982\u6709\uFF09\u7531\u5176\u4ED6\u4F4D\u7F6E\u7BA1\u7406\uFF0C\u5C06\u4F1A\u4FDD\u7559\u3002",
  deleteDescriptionWithCredential: "\u5220\u9664 {provider} \u4F1A\u79FB\u9664\u5176\u914D\u7F6E\u548C\u5B58\u50A8\u7684 API \u5BC6\u94A5\u3002",
  deleteConfirm: "\u5220\u9664 {provider}",
  deleting: "\u6B63\u5728\u5220\u9664 {provider}\u2026",
  add: "\u6DFB\u52A0\u6A21\u578B\u63D0\u4F9B\u5546",
  addMode: "\u6DFB\u52A0\u65B9\u5F0F",
  addCatalog: "\u7B2C\u4E09\u65B9\u6A21\u578B\u63D0\u4F9B\u5546",
  addCustom: "\u81EA\u5B9A\u4E49\u6A21\u578B API",
  addCatalogHint: "\u4ECE\u5185\u7F6E\u76EE\u5F55\u4E2D\u9009\u62E9 OpenAI\u3001Anthropic\u3001Kimi \u7B49\u63D0\u4F9B\u5546\uFF0C\u586B\u5165\u5176 API \u5BC6\u94A5\u5373\u53EF\u4F7F\u7528\u3002",
  addCustomHint: "\u8FDE\u63A5\u4E2D\u8F6C\u7AD9\u3001\u81EA\u90E8\u7F72\u670D\u52A1\u6216\u5176\u4ED6\u517C\u5BB9 OpenAI / Anthropic / Gemini \u534F\u8BAE\u7684\u63A5\u53E3\uFF0C\u9700\u586B\u5199 API \u5730\u5740\u3001\u534F\u8BAE\u548C\u6A21\u578B\u3002",
  addCatalogExhausted: "\u76EE\u5F55\u4E2D\u7684\u63D0\u4F9B\u5546\u90FD\u5DF2\u6DFB\u52A0\u3002",
  addCustomUnavailable: "\u6CA1\u6709\u53EF\u7528\u7684 API \u534F\u8BAE\u3002",
  provider: "\u63D0\u4F9B\u5546",
  close: "\u5173\u95ED",
  cancel: "\u53D6\u6D88",
  apply: "\u4FDD\u5B58",
  applying: "\u4FDD\u5B58\u4E2D\u2026",
  savedProvider: "\u5DF2\u4FDD\u5B58 {provider}\u3002",
  credentialConfigured: "API \u5BC6\u94A5\u5DF2\u914D\u7F6E",
  credentialMissing: "API \u5BC6\u94A5\u7F3A\u5931",
  accountSignedIn: "\u5DF2\u767B\u5F55",
  readOnly: "\u5F53\u524D\u90E8\u7F72\u7684\u8BBE\u7F6E\u6587\u6863\u4E3A\u53EA\u8BFB\u3002",
  loadFailed: "\u52A0\u8F7D\u63D0\u4F9B\u5546\u76EE\u5F55\u5931\u8D25",
  conflict: "\u8FD9\u5F20\u5361\u7247\u6253\u5F00\u671F\u95F4\uFF0C\u8FD9\u4E9B\u8BBE\u7F6E\u5DF2\u88AB\u5176\u4ED6\u5730\u65B9\u6539\u52A8\u3002\u8BF7\u5173\u95ED\u540E\u91CD\u65B0\u6253\u5F00\uFF0C\u5728\u5F53\u524D\u503C\u4E0A\u7F16\u8F91\u3002",
  retry: "\u91CD\u8BD5",
  keyInput: "API \u5BC6\u94A5",
  keyReveal: "\u663E\u793A\u5BC6\u94A5",
  keyHide: "\u9690\u85CF\u5BC6\u94A5",
  keyPlaceholder: "\u8F93\u5165 API \u5BC6\u94A5",
  keyPlaceholderFallback: "\u7559\u7A7A\u4F7F\u7528\u73AF\u5883\u8BA4\u8BC1\uFF08{hint}\uFF09",
  keySaved: "\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684 API key\u3002",
  keyReplacePending: "\u4FDD\u5B58\u4EE5\u66FF\u6362\u5DF2\u4FDD\u5B58\u7684 API key\u3002",
  keyRemovePending: "\u4FDD\u5B58\u4EE5\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API key\uFF0C\u5E76\u6539\u7528\u73AF\u5883\u8BA4\u8BC1\u3002",
  keyRemovePendingEnvironment: "\u4FDD\u5B58\u4EE5\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API key\u3002\u4E4B\u540E\u4F7F\u7528\u73AF\u5883\u8BA4\u8BC1\uFF08{hint}\uFF09\u3002",
  keyRemoveApplied: "\u5BC6\u94A5\u5DF2\u6E05\u9664\uFF0C\u8BF7\u91CD\u8BD5\u4FDD\u5B58\u4EE5\u5B8C\u6210\u914D\u7F6E\u66F4\u65B0\uFF1B\u6B64\u5220\u9664\u65E0\u6CD5\u64A4\u9500",
  keyFallbackMissing: "\u672A\u68C0\u6D4B\u5230\u73AF\u5883\u53D8\u91CF\u3002\u8BF7\u586B\u5199 API \u5BC6\u94A5\uFF0C\u6216\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF {hint}\u3002",
  keyFallbackDetected: "\u5DF2\u68C0\u6D4B\u5230\u73AF\u5883\u53D8\u91CF\uFF08{hint}\uFF09",
  keyFallbackDetectedHidden: "\u5DF2\u68C0\u6D4B\u5230\u73AF\u5883\u53D8\u91CF",
  keyFallbackUnchecked: "\u73AF\u5883\u51ED\u636E\u72B6\u6001\u5C1A\u672A\u786E\u8BA4",
  keyHelp: "\u4F18\u5148\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u51ED\u636E\u3002\u6B64\u5904\u663E\u793A\u7684\u73AF\u5883\u540E\u5907\u6309\u4EE5\u4E0B\u987A\u5E8F\u6392\u5217\uFF1A{env}\u3002\u6765\u6E90\u4F9D\u6B21\u4E3A\u542F\u52A8\u73AF\u5883\u3001$cwd/.env\u3001$DSH_HOME/.env\u3002",
  authHelp: "\u8BA4\u8BC1\u8BF4\u660E",
  customized: "\u81EA\u5B9A\u4E49\u8BBE\u7F6E",
  baseUrl: "API \u5730\u5740",
  baseUrlDefault: "\u6CA1\u6709\u9ED8\u8BA4\u5730\u5740",
  baseUrlEnvironment: "\u63D0\u4F9B\u65B9\u5730\u5740\u914D\u7F6E\uFF1A{env}",
  baseUrlConfigured: "\u7531\u63D0\u4F9B\u65B9\u914D\u7F6E\u5730\u5740",
  baseUrlPlaceholder: "{url}",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic\uFF08\u9ED8\u8BA4\u4F7F\u7528\u73AF\u5883 DEEPSEEK_BASE_URL\uFF09",
  deepSeekEndpointHint: "\u8BF7\u586B\u5199\u517C\u5BB9 Anthropic Messages \u534F\u8BAE\u7684 API \u5730\u5740\u3002",
  retryPolicy: "\u91CD\u8BD5\u7B56\u7565",
  retryModeDefault: "\u9ED8\u8BA4\uFF08{mode}\uFF09",
  retryModeNormal: "\u4EC5\u4E34\u65F6\u9519\u8BEF",
  retryModeAlways: "\u6240\u6709\u9519\u8BEF",
  retryAlwaysHint: "\u5931\u8D25\u7684\u8BF7\u6C42\u4F1A\u6301\u7EED\u91CD\u8BD5\uFF0C\u76F4\u5230\u6210\u529F\u6216\u672C\u8F6E\u88AB\u505C\u6B62\u3002",
  retryMaxRetries: "\u6700\u5927\u91CD\u8BD5\u6B21\u6570",
  retryCodes: "\u9519\u8BEF\u7801",
  retryCodeEmptyResponse: "\u7A7A\u54CD\u5E94",
  retryCodeRateLimit: "\u8BF7\u6C42\u9650\u6D41",
  retryCodeServer: "\u670D\u52A1\u5668\u9519\u8BEF",
  retryCodeTimeout: "\u8D85\u65F6",
  retryCodeTransport: "\u7F51\u7EDC\u9519\u8BEF",
  retryCodeStreamClosed: "\u6D41\u63D0\u524D\u7ED3\u675F",
  retryCodeMalformedResponse: "\u54CD\u5E94\u683C\u5F0F\u9519\u8BEF",
  retryCodeQuota: "\u914D\u989D\u5DF2\u7528\u5C3D",
  retryCodeCustom: "\u81EA\u5B9A\u4E49\u9519\u8BEF\u7801",
  retryCodeAdd: "\u6DFB\u52A0",
  retryInitialDelay: "\u521D\u59CB\u5EF6\u8FDF (ms)",
  retryMaxDelay: "\u6700\u5927\u5EF6\u8FDF (ms)",
  retryJitter: "\u6296\u52A8\u6BD4\u4F8B",
  retryBackoff: "\u9000\u907F",
  retryValueNumber: "\u8BF7\u8F93\u5165\u6570\u5B57\u3002",
  retryValueInteger: "\u8BF7\u8F93\u5165\u6574\u6570\u3002",
  retryValuePositive: "\u5FC5\u987B\u5927\u4E8E 0\u3002",
  retryValueMin: "\u4E0D\u80FD\u5C0F\u4E8E {min}\u3002",
  retryValueMax: "\u4E0D\u80FD\u5927\u4E8E {max}\u3002",
  retryCodesInvalid: "\u9519\u8BEF\u7801\u5FC5\u987B\u662F\u975E\u7A7A\u6587\u672C\u3002",
  retryCodesDuplicate: "\u6BCF\u4E2A\u9519\u8BEF\u7801\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\u3002",
  retryDelayOrder: "\u521D\u59CB\u5EF6\u8FDF\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u5EF6\u8FDF\u3002",
  models: "\u6A21\u578B\u76EE\u5F55",
  modelsInherited: "\u6B63\u5728\u4F7F\u7528\u9002\u914D\u5668\u9ED8\u8BA4\u6A21\u578B",
  modelsCustomized: "\u5DF2\u81EA\u5B9A\u4E49\u6A21\u578B\u76EE\u5F55",
  resetModels: "\u6062\u590D\u9ED8\u8BA4\u6A21\u578B",
  model: "\u6A21\u578B",
  modelId: "\u6A21\u578B ID",
  modelName: "\u663E\u793A\u540D\u79F0",
  modelNamePlaceholder: "\u7559\u7A7A\u65F6\u4F7F\u7528\u6A21\u578B ID",
  contextWindow: "\u4E0A\u4E0B\u6587\u7A97\u53E3",
  contextWindowPlaceholder: "\u4F7F\u7528\u63D0\u4F9B\u5546\u9ED8\u8BA4\u503C",
  maxTokens: "\u6700\u5927\u8F93\u51FA token \u6570",
  maxTokensPlaceholder: "\u4F7F\u7528\u63D0\u4F9B\u5546\u9ED8\u8BA4\u503C",
  modelAdvanced: "\u6A21\u578B\u9009\u9879",
  modelInputTypes: "\u8F93\u5165\u7C7B\u578B",
  modelInputText: "\u6587\u672C",
  modelInputImage: "\u56FE\u7247",
  modelReasoning: "\u63A8\u7406\u7B49\u7EA7",
  modelReasoningLevel: "\u6863\u4F4D",
  modelReasoningValue: "API \u53C2\u6570\u503C",
  modelReasoningHelp: "\u63A8\u7406\u7B49\u7EA7\u8BF4\u660E",
  modelReasoningHelpText: "API \u53C2\u6570\u503C\u4F1A\u5199\u5165\u8BF7\u6C42\u7684\u63A8\u7406\u5F3A\u5EA6\u5B57\u6BB5\uFF08\u5982 OpenAI \u7684 reasoning_effort\uFF09\uFF0C\u9ED8\u8BA4\u4E0E\u6863\u4F4D\u540D\u76F8\u540C\uFF1B\u5982\u6709\u4E0D\u540C\uFF0C\u4EE5\u6A21\u578B\u63D0\u4F9B\u5546\u7684 API \u6587\u6863\u4E3A\u51C6\u3002Off \u8868\u793A\u5173\u95ED\u601D\u8003\uFF0C\u4E0D\u9700\u8981\u586B\u5199\u53C2\u6570\u503C\uFF1B\u914D\u7F6E\u4E2D\u5DF2\u5199\u5165\u7684\u503C\u4F1A\u4FDD\u7559\u5E76\u53D1\u9001\u3002",
  modelReasoningNeedsLevel: "\u81F3\u5C11\u6DFB\u52A0\u4E00\u4E2A Off \u4EE5\u5916\u7684\u6863\u4F4D\uFF1B\u4E0D\u9700\u8981\u601D\u8003\u8BF7\u5173\u95ED\u63A8\u7406\u7B49\u7EA7\u3002",
  modelReasoningValueRequired: "Off \u4EE5\u5916\u7684\u6863\u4F4D\u90FD\u9700\u8981\u586B\u5199 API \u53C2\u6570\u503C\uFF0C\u4E14\u53C2\u6570\u503C\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002",
  modelReasoningLevelsOnly: "\u6B64 API \u534F\u8BAE\u4EC5\u63A5\u53D7 minimal\u3001low\u3001medium \u548C high \u6863\u4F4D\uFF0C\u4E14\u6BCF\u4E2A\u6863\u4F4D\u7684 API \u53C2\u6570\u503C\u987B\u4E0E\u6863\u4F4D\u540D\u79F0\u76F8\u540C\u3002\u8BF7\u4FEE\u6539\u6216\u5220\u9664\u5176\u4ED6\u6863\u4F4D\u3002",
  modelReasoningAdd: "\u6DFB\u52A0\u6863\u4F4D",
  modelReasoningRemove: "\u5220\u9664\u6863\u4F4D",
  modelReasoningOffValuePlaceholder: "\u5173\u95ED\u601D\u8003",
  addModel: "\u6DFB\u52A0\u6A21\u578B",
  removeModel: "\u5220\u9664\u6A21\u578B",
  reorderModel: "\u8C03\u6574\u6A21\u578B\u987A\u5E8F",
  reorderModelHelp: "\u62D6\u52A8\u6392\u5E8F\uFF0C\u6216\u4F7F\u7528\u4E0A\u4E0B\u65B9\u5411\u952E\u8C03\u6574\u987A\u5E8F\u3002",
  modelsEmpty: "\u6A21\u578B\u9009\u62E9\u5668\u4E2D\u5C06\u4E0D\u663E\u793A\u4EFB\u4F55\u6A21\u578B\uFF1B\u76EE\u5F55\u5916 ID \u4ECD\u53EF\u76F4\u63A5\u53D1\u9001\u3002",
  keyBlank: "\u8BF7\u8F93\u5165 API \u5BC6\u94A5\uFF1B\u7559\u7A7A\u5219\u4FDD\u6301\u5DF2\u5B58\u50A8\u7684\u5BC6\u94A5\u3002",
  keyBlankNew: "\u8BF7\u8F93\u5165 API \u5BC6\u94A5\uFF1B\u82E5\u8BE5\u63D0\u4F9B\u5546\u4EE5\u5176\u4ED6\u65B9\u5F0F\u9274\u6743\uFF0C\u53EF\u4EE5\u7559\u7A7A\u3002",
  keyIllegalCharacters: "\u8BE5 API \u5BC6\u94A5\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u3002",
  modelIdRequired: "\u6A21\u578B ID \u4E0D\u80FD\u4E3A\u7A7A\u3002",
  modelIdDuplicate: "\u6A21\u578B ID \u4E0D\u80FD\u91CD\u590D\u3002",
  modelNameInvalid: "\u663E\u793A\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u3002",
  modelContextInvalid: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u5FC5\u987B\u662F\u6B63\u6570\uFF0C\u4F8B\u5982 131072\u3001256K \u6216 1M\u3002",
  modelMaxTokensInvalid: "\u6700\u5927\u8F93\u51FA token \u6570\u5FC5\u987B\u662F\u6B63\u6570\uFF0C\u4F8B\u5982 8192\u300164K \u6216 1M\u3002",
  advancedHint: "\u5176\u4F59\u5B57\u6BB5\u5728 cordis.patch.yml \u4E2D\uFF0C\u8BF7\u76F4\u63A5\u7F16\u8F91\u5BF9\u5E94\u6BB5\u3002",
  modelCapacityInvalid: "\u5BB9\u91CF\u9700\u4E3A\u6570\u5B57\uFF0C\u53EF\u52A0 K \u6216 M \u540E\u7F00\u3002",
  modelDuplicate: "\u6BCF\u4E2A\u6A21\u578B ID \u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\u3002",
  fetchModels: "\u83B7\u53D6\u53EF\u7528\u6A21\u578B",
  fetching: "\u6B63\u5728\u8BE2\u95EE\u63D0\u4F9B\u5546\u2026",
  fetchNeedsBaseUrl: "\u8BF7\u5148\u586B\u5199 API \u5730\u5740\uFF0C\u518D\u83B7\u53D6\u3002",
  fetchEmpty: "\u8BE5\u63D0\u4F9B\u5546\u6CA1\u6709\u5217\u51FA\u4EFB\u4F55\u6A21\u578B\uFF0C\u8BF7\u624B\u52A8\u6DFB\u52A0\u3002",
  fetchTitle: "\u9009\u62E9\u6A21\u578B",
  fetchDescription: "\u4EE5\u4E0B\u662F\u6A21\u578B\u63D0\u4F9B\u5546\u7684\u53EF\u7528\u6A21\u578B\uFF0C\u52FE\u9009\u7684\u6A21\u578B\u5373\u4E3A\u6A21\u578B\u5217\u8868\u3002",
  fetchSearch: "\u641C\u7D22\u6A21\u578B",
  fetchNoMatches: "\u6CA1\u6709\u5339\u914D\u7684\u6A21\u578B\u3002",
  fetchSelectAll: "\u5168\u9009",
  fetchDeselectAll: "\u53D6\u6D88\u5168\u9009",
  fetchAdopt: "\u66F4\u65B0\u5217\u8868",
  fetchKeepOne: "\u8BF7\u81F3\u5C11\u4FDD\u7559\u4E00\u4E2A\u52FE\u9009\u7684\u6A21\u578B\u3002",
  customTag: "\u81EA\u5B9A\u4E49",
  customRoute: "Provider ID",
  customRouteHint: "\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684\u6807\u8BC6\uFF0C\u5728\u8BF7\u6C42\u4E2D\u552F\u4E00\u6807\u8BC6\u8BE5\u63D0\u4F9B\u5546\uFF0C\u5E76\u7528\u4E8E\u6D3E\u751F\u51ED\u636E\u540D\u3002",
  customRouteInvalid: "\u9700\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u4E4B\u540E\u53EF\u7528\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u77ED\u6A2A\u7EBF\u3002",
  customRouteTaken: "\u5DF2\u6709\u63D0\u4F9B\u5546\u4F7F\u7528\u4E86\u8FD9\u4E2A ID\u3002",
  customDisplayName: "\u663E\u793A\u540D\u79F0",
  customApi: "API \u534F\u8BAE",
  customApiUnset: "\u672A\u9009\u62E9",
  protocolOpenAiCompletions: "OpenAI Chat Completions",
  protocolOpenAiResponses: "OpenAI Responses",
  protocolAnthropicMessages: "Anthropic Messages",
  protocolGemini: "Gemini API",
  customNeedsBaseUrl: "\u81EA\u5B9A\u4E49\u6A21\u578B API \u9700\u8981\u586B\u5199 API \u5730\u5740\u3002",
  customBaseUrlInvalid: "\u8BF7\u8F93\u5165\u6709\u6548\u7684 HTTP \u6216 HTTPS \u5730\u5740\u3002",
  customNeedsModels: "\u81EA\u5B9A\u4E49\u6A21\u578B API \u81F3\u5C11\u9700\u8981\u4E00\u4E2A\u6A21\u578B\u3002",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
  customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
  settingsPathUnresolvable: "\u65E0\u6CD5\u89E3\u6790\u8BBE\u7F6E\u8DEF\u5F84",
  create: "\u521B\u5EFA\u63D0\u4F9B\u5546",
  creating: "\u521B\u5EFA\u4E2D\u2026",
  welcomeTitle: "\u9884\u89C8\u7248\u8BF4\u660E",
  welcomeBody: "DeepSeek Harness \u76EE\u524D\u7684 0.2 \u7248\u672C\u4ECD\u5904\u4E8E\u9884\u89C8\u9636\u6BB5\uFF0C\u8FD8\u6709\u8BB8\u591A\u5730\u65B9\u9700\u8981\u6301\u7EED\u6539\u8FDB\u548C\u6253\u78E8\uFF0C\u5E0C\u671B\u542C\u53D6\u5E7F\u5927\u5F00\u53D1\u8005\u548C\u7528\u6237\u7684\u53CD\u9988\u5EFA\u8BAE\u3002\u73B0\u5728\uFF0C\u65B0\u7684\u684C\u9762\u7AEF\u9762\u5411\u5E7F\u6CDB\u7528\u6237\uFF0C\u5F00\u53D1\u8005\u76F8\u5173\u7684\u8FDB\u9636\u529F\u80FD\u53EF\u5728\u914D\u7F6E\u4E2D\u5F00\u542F\u4F7F\u7528\u3002\u9884\u8BA1 DeepSeek Harness \u7684\u4EA7\u54C1\u529F\u80FD\u4EE5\u53CA\u63D2\u4EF6 API \u90FD\u4F1A\u7EE7\u7EED\u5FEB\u901F\u8FED\u4EE3\u3001\u6301\u7EED\u6F14\u5316\uFF0C\u5E76\u9010\u6E10\u8D8B\u4E8E\u7A33\u5B9A\u3002\n\n\u6211\u4EEC\u671F\u5F85\u4E0E\u5168\u7403\u7528\u6237\u548C\u5F00\u53D1\u8005\u4E00\u8D77\uFF0C\u5728\u5F00\u6E90\u3001\u53EF\u590D\u7528\u3001\u53EF\u7EC4\u5408\u7684\u57FA\u7840\u8BBE\u65BD\u4E4B\u4E0A\uFF0C\u5171\u540C\u63A2\u7D22\u667A\u80FD\u4E0A\u9650\u3002\u6B22\u8FCE\u5927\u5BB6\u7528 DeepSeek Harness \u5C06\u60F3\u6CD5\u53D8\u6210\u73B0\u5B9E\uFF0C\u4E0E\u793E\u533A\u4E00\u8D77\u4E30\u5BCC\u63D2\u4EF6\u751F\u6001\u3002",
  welcomeContinue: "\u7EE7\u7EED",
  welcomeError: "\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u786E\u8BA4\u72B6\u6001\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  onboardingTitle: "\u6DFB\u52A0\u4E00\u4E2A API Key \u5F00\u59CB\u4F7F\u7528",
  onboardingDescription: "\u914D\u7F6E DeepSeek \u5B98\u65B9\u6A21\u578B\uFF0C\u5373\u53EF\u5F00\u59CB\u4F7F\u7528\u3002",
  onboardingLater: "\u7A0D\u540E\u914D\u7F6E",
  onboardingSave: "\u4FDD\u5B58\u5E76\u7EE7\u7EED",
  onboardingSaving: "\u4FDD\u5B58\u4E2D\u2026",
  keyRequired: "\u8BF7\u8F93\u5165 API \u5BC6\u94A5\u540E\u7EE7\u7EED\u3002"
};
var ja = {
  googleSearch: "Google \u691C\u7D22",
  "nav": "\u30E2\u30C7\u30EB",
  "deepSeekAccount": "DeepSeek\u30A2\u30AB\u30A6\u30F3\u30C8",
  "title": "\u30E2\u30C7\u30EB",
  "intro": "\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306E\u30E2\u30C7\u30EB\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001API\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "edit": "\u7DE8\u96C6",
  "editProvider": "{provider}\u3092\u7DE8\u96C6",
  "remove": "\u524A\u9664",
  "removeProvider": "{provider}\u3092\u524A\u9664",
  "deleteTitle": "{provider}\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F",
  "deleteDescription": "{provider}\u3092\u524A\u9664\u3059\u308B\u3068\u3001\u305D\u306E\u8A2D\u5B9A\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u4F7F\u7528\u3057\u3066\u3044\u308B\u8A8D\u8A3C\u60C5\u5831\u306F\u5225\u306E\u5834\u6240\u3067\u7BA1\u7406\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002",
  "deleteDescriptionWithCredential": "{provider}\u3092\u524A\u9664\u3059\u308B\u3068\u3001\u305D\u306E\u8A2D\u5B9A\u3068\u4FDD\u5B58\u6E08\u307F\u306EAPI\u30AD\u30FC\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002",
  "deleteConfirm": "{provider}\u3092\u524A\u9664",
  "deleting": "{provider}\u3092\u524A\u9664\u4E2D\u2026",
  "add": "\u30E2\u30C7\u30EB\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u3092\u8FFD\u52A0",
  "addMode": "\u8FFD\u52A0\u65B9\u6CD5",
  "addCatalog": "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u306E\u30E2\u30C7\u30EB\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC",
  "addCustom": "\u30AB\u30B9\u30BF\u30E0\u30E2\u30C7\u30EBAPI",
  "addCatalogHint": "\u7D44\u307F\u8FBC\u307F\u30AB\u30BF\u30ED\u30B0\u304B\u3089OpenAI\u3001Anthropic\u3001Kimi\u306A\u3069\u306E\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u3092\u9078\u629E\u3057\u3001API\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "addCustomHint": "\u30D9\u30FC\u30B9URL\u3001\u30D7\u30ED\u30C8\u30B3\u30EB\u3001\u30E2\u30C7\u30EB\u3092\u6307\u5B9A\u3057\u3066\u3001\u30EA\u30EC\u30FC\u3001\u30BB\u30EB\u30D5\u30DB\u30B9\u30C8\u30B5\u30FC\u30D0\u30FC\u3001\u305D\u306E\u4ED6\u306EOpenAI/Anthropic/Gemini\u4E92\u63DB\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u63A5\u7D9A\u3057\u307E\u3059\u3002",
  "addCatalogExhausted": "\u30AB\u30BF\u30ED\u30B0\u5185\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u304C\u8A2D\u5B9A\u6E08\u307F\u3067\u3059\u3002",
  "addCustomUnavailable": "\u5BA3\u8A00\u3067\u304D\u308BAPI\u30D7\u30ED\u30C8\u30B3\u30EB\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "provider": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC",
  "close": "\u9589\u3058\u308B",
  "cancel": "\u30AD\u30E3\u30F3\u30BB\u30EB",
  "apply": "\u9069\u7528",
  "applying": "\u9069\u7528\u4E2D\u2026",
  "savedProvider": "{provider}\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002",
  "credentialConfigured": "API\u30AD\u30FC\u8A2D\u5B9A\u6E08\u307F",
  "credentialMissing": "API\u30AD\u30FC\u672A\u8A2D\u5B9A",
  "accountSignedIn": "\u30ED\u30B0\u30A4\u30F3\u6E08\u307F",
  "readOnly": "\u3053\u306E\u30C7\u30D7\u30ED\u30A4\u3067\u306F\u8A2D\u5B9A\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u3059\u3002",
  "loadFailed": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
  "conflict": "\u3053\u306E\u30AB\u30FC\u30C9\u3092\u958B\u3044\u3066\u3044\u308B\u9593\u306B\u3001\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u304C\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u9589\u3058\u3066\u958B\u304D\u76F4\u3057\u3001\u6700\u65B0\u306E\u5024\u3067\u7DE8\u96C6\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retry": "\u518D\u8A66\u884C",
  "keyInput": "API\u30AD\u30FC",
  "keyReveal": "\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u3092\u8868\u793A",
  "keyHide": "\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u3092\u975E\u8868\u793A",
  "keyPlaceholder": "API\u30AD\u30FC\u3092\u5165\u529B",
  "keyPlaceholderFallback": "\u7A7A\u6B04\u306E\u307E\u307E\u306B\u3059\u308B\u3068\u74B0\u5883\u5909\u6570\u3092\u8A8D\u8A3C\u306B\u4F7F\u7528\u3057\u307E\u3059 ({hint})",
  "keySaved": "\u4FDD\u5B58\u6E08\u307F\u306EAPI\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",
  "keyReplacePending": "\u9069\u7528\u3059\u308B\u3068\u4FDD\u5B58\u6E08\u307F\u306EAPI\u30AD\u30FC\u3092\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002",
  "keyRemovePending": "\u9069\u7528\u3059\u308B\u3068\u4FDD\u5B58\u6E08\u307F\u306EAPI\u30AD\u30FC\u3092\u524A\u9664\u3057\u3001\u74B0\u5883\u5909\u6570\u306E\u8A8D\u8A3C\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",
  "keyRemovePendingEnvironment": "\u9069\u7528\u3059\u308B\u3068\u4FDD\u5B58\u6E08\u307F\u306EAPI\u30AD\u30FC\u3092\u524A\u9664\u3057\u307E\u3059\u3002\u305D\u306E\u5F8C\u3001\u74B0\u5883\u5909\u6570\u306E\u8A8D\u8A3C\uFF08{hint}\uFF09\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",
  "keyRemoveApplied": "\u30AD\u30FC\u306F\u524A\u9664\u6E08\u307F\u3067\u3059\u3002\u518D\u5EA6\u9069\u7528\u3057\u3066\u8A2D\u5B9A\u3092\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u524A\u9664\u306F\u53D6\u308A\u6D88\u305B\u307E\u305B\u3093\u3002",
  "keyFallbackMissing": "\u74B0\u5883\u5909\u6570\u304C\u691C\u51FA\u3055\u308C\u307E\u305B\u3093\u3002API\u30AD\u30FC\u3092\u5165\u529B\u3059\u308B\u304B\u3001\u74B0\u5883\u5909\u6570\u306B{hint}\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "keyFallbackDetected": "\u74B0\u5883\u5909\u6570\u3092\u691C\u51FA\u3057\u307E\u3057\u305F\u3002({hint})",
  "keyFallbackDetectedHidden": "\u74B0\u5883\u5909\u6570\u3092\u691C\u51FA\u3057\u307E\u3057\u305F\u3002",
  "keyFallbackUnchecked": "\u74B0\u5883\u5909\u6570\u306E\u8A8D\u8A3C\u60C5\u5831\u306E\u72B6\u614B\u306F\u78BA\u8A8D\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
  "keyHelp": "\u4FDD\u5B58\u6E08\u307F\u306E\u8A8D\u8A3C\u60C5\u5831\u304C\u512A\u5148\u3055\u308C\u307E\u3059\u3002\u4EE5\u4E0B\u306B\u793A\u3059\u74B0\u5883\u5909\u6570\u306E\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF\uFF08\u3053\u306E\u9806\uFF09: {env}\u3002\u53C2\u7167\u5143\u306F\u8D77\u52D5\u74B0\u5883\u3001$cwd/.env\u3001$DSH_HOME/.env\u306E\u9806\u3067\u3059\u3002",
  "authHelp": "\u8A8D\u8A3C\u306E\u8A73\u7D30",
  "customized": "\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3055\u308C\u305F\u8A2D\u5B9A",
  "baseUrl": "\u30D9\u30FC\u30B9URL",
  "baseUrlDefault": "\u30C7\u30D5\u30A9\u30EB\u30C8\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306A\u3057",
  "baseUrlEnvironment": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u8A2D\u5B9A: {env}",
  "baseUrlConfigured": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u8A2D\u5B9A\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8",
  "baseUrlPlaceholder": "{url}",
  "deepSeekBaseUrl": "https://api.deepseek.com/anthropic (\u30C7\u30D5\u30A9\u30EB\u30C8\u306FDEEPSEEK_BASE_URL\u3092\u4F7F\u7528)",
  "deepSeekEndpointHint": "Anthropic Messages\u3068\u4E92\u63DB\u6027\u306E\u3042\u308BAPI\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retryPolicy": "\u518D\u8A66\u884C\u30DD\u30EA\u30B7\u30FC",
  "retryModeDefault": "\u30C7\u30D5\u30A9\u30EB\u30C8 ({mode})",
  "retryModeNormal": "\u4E00\u6642\u7684\u306A\u30A8\u30E9\u30FC\u306E\u307F",
  "retryModeAlways": "\u3059\u3079\u3066\u306E\u30A8\u30E9\u30FC",
  "retryAlwaysHint": "\u5931\u6557\u3057\u305F\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u3001\u6210\u529F\u3059\u308B\u304B\u30BF\u30FC\u30F3\u304C\u505C\u6B62\u3055\u308C\u308B\u307E\u3067\u518D\u8A66\u884C\u3055\u308C\u307E\u3059\u3002",
  "retryMaxRetries": "\u6700\u5927\u518D\u8A66\u884C\u56DE\u6570",
  "retryCodes": "\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9",
  "retryCodeEmptyResponse": "\u7A7A\u306E\u30EC\u30B9\u30DD\u30F3\u30B9",
  "retryCodeRateLimit": "\u30EC\u30FC\u30C8\u5236\u9650",
  "retryCodeServer": "\u30B5\u30FC\u30D0\u30FC\u30A8\u30E9\u30FC",
  "retryCodeTimeout": "\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8",
  "retryCodeTransport": "\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A8\u30E9\u30FC",
  "retryCodeStreamClosed": "\u30B9\u30C8\u30EA\u30FC\u30E0\u306E\u9014\u4E2D\u7D42\u4E86",
  "retryCodeMalformedResponse": "\u4E0D\u6B63\u306A\u30EC\u30B9\u30DD\u30F3\u30B9",
  "retryCodeQuota": "\u30AF\u30A9\u30FC\u30BF\u8D85\u904E",
  "retryCodeCustom": "\u30AB\u30B9\u30BF\u30E0\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9",
  "retryCodeAdd": "\u8FFD\u52A0",
  "retryInitialDelay": "\u521D\u671F\u9045\u5EF6 (ms)",
  "retryMaxDelay": "\u6700\u5927\u9045\u5EF6 (ms)",
  "retryJitter": "\u30B8\u30C3\u30BF\u30FC\u6BD4\u7387",
  "retryBackoff": "\u30D0\u30C3\u30AF\u30AA\u30D5",
  "retryValueNumber": "\u6570\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retryValueInteger": "\u6574\u6570\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retryValuePositive": "0 \u3088\u308A\u5927\u304D\u3044\u5024\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retryValueMin": "{min} \u4EE5\u4E0A\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retryValueMax": "{max} \u4EE5\u4E0B\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retryCodesInvalid": "\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u306F\u7A7A\u3067\u306A\u3044\u30C6\u30AD\u30B9\u30C8\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "retryCodesDuplicate": "\u5404\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u306F1\u56DE\u306E\u307F\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002",
  "retryDelayOrder": "\u521D\u671F\u9045\u5EF6\u306F\u6700\u5927\u9045\u5EF6\u4EE5\u4E0B\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "models": "\u30E2\u30C7\u30EB",
  "modelsInherited": "\u30A2\u30C0\u30D7\u30BF\u30FC\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u3092\u4F7F\u7528",
  "modelsCustomized": "\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3055\u308C\u305F\u30E2\u30C7\u30EB\u30AB\u30BF\u30ED\u30B0",
  "resetModels": "\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u623B\u3059",
  "model": "\u30E2\u30C7\u30EB",
  "modelId": "\u30E2\u30C7\u30EBID",
  "modelName": "\u8868\u793A\u540D",
  "modelNamePlaceholder": "\u7A7A\u6B04\u306E\u5834\u5408\u306F\u30E2\u30C7\u30EBID\u3092\u4F7F\u7528",
  "contextWindow": "\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6",
  "contextWindowPlaceholder": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u3092\u4F7F\u7528",
  "maxTokens": "\u6700\u5927\u51FA\u529B\u30C8\u30FC\u30AF\u30F3\u6570",
  "maxTokensPlaceholder": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u3092\u4F7F\u7528",
  "modelAdvanced": "\u30E2\u30C7\u30EB\u30AA\u30D7\u30B7\u30E7\u30F3",
  "modelInputTypes": "\u5165\u529B\u30BF\u30A4\u30D7",
  "modelInputText": "\u30C6\u30AD\u30B9\u30C8",
  "modelInputImage": "\u753B\u50CF",
  "modelReasoning": "\u63A8\u8AD6\u30EC\u30D9\u30EB",
  "modelReasoningLevel": "\u30EC\u30D9\u30EB",
  "modelReasoningValue": "API\u5024",
  "modelReasoningHelp": "\u63A8\u8AD6\u30EC\u30D9\u30EB\u306B\u3064\u3044\u3066",
  "modelReasoningHelpText": "API\u5024\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u63A8\u8AD6\u5F37\u5EA6\u30D5\u30A3\u30FC\u30EB\u30C9\uFF08OpenAI\u306Ereasoning_effort\u306A\u3069\uFF09\u3067\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u30EC\u30D9\u30EB\u540D\u3067\u3059\u3002\u30E2\u30C7\u30EB\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306EAPI\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u5225\u306E\u5024\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u305D\u308C\u306B\u5F93\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u30AA\u30D5\u306F\u63A8\u8AD6\u3092\u7121\u52B9\u306B\u3059\u308B\u305F\u3081\u5024\u306F\u4E0D\u8981\u3067\u3059\u3002\u8A2D\u5B9A\u306B\u65E2\u306B\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B\u5024\u306F\u4FDD\u6301\u3055\u308C\u3001\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002",
  "modelReasoningNeedsLevel": "\u30AA\u30D5\u4EE5\u5916\u306E\u30EC\u30D9\u30EB\u3092\u5C11\u306A\u304F\u3068\u30821\u3064\u8FFD\u52A0\u3059\u308B\u304B\u3001\u63A8\u8AD6\u30EC\u30D9\u30EB\u3092\u7121\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "modelReasoningValueRequired": "\u30AA\u30D5\u4EE5\u5916\u306E\u5404\u30EC\u30D9\u30EB\u306B\u306FAPI\u5024\u304C\u5FC5\u8981\u3067\u3001\u7A7A\u306E\u5024\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002",
  "modelReasoningLevelsOnly": "\u3053\u306E API \u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u4F7F\u7528\u3067\u304D\u308B\u30EC\u30D9\u30EB\u306F minimal\u3001low\u3001medium\u3001high \u306E\u307F\u3067\u3001\u5404\u30EC\u30D9\u30EB\u306E API \u5024\u306F\u30EC\u30D9\u30EB\u540D\u3068\u540C\u3058\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u30EC\u30D9\u30EB\u3092\u5909\u66F4\u307E\u305F\u306F\u524A\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "modelReasoningAdd": "\u30EC\u30D9\u30EB\u3092\u8FFD\u52A0",
  "modelReasoningRemove": "\u30EC\u30D9\u30EB\u3092\u524A\u9664",
  "modelReasoningOffValuePlaceholder": "\u63A8\u8AD6\u3092\u7121\u52B9\u306B\u3057\u307E\u3059",
  "addModel": "\u30E2\u30C7\u30EB\u3092\u8FFD\u52A0",
  "removeModel": "\u30E2\u30C7\u30EB\u3092\u524A\u9664",
  "reorderModel": "\u30E2\u30C7\u30EB\u306E\u9806\u5E8F\u3092\u5909\u66F4",
  "reorderModelHelp": "\u30C9\u30E9\u30C3\u30B0\u3001\u307E\u305F\u306F\u4E0A\u4E0B\u306E\u77E2\u5370\u30AD\u30FC\u3067\u9806\u5E8F\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002",
  "modelsEmpty": "\u30BB\u30EC\u30AF\u30BF\u30FC\u306B\u30E2\u30C7\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002\u4E00\u89A7\u306B\u306A\u3044ID\u3082\u76F4\u63A5\u9001\u4FE1\u3067\u304D\u307E\u3059\u3002",
  "keyBlank": "API\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u7A7A\u6B04\u306E\u307E\u307E\u306B\u3059\u308B\u3068\u4FDD\u5B58\u6E08\u307F\u306E\u30AD\u30FC\u304C\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002",
  "keyBlankNew": "API\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u304C\u5225\u306E\u65B9\u6CD5\u3067\u8A8D\u8A3C\u3059\u308B\u5834\u5408\u306F\u7A7A\u6B04\u306E\u307E\u307E\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "keyIllegalCharacters": "\u3053\u306EAPI\u30AD\u30FC\u306F\u6709\u52B9\u306A\u5F62\u5F0F\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "modelIdRequired": "\u30E2\u30C7\u30EBID\u306F\u5FC5\u9808\u3067\u3059\u3002",
  "modelIdDuplicate": "\u30E2\u30C7\u30EBID\u306F\u4E00\u610F\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
  "modelNameInvalid": "\u8868\u793A\u540D\u306F\u7A7A\u306B\u3067\u304D\u307E\u305B\u3093\u3002",
  "modelContextInvalid": "\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6\u306F\u6B63\u306E\u6570\u5024\uFF08131072\u3001256K\u30011M\u306A\u3069\uFF09\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "modelMaxTokensInvalid": "\u6700\u5927\u51FA\u529B\u30C8\u30FC\u30AF\u30F3\u6570\u306F\u6B63\u306E\u6570\u5024\uFF088192\u300164K\u30011M\u306A\u3069\uFF09\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "advancedHint": "\u305D\u306E\u4ED6\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306Fcordis.patch.yml\u306B\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u76F4\u63A5\u7DE8\u96C6\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "modelCapacityInvalid": "\u5BB9\u91CF\u306F\u6570\u5024\u3067\u6307\u5B9A\u3057\u3001\u672B\u5C3E\u306BK\u307E\u305F\u306FM\u3092\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002",
  "modelDuplicate": "\u5404\u30E2\u30C7\u30EBID\u306F1\u56DE\u306E\u307F\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002",
  "fetchModels": "\u5229\u7528\u53EF\u80FD\u306A\u30E2\u30C7\u30EB\u3092\u53D6\u5F97",
  "fetching": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306B\u554F\u3044\u5408\u308F\u305B\u4E2D\u2026",
  "fetchNeedsBaseUrl": "\u5148\u306B\u30D9\u30FC\u30B9URL\u3092\u5165\u529B\u3057\u3066\u304B\u3089\u53D6\u5F97\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "fetchEmpty": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306F\u30E2\u30C7\u30EB\u3092\u4E00\u89A7\u8868\u793A\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u624B\u52D5\u3067\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "fetchTitle": "\u30E2\u30C7\u30EB\u3092\u9078\u629E",
  "fetchDescription": "\u3053\u306E\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u3067\u5229\u7528\u53EF\u80FD\u306A\u30E2\u30C7\u30EB\u3067\u3059\u3002\u30C1\u30A7\u30C3\u30AF\u3057\u305F\u30E2\u30C7\u30EB\u304C\u4E00\u89A7\u306B\u306A\u308A\u307E\u3059\u3002",
  "fetchSearch": "\u30E2\u30C7\u30EB\u3092\u691C\u7D22",
  "fetchNoMatches": "\u4E00\u81F4\u3059\u308B\u30E2\u30C7\u30EB\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "fetchSelectAll": "\u3059\u3079\u3066\u9078\u629E",
  "fetchDeselectAll": "\u3059\u3079\u3066\u89E3\u9664",
  "fetchAdopt": "\u4E00\u89A7\u3092\u66F4\u65B0",
  "fetchKeepOne": "\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u30E2\u30C7\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u305F\u307E\u307E\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "customTag": "\u30AB\u30B9\u30BF\u30E0",
  "customRoute": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FCID",
  "customRouteHint": "\u30EA\u30AF\u30A8\u30B9\u30C8\u6642\u304A\u3088\u3073\u8A8D\u8A3C\u60C5\u5831\u540D\u3068\u3057\u3066\u3053\u306E\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u3092\u4E00\u610F\u306B\u8B58\u5225\u3059\u308B\u3001\u5C0F\u6587\u5B57\u3067\u59CB\u307E\u308B\u5C0F\u6587\u5B57\u306E\u8B58\u5225\u5B50\u3067\u3059\u3002",
  "customRouteInvalid": "\u5C0F\u6587\u5B57\u3067\u59CB\u3081\u3001\u305D\u306E\u5F8C\u306F\u5C0F\u6587\u5B57\u30FB\u6570\u5B57\u30FB\u30CF\u30A4\u30D5\u30F3\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "customRouteTaken": "\u3053\u306EID\u306F\u65E2\u306B\u5225\u306E\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
  "customDisplayName": "\u8868\u793A\u540D",
  "customApi": "API\u30D7\u30ED\u30C8\u30B3\u30EB",
  "customApiUnset": "\u672A\u9078\u629E",
  "protocolOpenAiCompletions": "OpenAI Chat Completions",
  "protocolOpenAiResponses": "OpenAI Responses",
  "protocolAnthropicMessages": "Anthropic Messages",
  "protocolGemini": "Gemini API",
  "customNeedsBaseUrl": "\u30AB\u30B9\u30BF\u30E0\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306B\u306F\u30D9\u30FC\u30B9URL\u304C\u5FC5\u8981\u3067\u3059\u3002",
  "customBaseUrlInvalid": "\u6709\u52B9\u306AHTTP\u307E\u305F\u306FHTTPS\u306EURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "customNeedsModels": "\u30AB\u30B9\u30BF\u30E0\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306B\u306F\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u30E2\u30C7\u30EB\u304C\u5FC5\u8981\u3067\u3059\u3002",
  "customBaseUrlPlaceholder": "https://gateway.example/v1",
  "customAnthropicBaseUrlPlaceholder": "https://gateway.example",
  "customGeminiBaseUrlPlaceholder": "https://gateway.example/v1beta",
  "settingsPathUnresolvable": "\u89E3\u6C7A\u3067\u304D\u306A\u3044\u8A2D\u5B9A\u30D1\u30B9",
  "create": "\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u3092\u4F5C\u6210",
  "creating": "\u4F5C\u6210\u4E2D\u2026",
  "welcomeTitle": "\u30D7\u30EC\u30D3\u30E5\u30FC\u306B\u95A2\u3059\u308B\u304A\u77E5\u3089\u305B",
  "welcomeBody": "DeepSeek Harness 0.2\u306F\u307E\u3060\u30D7\u30EC\u30D3\u30E5\u30FC\u7248\u3067\u3042\u308A\u3001\u591A\u304F\u306E\u9818\u57DF\u3067\u7D99\u7D9A\u7684\u306A\u6539\u5584\u3068\u6D17\u7DF4\u304C\u5FC5\u8981\u3067\u3059\u3002\u958B\u767A\u8005\u3068\u30E6\u30FC\u30B6\u30FC\u306E\u7686\u3055\u307E\u304B\u3089\u306E\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3068\u3054\u63D0\u6848\u3092\u6B53\u8FCE\u3057\u307E\u3059\u3002\u65B0\u3057\u3044\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u306F\u5E45\u5E83\u3044\u30E6\u30FC\u30B6\u30FC\u3092\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u958B\u767A\u8005\u5411\u3051\u306E\u9AD8\u5EA6\u306A\u6A5F\u80FD\u306F\u8A2D\u5B9A\u3067\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002DeepSeek Harness\u306E\u88FD\u54C1\u6A5F\u80FD\u3068\u30D7\u30E9\u30B0\u30A4\u30F3API\u306F\u4ECA\u5F8C\u3082\u6025\u901F\u306A\u53CD\u5FA9\u3068\u9032\u5316\u3092\u7D9A\u3051\u3001\u5F90\u3005\u306B\u5B89\u5B9A\u3057\u3066\u3044\u304F\u898B\u8FBC\u307F\u3067\u3059\u3002\n\n\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u3067\u518D\u5229\u7528\u53EF\u80FD\u304B\u3064\u7D44\u307F\u5408\u308F\u305B\u53EF\u80FD\u306A\u30A4\u30F3\u30D5\u30E9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3092\u57FA\u76E4\u306B\u3001\u4E16\u754C\u4E2D\u306E\u30E6\u30FC\u30B6\u30FC\u3068\u958B\u767A\u8005\u3068\u5171\u306B\u77E5\u80FD\u306E\u9650\u754C\u3092\u63A2\u6C42\u3057\u3066\u3044\u304F\u3053\u3068\u3092\u697D\u3057\u307F\u306B\u3057\u3066\u3044\u307E\u3059\u3002\u7686\u3055\u307E\u304CDeepSeek Harness\u3067\u30A2\u30A4\u30C7\u30A2\u3092\u5F62\u306B\u3057\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u3066\u30D7\u30E9\u30B0\u30A4\u30F3\u30A8\u30B3\u30B7\u30B9\u30C6\u30E0\u3092\u8C4A\u304B\u306B\u3057\u3066\u304F\u3060\u3055\u308B\u3053\u3068\u3092\u6B53\u8FCE\u3057\u307E\u3059\u3002",
  "welcomeContinue": "\u7D9A\u3051\u308B",
  "welcomeError": "\u78BA\u8A8D\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
  "onboardingTitle": "API\u30AD\u30FC\u3092\u8FFD\u52A0\u3057\u3066\u59CB\u3081\u308B",
  "onboardingDescription": "\u516C\u5F0F\u306EDeepSeek\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u3092\u8A2D\u5B9A\u3057\u3066\u958B\u767A\u3092\u59CB\u3081\u307E\u3057\u3087\u3046\u3002",
  "onboardingLater": "\u5F8C\u3067\u8A2D\u5B9A",
  "onboardingSave": "\u4FDD\u5B58\u3057\u3066\u7D9A\u3051\u308B",
  "onboardingSaving": "\u4FDD\u5B58\u4E2D\u2026",
  "keyRequired": "\u7D9A\u3051\u308B\u306B\u306FAPI\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
};
var es = {
  googleSearch: "B\xFAsqueda de Google",
  nav: "Modelos",
  deepSeekAccount: "Cuenta DeepSeek",
  title: "Modelos",
  intro: "Ingrese sus claves API para usar modelos de los siguientes proveedores.",
  edit: "Editar",
  editProvider: "Editar {provider}",
  remove: "Eliminar",
  removeProvider: "Eliminar {provider}",
  deleteTitle: "\xBFEliminar {provider}?",
  deleteDescription: "Al eliminar {provider} se elimina su configuraci\xF3n. Cualquier credencial que utilice se administra en otro lugar y se conservar\xE1.",
  deleteDescriptionWithCredential: "Al eliminar {provider} se elimina su configuraci\xF3n y la clave API almacenada.",
  deleteConfirm: "Eliminar {provider}",
  deleting: "Eliminando {provider}\u2026",
  add: "Agregar proveedor de modelo",
  addMode: "como agregar",
  addCatalog: "Proveedor de modelos externo",
  addCustom: "Modelo personalizado API",
  addCatalogHint: "Elija OpenAI, Anthropic, Kimi u otro proveedor del cat\xE1logo integrado e ingrese su clave API.",
  addCustomHint: "Conecte un repetidor, un servidor autohospedado o cualquier otro punto final compatible con OpenAI, Anthropic o Gemini mediante su URL base, protocolo y modelos.",
  addCatalogExhausted: "Cada proveedor de cat\xE1logo ya est\xE1 configurado.",
  addCustomUnavailable: "No hay ning\xFAn protocolo API disponible para declarar.",
  provider: "Proveedor",
  close: "Cerrar",
  cancel: "Cancelar",
  apply: "Aplicar",
  applying: "Aplicando\u2026",
  savedProvider: "Guardado {provider}.",
  credentialConfigured: "Clave API configurada",
  credentialMissing: "Falta la clave API",
  accountSignedIn: "Iniciado sesi\xF3n",
  readOnly: "El documento de configuraci\xF3n es de solo lectura en esta implementaci\xF3n.",
  loadFailed: "Error al cargar el directorio de proveedores",
  conflict: "Alguien m\xE1s cambi\xF3 esta configuraci\xF3n mientras esta tarjeta estaba abierta. Ci\xE9rrelo y vuelva a abrirlo para editar los valores actuales.",
  retry: "Reintentar",
  keyInput: "Clave de API",
  keyReveal: "Mostrar secreto",
  keyHide: "Ocultar secreto",
  keyPlaceholder: "Ingrese su clave API",
  keyPlaceholderFallback: "D\xE9jelo en blanco para usar env como autenticaci\xF3n ({hint})",
  keySaved: "Se usar\xE1 la clave API guardada.",
  keyReplacePending: "Aplique para reemplazar la clave API guardada.",
  keyRemovePending: "Aplique para borrar la clave API guardada y usar la autenticaci\xF3n del entorno.",
  keyRemovePendingEnvironment: "Aplique para borrar la clave API guardada. Se usar\xE1 la autenticaci\xF3n del entorno ({hint}).",
  keyRemoveApplied: "Clave borrada. Aplique de nuevo para completar la configuraci\xF3n; no se puede deshacer.",
  keyFallbackMissing: "No se detect\xF3 la variable de entorno. Ingrese una clave API o configure {hint} en su entorno.",
  keyFallbackDetected: "Se detect\xF3 var env. ({hint})",
  keyFallbackDetectedHidden: "Se detect\xF3 var env.",
  keyFallbackUnchecked: "El estado de la credencial ambiental no ha sido confirmado.",
  keyHelp: "Las credenciales guardadas se utilizan primero. Las alternativas de entorno se muestran aqu\xED, en orden: {env}. Las fuentes son el entorno de inicio, $cwd/.env, luego $DSH_HOME/.env.",
  authHelp: "Detalles de autenticaci\xF3n",
  customized: "Configuraciones personalizadas",
  baseUrl: "URL base",
  baseUrlDefault: "Sin punto final predeterminado",
  baseUrlEnvironment: "Configuraci\xF3n del punto final del proveedor: {env}",
  baseUrlConfigured: "Punto final configurado por el proveedor",
  baseUrlPlaceholder: "{url}",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic (Uso predeterminado DEEPSEEK_BASE_URL)",
  deepSeekEndpointHint: "Utilice un punto final API compatible con Anthropic Messages.",
  retryPolicy: "Pol\xEDtica de reintentos",
  retryModeDefault: "Predeterminado ({mode})",
  retryModeNormal: "Errores transitorios",
  retryModeAlways: "Todos los errores",
  retryAlwaysHint: "Las solicitudes fallidas se reintentan hasta que tienen \xE9xito o se detiene el turno.",
  retryMaxRetries: "Reintentos m\xE1ximos",
  retryCodes: "C\xF3digos de error",
  retryCodeEmptyResponse: "Respuesta vac\xEDa",
  retryCodeRateLimit: "L\xEDmite de frecuencia",
  retryCodeServer: "Error del servidor",
  retryCodeTimeout: "Tiempo agotado",
  retryCodeTransport: "Error de red",
  retryCodeStreamClosed: "Flujo cerrado antes de tiempo",
  retryCodeMalformedResponse: "Respuesta mal formada",
  retryCodeQuota: "Cuota agotada",
  retryCodeCustom: "C\xF3digo de error personalizado",
  retryCodeAdd: "A\xF1adir",
  retryInitialDelay: "Retraso inicial (ms)",
  retryMaxDelay: "Retraso m\xE1ximo (ms)",
  retryJitter: "Proporci\xF3n de jitter",
  retryBackoff: "Retroceso",
  retryValueNumber: "Ingrese un n\xFAmero.",
  retryValueInteger: "Ingrese un n\xFAmero entero.",
  retryValuePositive: "Debe ser mayor que 0.",
  retryValueMin: "Debe ser al menos {min}.",
  retryValueMax: "Debe ser como m\xE1ximo {max}.",
  retryCodesInvalid: "Los c\xF3digos de error deben ser texto no vac\xEDo.",
  retryCodesDuplicate: "Cada c\xF3digo de error solo puede aparecer una vez.",
  retryDelayOrder: "El retraso inicial no puede superar el retraso m\xE1ximo.",
  models: "Modelos",
  modelsInherited: "Usando los valores predeterminados del adaptador",
  modelsCustomized: "Cat\xE1logo de modelos personalizado",
  resetModels: "Restaurar valores predeterminados",
  model: "modelo",
  modelId: "ID del modelo",
  modelName: "Nombre para mostrar",
  modelNamePlaceholder: "Utiliza el ID del modelo cuando est\xE1 vac\xEDo",
  contextWindow: "ventana contextual",
  contextWindowPlaceholder: "Utiliza el proveedor predeterminado",
  maxTokens: "Fichas de salida m\xE1xima",
  maxTokensPlaceholder: "Utiliza el proveedor predeterminado",
  modelAdvanced: "Opciones de modelo",
  modelInputTypes: "Tipos de entrada",
  modelInputText: "Texto",
  modelInputImage: "Imagen",
  modelReasoning: "Niveles de razonamiento",
  modelReasoningLevel: "Nivel",
  modelReasoningValue: "Valor API",
  modelReasoningHelp: "Acerca de los niveles de razonamiento",
  modelReasoningHelpText: "El valor de la API se env\xEDa en el campo de esfuerzo de razonamiento de la solicitud, como reasoning_effort de OpenAI. De forma predeterminada se usa el nombre del nivel; si la documentaci\xF3n de la API del proveedor del modelo especifica otro valor, \xFAselo. Desactivado deshabilita el razonamiento y no necesita un valor; cualquier valor ya guardado en la configuraci\xF3n se conserva y se env\xEDa.",
  modelReasoningNeedsLevel: "Agregue al menos un nivel adem\xE1s de Desactivado o desactive los niveles de razonamiento.",
  modelReasoningValueRequired: "Cada nivel adem\xE1s de Off necesita un valor API y ning\xFAn valor puede estar vac\xEDo.",
  modelReasoningLevelsOnly: "Este protocolo de API solo acepta los niveles minimal, low, medium y high, cada uno con su nombre de nivel como valor de API. Cambie o elimine los dem\xE1s niveles.",
  modelReasoningAdd: "Agregar nivel",
  modelReasoningRemove: "Eliminar nivel",
  modelReasoningOffValuePlaceholder: "Desactiva el razonamiento",
  addModel: "Agregar modelo",
  removeModel: "Eliminar modelo",
  reorderModel: "Reordenar modelo",
  reorderModelHelp: "Arrastre para reordenar o use las teclas de flecha hacia arriba y hacia abajo.",
  modelsEmpty: "No se mostrar\xE1 ning\xFAn modelo en el selector. Las identificaciones que no figuran en la lista a\xFAn se pueden enviar directamente.",
  keyBlank: "Ingrese la clave API, o deje el campo vac\xEDo para conservar la almacenada.",
  keyBlankNew: "Ingrese la clave API o deje el campo vac\xEDo si este proveedor se autentica de otra manera.",
  keyIllegalCharacters: "Esta clave API no tiene un formato v\xE1lido. Por favor compru\xE9balo.",
  modelIdRequired: "Se requiere identificaci\xF3n del modelo.",
  modelIdDuplicate: "El ID del modelo debe ser \xFAnico.",
  modelNameInvalid: "El nombre para mostrar no puede estar vac\xEDo.",
  modelContextInvalid: "La ventana de contexto debe tener un recuento positivo, como 131072, 256K o 1M.",
  modelMaxTokensInvalid: "Los tokens de salida m\xE1xima deben tener un recuento positivo, como 8192, 64K o 1M.",
  advancedHint: "Otros campos se encuentran en cordis.patch.yml; edite esa secci\xF3n directamente.",
  modelCapacityInvalid: "Una capacidad debe ser un n\xFAmero, opcionalmente con el sufijo K o M.",
  modelDuplicate: "Cada ID de modelo puede aparecer una vez.",
  fetchModels: "Buscar modelos disponibles",
  fetching: "Preguntando al proveedor...",
  fetchNeedsBaseUrl: "Ingrese primero la URL base y luego busque.",
  fetchEmpty: "El proveedor no enumer\xF3 ning\xFAn modelo. Agr\xE9guelos a mano.",
  fetchTitle: "Elige modelos",
  fetchDescription: "Estos son los modelos que tiene disponibles este proveedor. Los modelos comprobados componen la lista.",
  fetchSearch: "Buscar modelos",
  fetchNoMatches: "No hay modelos coincidentes.",
  fetchSelectAll: "Seleccionar todo",
  fetchDeselectAll: "Deseleccionar todo",
  fetchAdopt: "Lista de actualizaci\xF3n",
  fetchKeepOne: "Mantenga al menos un modelo controlado.",
  customTag: "personalizado",
  customRoute: "ID del proveedor",
  customRouteHint: "Identificador en min\xFAscula, que comienza con una letra, que nombra de forma exclusiva a este proveedor en las solicitudes y como su nombre de credencial.",
  customRouteInvalid: "Comience con una letra min\xFAscula; luego letras min\xFAsculas, d\xEDgitos y guiones.",
  customRouteTaken: "Un proveedor ya utiliza esta identificaci\xF3n.",
  customDisplayName: "Nombre para mostrar",
  customApi: "Protocolo API",
  customApiUnset: "No seleccionado",
  protocolOpenAiCompletions: "Finalizaciones del chat OpenAI",
  protocolOpenAiResponses: "Respuestas de OpenAI",
  protocolAnthropicMessages: "Mensajes antr\xF3picos",
  protocolGemini: "Gemini API",
  customNeedsBaseUrl: "Un proveedor personalizado necesita una URL base.",
  customBaseUrlInvalid: "Ingrese una URL HTTP o HTTPS v\xE1lida.",
  customNeedsModels: "Un proveedor personalizado necesita al menos un modelo.",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
  customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
  settingsPathUnresolvable: "ruta de configuraci\xF3n irresoluble",
  create: "Crear proveedor",
  creating: "Creando\u2026",
  welcomeTitle: "Aviso previo",
  welcomeBody: "DeepSeek Harness 0.2 a\xFAn est\xE1 en versi\xF3n preliminar y muchas \xE1reas necesitan mejoras y refinamientos continuos. Agradecemos los comentarios y sugerencias de todos los desarrolladores y usuarios. La nueva aplicaci\xF3n de escritorio ahora est\xE1 dirigida a una amplia gama de usuarios, mientras que las funciones avanzadas relacionadas con los desarrolladores se pueden habilitar en la configuraci\xF3n. Se espera que las caracter\xEDsticas del producto y las API de complementos de DeepSeek Harness contin\xFAen con una r\xE1pida iteraci\xF3n y evoluci\xF3n, y se estabilicen gradualmente con el tiempo.\n\nEsperamos explorar los l\xEDmites de la inteligencia junto con usuarios y desarrolladores de todo el mundo, bas\xE1ndose en una infraestructura de c\xF3digo abierto, reutilizable y componible. Invitamos a todos a dar vida a sus ideas con DeepSeek Harness y participar en la comunidad para enriquecer el ecosistema de complementos.",
  welcomeContinue: "Continuar",
  welcomeError: "El reconocimiento no se pudo guardar. Por favor int\xE9ntalo de nuevo.",
  onboardingTitle: "Agregue una clave API para comenzar",
  onboardingDescription: "Configure el proveedor oficial DeepSeek para comenzar a construir.",
  onboardingLater: "Configurar m\xE1s tarde",
  onboardingSave: "Guardar y continuar",
  onboardingSaving: "Guardando\u2026",
  keyRequired: "Ingrese una clave API para continuar."
};
var fr = {
  googleSearch: "Recherche Google",
  nav: "Mod\xE8les",
  deepSeekAccount: "Compte DeepSeek",
  title: "Mod\xE8les",
  intro: "Entrez vos cl\xE9s API pour utiliser les mod\xE8les des fournisseurs suivants.",
  edit: "Modifier",
  editProvider: "Modifier {provider}",
  remove: "Supprimer",
  removeProvider: "Supprimer {provider}",
  deleteTitle: "Supprimer {provider}\xA0?",
  deleteDescription: "La suppression de {provider} supprime sa configuration. Tout identifiant qu'il utilise est g\xE9r\xE9 ailleurs et sera conserv\xE9.",
  deleteDescriptionWithCredential: "La suppression de {provider} supprime sa configuration et la cl\xE9 API stock\xE9e.",
  deleteConfirm: "Supprimer {provider}",
  deleting: "Suppression de {provider}\u2026",
  add: "Ajouter un fournisseur de mod\xE8les",
  addMode: "Comment ajouter",
  addCatalog: "Fournisseur de mod\xE8les tiers",
  addCustom: "Mod\xE8le personnalis\xE9 API",
  addCatalogHint: "Choisissez OpenAI, Anthropic, Kimi ou un autre fournisseur dans le catalogue int\xE9gr\xE9 et entrez sa cl\xE9 API.",
  addCustomHint: "Connectez un relais, un serveur auto-h\xE9berg\xE9 ou tout autre point de terminaison compatible OpenAI, Anthropic ou Gemini par son URL de base, son protocole et ses mod\xE8les.",
  addCatalogExhausted: "Chaque fournisseur de catalogue est d\xE9j\xE0 configur\xE9.",
  addCustomUnavailable: "Aucun protocole API n'est disponible \xE0 d\xE9clarer.",
  provider: "Fournisseur",
  close: "Fermer",
  cancel: "Annuler",
  apply: "Appliquer",
  applying: "Application\u2026",
  savedProvider: "{provider} enregistr\xE9.",
  credentialConfigured: "Cl\xE9 API configur\xE9e",
  credentialMissing: "Cl\xE9 API manquante",
  accountSignedIn: "Connect\xE9",
  readOnly: "Le document de param\xE8tres est en lecture seule dans ce d\xE9ploiement.",
  loadFailed: "Le chargement du r\xE9pertoire du fournisseur a \xE9chou\xE9",
  conflict: "Quelqu'un d'autre a modifi\xE9 ces param\xE8tres alors que cette carte \xE9tait ouverte. Fermez-le et rouvrez-le pour modifier les valeurs actuelles.",
  retry: "R\xE9essayer",
  keyInput: "Cl\xE9 API",
  keyReveal: "Afficher le secret",
  keyHide: "Cacher le secret",
  keyPlaceholder: "Entrez votre cl\xE9 API",
  keyPlaceholderFallback: "Laissez vide pour utiliser env comme authentification ({hint})",
  keySaved: "La cl\xE9 API enregistr\xE9e sera utilis\xE9e.",
  keyReplacePending: "Appliquez pour remplacer la cl\xE9 API enregistr\xE9e.",
  keyRemovePending: "Appliquez pour effacer la cl\xE9 API enregistr\xE9e et utiliser l\u2019authentification de l\u2019environnement.",
  keyRemovePendingEnvironment: "Appliquez pour effacer la cl\xE9 API enregistr\xE9e. L\u2019authentification de l\u2019environnement sera utilis\xE9e ({hint}).",
  keyRemoveApplied: "Cl\xE9 supprim\xE9e. Appliquez \xE0 nouveau pour terminer les param\xE8tres ; la suppression est irr\xE9versible.",
  keyFallbackMissing: "Var d'environnement non d\xE9tect\xE9e. Entrez une cl\xE9 API ou configurez {hint} dans votre environnement.",
  keyFallbackDetected: "Var d'environnement d\xE9tect\xE9e. ({hint})",
  keyFallbackDetectedHidden: "Var d'environnement d\xE9tect\xE9e.",
  keyFallbackUnchecked: "Le statut des qualifications en environnement n\u2019a pas \xE9t\xE9 confirm\xE9.",
  keyHelp: "Les informations d'identification enregistr\xE9es sont utilis\xE9es en premier. Solutions de secours d\u2019environnement affich\xE9es ici, dans l\u2019ordre\xA0: {env}. Les sources sont l'environnement de lancement, $cwd/.env, puis $DSH_HOME/.env.",
  authHelp: "D\xE9tails d'authentification",
  customized: "Param\xE8tres personnalis\xE9s",
  baseUrl: "URL de base",
  baseUrlDefault: "Aucun point de terminaison par d\xE9faut",
  baseUrlEnvironment: "Configuration du point de terminaison du fournisseur\xA0: {env}",
  baseUrlConfigured: "Point de terminaison configur\xE9 par le fournisseur",
  baseUrlPlaceholder: "{url}",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic (par d\xE9faut, DEEPSEEK_BASE_URL est utilis\xE9)",
  deepSeekEndpointHint: "Utilisez un point de terminaison API compatible avec Anthropic Messages.",
  retryPolicy: "Politique de nouvelle tentative",
  retryModeDefault: "Par d\xE9faut ({mode})",
  retryModeNormal: "Erreurs temporaires",
  retryModeAlways: "Toutes les erreurs",
  retryAlwaysHint: "Les requ\xEAtes en \xE9chec sont r\xE9essay\xE9es jusqu'\xE0 ce qu'elles r\xE9ussissent ou que le tour soit arr\xEAt\xE9.",
  retryMaxRetries: "Tentatives max.",
  retryCodes: "Codes d'erreur",
  retryCodeEmptyResponse: "R\xE9ponse vide",
  retryCodeRateLimit: "Limite de d\xE9bit",
  retryCodeServer: "Erreur serveur",
  retryCodeTimeout: "D\xE9lai d\xE9pass\xE9",
  retryCodeTransport: "Erreur r\xE9seau",
  retryCodeStreamClosed: "Flux interrompu",
  retryCodeMalformedResponse: "R\xE9ponse mal form\xE9e",
  retryCodeQuota: "Quota d\xE9pass\xE9",
  retryCodeCustom: "Code d'erreur personnalis\xE9",
  retryCodeAdd: "Ajouter",
  retryInitialDelay: "D\xE9lai initial (ms)",
  retryMaxDelay: "D\xE9lai maximum (ms)",
  retryJitter: "Ratio de gigue",
  retryBackoff: "Temporisation",
  retryValueNumber: "Saisissez un nombre.",
  retryValueInteger: "Saisissez un nombre entier.",
  retryValuePositive: "Doit \xEAtre sup\xE9rieur \xE0 0.",
  retryValueMin: "Doit \xEAtre sup\xE9rieur ou \xE9gal \xE0 {min}.",
  retryValueMax: "Doit \xEAtre inf\xE9rieur ou \xE9gal \xE0 {max}.",
  retryCodesInvalid: "Les codes d'erreur doivent \xEAtre du texte non vide.",
  retryCodesDuplicate: "Chaque code d'erreur ne peut appara\xEEtre qu'une fois.",
  retryDelayOrder: "Le d\xE9lai initial ne peut pas d\xE9passer le d\xE9lai maximum.",
  models: "Mod\xE8les",
  modelsInherited: "Utilisation des valeurs par d\xE9faut de l'adaptateur",
  modelsCustomized: "Catalogue de mod\xE8les personnalis\xE9s",
  resetModels: "Restaurer les valeurs par d\xE9faut",
  model: "Mod\xE8le",
  modelId: "ID du mod\xE8le",
  modelName: "Nom d'affichage",
  modelNamePlaceholder: "Utilise l'ID du mod\xE8le lorsqu'il est vide",
  contextWindow: "Fen\xEAtre contextuelle",
  contextWindowPlaceholder: "Utilise la valeur par d\xE9faut du fournisseur",
  maxTokens: "Jetons de sortie maximum",
  maxTokensPlaceholder: "Utilise la valeur par d\xE9faut du fournisseur",
  modelAdvanced: "Options de mod\xE8le",
  modelInputTypes: "Types d'entr\xE9e",
  modelInputText: "Texte",
  modelInputImage: "Images",
  modelReasoning: "Niveaux de raisonnement",
  modelReasoningLevel: "Niveau",
  modelReasoningValue: "Valeur API",
  modelReasoningHelp: "\xC0 propos des niveaux de raisonnement",
  modelReasoningHelpText: "La valeur API est envoy\xE9e dans le champ d\u2019effort de raisonnement de la requ\xEAte, comme reasoning_effort chez OpenAI. Par d\xE9faut, elle correspond au nom du niveau ; si la documentation API du fournisseur du mod\xE8le indique une autre valeur, utilisez-la. D\xE9sactiv\xE9 coupe le raisonnement et ne n\xE9cessite aucune valeur ; toute valeur d\xE9j\xE0 enregistr\xE9e dans la configuration est conserv\xE9e et envoy\xE9e.",
  modelReasoningNeedsLevel: "Ajoutez au moins un niveau en plus de D\xE9sactiv\xE9 ou d\xE9sactivez les niveaux de raisonnement.",
  modelReasoningValueRequired: "Chaque niveau autre que Off n\xE9cessite une valeur API et aucune valeur ne peut \xEAtre vide.",
  modelReasoningLevelsOnly: "Ce protocole d'API n'accepte que les niveaux minimal, low, medium et high, chacun ayant son nom de niveau comme valeur d'API. Modifiez ou supprimez les autres niveaux.",
  modelReasoningAdd: "Ajouter un niveau",
  modelReasoningRemove: "Supprimer le niveau",
  modelReasoningOffValuePlaceholder: "D\xE9sactive le raisonnement",
  addModel: "Ajouter un mod\xE8le",
  removeModel: "Supprimer le mod\xE8le",
  reorderModel: "R\xE9organiser le mod\xE8le",
  reorderModelHelp: "Faites glisser pour r\xE9organiser ou utilisez les touches fl\xE9ch\xE9es haut et bas.",
  modelsEmpty: "Aucun mod\xE8le ne sera affich\xE9 dans le s\xE9lecteur. Les identifiants non r\xE9pertori\xE9s peuvent toujours \xEAtre envoy\xE9s directement.",
  keyBlank: "Saisissez la cl\xE9 API, ou laissez le champ vide pour conserver celle stock\xE9e.",
  keyBlankNew: "Saisissez la cl\xE9 API ou laissez le champ vide si ce fournisseur s'authentifie d'une autre mani\xE8re.",
  keyIllegalCharacters: "Cette cl\xE9 API n'est pas dans un format valide. Veuillez le v\xE9rifier.",
  modelIdRequired: "L\u2019ID du mod\xE8le est requis.",
  modelIdDuplicate: "L'ID du mod\xE8le doit \xEAtre unique.",
  modelNameInvalid: "Le nom d\u2019affichage ne peut pas \xEAtre vide.",
  modelContextInvalid: "La fen\xEAtre contextuelle doit \xEAtre un nombre positif, comme 131072, 256K ou 1M.",
  modelMaxTokensInvalid: "Le nombre maximum de jetons de sortie doit \xEAtre un nombre positif, comme 8192, 64K ou 1M.",
  advancedHint: "D'autres champs se trouvent dans cordis.patch.yml\xA0; modifiez cette section directement.",
  modelCapacityInvalid: "Une capacit\xE9 doit \xEAtre un nombre, \xE9ventuellement suivi du suffixe K ou M.",
  modelDuplicate: "Chaque ID de mod\xE8le peut appara\xEEtre une fois.",
  fetchModels: "R\xE9cup\xE9rer les mod\xE8les disponibles",
  fetching: "Demander au fournisseur\u2026",
  fetchNeedsBaseUrl: "Entrez d'abord l'URL de base, puis r\xE9cup\xE9rez-la.",
  fetchEmpty: "Le fournisseur n\u2019a r\xE9pertori\xE9 aucun mod\xE8le. Ajoutez-les \xE0 la main.",
  fetchTitle: "Choisir des mod\xE8les",
  fetchDescription: "Ce sont les mod\xE8les disponibles chez ce fournisseur. Les mod\xE8les coch\xE9s constituent la liste.",
  fetchSearch: "Rechercher des mod\xE8les",
  fetchNoMatches: "Aucun mod\xE8le correspondant.",
  fetchSelectAll: "Tout s\xE9lectionner",
  fetchDeselectAll: "Tout d\xE9s\xE9lectionner",
  fetchAdopt: "Mettre \xE0 jour la liste",
  fetchKeepOne: "Gardez au moins un mod\xE8le coch\xE9.",
  customTag: "Personnalis\xE9",
  customRoute: "Identifiant du fournisseur",
  customRouteHint: "Identifiant minuscule, commen\xE7ant par une lettre, qui nomme de mani\xE8re unique ce fournisseur dans les demandes et comme nom d'identification.",
  customRouteInvalid: "Commencez par une lettre minuscule\xA0; puis des lettres minuscules, des chiffres et des tirets.",
  customRouteTaken: "Un fournisseur utilise d\xE9j\xE0 cet identifiant.",
  customDisplayName: "Nom d'affichage",
  customApi: "Protocole API",
  customApiUnset: "Non s\xE9lectionn\xE9",
  protocolOpenAiCompletions: "Ach\xE8vements du chat OpenAI",
  protocolOpenAiResponses: "R\xE9ponses OpenAI",
  protocolAnthropicMessages: "Messages anthropiques",
  protocolGemini: "Gemini API",
  customNeedsBaseUrl: "Un fournisseur personnalis\xE9 a besoin d'une URL de base.",
  customBaseUrlInvalid: "Saisissez une URL HTTP ou HTTPS valide.",
  customNeedsModels: "Un fournisseur personnalis\xE9 a besoin d'au moins un mod\xE8le.",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
  customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
  settingsPathUnresolvable: "chemin des param\xE8tres insolubles",
  create: "Cr\xE9er un fournisseur",
  creating: "Cr\xE9ation\u2026",
  welcomeTitle: "Avis d'aper\xE7u",
  welcomeBody: "DeepSeek Harness 0.2 est toujours en version pr\xE9liminaire et de nombreux domaines n\xE9cessitent une am\xE9lioration et un perfectionnement continus. Nous appr\xE9cions les commentaires et suggestions de tous les d\xE9veloppeurs et utilisateurs. La nouvelle application de bureau cible d\xE9sormais un large \xE9ventail d'utilisateurs, tandis que les fonctionnalit\xE9s avanc\xE9es li\xE9es aux d\xE9veloppeurs peuvent \xEAtre activ\xE9es dans les param\xE8tres. Les fonctionnalit\xE9s du produit et les API de plug-in de DeepSeek Harness devraient poursuivre leurs it\xE9rations et leur \xE9volution rapides, et se stabiliseront progressivement au fil du temps. \n\nNous sommes impatients d'explorer les limites de l'intelligence avec les utilisateurs et les d\xE9veloppeurs du monde entier, en nous appuyant sur une infrastructure open source, r\xE9utilisable et composable. Nous invitons chacun \xE0 donner vie \xE0 ses id\xE9es avec DeepSeek Harness et \xE0 participer \xE0 la communaut\xE9 pour enrichir l'\xE9cosyst\xE8me des plugins.",
  welcomeContinue: "Continuer",
  welcomeError: "L'accus\xE9 de r\xE9ception n'a pas pu \xEAtre enregistr\xE9. Veuillez r\xE9essayer.",
  onboardingTitle: "Ajoutez une cl\xE9 API pour commencer",
  onboardingDescription: "Configurez le fournisseur officiel DeepSeek pour commencer la construction.",
  onboardingLater: "Configurer plus tard",
  onboardingSave: "Enregistrer et continuer",
  onboardingSaving: "Sauvegarde\u2026",
  keyRequired: "Entrez une cl\xE9 API pour continuer."
};
var de = {
  googleSearch: "Google-Suche",
  nav: "Modelle",
  deepSeekAccount: "DeepSeek-Konto",
  title: "Modelle",
  intro: "Geben Sie Ihre API-Schl\xFCssel ein, um Modelle der folgenden Anbieter zu verwenden.",
  edit: "Bearbeiten",
  editProvider: "Bearbeiten Sie {provider}",
  remove: "L\xF6schen",
  removeProvider: "L\xF6schen Sie {provider}",
  deleteTitle: "{provider} l\xF6schen?",
  deleteDescription: "Durch das L\xF6schen von {provider} wird seine Konfiguration entfernt. Alle verwendeten Anmeldeinformationen werden an anderer Stelle verwaltet und aufbewahrt.",
  deleteDescriptionWithCredential: "Durch das L\xF6schen von {provider} werden seine Konfiguration und der gespeicherte API-Schl\xFCssel entfernt.",
  deleteConfirm: "L\xF6schen Sie {provider}",
  deleting: "{provider} wird gel\xF6scht\u2026",
  add: "Modellanbieter hinzuf\xFCgen",
  addMode: "So f\xFCgen Sie hinzu",
  addCatalog: "Drittanbieter von Modellen",
  addCustom: "Kundenspezifisches Modell API",
  addCatalogHint: "W\xE4hlen Sie OpenAI, Anthropic, Kimi oder einen anderen Anbieter aus dem integrierten Katalog aus und geben Sie den API-Schl\xFCssel ein.",
  addCustomHint: "Verbinden Sie ein Relay, einen selbst gehosteten Server oder einen anderen OpenAI-, Anthropic- oder Gemini-kompatiblen Endpunkt \xFCber seine Basis-URL, sein Protokoll und seine Modelle.",
  addCatalogExhausted: "Jeder Kataloganbieter ist bereits konfiguriert.",
  addCustomUnavailable: "Es ist kein API-Protokoll zur Deklaration verf\xFCgbar.",
  provider: "Anbieter",
  close: "Schlie\xDFen",
  cancel: "Abbrechen",
  apply: "Anwenden",
  applying: "Wird angewendet\u2026",
  savedProvider: "Gespeichert {provider}.",
  credentialConfigured: "API-Schl\xFCssel konfiguriert",
  credentialMissing: "API-Schl\xFCssel fehlt",
  accountSignedIn: "Angemeldet",
  readOnly: "Das Einstellungsdokument ist in dieser Bereitstellung schreibgesch\xFCtzt.",
  loadFailed: "Das Laden des Anbieterverzeichnisses ist fehlgeschlagen",
  conflict: "Jemand anderes hat diese Einstellungen ge\xE4ndert, w\xE4hrend diese Karte ge\xF6ffnet war. Schlie\xDFen Sie es und \xF6ffnen Sie es erneut, um die aktuellen Werte zu bearbeiten.",
  retry: "Erneut versuchen",
  keyInput: "API-Schl\xFCssel",
  keyReveal: "Geheimnis zeigen",
  keyHide: "Geheimnis verbergen",
  keyPlaceholder: "Geben Sie Ihren API-Schl\xFCssel ein",
  keyPlaceholderFallback: "Lassen Sie das Feld leer, um env als Authentifizierung zu verwenden ({hint})",
  keySaved: "Der gespeicherte API-Schl\xFCssel wird verwendet.",
  keyReplacePending: "Anwenden, um den gespeicherten API-Schl\xFCssel zu ersetzen.",
  keyRemovePending: "Anwenden, um den gespeicherten API-Schl\xFCssel zu l\xF6schen und die Umgebungsauthentifizierung zu verwenden.",
  keyRemovePendingEnvironment: "Anwenden, um den gespeicherten API-Schl\xFCssel zu l\xF6schen. Danach wird die Umgebungsauthentifizierung verwendet ({hint}).",
  keyRemoveApplied: "Schl\xFCssel gel\xF6scht. Erneut anwenden, um die Einstellungen abzuschlie\xDFen; das L\xF6schen ist unwiderruflich.",
  keyFallbackMissing: "Umgebungsvariable nicht erkannt. Geben Sie einen API-Schl\xFCssel ein oder konfigurieren Sie {hint} in Ihrer Umgebung.",
  keyFallbackDetected: "Umgebungsvariable erkannt. ({hint})",
  keyFallbackDetectedHidden: "Umgebungsvariable erkannt.",
  keyFallbackUnchecked: "Der Status der Umweltberechtigung wurde nicht best\xE4tigt.",
  keyHelp: "Gespeicherte Anmeldeinformationen werden zuerst verwendet. Hier werden Umgebungs-Fallbacks in der Reihenfolge angezeigt: {env}. Quellen sind die Startumgebung, $cwd/.env und dann $DSH_HOME/.env.",
  authHelp: "Authentifizierungsdetails",
  customized: "Benutzerdefinierte Einstellungen",
  baseUrl: "Basis-URL",
  baseUrlDefault: "Kein Standardendpunkt",
  baseUrlEnvironment: "Konfiguration des Anbieterendpunkts: {env}",
  baseUrlConfigured: "Vom Anbieter konfigurierter Endpunkt",
  baseUrlPlaceholder: "{url}",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic (Standardm\xE4\xDFig wird DEEPSEEK_BASE_URL verwendet)",
  deepSeekEndpointHint: "Verwenden Sie einen API-Endpunkt, der mit Anthropic Messages kompatibel ist.",
  retryPolicy: "Wiederholungsrichtlinie",
  retryModeDefault: "Standard ({mode})",
  retryModeNormal: "Vor\xFCbergehende Fehler",
  retryModeAlways: "Alle Fehler",
  retryAlwaysHint: "Fehlgeschlagene Anfragen werden wiederholt, bis sie erfolgreich sind oder der Durchlauf gestoppt wird.",
  retryMaxRetries: "Max. Wiederholungen",
  retryCodes: "Fehlercodes",
  retryCodeEmptyResponse: "Leere Antwort",
  retryCodeRateLimit: "Ratenbegrenzung",
  retryCodeServer: "Serverfehler",
  retryCodeTimeout: "Zeit\xFCberschreitung",
  retryCodeTransport: "Netzwerkfehler",
  retryCodeStreamClosed: "Stream vorzeitig beendet",
  retryCodeMalformedResponse: "Fehlerhafte Antwort",
  retryCodeQuota: "Kontingent ersch\xF6pft",
  retryCodeCustom: "Benutzerdefinierter Fehlercode",
  retryCodeAdd: "Hinzuf\xFCgen",
  retryInitialDelay: "Anfangsverz\xF6gerung (ms)",
  retryMaxDelay: "Max. Verz\xF6gerung (ms)",
  retryJitter: "Jitter-Anteil",
  retryBackoff: "Backoff",
  retryValueNumber: "Geben Sie eine Zahl ein.",
  retryValueInteger: "Geben Sie eine ganze Zahl ein.",
  retryValuePositive: "Muss gr\xF6\xDFer als 0 sein.",
  retryValueMin: "Muss mindestens {min} sein.",
  retryValueMax: "Darf h\xF6chstens {max} sein.",
  retryCodesInvalid: "Fehlercodes m\xFCssen nicht leerer Text sein.",
  retryCodesDuplicate: "Jeder Fehlercode darf nur einmal vorkommen.",
  retryDelayOrder: "Die anf\xE4ngliche Verz\xF6gerung darf die maximale Verz\xF6gerung nicht \xFCberschreiten.",
  models: "Modelle",
  modelsInherited: "Verwendung der Adapterstandards",
  modelsCustomized: "Ma\xDFgeschneiderter Modellkatalog",
  resetModels: "Standardeinstellungen wiederherstellen",
  model: "Modell",
  modelId: "Modell-ID",
  modelName: "Anzeigename",
  modelNamePlaceholder: "Verwendet die Modell-ID, wenn sie leer ist",
  contextWindow: "Kontextfenster",
  contextWindowPlaceholder: "Verwendet die Standardeinstellung des Anbieters",
  maxTokens: "Maximale Anzahl ausgegebener Token",
  maxTokensPlaceholder: "Verwendet die Standardeinstellung des Anbieters",
  modelAdvanced: "Modelloptionen",
  modelInputTypes: "Eingabetypen",
  modelInputText: "Text",
  modelInputImage: "Bild",
  modelReasoning: "Argumentationsebenen",
  modelReasoningLevel: "Ebene",
  modelReasoningValue: "API-Wert",
  modelReasoningHelp: "\xDCber Argumentationsebenen",
  modelReasoningHelpText: "Der API-Wert wird im Feld f\xFCr den Denkaufwand der Anfrage gesendet, etwa reasoning_effort bei OpenAI. Standardm\xE4\xDFig wird der Stufenname verwendet; gibt die API-Dokumentation des Modellanbieters einen anderen Wert vor, verwenden Sie diesen. Aus deaktiviert das Denken und ben\xF6tigt keinen Wert; ein bereits konfigurierter Wert bleibt erhalten und wird gesendet.",
  modelReasoningNeedsLevel: "F\xFCgen Sie neben \u201EAus\u201C mindestens eine Ebene hinzu oder deaktivieren Sie die Argumentationsebenen.",
  modelReasoningValueRequired: "Jede Ebene au\xDFer Off ben\xF6tigt einen API-Wert und kein Wert darf leer sein.",
  modelReasoningLevelsOnly: "Dieses API-Protokoll akzeptiert nur die Stufen minimal, low, medium und high, jeweils mit dem Stufennamen als API-Wert. \xC4ndern oder entfernen Sie die anderen Stufen.",
  modelReasoningAdd: "Ebene hinzuf\xFCgen",
  modelReasoningRemove: "Ebene l\xF6schen",
  modelReasoningOffValuePlaceholder: "Schaltet das Denken aus",
  addModel: "Modell hinzuf\xFCgen",
  removeModel: "Modell l\xF6schen",
  reorderModel: "Modell neu anordnen",
  reorderModelHelp: "Ziehen Sie, um die Reihenfolge neu anzuordnen, oder verwenden Sie die Aufw\xE4rts- und Abw\xE4rtspfeiltasten.",
  modelsEmpty: "Im Selektor werden keine Modelle angezeigt. Nicht gelistete Ausweise k\xF6nnen weiterhin direkt versendet werden.",
  keyBlank: "Geben Sie den API-Schl\xFCssel ein oder lassen Sie das Feld leer, um den gespeicherten Schl\xFCssel beizubehalten.",
  keyBlankNew: "Geben Sie den API-Schl\xFCssel ein oder lassen Sie das Feld leer, wenn dieser Anbieter auf andere Weise authentifiziert.",
  keyIllegalCharacters: "Dieser API-Schl\xFCssel hat kein g\xFCltiges Format. Bitte \xFCberpr\xFCfen Sie es.",
  modelIdRequired: "Modell-ID ist erforderlich.",
  modelIdDuplicate: "Die Modell-ID muss eindeutig sein.",
  modelNameInvalid: "Der Anzeigename darf nicht leer sein.",
  modelContextInvalid: "Das Kontextfenster muss eine positive Zahl sein, z. B. 131072, 256K oder 1M.",
  modelMaxTokensInvalid: "Die maximale Anzahl an Ausgabetokens muss eine positive Zahl sein, z.\xA0B. 8192, 64K oder 1M.",
  advancedHint: "Andere Felder befinden sich in cordis.patch.yml; Bearbeiten Sie diesen Abschnitt direkt.",
  modelCapacityInvalid: "Eine Kapazit\xE4t muss eine Zahl sein, optional mit dem Suffix K oder M.",
  modelDuplicate: "Jede Modell-ID darf einmal vorkommen.",
  fetchModels: "Verf\xFCgbare Modelle abrufen",
  fetching: "Den Anbieter fragen...",
  fetchNeedsBaseUrl: "Geben Sie zuerst die Basis-URL ein und rufen Sie sie dann ab.",
  fetchEmpty: "Der Anbieter listete keine Modelle auf. F\xFCgen Sie sie von Hand hinzu.",
  fetchTitle: "W\xE4hlen Sie Modelle",
  fetchDescription: "Dies sind die Modelle, die dieser Anbieter zur Verf\xFCgung hat. Gepr\xFCfte Modelle bilden die Liste.",
  fetchSearch: "Modelle suchen",
  fetchNoMatches: "Keine passenden Modelle.",
  fetchSelectAll: "Alles ausw\xE4hlen",
  fetchDeselectAll: "Alle abw\xE4hlen",
  fetchAdopt: "Liste aktualisieren",
  fetchKeepOne: "Lassen Sie mindestens ein Modell \xFCberpr\xFCft.",
  customTag: "Benutzerdefiniert",
  customRoute: "Anbieter-ID",
  customRouteHint: "Bezeichner in Kleinbuchstaben, beginnend mit einem Buchstaben, der diesen Anbieter in Anfragen und als Anmeldeinformationsname eindeutig benennt.",
  customRouteInvalid: "Beginnen Sie mit einem Kleinbuchstaben; dann Kleinbuchstaben, Ziffern und Bindestriche.",
  customRouteTaken: "Ein Anbieter verwendet diese ID bereits.",
  customDisplayName: "Anzeigename",
  customApi: "API-Protokoll",
  customApiUnset: "Nicht ausgew\xE4hlt",
  protocolOpenAiCompletions: "OpenAI-Chat-Abschl\xFCsse",
  protocolOpenAiResponses: "OpenAI-Antworten",
  protocolAnthropicMessages: "Anthropische Botschaften",
  protocolGemini: "Gemini API",
  customNeedsBaseUrl: "Ein benutzerdefinierter Anbieter ben\xF6tigt eine Basis-URL.",
  customBaseUrlInvalid: "Geben Sie eine g\xFCltige HTTP- oder HTTPS-URL ein.",
  customNeedsModels: "Ein benutzerdefinierter Anbieter ben\xF6tigt mindestens ein Modell.",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
  customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
  settingsPathUnresolvable: "Unaufl\xF6sbarer Einstellungspfad",
  create: "Anbieter erstellen",
  creating: "Erstellen\u2026",
  welcomeTitle: "Vorschauhinweis",
  welcomeBody: "DeepSeek Harness 0.2 befindet sich noch in der Vorschau und viele Bereiche m\xFCssen weiter verbessert und verfeinert werden. Wir freuen uns \xFCber Feedback und Vorschl\xE4ge aller Entwickler und Benutzer. Die neue Desktop-App richtet sich nun an ein breites Nutzerspektrum, w\xE4hrend entwicklerbezogene erweiterte Funktionen in den Einstellungen aktiviert werden k\xF6nnen. Es wird erwartet, dass die Produktfunktionen und Plugin-APIs von DeepSeek Harness ihre schnelle Iteration und Weiterentwicklung fortsetzen und sich im Laufe der Zeit allm\xE4hlich stabilisieren. Wir hei\xDFen jeden willkommen, seine Ideen mit DeepSeek Harness zum Leben zu erwecken und sich an der Community zu beteiligen, um das Plugin-\xD6kosystem zu bereichern.",
  welcomeContinue: "Weiter",
  welcomeError: "Die Best\xE4tigung konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.",
  onboardingTitle: "F\xFCgen Sie einen API-Schl\xFCssel hinzu, um loszulegen",
  onboardingDescription: "Konfigurieren Sie den offiziellen DeepSeek-Anbieter, um mit der Erstellung zu beginnen.",
  onboardingLater: "Sp\xE4ter konfigurieren",
  onboardingSave: "Speichern und fortfahren",
  onboardingSaving: "Speichern\u2026",
  keyRequired: "Geben Sie einen API-Schl\xFCssel ein, um fortzufahren."
};
var ru = {
  googleSearch: "\u041F\u043E\u0438\u0441\u043A Google",
  nav: "\u041C\u043E\u0434\u0435\u043B\u0438",
  deepSeekAccount: "DeepSeek \u0410\u043A\u043A\u0430\u0443\u043D\u0442",
  title: "\u041C\u043E\u0434\u0435\u043B\u0438",
  intro: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447\u0438 API, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432.",
  edit: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  editProvider: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C {provider}",
  remove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  removeProvider: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C {provider}",
  deleteTitle: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C {provider}?",
  deleteDescription: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 {provider} \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u0435\u0433\u043E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E. \u041B\u044E\u0431\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0433\u0434\u0435-\u0442\u043E \u0435\u0449\u0435 \u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B.",
  deleteDescriptionWithCredential: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 {provider} \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u0435\u0433\u043E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 API.",
  deleteConfirm: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C {provider}",
  deleting: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 {provider}\u2026",
  add: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0435\u0439",
  addMode: "\u041A\u0430\u043A \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
  addCatalog: "\u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043C\u043E\u0434\u0435\u043B\u0435\u0439",
  addCustom: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C API",
  addCatalogHint: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 OpenAI, Anthropic, Kimi \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438\u0437 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043E \u043A\u043B\u044E\u0447 API.",
  addCustomHint: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0440\u0435\u043B\u0435, \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438\u043B\u0438 \u043B\u044E\u0431\u0443\u044E \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u043E\u043D\u0435\u0447\u043D\u0443\u044E \u0442\u043E\u0447\u043A\u0443, \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u0443\u044E \u0441 OpenAI, Anthropic \u0438\u043B\u0438 Gemini, \u043F\u043E \u0435\u0435 \u0431\u0430\u0437\u043E\u0432\u043E\u043C\u0443 URL-\u0430\u0434\u0440\u0435\u0441\u0443, \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 \u0438 \u043C\u043E\u0434\u0435\u043B\u0438.",
  addCatalogExhausted: "\u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u0443\u0436\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D.",
  addCustomUnavailable: "\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B API \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F.",
  provider: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
  close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
  apply: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",
  applying: "\u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u2026",
  savedProvider: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E {provider}.",
  credentialConfigured: "\u041A\u043B\u044E\u0447 API \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D",
  credentialMissing: "\u041A\u043B\u044E\u0447 API \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",
  accountSignedIn: "\u0412\u043E\u0448\u0451\u043B \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443",
  readOnly: "\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F.",
  loadFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
  conflict: "\u041A\u0442\u043E-\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0439 \u0438\u0437\u043C\u0435\u043D\u0438\u043B \u044D\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043F\u043E\u043A\u0430 \u044D\u0442\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0431\u044B\u043B\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0430. \u0417\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E \u0438 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430, \u0447\u0442\u043E\u0431\u044B \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F.",
  retry: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
  keyInput: "\u041A\u043B\u044E\u0447 API",
  keyReveal: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0435\u043A\u0440\u0435\u0442",
  keyHide: "\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0435\u043A\u0440\u0435\u0442",
  keyPlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043A\u043B\u044E\u0447 API",
  keyPlaceholderFallback: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0441\u0442\u044B\u043C, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C env \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 ({hint})",
  keySaved: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0439 API-\u043A\u043B\u044E\u0447.",
  keyReplacePending: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0439 API-\u043A\u043B\u044E\u0447.",
  keyRemovePending: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0439 API-\u043A\u043B\u044E\u0447 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0438\u0437 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F.",
  keyRemovePendingEnvironment: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0439 API-\u043A\u043B\u044E\u0447. \u0411\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0438\u0437 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F ({hint}).",
  keyRemoveApplied: "\u041A\u043B\u044E\u0447 \u0443\u0434\u0430\u043B\u0451\u043D. \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438; \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.",
  keyFallbackMissing: "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F Env \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447 API \u0438\u043B\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 {hint} \u0432 \u0441\u0432\u043E\u0435\u0439 \u0441\u0440\u0435\u0434\u0435.",
  keyFallbackDetected: "\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F Env. ({hint})",
  keyFallbackDetectedHidden: "\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F Env.",
  keyFallbackUnchecked: "\u0421\u0442\u0430\u0442\u0443\u0441 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D.",
  keyHelp: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C. \u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u0440\u0435\u0434\u044B \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435: {env}. \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u0440\u0435\u0434\u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u0430, $cwd/.env, \u0437\u0430\u0442\u0435\u043C $DSH_HOME/.env.",
  authHelp: "\u0414\u0435\u0442\u0430\u043B\u0438 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
  customized: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
  baseUrl: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 URL",
  baseUrlDefault: "\u041D\u0435\u0442 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
  baseUrlEnvironment: "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430: {env}.",
  baseUrlConfigured: "\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430, \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u043C",
  baseUrlPlaceholder: "{url}",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F DEEPSEEK_BASE_URL)",
  deepSeekEndpointHint: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043E\u043D\u0435\u0447\u043D\u0443\u044E \u0442\u043E\u0447\u043A\u0443 API, \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u0443\u044E \u0441 \u0430\u043D\u0442\u0440\u043E\u043F\u043D\u044B\u043C\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438.",
  retryPolicy: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0445 \u043F\u043E\u043F\u044B\u0442\u043E\u043A",
  retryModeDefault: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E ({mode})",
  retryModeNormal: "\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438",
  retryModeAlways: "\u041B\u044E\u0431\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438",
  retryAlwaysHint: "\u041D\u0435\u0443\u0434\u0430\u0447\u043D\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0442\u0441\u044F \u0434\u043E \u0443\u0441\u043F\u0435\u0445\u0430 \u0438\u043B\u0438 \u0434\u043E \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0445\u043E\u0434\u0430.",
  retryMaxRetries: "\u041C\u0430\u043A\u0441. \u0447\u0438\u0441\u043B\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0432",
  retryCodes: "\u041A\u043E\u0434\u044B \u043E\u0448\u0438\u0431\u043E\u043A",
  retryCodeEmptyResponse: "\u041F\u0443\u0441\u0442\u043E\u0439 \u043E\u0442\u0432\u0435\u0442",
  retryCodeRateLimit: "\u041B\u0438\u043C\u0438\u0442 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432",
  retryCodeServer: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
  retryCodeTimeout: "\u0422\u0430\u0439\u043C-\u0430\u0443\u0442",
  retryCodeTransport: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438",
  retryCodeStreamClosed: "\u041F\u043E\u0442\u043E\u043A \u043F\u0440\u0435\u0440\u0432\u0430\u043D",
  retryCodeMalformedResponse: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442",
  retryCodeQuota: "\u041A\u0432\u043E\u0442\u0430 \u0438\u0441\u0447\u0435\u0440\u043F\u0430\u043D\u0430",
  retryCodeCustom: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438",
  retryCodeAdd: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
  retryInitialDelay: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0430 (ms)",
  retryMaxDelay: "\u041C\u0430\u043A\u0441. \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0430 (ms)",
  retryJitter: "\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0434\u0436\u0438\u0442\u0442\u0435\u0440\u0430",
  retryBackoff: "\u041E\u0442\u0441\u0440\u043E\u0447\u043A\u0430",
  retryValueNumber: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E.",
  retryValueInteger: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E.",
  retryValuePositive: "\u0414\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 0.",
  retryValueMin: "\u0414\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 {min}.",
  retryValueMax: "\u0414\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 {max}.",
  retryCodesInvalid: "\u041A\u043E\u0434\u044B \u043E\u0448\u0438\u0431\u043E\u043A \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043D\u0435\u043F\u0443\u0441\u0442\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C.",
  retryCodesDuplicate: "\u041A\u0430\u0436\u0434\u044B\u0439 \u043A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438 \u043C\u043E\u0436\u0435\u0442 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437.",
  retryDelayOrder: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E.",
  models: "\u041C\u043E\u0434\u0435\u043B\u0438",
  modelsInherited: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
  modelsCustomized: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043C\u043E\u0434\u0435\u043B\u0435\u0439",
  resetModels: "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
  model: "\u041C\u043E\u0434\u0435\u043B\u044C",
  modelId: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043C\u043E\u0434\u0435\u043B\u0438",
  modelName: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0435 \u0438\u043C\u044F",
  modelNamePlaceholder: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043C\u043E\u0434\u0435\u043B\u0438, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u043F\u0443\u0441\u0442",
  contextWindow: "\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043E\u043A\u043D\u043E",
  contextWindowPlaceholder: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
  maxTokens: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445 \u0442\u043E\u043A\u0435\u043D\u043E\u0432",
  maxTokensPlaceholder: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
  modelAdvanced: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043C\u043E\u0434\u0435\u043B\u0438",
  modelInputTypes: "\u0422\u0438\u043F\u044B \u0432\u0432\u043E\u0434\u0430",
  modelInputText: "\u0422\u0435\u043A\u0441\u0442",
  modelInputImage: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  modelReasoning: "\u0423\u0440\u043E\u0432\u043D\u0438 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F",
  modelReasoningLevel: "\u0423\u0440\u043E\u0432\u0435\u043D\u044C",
  modelReasoningValue: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 API",
  modelReasoningHelp: "\u041E\u0431 \u0443\u0440\u043E\u0432\u043D\u044F\u0445 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F",
  modelReasoningHelpText: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 API \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0432 \u043F\u043E\u043B\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 reasoning_effort \u0443 OpenAI. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F; \u0435\u0441\u043B\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F API \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0435\u0433\u043E. \u0412\u044B\u043A\u043B. \u043E\u0442\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u0438 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F; \u0443\u0436\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u0435 \u0432 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F.",
  modelReasoningNeedsLevel: "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u043C\u0438\u043C\u043E \xAB\u0412\u044B\u043A\u043B.\xBB \u0438\u043B\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F.",
  modelReasoningValueRequired: "\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F, \u043A\u0440\u043E\u043C\u0435 Off, \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 API, \u0438 \u043D\u0438 \u043E\u0434\u043D\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C.",
  modelReasoningLevelsOnly: "\u042D\u0442\u043E\u0442 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B API \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u0440\u043E\u0432\u043D\u0438 minimal, low, medium \u0438 high, \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 API \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C \u0441 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u044F. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0440\u043E\u0432\u043D\u0438.",
  modelReasoningAdd: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
  modelReasoningRemove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
  modelReasoningOffValuePlaceholder: "\u041E\u0442\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F",
  addModel: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C",
  removeModel: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C",
  reorderModel: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043C\u043E\u0434\u0435\u043B\u0438",
  reorderModelHelp: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438 \u0432\u0432\u0435\u0440\u0445 \u0438 \u0432\u043D\u0438\u0437.",
  modelsEmpty: "\u0412 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u0435 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043C\u043E\u0434\u0435\u043B\u0438. \u041D\u0435\u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E.",
  keyBlank: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447 API \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u043E\u043B\u0435 \u043F\u0443\u0441\u0442\u044B\u043C, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439.",
  keyBlankNew: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447 API \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u043E\u043B\u0435 \u043F\u0443\u0441\u0442\u044B\u043C, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C.",
  keyIllegalCharacters: "\u042D\u0442\u043E\u0442 \u043A\u043B\u044E\u0447 API \u0438\u043C\u0435\u0435\u0442 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u044D\u0442\u043E.",
  modelIdRequired: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043C\u043E\u0434\u0435\u043B\u0438.",
  modelIdDuplicate: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043C\u043E\u0434\u0435\u043B\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C.",
  modelNameInvalid: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0435 \u0438\u043C\u044F \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C.",
  modelContextInvalid: "\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0438\u043C\u0435\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 131072, 256K \u0438\u043B\u0438 1M.",
  modelMaxTokensInvalid: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445 \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u0434\u043E\u043B\u0436\u043D\u043E \u0438\u043C\u0435\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 8192, 64K \u0438\u043B\u0438 1M.",
  advancedHint: "\u041E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0444\u0430\u0439\u043B\u0435 cordis.patch.yml; \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437\u0434\u0435\u043B \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E.",
  modelCapacityInvalid: "\u0415\u043C\u043A\u043E\u0441\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441 \u0441\u0443\u0444\u0444\u0438\u043A\u0441\u043E\u043C K \u0438\u043B\u0438 M.",
  modelDuplicate: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u044F\u0432\u0438\u0442\u044C\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437.",
  fetchModels: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438",
  fetching: "\u0421\u043F\u0440\u043E\u0441\u0438\u043B \u0443 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430...",
  fetchNeedsBaseUrl: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 URL-\u0430\u0434\u0440\u0435\u0441, \u0430 \u0437\u0430\u0442\u0435\u043C \u0438\u0437\u0432\u043B\u0435\u043A\u0438\u0442\u0435 \u0435\u0433\u043E.",
  fetchEmpty: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B \u043C\u043E\u0434\u0435\u043B\u0435\u0439. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u0445 \u0432\u0440\u0443\u0447\u043D\u0443\u044E.",
  fetchTitle: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u0438",
  fetchDescription: "\u042D\u0442\u043E \u043C\u043E\u0434\u0435\u043B\u0438, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0443 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043F\u0438\u0441\u043E\u043A.",
  fetchSearch: "\u041F\u043E\u0438\u0441\u043A \u043C\u043E\u0434\u0435\u043B\u0435\u0439",
  fetchNoMatches: "\u041D\u0435\u0442 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439.",
  fetchSelectAll: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435",
  fetchDeselectAll: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0432\u0441\u0435\u0445",
  fetchAdopt: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
  fetchKeepOne: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0443 \u043C\u043E\u0434\u0435\u043B\u044C.",
  customTag: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439",
  customRoute: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
  customRouteHint: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0432 \u043D\u0438\u0436\u043D\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0441 \u0431\u0443\u043A\u0432\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0432 \u0437\u0430\u043F\u0440\u043E\u0441\u0430\u0445 \u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0435\u0433\u043E \u0443\u0447\u0435\u0442\u043D\u043E\u0433\u043E \u0438\u043C\u0435\u043D\u0438.",
  customRouteInvalid: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441\u043E \u0441\u0442\u0440\u043E\u0447\u043D\u043E\u0439 \u0431\u0443\u043A\u0432\u044B; \u0437\u0430\u0442\u0435\u043C \u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0435 \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0442\u0438\u0440\u0435.",
  customRouteTaken: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u044D\u0442\u043E\u0442 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440.",
  customDisplayName: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0435 \u0438\u043C\u044F",
  customApi: "\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B API",
  customApiUnset: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",
  protocolOpenAiCompletions: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0447\u0430\u0442\u0430 OpenAI",
  protocolOpenAiResponses: "\u041E\u0442\u0432\u0435\u0442\u044B OpenAI",
  protocolAnthropicMessages: "\u0410\u043D\u0442\u0440\u043E\u043F\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
  protocolGemini: "Gemini API",
  customNeedsBaseUrl: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C\u0443 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0443 \u043D\u0443\u0436\u0435\u043D \u0431\u0430\u0437\u043E\u0432\u044B\u0439 URL-\u0430\u0434\u0440\u0435\u0441.",
  customBaseUrlInvalid: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 URL-\u0430\u0434\u0440\u0435\u0441 HTTP \u0438\u043B\u0438 HTTPS.",
  customNeedsModels: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C\u0443 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0443 \u043D\u0443\u0436\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u044C.",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
  customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
  settingsPathUnresolvable: "\u043D\u0435\u0440\u0430\u0437\u0440\u0435\u0448\u0438\u043C\u044B\u0439 \u043F\u0443\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
  create: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
  creating: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435\u2026",
  welcomeTitle: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435",
  welcomeBody: "DeepSeek Harness 0.2 \u0432\u0441\u0435 \u0435\u0449\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438, \u0438 \u043C\u043D\u043E\u0433\u0438\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0443\u0436\u0434\u0430\u044E\u0442\u0441\u044F \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0438 \u0438 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0435. \u041C\u044B \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C \u043E\u0442\u0437\u044B\u0432\u044B \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0442 \u0432\u0441\u0435\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u041D\u043E\u0432\u043E\u0435 \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u043F\u0435\u0440\u044C \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u043D\u0430 \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u043A\u0440\u0443\u0433 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u0430 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C, \u043C\u043E\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 DeepSeek Harness \u0438 API-\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C \u0431\u044B\u0441\u0442\u0440\u043E \u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0441\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F. \n\n\u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0438\u0437\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u0435\u043B\u044B \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0430 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443, \u043E\u043F\u0438\u0440\u0430\u044F\u0441\u044C \u043D\u0430 \u043C\u043D\u043E\u0433\u043E\u0440\u0430\u0437\u043E\u0432\u0443\u044E \u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0443\u0435\u043C\u0443\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C. \u041C\u044B \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u0441\u0435\u0445 \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0438\u0434\u0435\u0438 \u0432 \u0436\u0438\u0437\u043D\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E DeepSeek Harness \u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0433\u0430\u0442\u0438\u0442\u044C \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432.",
  welcomeContinue: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
  welcomeError: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
  onboardingTitle: "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043A\u043B\u044E\u0447 API, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443.",
  onboardingDescription: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 DeepSeek, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u0431\u043E\u0440\u043A\u0443.",
  onboardingLater: "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435",
  onboardingSave: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
  onboardingSaving: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u2026",
  keyRequired: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447 API, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C."
};
var pt = {
  googleSearch: "Pesquisa Google",
  nav: "Modelos",
  deepSeekAccount: "DeepSeek Conta",
  title: "Modelos",
  intro: "Insira suas chaves API para usar modelos dos seguintes fornecedores.",
  edit: "Editar",
  editProvider: "Editar {provider}",
  remove: "Excluir",
  removeProvider: "Excluir {provider}",
  deleteTitle: "Excluir {provider}?",
  deleteDescription: "Excluir {provider} remove sua configura\xE7\xE3o. Qualquer credencial usada \xE9 gerenciada em outro lugar e ser\xE1 mantida.",
  deleteDescriptionWithCredential: "A exclus\xE3o de {provider} remove sua configura\xE7\xE3o e a chave API armazenada.",
  deleteConfirm: "Excluir {provider}",
  deleting: "Excluindo {provider}\u2026",
  add: "Adicionar provedor de modelo",
  addMode: "Como adicionar",
  addCatalog: "Provedor de modelo terceirizado",
  addCustom: "Modelo personalizado API",
  addCatalogHint: "Escolha OpenAI, Anthropic, Kimi ou outro provedor no cat\xE1logo integrado e insira sua chave API.",
  addCustomHint: "Conecte um retransmissor, um servidor auto-hospedado ou qualquer outro endpoint compat\xEDvel com OpenAI, Anthropic ou Gemini por meio de URL, protocolo e modelos b\xE1sicos.",
  addCatalogExhausted: "Cada provedor de cat\xE1logo j\xE1 est\xE1 configurado.",
  addCustomUnavailable: "Nenhum protocolo API est\xE1 dispon\xEDvel para declara\xE7\xE3o.",
  provider: "Provedor",
  close: "Fechar",
  cancel: "Cancelar",
  apply: "Aplicar",
  applying: "Aplicando\u2026",
  savedProvider: "Salvo {provider}.",
  credentialConfigured: "API chave configurada",
  credentialMissing: "API chave faltando",
  accountSignedIn: "Conectado",
  readOnly: "O documento de configura\xE7\xF5es \xE9 somente leitura nesta implanta\xE7\xE3o.",
  loadFailed: "Falha ao carregar o diret\xF3rio do provedor",
  conflict: "Outra pessoa alterou essas configura\xE7\xF5es enquanto este cart\xE3o estava aberto. Feche-o e abra-o novamente para editar os valores atuais.",
  retry: "Tentar novamente",
  keyInput: "API chave",
  keyReveal: "Mostrar segredo",
  keyHide: "Ocultar segredo",
  keyPlaceholder: "Insira sua chave API",
  keyPlaceholderFallback: "Deixe em branco para usar env como autentica\xE7\xE3o ({hint})",
  keySaved: "A chave API salva ser\xE1 usada.",
  keyReplacePending: "Aplique para substituir a chave API salva.",
  keyRemovePending: "Aplique para limpar a chave API salva e usar a autentica\xE7\xE3o do ambiente.",
  keyRemovePendingEnvironment: "Aplique para limpar a chave API salva. A autentica\xE7\xE3o do ambiente ser\xE1 usada ({hint}).",
  keyRemoveApplied: "Chave apagada. Aplique novamente para concluir as configura\xE7\xF5es; a exclus\xE3o n\xE3o pode ser desfeita.",
  keyFallbackMissing: "Env var n\xE3o detectado. Insira uma chave API ou configure {hint} em seu ambiente.",
  keyFallbackDetected: "Vari\xE1vel de ambiente detectada. ({hint})",
  keyFallbackDetectedHidden: "Vari\xE1vel de ambiente detectada.",
  keyFallbackUnchecked: "O status da credencial ambiental n\xE3o foi confirmado.",
  keyHelp: "As credenciais salvas s\xE3o usadas primeiro. Fallbacks de ambiente mostrados aqui, em ordem: {env}. As fontes s\xE3o o ambiente de inicializa\xE7\xE3o, $cwd/.env e, em seguida, $DSH_HOME/.env.",
  authHelp: "Detalhes de autentica\xE7\xE3o",
  customized: "Configura\xE7\xF5es personalizadas",
  baseUrl: "URL base",
  baseUrlDefault: "Nenhum endpoint padr\xE3o",
  baseUrlEnvironment: "Configura\xE7\xE3o do endpoint do provedor: {env}",
  baseUrlConfigured: "Endpoint configurado pelo provedor",
  baseUrlPlaceholder: "{url}",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic (padr\xE3o para usar DEEPSEEK_BASE_URL)",
  deepSeekEndpointHint: "Use um endpoint API compat\xEDvel com Anthropic Messages.",
  retryPolicy: "Pol\xEDtica de novas tentativas",
  retryModeDefault: "Padr\xE3o ({mode})",
  retryModeNormal: "Erros transit\xF3rios",
  retryModeAlways: "Todos os erros",
  retryAlwaysHint: "As solicita\xE7\xF5es com falha s\xE3o repetidas at\xE9 terem sucesso ou at\xE9 o turno ser interrompido.",
  retryMaxRetries: "M\xE1x. de novas tentativas",
  retryCodes: "C\xF3digos de erro",
  retryCodeEmptyResponse: "Resposta vazia",
  retryCodeRateLimit: "Limite de taxa",
  retryCodeServer: "Erro do servidor",
  retryCodeTimeout: "Tempo esgotado",
  retryCodeTransport: "Erro de rede",
  retryCodeStreamClosed: "Fluxo encerrado cedo",
  retryCodeMalformedResponse: "Resposta malformada",
  retryCodeQuota: "Cota esgotada",
  retryCodeCustom: "C\xF3digo de erro personalizado",
  retryCodeAdd: "Adicionar",
  retryInitialDelay: "Atraso inicial (ms)",
  retryMaxDelay: "Atraso m\xE1ximo (ms)",
  retryJitter: "Propor\xE7\xE3o de jitter",
  retryBackoff: "Backoff",
  retryValueNumber: "Insira um n\xFAmero.",
  retryValueInteger: "Insira um n\xFAmero inteiro.",
  retryValuePositive: "Deve ser maior que 0.",
  retryValueMin: "Deve ser no m\xEDnimo {min}.",
  retryValueMax: "Deve ser no m\xE1ximo {max}.",
  retryCodesInvalid: "Os c\xF3digos de erro devem ser texto n\xE3o vazio.",
  retryCodesDuplicate: "Cada c\xF3digo de erro s\xF3 pode aparecer uma vez.",
  retryDelayOrder: "O atraso inicial n\xE3o pode exceder o atraso m\xE1ximo.",
  models: "Modelos",
  modelsInherited: "Usando os padr\xF5es do adaptador",
  modelsCustomized: "Cat\xE1logo de modelos personalizados",
  resetModels: "Restaurar padr\xF5es",
  model: "Modelo",
  modelId: "ID do modelo",
  modelName: "Nome de exibi\xE7\xE3o",
  modelNamePlaceholder: "Usa o ID do modelo quando vazio",
  contextWindow: "Janela de contexto",
  contextWindowPlaceholder: "Usa o padr\xE3o do provedor",
  maxTokens: "M\xE1ximo de tokens de sa\xEDda",
  maxTokensPlaceholder: "Usa o padr\xE3o do provedor",
  modelAdvanced: "Op\xE7\xF5es de modelo",
  modelInputTypes: "Tipos de entrada",
  modelInputText: "Texto",
  modelInputImage: "Imagem",
  modelReasoning: "N\xEDveis de racioc\xEDnio",
  modelReasoningLevel: "N\xEDvel",
  modelReasoningValue: "valor API",
  modelReasoningHelp: "Sobre n\xEDveis de racioc\xEDnio",
  modelReasoningHelpText: "O valor da API \xE9 enviado no campo de esfor\xE7o de racioc\xEDnio da solicita\xE7\xE3o, como reasoning_effort da OpenAI. Por padr\xE3o, usa-se o nome do n\xEDvel; se a documenta\xE7\xE3o da API do provedor do modelo especificar outro valor, use-o. Desativado desliga o racioc\xEDnio e n\xE3o exige valor; qualquer valor j\xE1 salvo na configura\xE7\xE3o \xE9 mantido e enviado.",
  modelReasoningNeedsLevel: "Adicione pelo menos um n\xEDvel al\xE9m de Desativado ou desative os n\xEDveis de racioc\xEDnio.",
  modelReasoningValueRequired: "Cada n\xEDvel al\xE9m de Desligado precisa de um valor API e nenhum valor pode ficar vazio.",
  modelReasoningLevelsOnly: "Este protocolo de API aceita apenas os n\xEDveis minimal, low, medium e high, cada um com o nome do n\xEDvel como valor da API. Altere ou remova os outros n\xEDveis.",
  modelReasoningAdd: "Adicionar n\xEDvel",
  modelReasoningRemove: "Excluir n\xEDvel",
  modelReasoningOffValuePlaceholder: "Desativa o racioc\xEDnio",
  addModel: "Adicionar modelo",
  removeModel: "Excluir modelo",
  reorderModel: "Reordenar modelo",
  reorderModelHelp: "Arraste para reordenar ou use as teclas de seta para cima e para baixo.",
  modelsEmpty: "Nenhum modelo ser\xE1 mostrado no seletor. IDs n\xE3o listados ainda podem ser enviados diretamente.",
  keyBlank: "Insira a chave API ou deixe o campo vazio para manter a chave armazenada.",
  keyBlankNew: "Insira a chave API ou deixe o campo vazio se este provedor autenticar de outra forma.",
  keyIllegalCharacters: "Esta chave API n\xE3o est\xE1 em um formato v\xE1lido. Por favor, verifique.",
  modelIdRequired: "O ID do modelo \xE9 obrigat\xF3rio.",
  modelIdDuplicate: "O ID do modelo deve ser exclusivo.",
  modelNameInvalid: "O nome de exibi\xE7\xE3o n\xE3o pode ficar vazio.",
  modelContextInvalid: "A janela de contexto deve ter uma contagem positiva, como 131072, 256K ou 1M.",
  modelMaxTokensInvalid: "Os tokens de sa\xEDda m\xE1ximos devem ter uma contagem positiva, como 8192, 64K ou 1M.",
  advancedHint: "Outros campos residem em cordis.patch.yml; edite essa se\xE7\xE3o diretamente.",
  modelCapacityInvalid: "Uma capacidade deve ser um n\xFAmero, opcionalmente com o sufixo K ou M.",
  modelDuplicate: "Cada ID de modelo pode aparecer uma vez.",
  fetchModels: "Buscar modelos dispon\xEDveis",
  fetching: "Perguntando ao provedor\u2026",
  fetchNeedsBaseUrl: "Insira o URL base primeiro e depois busque.",
  fetchEmpty: "O fornecedor n\xE3o listou nenhum modelo. Adicione-os manualmente.",
  fetchTitle: "Escolha modelos",
  fetchDescription: "Estes s\xE3o os modelos que este fornecedor tem dispon\xEDveis. Os modelos verificados comp\xF5em a lista.",
  fetchSearch: "Pesquisar modelos",
  fetchNoMatches: "N\xE3o h\xE1 modelos correspondentes.",
  fetchSelectAll: "Selecionar tudo",
  fetchDeselectAll: "Desmarcar tudo",
  fetchAdopt: "Lista de atualiza\xE7\xE3o",
  fetchKeepOne: "Mantenha pelo menos um modelo verificado.",
  customTag: "Personalizado",
  customRoute: "ID do provedor",
  customRouteHint: "Identificador min\xFAsculo, come\xE7ando com uma letra, que nomeia exclusivamente esse provedor nas solicita\xE7\xF5es e como seu nome de credencial.",
  customRouteInvalid: "Comece com uma letra min\xFAscula; em seguida, letras min\xFAsculas, d\xEDgitos e travess\xF5es.",
  customRouteTaken: "Um provedor j\xE1 usa esse ID.",
  customDisplayName: "Nome de exibi\xE7\xE3o",
  customApi: "API protocolo",
  customApiUnset: "N\xE3o selecionado",
  protocolOpenAiCompletions: "Conclus\xF5es do bate-papo OpenAI",
  protocolOpenAiResponses: "Respostas OpenAI",
  protocolAnthropicMessages: "Mensagens Antr\xF3picas",
  protocolGemini: "Gemini API",
  customNeedsBaseUrl: "Um provedor personalizado precisa de um URL base.",
  customBaseUrlInvalid: "Insira um URL HTTP ou HTTPS v\xE1lido.",
  customNeedsModels: "Um provedor personalizado precisa de pelo menos um modelo.",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
  customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
  settingsPathUnresolvable: "caminho de configura\xE7\xF5es insol\xFAveis",
  create: "Criar provedor",
  creating: "Criando\u2026",
  welcomeTitle: "Aviso de visualiza\xE7\xE3o",
  welcomeBody: "DeepSeek Harness 0.2 ainda est\xE1 em vers\xE3o pr\xE9via e muitas \xE1reas precisam de melhorias e refinamentos cont\xEDnuos. Agradecemos coment\xE1rios e sugest\xF5es de todos os desenvolvedores e usu\xE1rios. O novo aplicativo de desktop agora \xE9 direcionado a uma ampla gama de usu\xE1rios, enquanto recursos avan\xE7ados relacionados ao desenvolvedor podem ser habilitados nas configura\xE7\xF5es. Espera-se que os recursos do produto e as APIs de plug-in do DeepSeek Harness continuem com r\xE1pida itera\xE7\xE3o e evolu\xE7\xE3o e se estabilizem gradualmente ao longo do tempo.\n\nEsperamos explorar os limites da intelig\xEAncia junto com usu\xE1rios e desenvolvedores em todo o mundo, desenvolvendo uma infraestrutura de c\xF3digo aberto, reutiliz\xE1vel e combin\xE1vel. Convidamos todos a dar vida \xE0s suas ideias com DeepSeek Harness e participar da comunidade para enriquecer o ecossistema de plug-ins.",
  welcomeContinue: "Continuar",
  welcomeError: "A confirma\xE7\xE3o n\xE3o p\xF4de ser salva. Por favor, tente novamente.",
  onboardingTitle: "Adicione uma chave API para come\xE7ar",
  onboardingDescription: "Configure o provedor DeepSeek oficial para come\xE7ar a compilar.",
  onboardingLater: "Configurar mais tarde",
  onboardingSave: "Salvar e continuar",
  onboardingSaving: "Salvando\u2026",
  keyRequired: "Insira uma chave de API para continuar."
};

// node_modules/@deepseek-ai/cosmokit/lib/index.js
function isNullable(value) {
  return value === null || value === void 0;
}
function isPlainObject(data) {
  return data && typeof data === "object" && !Array.isArray(data);
}
function filterKeys(object, filter) {
  return Object.fromEntries(Object.entries(object).filter(([key, value]) => filter(key, value)));
}
function mapValues(object, transform) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, transform(value, key)]));
}
function pick(source, keys, forced) {
  if (!keys) return { ...source };
  const result = {};
  for (const key of keys) if (forced || source[key] !== void 0) result[key] = source[key];
  return result;
}
var write = /* @__PURE__ */ Symbol.for("cosmokit.volatile.write");
function snapshot(value, ancestors = /* @__PURE__ */ new Set()) {
  if (typeof value === "function") throw new TypeError("volatile config cannot contain functions");
  if (value === null || typeof value !== "object") return value;
  if (ancestors.has(value)) throw new TypeError("volatile config cannot contain cycles");
  ancestors.add(value);
  try {
    if (Array.isArray(value)) return Object.freeze(value.map((item) => snapshot(item, ancestors)));
    if (Object.getPrototypeOf(value) !== Object.prototype && Object.getPrototypeOf(value) !== null) throw new TypeError("volatile config objects must be plain objects or arrays");
    return Object.freeze(Object.fromEntries(Object.entries(value).map(([key, item]) => [key, snapshot(item, ancestors)])));
  } finally {
    ancestors.delete(value);
  }
}
function createVolatile(value) {
  let current = snapshot(value);
  return Object.freeze({
    get: () => current,
    [write]: (value2) => {
      current = value2;
    }
  });
}
function isVolatile(value) {
  return typeof value === "object" && value !== null && write in value;
}
function is(type, value) {
  if (arguments.length === 1) return (value2) => is(type, value2);
  return type in globalThis && value instanceof globalThis[type] || Object.prototype.toString.call(value).slice(8, -1) === type;
}
function isArrayBufferLike(value) {
  return is("ArrayBuffer", value) || is("SharedArrayBuffer", value);
}
function isArrayBufferSource(value) {
  return isArrayBufferLike(value) || ArrayBuffer.isView(value);
}
var Binary;
(function(Binary2) {
  Binary2.is = isArrayBufferLike;
  Binary2.isSource = isArrayBufferSource;
  function fromSource(source) {
    if (ArrayBuffer.isView(source)) return source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength);
    else return source;
  }
  Binary2.fromSource = fromSource;
  function toBase64(source) {
    source = fromSource(source);
    if (typeof Buffer !== "undefined") return Buffer.from(source).toString("base64");
    let binary = "";
    const bytes = new Uint8Array(source);
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
  Binary2.toBase64 = toBase64;
  function fromBase64(source) {
    if (typeof Buffer !== "undefined") return fromSource(Buffer.from(source, "base64"));
    return Uint8Array.from(atob(source), (c) => c.charCodeAt(0));
  }
  Binary2.fromBase64 = fromBase64;
  function toHex(source) {
    source = fromSource(source);
    if (typeof Buffer !== "undefined") return Buffer.from(source).toString("hex");
    return Array.from(new Uint8Array(source), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  Binary2.toHex = toHex;
  function fromHex(source) {
    if (typeof Buffer !== "undefined") return fromSource(Buffer.from(source, "hex"));
    const hex = source.length % 2 === 0 ? source : source.slice(0, source.length - 1);
    const buffer = [];
    for (let i = 0; i < hex.length; i += 2) buffer.push(parseInt(`${hex[i]}${hex[i + 1]}`, 16));
    return Uint8Array.from(buffer).buffer;
  }
  Binary2.fromHex = fromHex;
})(Binary || (Binary = {}));
var base64ToArrayBuffer = Binary.fromBase64;
var arrayBufferToBase64 = Binary.toBase64;
var hexToArrayBuffer = Binary.fromHex;
var arrayBufferToHex = Binary.toHex;
function clone(source, refs = /* @__PURE__ */ new Map()) {
  if (!source || typeof source !== "object") return source;
  if (is("Date", source)) return new Date(source.valueOf());
  if (is("RegExp", source)) return new RegExp(source.source, source.flags);
  if (isArrayBufferLike(source)) return source.slice(0);
  if (ArrayBuffer.isView(source)) return source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength);
  const cached = refs.get(source);
  if (cached) return cached;
  if (Array.isArray(source)) {
    const result2 = [];
    refs.set(source, result2);
    source.forEach((value, index) => {
      result2[index] = Reflect.apply(clone, null, [value, refs]);
    });
    return result2;
  }
  const result = Object.create(Object.getPrototypeOf(source));
  refs.set(source, result);
  for (const key of Reflect.ownKeys(source)) {
    const descriptor = { ...Reflect.getOwnPropertyDescriptor(source, key) };
    if ("value" in descriptor) descriptor.value = Reflect.apply(clone, null, [descriptor.value, refs]);
    Reflect.defineProperty(result, key, descriptor);
  }
  return result;
}
function deepEqual(a, b, strict) {
  const ancestors = /* @__PURE__ */ new Set();
  function compare(a2, b2) {
    if (a2 === b2) return true;
    if (isVolatile(a2) || isVolatile(b2)) return isVolatile(a2) && isVolatile(b2);
    if (!strict && isNullable(a2) && isNullable(b2)) return true;
    if (typeof a2 !== typeof b2 || typeof a2 !== "object" || !a2 || !b2) return false;
    if (ancestors.has(a2)) return false;
    function check(test, then) {
      return test(a2) ? test(b2) ? then(a2, b2) : false : test(b2) ? false : void 0;
    }
    ancestors.add(a2);
    try {
      return check(Array.isArray, (a3, b3) => {
        if (a3.length !== b3.length) return false;
        for (let index = 0; index < a3.length; index++) if (!compare(a3[index], b3[index])) return false;
        return true;
      }) ?? check(is("Date"), (a3, b3) => a3.valueOf() === b3.valueOf()) ?? check(is("URL"), (a3, b3) => a3.href === b3.href) ?? check(is("RegExp"), (a3, b3) => a3.source === b3.source && a3.flags === b3.flags) ?? check(isArrayBufferLike, (a3, b3) => {
        if (a3.byteLength !== b3.byteLength) return false;
        const viewA = new Uint8Array(a3);
        const viewB = new Uint8Array(b3);
        for (let i = 0; i < viewA.length; i++) if (viewA[i] !== viewB[i]) return false;
        return true;
      }) ?? ((!strict || [a2, b2].every((value) => Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null)) && Object.keys({
        ...a2,
        ...b2
      }).every((key) => compare(a2[key], b2[key])));
    } finally {
      ancestors.delete(a2);
    }
  }
  return compare(a, b);
}
var Time;
(function(Time2) {
  Time2.millisecond = 1;
  Time2.second = 1e3;
  Time2.minute = Time2.second * 60;
  Time2.hour = Time2.minute * 60;
  Time2.day = Time2.hour * 24;
  Time2.week = Time2.day * 7;
  let timezoneOffset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
  function setTimezoneOffset(offset) {
    timezoneOffset = offset;
  }
  Time2.setTimezoneOffset = setTimezoneOffset;
  function getTimezoneOffset() {
    return timezoneOffset;
  }
  Time2.getTimezoneOffset = getTimezoneOffset;
  function getDateNumber(date2 = /* @__PURE__ */ new Date(), offset) {
    if (typeof date2 === "number") date2 = new Date(date2);
    if (offset === void 0) offset = timezoneOffset;
    return Math.floor((date2.valueOf() / Time2.minute - offset) / 1440);
  }
  Time2.getDateNumber = getDateNumber;
  function fromDateNumber(value, offset) {
    const date2 = new Date(value * Time2.day);
    if (offset === void 0) offset = timezoneOffset;
    return new Date(+date2 + offset * Time2.minute);
  }
  Time2.fromDateNumber = fromDateNumber;
  const numeric = /\d+(?:\.\d+)?/.source;
  const timeRegExp = new RegExp(`^${[
    "w(?:eek(?:s)?)?",
    "d(?:ay(?:s)?)?",
    "h(?:our(?:s)?)?",
    "m(?:in(?:ute)?(?:s)?)?",
    "s(?:ec(?:ond)?(?:s)?)?"
  ].map((unit) => `(${numeric}${unit})?`).join("")}$`);
  function parseTime(source) {
    const capture = timeRegExp.exec(source);
    if (!capture) return 0;
    return (parseFloat(capture[1]) * Time2.week || 0) + (parseFloat(capture[2]) * Time2.day || 0) + (parseFloat(capture[3]) * Time2.hour || 0) + (parseFloat(capture[4]) * Time2.minute || 0) + (parseFloat(capture[5]) * Time2.second || 0);
  }
  Time2.parseTime = parseTime;
  function parseDate(date2) {
    const parsed = parseTime(date2);
    if (parsed) date2 = Date.now() + parsed;
    else if (/^\d{1,2}(:\d{1,2}){1,2}$/.test(date2)) date2 = `${(/* @__PURE__ */ new Date()).toLocaleDateString()}-${date2}`;
    else if (/^\d{1,2}-\d{1,2}-\d{1,2}(:\d{1,2}){1,2}$/.test(date2)) date2 = `${(/* @__PURE__ */ new Date()).getFullYear()}-${date2}`;
    return date2 ? new Date(date2) : /* @__PURE__ */ new Date();
  }
  Time2.parseDate = parseDate;
  function format(ms) {
    const abs = Math.abs(ms);
    if (abs >= Time2.day - Time2.hour / 2) return Math.round(ms / Time2.day) + "d";
    else if (abs >= Time2.hour - Time2.minute / 2) return Math.round(ms / Time2.hour) + "h";
    else if (abs >= Time2.minute - Time2.second / 2) return Math.round(ms / Time2.minute) + "m";
    else if (abs >= Time2.second) return Math.round(ms / Time2.second) + "s";
    return ms + "ms";
  }
  Time2.format = format;
  function toDigits(source, length = 2) {
    return source.toString().padStart(length, "0");
  }
  Time2.toDigits = toDigits;
  function template(template2, time = /* @__PURE__ */ new Date()) {
    return template2.replace("yyyy", time.getFullYear().toString()).replace("yy", time.getFullYear().toString().slice(2)).replace("MM", toDigits(time.getMonth() + 1)).replace("dd", toDigits(time.getDate())).replace("hh", toDigits(time.getHours())).replace("mm", toDigits(time.getMinutes())).replace("ss", toDigits(time.getSeconds())).replace("SSS", toDigits(time.getMilliseconds(), 3));
  }
  Time2.template = template;
})(Time || (Time = {}));

// node_modules/@deepseek-ai/schemastery/lib/index.mjs
var kSchema = /* @__PURE__ */ Symbol.for("schemastery");
var kValidationError = /* @__PURE__ */ Symbol.for("ValidationError");
globalThis.__schemastery_index__ ??= 0;
globalThis.__schemastery_refs__ = void 0;
var ValidationError = class extends TypeError {
  options;
  name = "ValidationError";
  constructor(message, options) {
    let prefix = "$";
    for (const segment of options.path || []) if (typeof segment === "string") prefix += "." + segment;
    else if (typeof segment === "number") prefix += "[" + segment + "]";
    else if (typeof segment === "symbol") prefix += `[Symbol(${segment.toString()})]`;
    if (prefix.startsWith(".")) prefix = prefix.slice(1);
    super((prefix === "$" ? "" : `${prefix} `) + message);
    this.options = options;
  }
  static is(error) {
    return !!error?.[kValidationError];
  }
};
Object.defineProperty(ValidationError.prototype, kValidationError, { value: true });
var Schema = function(options) {
  const schema = function(data, options2 = {}) {
    return Schema.resolve(data, schema, options2)[0];
  };
  if (options.refs) {
    const refs = mapValues(options.refs, (options2) => new Schema(options2));
    const getRef = (uid) => refs[uid];
    for (const key in refs) {
      const options2 = refs[key];
      options2.sKey = getRef(options2.sKey);
      options2.inner = getRef(options2.inner);
      options2.list = options2.list && options2.list.map(getRef);
      options2.dict = options2.dict && mapValues(options2.dict, getRef);
    }
    return refs[options.uid];
  }
  Object.assign(schema, options);
  if (typeof schema.callback === "string") try {
    schema.callback = new Function("return " + schema.callback)();
  } catch {
  }
  Object.defineProperty(schema, "uid", { value: globalThis.__schemastery_index__++ });
  Object.setPrototypeOf(schema, Schema.prototype);
  schema.meta ||= {};
  schema.toString = schema.toString.bind(schema);
  return schema;
};
Schema.prototype = Object.create(Function.prototype);
Schema.prototype[kSchema] = true;
Object.defineProperty(Schema.prototype, "~standard", { get() {
  return {
    version: 1,
    vendor: "schemastery",
    validate: (value) => {
      try {
        return { value: Schema.resolve(value, this, {})[0] };
      } catch (error) {
        if (ValidationError.is(error)) return { issues: [{
          message: error.message,
          path: error.options.path
        }] };
        throw error;
      }
    }
  };
} });
Schema.ValidationError = ValidationError;
Schema.prototype.toJSON = function toJSON() {
  if (globalThis.__schemastery_refs__) {
    globalThis.__schemastery_refs__[this.uid] ??= JSON.parse(JSON.stringify({ ...this }));
    return this.uid;
  }
  globalThis.__schemastery_refs__ = { [this.uid]: { ...this } };
  globalThis.__schemastery_refs__[this.uid] = JSON.parse(JSON.stringify({ ...this }));
  const result = {
    uid: this.uid,
    refs: globalThis.__schemastery_refs__
  };
  globalThis.__schemastery_refs__ = void 0;
  return result;
};
Schema.prototype.set = function set(key, value) {
  this.dict[key] = value;
  return this;
};
Schema.prototype.push = function push(value) {
  this.list.push(value);
  return this;
};
function mergeDesc(original, messages) {
  const result = typeof original === "string" ? { "": original } : { ...original };
  for (const locale in messages) {
    const value = messages[locale];
    if (value?.$description || value?.$desc) result[locale] = value.$description || value.$desc;
    else if (typeof value === "string") result[locale] = value;
  }
  return result;
}
function getInner(value) {
  return value?.$value ?? value?.$inner;
}
function extractKeys(data) {
  return filterKeys(data ?? {}, (key) => !key.startsWith("$"));
}
Schema.prototype.i18n = function i18n(messages) {
  const schema = Schema(this);
  const desc = mergeDesc(schema.meta.description, messages);
  if (Object.keys(desc).length) schema.meta.description = desc;
  if (schema.dict) schema.dict = mapValues(schema.dict, (inner, key) => {
    return inner.i18n(mapValues(messages, (data) => getInner(data)?.[key] ?? data?.[key]));
  });
  if (schema.list) schema.list = schema.list.map((inner, index) => {
    return inner.i18n(mapValues(messages, (data = {}) => {
      if (Array.isArray(getInner(data))) return getInner(data)[index];
      if (Array.isArray(data)) return data[index];
      return extractKeys(data);
    }));
  });
  if (schema.inner) schema.inner = schema.inner.i18n(mapValues(messages, (data) => {
    if (getInner(data)) return getInner(data);
    return extractKeys(data);
  }));
  if (schema.sKey) schema.sKey = schema.sKey.i18n(mapValues(messages, (data) => data?.$key));
  return schema;
};
Schema.prototype.extra = function extra(key, value) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    [key]: value
  };
  return schema;
};
for (const key of [
  "required",
  "disabled",
  "collapse",
  "hidden",
  "loose"
]) Object.assign(Schema.prototype, { [key](value = true) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    [key]: value
  };
  return schema;
} });
Schema.prototype.deprecated = function deprecated() {
  const schema = Schema(this);
  schema.meta.badges ||= [];
  schema.meta.badges.push({
    text: "deprecated",
    type: "danger"
  });
  return schema;
};
Schema.prototype.experimental = function experimental() {
  const schema = Schema(this);
  schema.meta.badges ||= [];
  schema.meta.badges.push({
    text: "experimental",
    type: "warning"
  });
  return schema;
};
Schema.prototype.pattern = function pattern(regexp) {
  const schema = Schema(this);
  const pattern2 = pick(regexp, ["source", "flags"]);
  schema.meta = {
    ...schema.meta,
    pattern: pattern2
  };
  return schema;
};
Schema.prototype.simplify = function simplify(value) {
  if (isVolatile(value)) value = value.get();
  if (deepEqual(value, this.meta.default, this.type === "dict")) return null;
  if (isNullable(value)) return value;
  if (this.type === "object" || this.type === "dict") {
    const result = {};
    for (const key in value) {
      const item = (this.type === "object" ? this.dict[key] : this.inner)?.simplify(value[key]);
      if (this.type === "dict" || !isNullable(item)) result[key] = item;
    }
    if (deepEqual(result, this.meta.default, this.type === "dict")) return null;
    return result;
  } else if (this.type === "array" || this.type === "tuple") {
    const result = [];
    value.forEach((value2, index) => {
      const schema = this.type === "array" ? this.inner : this.list[index];
      const item = schema ? schema.simplify(value2) : value2;
      result.push(item);
    });
    return result;
  } else if (this.type === "intersect") {
    const result = {};
    for (const item of this.list) Object.assign(result, item.simplify(value));
    return result;
  } else if (this.type === "union") for (const schema of this.list) try {
    Schema.resolve(value, schema, {});
    return schema.simplify(value);
  } catch {
  }
  return value;
};
Schema.prototype.toString = function toString(inline) {
  return formatters[this.type]?.(this, inline) ?? `Schema<${this.type}>`;
};
Schema.prototype.role = function role(role, extra2) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    role,
    extra: extra2
  };
  return schema;
};
for (const key of [
  "default",
  "link",
  "comment",
  "description",
  "max",
  "min",
  "step"
]) Object.assign(Schema.prototype, { [key](value) {
  const schema = Schema(this);
  schema.meta = {
    ...schema.meta,
    [key]: value
  };
  return schema;
} });
Schema.prototype.volatile = function volatile() {
  if (this.meta.volatile) throw new TypeError("volatile schema is already wrapped");
  return this.extra("volatile", true);
};
var resolvers = {};
var checkedVolatile = /* @__PURE__ */ Symbol("checked-volatile-schema");
function validateVolatileSchema(schema, path = [], blocked = false, seen = /* @__PURE__ */ new Map()) {
  const states = seen.get(schema) ?? /* @__PURE__ */ new Set();
  if (states.has(blocked)) return;
  states.add(blocked);
  seen.set(schema, states);
  if (schema.meta?.volatile && blocked) throw new ValidationError("volatile fields require a fixed object path without an enclosing volatile field", { path });
  const nested = blocked || !!schema.meta?.volatile;
  if (schema.dict) for (const [key, child] of Object.entries(schema.dict)) validateVolatileSchema(child, [...path, key], nested, seen);
  if (schema.sKey) validateVolatileSchema(schema.sKey, [...path, "<key>"], true, seen);
  if (schema.inner && (schema.type !== "lazy" || schema.inner[kSchema])) validateVolatileSchema(schema.inner, [...path, "*"], true, seen);
  if (schema.list) for (let index = 0; index < schema.list.length; index++) validateVolatileSchema(schema.list[index], [...path, String(index)], true, seen);
}
Schema.extend = function extend(type, resolve2) {
  resolvers[type] = resolve2;
};
Schema.resolve = function resolve(data, schema, options = {}, strict = false) {
  if (!schema) return [data];
  if (!options[checkedVolatile]) {
    validateVolatileSchema(schema, options.path);
    options = {
      ...options,
      [checkedVolatile]: true
    };
  }
  if (schema.meta?.volatile) {
    const inner = Schema(schema);
    inner.meta = {
      ...schema.meta,
      volatile: false
    };
    const [value, adapted] = Schema.resolve(data, inner, options, strict);
    try {
      return [createVolatile(value), adapted];
    } catch (error) {
      throw new ValidationError(error instanceof Error ? error.message : String(error), options);
    }
  }
  if (options.ignore?.(data, schema)) return [data];
  if (isNullable(data) && schema.type !== "lazy") {
    if (schema.meta.required) throw new ValidationError(`missing required value`, options);
    let current = schema;
    let fallback = schema.meta.default;
    while (current?.type === "intersect" && isNullable(fallback)) {
      current = current.list[0];
      fallback = current?.meta.default;
    }
    if (isNullable(fallback)) return [data];
    data = clone(fallback);
  }
  const callback = resolvers[schema.type];
  if (!callback) throw new ValidationError(`unsupported type "${schema.type}"`, options);
  try {
    return callback(data, schema, options, strict);
  } catch (error) {
    if (!schema.meta.loose) throw error;
    return [schema.meta.default];
  }
};
Schema.from = function from(source) {
  if (isNullable(source)) return Schema.any();
  else if ([
    "string",
    "number",
    "boolean"
  ].includes(typeof source)) return Schema.const(source).required();
  else if (source[kSchema]) return source;
  else if (typeof source === "function") switch (source) {
    case String:
      return Schema.string().required();
    case Number:
      return Schema.number().required();
    case Boolean:
      return Schema.boolean().required();
    case Function:
      return Schema.function().required();
    default:
      return Schema.is(source).required();
  }
  else throw new TypeError(`cannot infer schema from ${source}`);
};
Schema.lazy = function lazy(builder) {
  const toJSON2 = () => {
    if (!schema.inner[kSchema]) {
      schema.inner = schema.builder();
      schema.inner.meta = {
        ...schema.meta,
        ...schema.inner.meta
      };
    }
    return schema.inner.toJSON();
  };
  const schema = new Schema({
    type: "lazy",
    builder,
    inner: { toJSON: toJSON2 }
  });
  return schema;
};
Schema.natural = function natural() {
  return Schema.number().step(1).min(0);
};
Schema.percent = function percent() {
  return Schema.number().step(0.01).min(0).max(1).role("slider");
};
Schema.date = function date() {
  return Schema.union([Schema.is(Date), Schema.transform(Schema.string().role("datetime"), (value, options) => {
    const date2 = new Date(value);
    if (isNaN(+date2)) throw new ValidationError(`invalid date "${value}"`, options);
    return date2;
  }, true)]);
};
Schema.regExp = function regExp(flag = "") {
  return Schema.union([Schema.is(RegExp), Schema.transform(Schema.string().role("regexp", { flag }), (value, options) => {
    try {
      return new RegExp(value, flag);
    } catch (e) {
      throw new ValidationError(e.message, options);
    }
  }, true)]);
};
Schema.arrayBuffer = function arrayBuffer(encoding) {
  return Schema.union([
    Schema.is(ArrayBuffer),
    Schema.is(SharedArrayBuffer),
    Schema.transform(Schema.any(), (value, options) => {
      if (Binary.isSource(value)) return Binary.fromSource(value);
      throw new ValidationError(`expected ArrayBufferSource but got ${value}`, options);
    }, true),
    ...encoding ? [Schema.transform(Schema.string(), (value, options) => {
      try {
        return encoding === "base64" ? Binary.fromBase64(value) : Binary.fromHex(value);
      } catch (e) {
        throw new ValidationError(e.message, options);
      }
    }, true)] : []
  ]);
};
Schema.extend("lazy", (data, schema, options, strict) => {
  if (!schema.inner[kSchema]) {
    schema.inner = schema.builder();
    schema.inner.meta = {
      ...schema.meta,
      ...schema.inner.meta
    };
    validateVolatileSchema(schema.inner, options.path, true);
  }
  return Schema.resolve(data, schema.inner, options, strict);
});
Schema.extend("any", (data) => {
  return [data];
});
Schema.extend("never", (data, _, options) => {
  throw new ValidationError(`expected nullable but got ${data}`, options);
});
Schema.extend("const", (data, { value }, options) => {
  if (deepEqual(data, value)) return [value];
  throw new ValidationError(`expected ${value} but got ${data}`, options);
});
function checkWithinRange(data, meta, description, options, skipMin = false) {
  const { max = Infinity, min = -Infinity } = meta;
  if (data > max) throw new ValidationError(`expected ${description} <= ${max} but got ${data}`, options);
  if (data < min && !skipMin) throw new ValidationError(`expected ${description} >= ${min} but got ${data}`, options);
}
Schema.extend("string", (data, { meta }, options) => {
  if (typeof data !== "string") throw new ValidationError(`expected string but got ${data}`, options);
  if (meta.pattern) {
    const regexp = new RegExp(meta.pattern.source, meta.pattern.flags);
    if (!regexp.test(data)) throw new ValidationError(`expect string to match regexp ${regexp}`, options);
  }
  checkWithinRange(data.length, meta, "string length", options);
  return [data];
});
function decimalShift(data, digits) {
  const str = data.toString();
  if (str.includes("e")) return data * Math.pow(10, digits);
  const index = str.indexOf(".");
  if (index === -1) return data * Math.pow(10, digits);
  const frac = str.slice(index + 1);
  const integer = str.slice(0, index);
  if (frac.length <= digits) return +(integer + frac.padEnd(digits, "0"));
  return +(integer + frac.slice(0, digits) + "." + frac.slice(digits));
}
function isMultipleOf(data, min, step) {
  step = Math.abs(step);
  if (!/^\d+\.\d+$/.test(step.toString())) return (data - min) % step === 0;
  const index = step.toString().indexOf(".");
  const digits = step.toString().slice(index + 1).length;
  return Math.abs(decimalShift(data, digits) - decimalShift(min, digits)) % decimalShift(step, digits) === 0;
}
Schema.extend("number", (data, { meta }, options) => {
  if (typeof data !== "number") throw new ValidationError(`expected number but got ${data}`, options);
  checkWithinRange(data, meta, "number", options);
  const { step } = meta;
  if (step && !isMultipleOf(data, meta.min ?? 0, step)) throw new ValidationError(`expected number multiple of ${step} but got ${data}`, options);
  return [data];
});
Schema.extend("boolean", (data, _, options) => {
  if (typeof data === "boolean") return [data];
  throw new ValidationError(`expected boolean but got ${data}`, options);
});
Schema.extend("bitset", (data, { bits, meta }, options) => {
  let value = 0, keys = [];
  if (typeof data === "number") {
    value = data;
    for (const key in bits) if (data & bits[key]) keys.push(key);
  } else if (Array.isArray(data)) {
    keys = data;
    for (const key of keys) {
      if (typeof key !== "string") throw new ValidationError(`expected string but got ${key}`, options);
      if (key in bits) value |= bits[key];
    }
  } else throw new ValidationError(`expected number or array but got ${data}`, options);
  if (value === meta.default) return [value];
  return [value, keys];
});
Schema.extend("function", (data, _, options) => {
  if (typeof data === "function") return [data];
  throw new ValidationError(`expected function but got ${data}`, options);
});
Schema.extend("is", (data, { constructor }, options) => {
  if (typeof constructor === "function") {
    if (data instanceof constructor) return [data];
    throw new ValidationError(`expected ${constructor.name} but got ${data}`, options);
  } else {
    if (isNullable(data)) throw new ValidationError(`expected ${constructor} but got ${data}`, options);
    let prototype = Object.getPrototypeOf(data);
    while (prototype) {
      if (prototype.constructor?.name === constructor) return [data];
      prototype = Object.getPrototypeOf(prototype);
    }
    throw new ValidationError(`expected ${constructor} but got ${data}`, options);
  }
});
function property(data, key, schema, options) {
  try {
    const [value, adapted] = Schema.resolve(data[key], schema, {
      ...options,
      path: [...options.path || [], key]
    });
    if (adapted !== void 0) data[key] = adapted;
    return value;
  } catch (e) {
    if (!options?.autofix) throw e;
    delete data[key];
    return schema.meta.volatile ? createVolatile(schema.meta.default) : schema.meta.default;
  }
}
Schema.extend("array", (data, { inner, meta }, options) => {
  if (!Array.isArray(data)) throw new ValidationError(`expected array but got ${data}`, options);
  checkWithinRange(data.length, meta, "array length", options, !isNullable(inner.meta.default));
  return [data.map((_, index) => property(data, index, inner, options))];
});
Schema.extend("dict", (data, { inner, sKey }, options, strict) => {
  if (!isPlainObject(data)) throw new ValidationError(`expected object but got ${data}`, options);
  const result = {};
  for (const key in data) {
    let rKey;
    try {
      rKey = Schema.resolve(key, sKey, options)[0];
    } catch (error) {
      if (strict) continue;
      throw error;
    }
    result[rKey] = property(data, key, inner, options);
    data[rKey] = data[key];
    if (key !== rKey) delete data[key];
  }
  return [result];
});
Schema.extend("tuple", (data, { list }, options, strict) => {
  if (!Array.isArray(data)) throw new ValidationError(`expected array but got ${data}`, options);
  const result = list.map((inner, index) => property(data, index, inner, options));
  if (strict) return [result];
  result.push(...data.slice(list.length));
  return [result];
});
function merge(result, data) {
  for (const key in data) {
    if (key in result) continue;
    result[key] = data[key];
  }
}
Schema.extend("object", (data, { dict }, options, strict) => {
  if (!isPlainObject(data)) throw new ValidationError(`expected object but got ${data}`, options);
  const result = {};
  for (const key in dict) {
    const value = property(data, key, dict[key], options);
    if (!isNullable(value) || key in data) result[key] = value;
  }
  if (!strict) merge(result, data);
  return [result];
});
Schema.extend("union", (data, { list, toString: toString2 }, options, strict) => {
  const messages = [];
  for (const inner of list) try {
    return Schema.resolve(data, inner, options, strict);
  } catch (error) {
    messages.push(error);
  }
  throw new ValidationError(`expected ${toString2()} but got ${JSON.stringify(data)}`, options);
});
Schema.extend("intersect", (data, { list, toString: toString2 }, options, strict) => {
  if (!list.length) return [data];
  let result;
  for (const inner of list) {
    const value = Schema.resolve(data, inner, options, true)[0];
    if (isNullable(value)) continue;
    if (isNullable(result)) result = value;
    else if (typeof result !== typeof value) throw new ValidationError(`expected ${toString2()} but got ${JSON.stringify(data)}`, options);
    else if (typeof value === "object") merge(result ??= {}, value);
    else if (result !== value) throw new ValidationError(`expected ${toString2()} but got ${JSON.stringify(data)}`, options);
  }
  if (!strict && isPlainObject(data)) merge(result, data);
  return [result];
});
Schema.extend("transform", (data, { inner, callback, preserve }, options) => {
  const [result, adapted = data] = Schema.resolve(data, inner, options, true);
  if (preserve) return [callback(result)];
  else return [callback(result), callback(adapted)];
});
var formatters = {};
function defineMethod(name, keys, format) {
  formatters[name] = format;
  Object.assign(Schema, { [name](...args) {
    const schema = new Schema({ type: name });
    keys.forEach((key, index) => {
      switch (key) {
        case "sKey":
          schema.sKey = args[index] ?? Schema.string();
          break;
        case "inner":
          schema.inner = Schema.from(args[index]);
          break;
        case "list":
          schema.list = args[index].map(Schema.from);
          break;
        case "dict":
          schema.dict = mapValues(args[index], Schema.from);
          break;
        case "bits":
          schema.bits = {};
          for (const key2 in args[index]) {
            if (typeof args[index][key2] !== "number") continue;
            schema.bits[key2] = args[index][key2];
          }
          break;
        case "callback": {
          const callback = schema.callback = args[index];
          callback["toJSON"] ||= () => callback.toString();
          break;
        }
        case "constructor": {
          const constructor = schema.constructor = args[index];
          if (typeof constructor === "function") constructor["toJSON"] ||= () => constructor["name"];
          break;
        }
        default:
          schema[key] = args[index];
      }
    });
    if (name === "object" || name === "dict") schema.meta.default = {};
    else if (name === "array" || name === "tuple") schema.meta.default = [];
    else if (name === "bitset") schema.meta.default = 0;
    return schema;
  } });
}
defineMethod("is", ["constructor"], ({ constructor }) => {
  if (typeof constructor === "function") return constructor.name;
  else return constructor;
});
defineMethod("any", [], () => "any");
defineMethod("never", [], () => "never");
defineMethod("const", ["value"], ({ value }) => typeof value === "string" ? JSON.stringify(value) : value);
defineMethod("string", [], () => "string");
defineMethod("number", [], () => "number");
defineMethod("boolean", [], () => "boolean");
defineMethod("bitset", ["bits"], () => "bitset");
defineMethod("function", [], () => "function");
defineMethod("array", ["inner"], ({ inner }) => `${inner.toString(true)}[]`);
defineMethod("dict", ["inner", "sKey"], ({ inner, sKey }) => `{ [key: ${sKey.toString()}]: ${inner.toString()} }`);
defineMethod("tuple", ["list"], ({ list }) => `[${list.map((inner) => inner.toString()).join(", ")}]`);
defineMethod("object", ["dict"], ({ dict }) => {
  if (Object.keys(dict).length === 0) return "{}";
  return `{ ${Object.entries(dict).map(([key, inner]) => {
    return `${key}${inner.meta.required ? "" : "?"}: ${inner.toString()}`;
  }).join(", ")} }`;
});
defineMethod("union", ["list"], ({ list }, inline) => {
  const result = list.map(({ toString: format }) => format()).join(" | ");
  return inline ? `(${result})` : result;
});
defineMethod("intersect", ["list"], ({ list }) => {
  return `${list.map((inner) => inner.toString(true)).join(" & ")}`;
});
defineMethod("transform", [
  "inner",
  "callback",
  "preserve"
], ({ inner }, isInner) => inner.toString(isInner));

// vendor/ui-settings-models/src/onboarding-config.ts
var Config = Schema.object({
  credentialOnboarding: Schema.boolean().default(true)
});
var ONBOARDING_CONFIG_GLOBAL = "__DSH_MODELS_ONBOARDING__";

// vendor/ui-settings-models/src/client/index.ts
var NS2 = "settings.models";
function refreshIfLoaded(controller) {
  if (controller.store.getSnapshot().status === "idle") return;
  void controller.load();
}
var inject = [
  "slots",
  "locale",
  "remote",
  "remote.credentials",
  "remote.llm",
  "remote.settings",
  "remote.session",
  "configForms",
  "settingsSchema"
];
function apply(ctx) {
  const page = globalThis;
  const payload = page[ONBOARDING_CONFIG_GLOBAL];
  const configured = Config(payload === void 0 ? {} : payload);
  const credentialOnboarding = configured.credentialOnboarding && !("dshDesktop" in globalThis);
  ctx.effect(() => ctx.locale.register(NS2, { zh, en, ja, es, fr, de, ru, pt }), "ui-settings-models: copy dictionaries");
  const schema = createSettingsSchemaOperations(ctx.settingsSchema);
  const operations = createModelsOperations(ctx);
  const controller = new ModelsSettingsStore(ctx, schema, ctx.configForms.describe());
  const t = ctx.locale.bind(NS2);
  const injected = () => ({
    controller,
    hooks: { snapshot: controller.store },
    operations,
    schema,
    t
  });
  const deepSeekOnboardingInjected = () => ({
    automatic: credentialOnboarding,
    track: (name, attributes) => ctx.get("productAnalytics")?.track(name, attributes),
    controller,
    hooks: { models: controller.store },
    operations,
    schema,
    t
  });
  const welcomeController = new WelcomeNoticeStore(ctx.configForms.get(WELCOME_NOTICE_SETTINGS_NAMESPACE));
  const welcomeInjected = () => ({
    controller: welcomeController,
    hooks: { welcome: welcomeController.store },
    t
  });
  ctx.effect(() => {
    const refreshModels = () => {
      refreshIfLoaded(controller);
    };
    const disposers = [
      ctx.remote.$on("settings/document-updated", () => {
        refreshModels();
      }),
      ctx.remote.$on("credentials/record-updated", refreshModels),
      ctx.remote.$on("credentials/reference-updated", refreshModels),
      ctx.remote.$on("llm/adapters-updated", refreshModels),
      ctx.on("connection/reset", refreshModels)
    ];
    return () => {
      welcomeController.dispose();
      for (const dispose of disposers) dispose();
    };
  }, "ui-settings-models: pushed invalidations");
  ctx.slots.inject("settings.section", () => ctx.slots.register({
    name: "settings.section",
    id: "models",
    order: 10,
    label: () => t("nav"),
    inject: injected,
    children: {
      "settings.models.provider-card": { kind: "keyed", scope: "root" },
      "settings.models.footer": { kind: "list", scope: "root" }
    }
  }, ModelsSection));
  if (!("dshDesktop" in globalThis)) ctx.slots.inject("settings.onboarding", () => ctx.slots.register({
    name: "settings.onboarding",
    id: "welcome-notice",
    order: -100,
    inject: welcomeInjected
  }, WelcomeNotice));
  ctx.slots.inject("settings.onboarding", () => ctx.slots.register({
    name: "settings.onboarding",
    id: "deepseek-official",
    children: { "settings.models.sign-in": { kind: "single", scope: "root" } },
    order: 0,
    inject: deepSeekOnboardingInjected
  }, DeepSeekOnboardingDialog));
}

// src/client/index.ts
function apply2(ctx) {
  ctx.effect(() => {
    const style = document.createElement("style");
    style.dataset.plugin = "dsh-gemini-native-models";
    style.textContent = `/* vendor/ui-settings-models/src/client/ModelsSection.module.css */
.ModelsSection_section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
  color: var(--dsw-alias-label-primary);
}
.ModelsSection_title {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary);
}
.ModelsSection_intro {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--dsw-alias-label-tertiary);
}
.ModelsSection_notice {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-state-warn-label);
}
.ModelsSection_savedNotice {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-state-success-primary);
}
.ModelsSection_rows {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ModelsSection_rowCard {
  border: 0.5px solid var(--dsw-alias-settings-card-stroke);
  background: var(--dsw-alias-settings-card-fill);
  border-radius: var(--dsw-radius-xl);
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ModelsSection_rowHead {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ModelsSection_rowIdentity {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}
.ModelsSection_rowName {
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary);
}
.ModelsSection_rowTag {
  flex: none;
  padding: 1px 6px;
  border: 0.5px solid var(--dsw-alias-border-l3);
  border-radius: var(--dsw-radius-xs);
  font-size: 11px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary);
}
.ModelsSection_credentialDot {
  box-sizing: border-box;
  display: inline-block;
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  corner-shape: round;
}
.ModelsSection_credentialDotConfigured {
  background: var(--dsw-alias-state-success-primary);
}
.ModelsSection_credentialDotMissing {
  background: var(--dsw-alias-state-error-primary);
}
.ModelsSection_accountStatus {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-state-success-primary);
}
.ModelsSection_rowActions {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}
.ModelsSection_primaryButton,
.ModelsSection_secondaryButton,
.ModelsSection_addButton {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 36px;
  padding: 0 14px;
  border: none;
  border-radius: var(--dsw-radius-md);
  font: inherit;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
}
.ModelsSection_primaryButton {
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}
@media (hover: hover) {
  .ModelsSection_primaryButton:hover:not(:disabled) {
    background: var(--dsw-alias-button-primary-hover);
  }
}
.ModelsSection_secondaryButton,
.ModelsSection_addButton {
  border: 0.5px solid var(--dsw-alias-border-l3);
  background: transparent;
  color: var(--dsw-alias-label-primary);
}
@media (hover: hover) {
  .ModelsSection_secondaryButton:hover:not(:disabled),
  .ModelsSection_addButton:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover);
  }
  .ModelsSection_secondaryButton:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover-solid);
  }
}
.ModelsSection_dangerButton {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 14px;
  border: none;
  border-radius: var(--dsw-radius-md);
  background: transparent;
  color: var(--dsw-alias-state-error-primary);
  font: inherit;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
}
@media (hover: hover) {
  .ModelsSection_dangerButton:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover-danger);
  }
}
.ModelsSection_rowActions .ModelsSection_secondaryButton,
.ModelsSection_rowActions .ModelsSection_dangerButton {
  height: 28px;
  padding: 0 10px;
  border-radius: var(--dsw-radius-sm);
  font-size: 12px;
  line-height: 18px;
}
.ModelsSection_primaryButton:disabled,
.ModelsSection_secondaryButton:disabled,
.ModelsSection_dangerButton:disabled,
.ModelsSection_addButton:disabled,
.ModelsSection_linkButton:disabled,
.ModelsSection_addModelButton:disabled {
  opacity: 0.4;
  cursor: default;
}
.ModelsSection_primaryButton:focus-visible,
.ModelsSection_secondaryButton:focus-visible,
.ModelsSection_dangerButton:focus-visible,
.ModelsSection_addButton:focus-visible,
.ModelsSection_linkButton:focus-visible,
.ModelsSection_addModelButton:focus-visible,
.ModelsSection_iconButton:focus-visible,
.ModelsSection_customizedSummary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
}
.ModelsSection_editor {
  border-radius: var(--dsw-radius-lg);
  background: var(--dsw-alias-bg-module-platform);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.ModelsSection_editorHeader {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.ModelsSection_editorTitle {
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary);
}
.ModelsSection_editorRoute {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-tertiary);
}
.ModelsSection_field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ModelsSection_fieldLabel {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: var(--dsw-alias-label-secondary);
}
.ModelsSection_helpButton {
  width: 16px;
  height: 16px;
  padding: 0;
  border: 0.5px solid var(--dsw-alias-border-l3);
  border-radius: 50%;
  corner-shape: round;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font: inherit;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  cursor: help;
}
.ModelsSection_helpButton:focus-visible {
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-label-tertiary);
}
@media (hover: hover) {
  .ModelsSection_helpButton:hover {
    color: var(--dsw-alias-label-primary);
    border-color: var(--dsw-alias-label-tertiary);
  }
}
.ModelsSection_linkButton {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  border: none;
  border-radius: var(--dsw-radius-sm);
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}
@media (hover: hover) {
  .ModelsSection_linkButton:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover);
    color: var(--dsw-alias-label-secondary);
  }
}
.ModelsSection_advancedHint {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-tertiary);
}
.ModelsSection_editorActions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.ModelsSection_addBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ModelsSection_addActions {
  display: flex;
}
.ModelsSection_addButton {
  flex: 1 1 0;
  min-width: 180px;
  gap: 6px;
  height: 44px;
  border: 1px dashed var(--dsw-alias-border-l3);
  border-radius: var(--dsw-radius-lg);
}
.ModelsSection_addModes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.ModelsSection_addPanel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.ModelsSection_addPanel[hidden] {
  display: none;
}
.ModelsSection_addCard,
.ModelsSection_setupCard {
  border-radius: var(--dsw-radius-lg);
  background: var(--dsw-alias-bg-module-platform);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
}
.ModelsSection_addCard .ModelsSection_editor,
.ModelsSection_setupCard .ModelsSection_editor {
  background: none;
  padding: 0;
}
.ModelsSection_customized {
  border-top: 0.5px solid var(--dsw-alias-border-l2);
  padding-top: 10px;
}
.ModelsSection_customizedSummary {
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: var(--dsw-radius-sm);
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: var(--dsw-alias-label-secondary);
  list-style: none;
}
.ModelsSection_customizedSummary::-webkit-details-marker {
  display: none;
}
.ModelsSection_customizedSummary::before {
  content: "";
  width: 5px;
  height: 5px;
  border-right: 1.5px solid currentcolor;
  border-bottom: 1.5px solid currentcolor;
  transform: rotate(-45deg) translate(-1px, -1px);
  transition: transform 120ms ease;
}
.ModelsSection_customized[open] > .ModelsSection_customizedSummary::before,
.ModelsSection_retryFold[open] > .ModelsSection_customizedSummary::before {
  transform: rotate(45deg) translate(-1px, -1px);
}
.ModelsSection_retryFold > .ModelsSection_customizedSummary {
  font-weight: 400;
  color: var(--dsw-alias-label-tertiary);
}
@media (hover: hover) {
  .ModelsSection_customizedSummary:hover {
    color: var(--dsw-alias-label-primary);
  }
}
.ModelsSection_customizedBody {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
}
.ModelsSection_modelCatalog {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 12px;
  border-top: 0.5px solid var(--dsw-alias-border-l2);
}
.ModelsSection_modelCatalogHeading {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ModelsSection_modelCatalogTitle {
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: var(--dsw-alias-label-secondary);
}
.ModelsSection_modelCatalogMeta,
.ModelsSection_modelEmpty {
  margin: 0;
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 18px;
}
.ModelsSection_modelList {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ModelsSection_modelListHead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.ModelsSection_modelEntry {
  container: ModelsSection_model-row / inline-size;
  position: relative;
  border: 0.5px solid var(--dsw-alias-border-l4);
  border-radius: var(--dsw-radius-lg);
  padding: 6px;
}
.ModelsSection_modelRow {
  display: grid;
  grid-template-columns: auto minmax(0, 1.4fr) minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 6px;
}
.ModelsSection_modelName {
  grid-column: 3;
  grid-row: 1;
}
.ModelsSection_modelNameLabel {
  display: none;
}
@container ModelsSection_model-row (max-width: 440px) {
  .ModelsSection_modelRow {
    grid-template-columns: auto minmax(0, 1fr) auto auto;
  }
  .ModelsSection_modelRow .ModelsSection_modelName {
    display: none;
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 2px 4px 0;
  }
  .ModelsSection_modelRow[data-expanded] .ModelsSection_modelName {
    display: flex;
  }
  .ModelsSection_modelNameLabel {
    display: block;
  }
}
.ModelsSection_modelDragHandle:not(:disabled) {
  cursor: grab;
}
.ModelsSection_modelEntry[data-dragging] {
  opacity: 0.5;
}
.ModelsSection_modelEntry[data-drop-target] {
  z-index: 1;
}
.ModelsSection_modelDragPreview {
  background: var(--dsw-alias-bg-module-platform);
}
.ModelsSection_modelEntry::before,
.ModelsSection_modelEntry::after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  height: 4px;
}
.ModelsSection_modelEntry::before {
  top: -4px;
}
.ModelsSection_modelEntry::after {
  bottom: -4px;
}
.ModelsSection_modelEntry[data-drop-target=before]::before,
.ModelsSection_modelEntry[data-drop-target=after]::after {
  height: 12px;
  background:
    linear-gradient(
      55deg,
      transparent calc(50% - 1px),
      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),
      transparent calc(50% + 1px)) 0 0 / 5px 7px no-repeat,
    linear-gradient(
      125deg,
      transparent calc(50% - 1px),
      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),
      transparent calc(50% + 1px)) 0 5px / 5px 7px no-repeat,
    linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px / calc(100% - 4px) 2px no-repeat;
}
.ModelsSection_modelEntry[data-drop-target=before]::before {
  top: -10px;
}
.ModelsSection_modelEntry[data-drop-target=after]::after {
  bottom: -10px;
}
.ModelsSection_iconButton {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: var(--dsw-radius-sm);
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  cursor: pointer;
}
@media (hover: hover) {
  .ModelsSection_iconButton:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover);
    color: var(--dsw-alias-label-primary);
  }
}
.ModelsSection_iconButton:disabled {
  cursor: default;
  opacity: 0.4;
}
@media (hover: hover) {
  .ModelsSection_iconButtonDanger:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover-danger);
    color: var(--dsw-alias-state-error-primary);
  }
}
.ModelsSection_modelAdvanced {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  padding: 2px 4px;
}
.ModelsSection_retryBody {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
}
.ModelsSection_retryCodeChoices {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 6px 16px;
}
.ModelsSection_retryCodeAdd {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
.ModelsSection_retryCount {
  width: max(112px, calc((100% - 16px) / 3));
  max-width: 100%;
}
.ModelsSection_retryBackoff {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
  align-items: end;
  gap: 12px 8px;
  padding-top: 8px;
}
.ModelsSection_modelField {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 4px;
}
.ModelsSection_modelInputTypes {
  grid-column: 1 / -1;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
}
.ModelsSection_modelInputTypes legend {
  padding: 0;
  margin-bottom: 4px;
}
.ModelsSection_modelInputChoices {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  min-height: 32px;
  align-items: center;
}
.ModelsSection_modelFieldLabel {
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 18px;
}
.ModelsSection_modelReasoning {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}
.ModelsSection_modelReasoningLabel {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ModelsSection_modelReasoningHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.ModelsSection_modelReasoningRow {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  align-items: center;
  gap: 6px;
}
.ModelsSection_modelReasoningRow .ModelsSection_selectInput {
  max-width: none;
}
.ModelsSection_modelReasoningValueInput {
  font-family: var(--ds-font-family-code);
  font-size: 13px;
}
.ModelsSection_modelEmpty {
  padding: 12px;
  border: 1px dashed var(--dsw-alias-border-l3);
  border-radius: var(--dsw-radius-lg);
  text-align: center;
}
.ModelsSection_addModelButton {
  box-sizing: border-box;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 28px;
  padding: 0 10px;
  border: 0.5px solid var(--dsw-alias-border-l3);
  border-radius: var(--dsw-radius-sm);
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}
@media (hover: hover) {
  .ModelsSection_addModelButton:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover);
  }
}
.ModelsSection_input {
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border: 0.5px solid var(--dsw-alias-border-l4);
  border-radius: var(--dsw-radius-md);
  font: inherit;
  font-size: 14px;
  line-height: 22px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
}
select.ModelsSection_input {
  max-width: 240px;
  cursor: pointer;
}
.ModelsSection_input:focus {
  outline: none;
  border-color: var(--dsw-alias-state-business-primary);
}
.ModelsSection_input::placeholder {
  color: var(--dsw-alias-label-dimmed);
}
.ModelsSection_input:disabled {
  opacity: 0.6;
  cursor: default;
}
.ModelsSection_keyInput {
  position: relative;
}
.ModelsSection_savedKeyInput .ModelsSection_input::placeholder {
  color: var(--dsw-alias-label-primary);
  opacity: 1;
}
.ModelsSection_keyInputFilled {
  padding-right: 40px;
}
.ModelsSection_keyToggle {
  position: absolute;
  inset: 1px 1px 1px auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  padding: 0;
  border: none;
  border-radius: var(--dsw-radius-md);
  background: none;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
}
@media (hover: hover) {
  .ModelsSection_keyToggle:hover:not(:disabled) {
    color: var(--dsw-alias-label-primary);
  }
}
.ModelsSection_keyToggle:focus-visible {
  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: -2px;
}
.ModelsSection_keyToggle:disabled {
  opacity: 0.6;
  cursor: default;
}
.ModelsSection_selectInput {
  appearance: none;
  padding-right: 32px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%2381858C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px 12px;
}
.ModelsSection_error {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-state-error-primary);
}
.ModelsSection_deleteDialog {
  width: min(480px, 100%);
}
.ModelsSection_deleteConfirm:not(:disabled) {
  --dsh-button-outline-color: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-state-error-primary);
}
@media (hover: hover) {
  .ModelsSection_deleteConfirm:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover-danger);
  }
}
.ModelsSection_hiddenLabel {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
@media (prefers-reduced-motion: reduce) {
  .ModelsSection_customizedSummary::before,
  .ModelsSection_switchThumb {
    transition: none;
  }
}
.ModelsSection_fetchDialog {
  max-width: 520px;
  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);
  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);
}
.ModelsSection_candidateToolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.ModelsSection_candidateSearch {
  min-width: 0;
  flex: 1 1 240px;
}
.ModelsSection_candidateList {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 320px;
  margin: 0;
  overflow-y: auto;
  padding: 0;
  list-style: none;
}
.ModelsSection_candidate {
  border-radius: var(--dsw-radius-md);
}
.ModelsSection_candidateLabel {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  cursor: pointer;
}
.ModelsSection_candidateId {
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--ds-font-family-code);
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ModelsSection_candidateEmpty {
  margin: 24px 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
  text-align: center;
}

/* vendor/ui-settings-models/src/client/OnboardingModal.module.css */
.OnboardingModal_dialog {
  width: min(600px, 100%);
  max-height: 100%;
  padding: 0;
}
.OnboardingModal_content {
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 28px;
  box-sizing: border-box;
  overflow-y: auto;
}
.OnboardingModal_title {
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary);
  outline: none;
}
.OnboardingModal_body {
  margin-top: 20px;
}
@media (max-width: 560px) {
  .OnboardingModal_content {
    padding: 24px;
  }
}

/* vendor/ui-settings-models/src/client/DeepSeekOnboardingDialog.module.css */
.DeepSeekOnboardingDialog_description {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: var(--dsw-alias-label-secondary);
}
.DeepSeekOnboardingDialog_editor {
  margin-top: 24px;
}
@media (max-width: 560px) {
  .DeepSeekOnboardingDialog_editor {
    margin-top: 20px;
  }
}

/* vendor/ui-settings-models/src/client/WelcomeNotice.module.css */
.WelcomeNotice_copy {
  font-size: 14px;
  line-height: 24px;
  color: var(--dsw-alias-label-secondary);
}
.WelcomeNotice_copy p {
  margin: 0;
}
.WelcomeNotice_copy p + p {
  margin-top: 12px;
}
.WelcomeNotice_error {
  margin: 16px 0 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--dsw-alias-state-error-primary);
}
.WelcomeNotice_actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
.WelcomeNotice_primary {
  min-width: 120px;
}
@media (max-width: 560px) {
  .WelcomeNotice_primary {
    width: 100%;
  }
}
`;
    document.head.append(style);
    return () => style.remove();
  }, "dsh-gemini: original Models styles");
  apply(ctx);
}
return module.exports;}});
