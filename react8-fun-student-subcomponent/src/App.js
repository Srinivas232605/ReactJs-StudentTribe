
import './App.css';
import CollegeDetails from './MyComponent';
import { StudentAddress } from './MyComponent';
import MarksDetails from './MyComponent2';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the StudentInformation</h1>
      <MyData/>
      <CollegeDetails/>
      <StudentAddress/>
      <MarksDetails/>
    </div>
  );
}

function MyData(){

  var studentname = "Raj"
  var studentRollnumber = 12345
  return(
    
    <div>
      <h1>StudentData</h1>
      StudentName: {studentname}<br></br>
      StudentRollNumber: {studentRollnumber}

    </div>
  )
}

export default App;
