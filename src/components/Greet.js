import React from 'react'
// function Greet(){
//     return <h1>hello bee</h1>
// }

//since we prefer arrow functions
//we usually use the name props here
export const Greet=(props)=>   {

    console.log(props)
    //can return only a single element
return (<div><h1> hhhhhhhhello {props.name},{props.heroName}
</h1>
{props.children}

</div>)
}


export default Greet