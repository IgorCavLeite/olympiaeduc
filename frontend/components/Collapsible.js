"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapsible = Collapsible;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const ThemedText_1 = require("@/components/ThemedText");
const ThemedView_1 = require("@/components/ThemedView");
const IconSymbol_1 = require("@/components/ui/IconSymbol");
const Colors_1 = require("@/constants/Colors");
const useColorScheme_1 = require("@/hooks/useColorScheme");
function Collapsible({ children, title }) {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const theme = (0, useColorScheme_1.useColorScheme)() ?? 'light';
    return ((0, jsx_runtime_1.jsxs)(ThemedView_1.ThemedView, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { style: styles.heading, onPress: () => setIsOpen((value) => !value), activeOpacity: 0.8, children: [(0, jsx_runtime_1.jsx)(IconSymbol_1.IconSymbol, { name: "chevron.right", size: 18, weight: "medium", color: theme === 'light' ? Colors_1.Colors.light.icon : Colors_1.Colors.dark.icon, style: { transform: [{ rotate: isOpen ? '90deg' : '0deg' }] } }), (0, jsx_runtime_1.jsx)(ThemedText_1.ThemedText, { type: "defaultSemiBold", children: title })] }), isOpen && (0, jsx_runtime_1.jsx)(ThemedView_1.ThemedView, { style: styles.content, children: children })] }));
}
const styles = react_native_1.StyleSheet.create({
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    content: {
        marginTop: 6,
        marginLeft: 24,
    },
});
//# sourceMappingURL=Collapsible.js.map