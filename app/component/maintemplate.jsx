import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default(props)=>{
	console.log("--------------------",props);
	return(
		<MuiThemeProvider>
			<div>
					<TextField hintText="Event Name" onChange={props.inputChange} /><br />
					<TimePicker	hintText="12hr Format "	autoOk={true} onChange={props.dateChange} />
					<h4>Event Name is {props.greet}</h4>
					<h5>Event Time is {props.date}</h5>
					<Paper />
			</div>
		</MuiThemeProvider>
		);
}