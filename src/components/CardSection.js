import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.utama}>
		{props.children}
		</View>
	);
};

const styles = {
	utama: {
		borderWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default CardSection;