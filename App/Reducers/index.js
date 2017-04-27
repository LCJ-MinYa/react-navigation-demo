'use strict';
/*
 * combineReducers方法，用于Reducer的拆分
 * 1.定义各个子Reducer函数
 * 2.调用combineReducers合并成一个大的Reducer
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../Navigators/AppNavigator';

//定义初始化界面
const initialNavState = {
	index: 0,
  	routes: [{ 
    	key: 'InitB',
    	routeName: 'Main'
  	}]
};

//定义用户登录状态
const initialAuthState = { isLoggedIn: false };

function nav(state = initialNavState, action) {
	switch (action.type) {
		case 'Login':
	  		return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
		case 'Logout':
	  		return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
		default:
	  		return AppNavigator.router.getStateForAction(action, state);
	}
}

function auth(state = initialAuthState, action) {
	switch (action.type) {
		case 'Login':
	  		return { ...state, isLoggedIn: true };
		case 'Logout':
	  		return { ...state, isLoggedIn: false };
		default:
	  		return state;
	}
}

//这里合并各个子Reducer函数
const AppReducer = combineReducers({
  	nav,
  	auth,
});

export default AppReducer;