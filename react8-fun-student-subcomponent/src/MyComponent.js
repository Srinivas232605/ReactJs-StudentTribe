
function CollegeDetails(){
    var collegeName = "Student-Tribe"
    var collegecode = 123456789
    return(
        <div className = "CollegeDetails">
            <h1>CollegeDetails</h1>
           collegeName : {collegeName}<br></br>
           collegecode : {collegecode}
        </div>
    )
}

function StudentAddress(){
    var House_No = 8-9-456
    var street = "xyz Colony"
    return(
        <div className="StudentAddress">
            <h1>StudentAddress</h1>
          House_No : {House_No}<br></br>
          street : {street}
        </div>
    )
}

export {StudentAddress}

export default CollegeDetails