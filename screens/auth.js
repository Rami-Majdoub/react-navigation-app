import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Button, Alert } from 'react-native';

const Auth = ({ navigation }) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
		input: {
			height: 40,
			margin: 12,
			borderWidth: 1,
			padding: 10,
		},
		title: {
			fontSize: 26,
		},
	
	});

	const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title} >Authentication</Text>
			
			<Text>Email</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeEmail}
				value={email}
			/>
			
			<Text>Password</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangePass}
				value={pass}
			/>
			<Button
				title="Valider"
				onPress={() =>
					navigation.navigate('Home')
				}
			/>
		</SafeAreaView>
	)
}

export default Auth;