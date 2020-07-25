import React from 'react'
const Hello=()=>{
    //with JSX
    // return(
    // <div>
    //     <h1>Minnu bee in wonder world</h1>
    // </div>)
    //without jsx very complicated
    // return React.createElement('div',null,<h1>Hello ma bee</h1>)
    return React.createElement('div',{id:"hello"},React.createElement('h1',null,"Hello World"))
}
export default Hello