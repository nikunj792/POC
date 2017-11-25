import React from 'react';
import { connect } from 'react-redux';
import { User } from './../component/User';
import { Main } from './../component/Main';
import {setName} from '../actions/userAction';

class App extends React.Component{
	constructor(){
		super();
	}
	
	render(){		
		return (
			<div>
				<Main changeUserName={()=>this.props.setName("Priyanka")} />
				<User username={this.props.user.name}/>
			</div>
		);
	}
}
//Method to tell which all properties you want to use in this component.
const mapStateToProps =(state)=>{
	return{
		user:state.user,
		math:state.math
	};
};
//Method to tell which all action you want to dispatch to store.
 const mapDispatchToProps =(dispatch)=>{
	 return{
		 setName:(name)=>{
			 dispatch(setName(name));
		 }
	 };
 };
 
export default connect(mapStateToProps,mapDispatchToProps)(App);
 