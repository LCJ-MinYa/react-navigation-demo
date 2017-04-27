'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

let Login = React.createClass({
	render(){
		return(
			<View>
				<Text
					onPress={()=>{
						this.props.navigation.navigate('Main');
					}}
				>321</Text>
			</View>
		)
	}
})

const styles = StyleSheet.create({

});

Login.navigationOptions = {
	title: '登录',
}

export default Login;