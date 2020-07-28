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
        // this.setState({count:this.state.count+1},()=>{
        //     console.log("callback value",this.state.count)
        // })
        //change
        this.setState(prevState=>({
            count:prevState.count+1

        }))
        console.log(this.state.count)

    }
    incrementFive(){
        //when u call like this etUpdate won't update the state 5 times inorder to reduce update react willl update all these calls in asingle go so 
        //if u want to cahnge state depending on the previous state add a function to setSate method.
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
       
    }

    render(){
   return(<div><h1>Count  :{this.state.count}</h1>
   <button onClick={()=>{this.incrementFive()}}>+</button>
   </div>)
    }
}
export default Counter