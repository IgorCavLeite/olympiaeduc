"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const expo_router_1 = require("expo-router");
function Home() {
    const router = (0, expo_router_1.useRouter)();
    const handleLogout = () => {
        router.push('/LoginScreen');
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [(0, jsx_runtime_1.jsx)(react_native_1.Image, { source: require('../assets/images/logo.png'), style: styles.logo }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.title, children: "Bem-vindo ao OlympIA!" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.mainGrid, children: [(0, jsx_runtime_1.jsx)(react_native_1.Pressable, { onPress: () => router.push('/Chat'), children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: styles.iconesHome, source: require('../assets/images/chat.png') }) }), (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { onPress: () => router.push('/Cadastro'), children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: styles.iconesHome, source: require('../assets/images/perfil.png') }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: styles.iconesHome, source: require('../assets/images/conquistas.png') }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: styles.iconesHome, source: require('../assets/images/configuracoes.png') }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: styles.iconesHome, source: require('../assets/images/calendario.png') }) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: styles.iconesHome, source: require('../assets/images/quiz.png') }) })] })] }));
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#cceaff',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    logo: {
        width: 200,
        height: 230,
        alignSelf: 'center',
        marginBottom: 20,
    },
    mainGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    iconesHome: {
        width: 140, // Aproximadamente 2 itens por linha com margem
        margin: 8,
        height: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
//# sourceMappingURL=Home.js.map