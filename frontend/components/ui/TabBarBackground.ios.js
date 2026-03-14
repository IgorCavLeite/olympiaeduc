"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlurTabBarBackground;
exports.useBottomTabOverflow = useBottomTabOverflow;
const jsx_runtime_1 = require("react/jsx-runtime");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const expo_blur_1 = require("expo-blur");
const react_native_1 = require("react-native");
function BlurTabBarBackground() {
    return ((0, jsx_runtime_1.jsx)(expo_blur_1.BlurView
    // System chrome material automatically adapts to the system's theme
    // and matches the native tab bar appearance on iOS.
    , { 
        // System chrome material automatically adapts to the system's theme
        // and matches the native tab bar appearance on iOS.
        tint: "systemChromeMaterial", intensity: 100, style: react_native_1.StyleSheet.absoluteFill }));
}
function useBottomTabOverflow() {
    return (0, bottom_tabs_1.useBottomTabBarHeight)();
}
//# sourceMappingURL=TabBarBackground.ios.js.map