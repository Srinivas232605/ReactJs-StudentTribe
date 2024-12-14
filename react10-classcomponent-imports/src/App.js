
import './App.css';
import {Component} from 'react'
import { MyStudentAddress} from './MyStudentData';
import MyStudentInfo from './MyStudentData'



class App extends Component{
  render(){
    return(
      <div className='App'>
        <h1> Welcome to Class Component</h1>
        <MyData></MyData>
        <MyStudentInfo></MyStudentInfo>
        <MyStudentAddress></MyStudentAddress>

      </div>
    )
  }
}

class MyData extends Component{
  render(){
    var myname = "Ravi"
    var id = 123456789
    return(
     <div className='MyData'>
      <h3>Hello this MyData class Component</h3><br></br>
        Name : {myname}<br></br>
        Id : {id}
     </div>
    )
  }
}

export default App;
