
import promise from "eslint-plugin-promise";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{}, ...compat.extends(
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/recommended",
), {
    plugins: {
        promise,
        "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
        globals: {
            ...globals.browser,
        },
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {
            project: "./tsconfig.json",
        },
    },
    rules: {
        "no-unused-vars": "off",
        "no-unused-labels": "off",
        "no-debugger": "off",
        "no-empty": "off",
        "no-inner-declarations": "off",
        "no-throw-literal": "error",
        "promise/avoid-new": "error",
        "promise/no-multiple-resolved": "error",
        "promise/always-return": "off",
        "no-async-promise-executor": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-namespace": "off",
        "@/semi": ["error", "always"],
        // see https://github.com/microsoft/TypeScript/issues/14306#issuecomment-753379360
        "no-restricted-globals": [
            "error", "postMessage", "blur", "focus", "close", "frames", "self", "parent", "opener", "top", "length",
            "closed", "location", "origin", "name", "locationbar", "menubar", "personalbar", "scrollbars", "statusbar",
            "toolbar", "status", "frameElement", "navigator", "customElements", "external", "screen", "innerWidth",
            "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "screenX", "screenY", "outerWidth",
            "outerHeight", "devicePixelRatio", "clientInformation", "screenLeft", "screenTop", "defaultStatus",
            "defaultstatus", "styleMedia", "onanimationend", "onanimationiteration", "onanimationstart", "onsearch",
            "ontransitionend", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart",
            "onwebkittransitionend", "isSecureContext", "onabort", "onblur", "oncancel", "oncanplay",
            "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick",
            "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop",
            "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown",
            "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown",
            "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel",
            "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll",
            "onseeked", "onseeking", "onselect", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle",
            "onvolumechange", "onwaiting", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture",
            "onpointerdown", "onpointermove", "onpointerup", "onpointercancel", "onpointerover", "onpointerout",
            "onpointerenter", "onpointerleave", "onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange",
            "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpagehide", "onpageshow",
            "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload", "performance", "stop",
            "open", "print", "captureEvents", "releaseEvents", "getComputedStyle", "matchMedia", "moveTo", "moveBy",
            "resizeTo", "resizeBy", "getSelection", "find", "createImageBitmap", "scroll", "scrollTo", "scrollBy",
            "onappinstalled", "onbeforeinstallprompt", "crypto", "ondevicemotion", "ondeviceorientation",
            "ondeviceorientationabsolute", "indexedDB", "webkitStorageInfo", "chrome", "visualViewport",
            "speechSynthesis", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "openDatabase", "window",
            "document", "setTimeout", "setInterval", "addEventListener", "removeEventListener",
        ],
    },
}, {
    files: ["**/*.ts"],
}];
