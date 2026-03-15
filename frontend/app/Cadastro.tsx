import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [escola, setEscola] = useState('');
  const [matri, setMatri] = useState('');

  const API_URL = 'http://localhost:3001/api/auth';

  const handleCadastro = async () => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: matri, email, senha })
      });

      const data = await response.json();
      if (!response.ok) {
        return alert(data.error || 'Erro ao criar conta');
      }

      alert('Conta criada com sucesso! Faça login.');
      router.push('/LoginScreen');
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com o servidor');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
    <ScrollView style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Olimp<Text style={styles.ia}>IA</Text></Text>
      <Text style={styles.titleCadastro}>Cadastro</Text>

      <TextInput
        placeholder="Matrícula"
        style={styles.input}
        value={matri}
        onChangeText={setMatri}
      />

      <TextInput
        placeholder="Escola"
        style={styles.input}
        value={escola}
        onChangeText={setEscola}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />

      <Text style={styles.link} onPress={() => router.push('/LoginScreen')}>
        Já tem conta? Faça login
      </Text>

      
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#cceaff',
  },
  title: {
    fontFamily: "",
    fontSize: 60,
    textAlign: "center",
    marginBottom: 20
  },
  titleCadastro: {
    fontSize: 30,
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
  logo: {
    width: 200,
    height: 230,
    alignSelf: 'center',
    marginBottom: 20,
  }
});
