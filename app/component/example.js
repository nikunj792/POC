import React from'react'
export default class ContactEdit extends React.Component {
	
	constructor(props){
			super(props);
			this.state ={
				data:{
						firstName :'nik',
						lastName:'garg',
						phone:'123 ',
						email:' '
				}
								
			};
			this.handleChangeFor =this.handleChangeFor.bind(this);
			this.formSubmit = this.formSubmit.bind(this);
		}
		

  handleChangeFor = (propertyName) => (event) => {
    const { data } = this.state;
    const newContact = {
      ...data,
      [propertyName]: event.target.value
    };
    this.setState({ data: newContact});
  }
  formSubmit(e){
	  e.preventDefault();
	  alert(this.state.data.phone);
	  alert(this.state.data.email);
  }

  render() {
    return (
      <div>
	  <form onSubmit={this.formSubmit}>
        <input type="text" onChange={this.handleChangeFor('firstName')} value={this.state.data.firstName}/>
        <input type="text" onChange={this.handleChangeFor('lastName')} value={this.state.data.lastName}/>
        <input type="text" onChange={this.handleChangeFor('phone')} value={this.state.data.phone}/>
		<input type="text" onChange={this.handleChangeFor('email')} value={this.state.data.email}/>
		<input type="submit" value="Submit" />
	</form>
      </div>
    );
  }
}