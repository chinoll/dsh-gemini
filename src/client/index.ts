// SPDX-License-Identifier: GPL-3.0-only
// Reuse the original Models settings section and its existing Edit button.
import { apply as nativeApply } from '../../vendor/ui-settings-models/src/client/index.ts'
export { inject } from '../../vendor/ui-settings-models/src/client/index.ts'

export function apply(ctx) {
  ctx.effect(() => {
    const style = document.createElement('style')
    style.dataset.plugin = 'dsh-gemini-native-models'
    style.textContent = __DSH_GEMINI_NATIVE_CSS__
    document.head.append(style)
    return () => style.remove()
  }, 'dsh-gemini: original Models styles')
  nativeApply(ctx)
}
