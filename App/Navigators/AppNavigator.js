'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import MainScreen from '../Components/Main';

export const AppNavigator = StackNavigator({
  	Main: { screen: MainScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  	<AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
);

AppWithNavigationState.propTypes = {
  	dispatch: PropTypes.func.isRequired,
  	nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  	nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);