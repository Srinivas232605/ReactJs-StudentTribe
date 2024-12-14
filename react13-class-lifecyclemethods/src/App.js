
import './App.css';
import {Component} from 'react'

class App extends Component{
   componentDidMount(){
    console.log("ComponentDidMount method")
    console.log("My components working")
   }

   render(){
    return(
      <div>
        <h3>Class Component Lifecycle methods</h3>
      </div>
    )
   }
}

export default App;
