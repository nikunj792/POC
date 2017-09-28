import React from 'react';
export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
	  nameG:'nikunj',
	  lname:'agarwal'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
	  console.log(event);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
	const nameG = target.value;
	const lname =target.age;
	console.log("value isssssssss",lname);
    const name = target.name;
	//console.log("value of name is",event.target.name);
	//console.log("value of type is ",event.target.type);

    this.setState({
      [name]: value,
	  nameG:nameG,
	  lname:lname	  
    },()=>{
		console.log("after set",this.state.isGoing);
		console.log(this.state.numberOfGuests);
		console.log(this.state.nameG);
	});
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
		<br />
		<label>
          Name of guests:
          <input
            name="nameOfGuest"
            type="string"
            value={this.state.nameG}
            onChange={this.handleInputChange} />
        </label>
		<br />
		<label>
          Last Name of guests:
          <input
            name="lname"
            type="string"
            value={this.state.lname}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

