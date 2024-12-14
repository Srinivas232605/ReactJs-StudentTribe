
import './App.css';

function App() {
  var firstname = "raju"
  var lastname = "N"
  var job = "Developer"
  const mystyles = {
    margin : '28px',
    padding : '28px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: '0 8px 20px #ddd'
  }
  return (
    <div className="App">
      <div style={mystyles}>
      <h1>Person Information</h1>
     <h3>firstname: {firstname} <br></br></h3>
     <h3>lastname: {lastname} <br></br></h3>
     <h3>Job: {job} <br></br></h3>
      </div>
      
    </div>
  );
}

export default App;
