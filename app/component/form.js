	import React from 'react';
	import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
	import Table from './Table.js';
	import RaisedButton from 'material-ui/RaisedButton';
	import Popover from 'material-ui/Popover';
	import Menu from 'material-ui/Menu';
	import MenuItem from 'material-ui/MenuItem';
	import TextField from 'material-ui/TextField';
	
	export default class Form extends React.Component{
		constructor(props){
			super(props);
			this.state={
				name :'nikunj',
				open: false
			}
		}
		handleTouchTap = (event) => {
			event.preventDefault();
			this.setState({
			  open: true,
			  anchorEl: event.currentTarget,
		});
	};

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
	render() {
    return (
	<MuiThemeProvider>
      <div>
		   <h4> Name {this.props.sent.gname} </h4>
		   <h4>Age {this.props.sent.age} </h4>
		   <h4> Occupation {this.props.sent.occp} </h4>
		   <h4>Native {this.props.sent.place}</h4>
		   <h4>DOM {this.props.sent.dom}</h4>
	   <Table header={[
						{
							name:'Bride Name',
							prop:'brideName'
						},
						{
							name:'Age',
							prop:'age'
						},
						{
							name:'Occupation',
							prop:'occp'
						},
						{
							name:'Native',
							prop:'place'
						},
						{
							name:'Date of Marriage',
							prop:'dom'
						}]}
					tableData='nikunj'/>
					<RaisedButton
							onClick={this.handleTouchTap}
							label="Click For Popover" 
					/>
					<Popover
							  open={this.state.open}
							  anchorEl={this.state.anchorEl}
							  anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
							  targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
							  onRequestClose={this.handleRequestClose}
					>
					<Menu>
							<MenuItem primaryText="Refresh" />
							<MenuItem primaryText="Help &amp; feedback" />
							<MenuItem primaryText="Settings" />
							<MenuItem primaryText="Sign out" />
					</Menu>
				</Popover>
      </div>
	 </MuiThemeProvider>
    );
  }}