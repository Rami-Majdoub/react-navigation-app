import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Button, Alert } from 'react-native';

const Calculator = ({ navigation }) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
		input: {
			height: 25,
			margin: 12,
			borderWidth: 1,
			borderRadius: 5,
			padding: 10,
		},
		title: {
			fontSize: 20,
			color: "#dcdcdc",
			backgroundColor: "#2f3437",
		},
		keyboard: {
			padding: 15,
			color: "#ff0000",
			fontSize: 26,
		},
		footBar: {
			flex: 0.2,
			buttom: 0,
			color: "#dcdcdc",
			backgroundColor: "#2f3437",
		},
	
	});

	const [equation, onChangeEquation] = React.useState("");
	const [result, onChangeResult] = React.useState("");
	
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title} >CALCULATOR</Text>
			
			<TextInput
				style={styles.input}
				onChangeText={onChangeEquation}
				value={equation}
			/>
			
			<Button style={styles.keyboard}
				title="7"
			/>
			
			<Button style={styles.keyboard}
				title="8"
			/>
			
			<Button style={styles.keyboard}
				title="9"
			/>
			
			<Button style={styles.keyboard}
				title="/"
			/>
			
			<Button style={styles.keyboard}
				title="6"
			/>

			<Text style={styles.footBar}> CyberTrace Club!</Text>
		</SafeAreaView>
	)
}

export default Calculator;