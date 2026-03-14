"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Chat = () => {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [input, setInput] = (0, react_1.useState)('');
    const flatListRef = (0, react_1.useRef)(null);
    const handleSend = async () => {
        if (!input.trim())
            return;
        const userMessage = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        try {
            const response = await fetch('http://<IP-DO-SERVIDOR>:<PORTA>/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            const aiMessage = {
                id: Date.now().toString() + '-ai',
                text: data.reply,
                sender: 'ai',
            };
            setMessages((prev) => [...prev, aiMessage]);
        }
        catch (error) {
            const errorMsg = {
                id: Date.now().toString() + '-error',
                text: 'Erro ao se comunicar com a IA.',
                sender: 'ai',
            };
            setMessages((prev) => [...prev, errorMsg]);
        }
    };
    // Scroll para a última mensagem sempre que chega uma nova
    (0, react_1.useEffect)(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);
    const renderItem = ({ item }) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
            styles.message,
            item.sender === 'user' ? styles.userMessage : styles.aiMessage,
        ], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.messageText, children: item.text }) }));
    return ((0, jsx_runtime_1.jsx)(react_native_1.KeyboardAvoidingView, { style: { flex: 1 }, behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', keyboardVerticalOffset: react_native_1.Platform.OS === 'ios' ? 60 : 0, children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableWithoutFeedback, { onPress: react_native_1.Keyboard.dismiss, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.header, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.headerTitle, children: "OlympIA" }) }), (0, jsx_runtime_1.jsx)(react_native_1.FlatList, { ref: flatListRef, data: messages, renderItem: renderItem, keyExtractor: (item) => item.id, contentContainerStyle: styles.messagesContainer, showsVerticalScrollIndicator: false }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.inputContainer, children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: styles.input, placeholder: "Digite sua pergunta...", value: input, onChangeText: setInput }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { style: styles.sendButton, onPress: handleSend, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.sendButtonText, children: "Enviar" }) })] })] }) }) }));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cceaff',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#024084',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    messagesContainer: {
        padding: 10,
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    message: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    userMessage: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    aiMessage: {
        backgroundColor: '#eee',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    sendButton: {
        backgroundColor: '#0056b3',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
exports.default = Chat;
//# sourceMappingURL=Chat.js.map