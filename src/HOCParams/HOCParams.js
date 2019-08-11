import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/



export const withGivenProps = (data) => (WrappedComponent) => {
	return class _withGivenProps extends Component{
		render(){
			const currentProps = {...this.props, ...data}
			return <WrappedComponent {...currentProps}/>
		}
	}	
}