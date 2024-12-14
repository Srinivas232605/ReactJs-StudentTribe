import { Component } from "react";

class MyStudentInfo extends Component{
    render(){
        var myname = "Raj"
        var sno = 100
        return(
            <div className="yStudentInfo">
                <h3>Hello this MyData class Component</h3>
                Name : {myname}
                Sno : {sno}
            </div>
         
          
        )
    }
}

class MyStudentAddress extends Component{
    render(){
        var ho = "128/a"
        var street = "rvn colony"
        var city = "Hyderabad"
        var pincode = 1223
        return(
            <div className="MyStudentAddres">
           <h3> StudentAddress</h3>
                House:No : {ho}
                street : {street}
                city : {city}
                pincode : {pincode}
            </div>
        )
    }
}

export {MyStudentAddress}
export default MyStudentInfo
