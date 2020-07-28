import React,{Component} from 'react'
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        //never modify the state directly.
        //we havve to use set stae to change the value of count variable otherwise count will not change
        // this.setState({count:this.state.count+1})
        this.setState({count:this.state.count+1},()=>{
            console.log("callback value",this.state.count)
        })
        console.log(this.state.count)

    }
    render(){
   return(<div><h1>Count  :{this.state.count}</h1>
   <button onClick={()=>{this.increment()}}>+</button>
   </div>)
    }
}
export default Counter