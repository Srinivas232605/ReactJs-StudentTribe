
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Welcome to Root component</h1>
    <MyComponent></MyComponent>
    <MyFunction></MyFunction>
    </div>
  );
}

function MyComponent(){

  return(
    <div className="MyComponent">
      <h1>Welocme to MyComponent</h1>
    
    </div>
  )
}

function MyFunction(){
    var firstname="raju"
    var lastname = "N"
    var age = 30
  return(
   <div className = "MyFunction">
      <h3>This is MyFunction own component</h3>
      <h3>Person Information</h3>
      firstname: {firstname}<br></br>
      lastname: {lastname}<br></br>
      age: {age}<br></br>
   </div>

  )
}

export default App;
