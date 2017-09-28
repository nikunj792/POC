import React from 'react';
import ReactDOM from 'react-dom';
import template from './maintemplate.jsx';

export default class Main extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			greet:" ",
			date:" "
		}
		this.inputChange = this.inputChange.bind(this);
		this.dateChange =this.dateChange.bind(this);
	}
	inputChange(event){
		event.preventDefault();
		const value = event.target.value;
		this.setState({
			greet :value
		});
	}
	dateChange(event,date){
		const date1 = date.getHours();
		this.setState({
			date:date1
		});
	}
	render(){
		const data ={
			greet:this.state.greet,
			date:this.state.date,
			inputChange : this.inputChange,
			dateChange : this.dateChange
		}
		return template(data);
	}
}
