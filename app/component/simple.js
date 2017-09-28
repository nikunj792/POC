import React from 'react';
import template from './template.jsx';

export default class Simple extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			props:{},
			company : ' '
		}
	}
	render(){
		
		return template(['nikunj','priyanka','Wedding']);
	}
}