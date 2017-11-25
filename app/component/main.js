import React from 'react';

export const Main =(props)=>{
		return(
			<div>
				<div>The Main Page</div>
				<button onClick={()=>props.changeUserName('Nikunj')}>Change the Username
				</button>
			</div>
	);
}