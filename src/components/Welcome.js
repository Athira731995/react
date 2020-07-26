import React,{Component} from 'react'
class Welcome extends Component{
    //props using this keyword
    render(){
    return <h1>Minnu bee in class with {this.props.name}</h1>
    }
}
export default Welcome