"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const react_1 = require("react");
const expo_router_1 = require("expo-router");
function Login() {
    const router = (0, expo_router_1.useRouter)();
    const [email, setEmail] = (0, react_1.useState)('');
    const [senha, setSenha] = (0, react_1.useState)('');
    const handleLogin = () => {
        // Aqui você pode colocar sua lógica de autenticação
        if (email === 'teste@email.com' && senha === '123456') {
            router.push('/Home');
        }
        else {
            alert('Email ou senha inválidos');
        }
    };
    //
    return ((0, jsx_runtime_1.jsx)(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.container, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [(0, jsx_runtime_1.jsx)(react_native_1.Image, { source: require('../assets/images/logo.png'), style: styles.logo }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { style: styles.title, children: ["Olimp", (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.ia, children: "IA" })] }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.titleLogin, children: "Login" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { placeholder: "Email", style: styles.input, value: email, onChangeText: setEmail }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { placeholder: "Senha", style: styles.input, secureTextEntry: true, value: senha, onChangeText: setSenha }), (0, jsx_runtime_1.jsx)(react_native_1.Button, { title: "Entrar", onPress: handleLogin }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.link, onPress: () => router.push('/Cadastro'), children: "N\u00E3o tem conta? Cadastre-se" })] }) }));
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#cceaff',
    },
    logo: {
        width: 200,
        height: 230,
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    link: {
        marginTop: 16,
        color: "#ab8580",
        textAlign: 'center',
    },
    title: {
        fontFamily: "",
        fontSize: 60,
        textAlign: "center",
        marginBottom: 20
    },
    ia: {
        fontFamily: "",
        fontSize: 60,
        color: "#e4b93f",
        textAlign: "center",
        marginBottom: 20
    },
    titleLogin: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20
    }
});
//# sourceMappingURL=LoginScreen.js.map