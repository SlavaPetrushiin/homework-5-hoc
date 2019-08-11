import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (Component) => {
	class WithDisplayName extends Component{
		render(){
			return <Component {...this.props}/>
		}
	}

	WithDisplayName.displayName = `HOC${(Component.displayName) ? Component.displayName : 'Component'}`;

	/*function getDisplayName(Component){
		return Component.displayName || 'Component';
	}*/

	return WithDisplayName
}


