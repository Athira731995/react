import React from 'react'
// function Greet(){
//     return <h1>hello bee</h1>
// }

//since we prefer arrow functions
//we usually use the name props here
export const Greet=(props)=>   {

    console.log(props)
     return <h1> hhhhhhhhello {props.name}</h1>
}

export default Greet