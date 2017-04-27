'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

let Main = React.createClass({
	getInitialState: function() {
		return {
			isShow: false 
		};
	},
	render(){
		return(
			<View>
				<Text onPress={()=>{this.props.navigation.navigate('Login');}}>123</Text>
				{
					this.state.isShow ? (
						<Text>测试生命周期</Text>
					) : (null)
				}
				<Text onPress={this.a}>点击</Text>
			</View>
		)
	},
	componentDidMount(){

	},
	a(){
		this.setState({isShow: true});
	}
})

const styles = StyleSheet.create({

});

Main.navigationOptions = {
	title: '主页',
}

export default Main;