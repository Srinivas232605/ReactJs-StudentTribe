
import './App.css';

function App() {
  var firstname = "Raju";
  var lastname="N";
  var address = "Hyderabad";
  return (
    <div className="App">
     <h1>Employee Information</h1>
     <h3>firstname: {firstname}</h3>
     <h3>lastname: {lastname}</h3>
     <h3>address: {address}</h3>
    </div>
  );
}

export default App;
