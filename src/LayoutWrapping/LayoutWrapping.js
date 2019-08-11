import React, { Component } from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = (WrappedComponent) => {
	return class _wrapWithAbsolutePosition extends Component{
		render (){
			return (
				<div style={{position: "absolute"}}>
					<WrappedComponent />
				</div>
			)
		}
	}
}