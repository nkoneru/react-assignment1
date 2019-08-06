import React from 'react';


const userOutput = (props) =>{
    return(
        <div>
           <p>Paragraph1 {props.userName}</p>
           <p>Paragraph2 {props.userName}</p>
        </div>
    );
}

export default userOutput;