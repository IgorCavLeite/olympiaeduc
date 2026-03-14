"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconSymbol = IconSymbol;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_symbols_1 = require("expo-symbols");
const react_native_1 = require("react-native");
function IconSymbol({ name, size = 24, color, style, weight = 'regular', }) {
    return ((0, jsx_runtime_1.jsx)(expo_symbols_1.SymbolView, { weight: weight, tintColor: color, resizeMode: "scaleAspectFit", name: name, style: [
            {
                width: size,
                height: size,
            },
            style,
        ] }));
}
//# sourceMappingURL=IconSymbol.ios.js.map