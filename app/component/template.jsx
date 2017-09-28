import React from 'react';
export default (props)=>{
	return(
		<div>
				<h3> Hello Word </h3>
				<h4> Company Name is {props.map((name,i)=> <ul key={i}>{name}</ul>)}</h4>
		</div>
	);
}