	import React from 'react';
	import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
	import TextField from 'material-ui/TextField';
	import RaisedButton from 'material-ui/RaisedButton';
	import Popover from 'material-ui/Popover';
	import Menu from 'material-ui/Menu';
	import MenuItem from 'material-ui/MenuItem';
	import Form from 'Form';
			
	export default class Home extends React.Component{
		constructor(props){
			super(props);
			this.state ={
				detail:{
						gname :' ',
						age:' ',
						occp:' ',
						place:' ',
						dom:''
						
						
				},
				open:false,
				value:1
				
			};
			
			this.formDetails =this.formDetails.bind(this);
			this.onChangeForm = this.onChangeForm.bind(this);
			this.clearData = this.clearData.bind(this);
			this.openPopOver =this.openPopOver.bind(this);
			this.handleRequestClose =this.handleRequestClose.bind(this);
			this.menuChange=this.menuChange.bind(this);
		}
		
		onChangeForm =(property)=>(event)=>
		{
			event.preventDefault();
			const {detail} = this.state;
			const newDetail ={
				...detail,
			[property] : event.target.value
			};
			this.setState({detail:newDetail});
		}
		formDetails(e)
		{	
			e.preventDefault();		
		}
		clearData =(event)=>{
				event.preventDefault();
				this.setState({
					detail : " "
				});
		}
			
		openPopOver =(e)=>	{ 
				e.preventDefault();
				this.setState({
					open: true,
					anchorEl: e.currentTarget});
			}
			
		handleRequestClose = () => 
		{
			this.setState({
			open: false,
			});
		}
		menuChange=(event, index, value)=>{
			event.preventDefault();
			this.setState({value});
		}
		render(){
			return (
			<MuiThemeProvider>
				<div>
					<h3>Please Fill Your Details</h3>
					<form onSubmit={this.formDetails}>
					<TextField
							floatingLabelText="Groom Name"
							floatingLabelFixed={true}
							value={this.state.detail.gname}
							onChange={this.onChangeForm('gname')}
					/><br />
					<TextField
							floatingLabelText="Age"
							floatingLabelFixed={true}
							value={this.state.detail.age}
							onChange={this.onChangeForm('age')}
					/><br />
					<TextField
							floatingLabelText="Occupation"
							floatingLabelFixed={true}
							value={this.state.detail.occp}
							onChange={this.onChangeForm('occp')}
					/><br />
					<TextField
							floatingLabelText="Native"
							floatingLabelFixed={true}
							value={this.state.detail.place}
							onChange={this.onChangeForm('place')}
					/><br />
					<TextField
							floatingLabelText="Date Of Marriage"
							floatingLabelFixed={true}
							value={this.state.detail.dom}
							onChange={this.onChangeForm('dom')}
					/><br />
					<RaisedButton
						onClick={this.openPopOver}
						label ="Type Of Marriage"
					/><br /><br />
					<RaisedButton 
						onClick={this.formDetails}
						label="Submit"
					/>
					<RaisedButton
						onClick={this.clearData}
						label="Reset"
					/>
							<Popover
								 open={this.state.open}
								 anchorEl={this.state.anchorEl}
							     anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
								 targetOrigin={{horizontal: 'left', vertical: 'top'}}
								 onRequestClose={this.handleRequestClose}
							>
								<Menu value={this.state.value} onClick={this.menuChange}>
									<MenuItem value={1} primaryText="Love Marriage" />
									<MenuItem value={2} primaryText="Arrange Marriage" />
									<MenuItem value={3} primaryText="Love cum Arrange Marriage" />
									<MenuItem value={4} primaryText="Arrange cum Love Marriage" />
								</Menu>
							</Popover>
					</form>
					<Form sent={this.state.detail} />
				</div>
				</MuiThemeProvider>
			);
		}
	}