import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import DefaultScreen from './src/components/DefaultScreen';
import MainDrawer from './src/drawers/MainDrawer';
import screenMapping from './src/screenMapping';

// RootDrawer containing drawers for each components
const RootDrawer = DrawerNavigator(
	{
		Home: {
			screen: DefaultScreen,
		},
		// Register screens of all options of child components
		// Flatten all objects from mapping to screen registration form (like `Main`)
		// Keys of each screen will be used to render screen based on child drawer item selection
		...screenMapping,
	},
	{
		// Custom rendering component of drawer panel
		contentComponent: MainDrawer,
	}
);

export default class App extends React.Component {
	render() {
		return <RootDrawer />;
	}
}
