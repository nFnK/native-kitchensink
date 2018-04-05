import React, { Component } from 'react';

import { getChildDrawerOptions } from '../utils';
import DrawerItem from '../components/DrawerItem';
import ChildDrawer from './ChildDrawer';

class MainDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainDrawer: true,
			currentComponent: {},
		};
	}

	toggleMainDrawer = () =>
		this.setState(prevState => ({ mainDrawer: !prevState.mainDrawer }));

	renderMainDrawerComponents = mainDrawerItems =>
		mainDrawerItems.map(item => (
			<DrawerItem
				key={item.key}
				label={item.key}
				onPress={() => {
					this.toggleMainDrawer();
					this.setState({ currentComponent: item });
				}}
			/>
		));

	// Switches the rendering screen based on route key and mapping key
	navigateToCallback = route => {
		this.props.navigation.navigate(route);
	};

	// TODO: Pass all non-behavioral props that were previously passed to DrawerItems
	// to have full support of navigation options and customizations
	render() {
		const { mainDrawer, currentComponent } = this.state;
		const { items } = this.props;

		if (mainDrawer) {
			return this.renderMainDrawerComponents(items);
		}

		const childDrawerItems = getChildDrawerOptions(currentComponent.key);

		return (
			<ChildDrawer
				componentKey={currentComponent.key}
				items={childDrawerItems}
				goBack={this.toggleMainDrawer}
				navigateToCallback={this.navigateToCallback}
			/>
		);
	}
}

export default MainDrawer;