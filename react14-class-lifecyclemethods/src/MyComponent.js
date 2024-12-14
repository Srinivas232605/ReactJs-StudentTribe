import {React} from 'react';
import {Component} from 'react';
class MyContainer extends  Component
{
  constructor(props){
    super(props)
    this.state={
      show:true,
      count:0
    };
  }
  delHeader = () =>{
  this.setState({show:false});
  }
   componentDidMount(){
     console.log("ComponentDidMount Method");

   }
   componentDidUpdate(){
        console.log("ComponentDidUpdate")
   }
render(){
   let myheader;
   if(this.state.show){
     myheader=<Child/>;
   };
   return(
     <div>
<center>
     {myheader}
     <button type="button" onClick={this.delHeader}>Delete Header</button><hr></hr>
     <h3>count:{this.state.count}</h3>
     <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
</center>

     </div>
   )

}

}
class Child extends Component{
  componentWillUnmount(){
    console.log("componentWillUnmount: Method");
  }
  render(){
    return(
      <h1>Hello World!</h1>
    )
  }
}

export default MyContainer;