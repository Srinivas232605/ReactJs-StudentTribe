
import { useState } from "react";

function StateHook2(){
    var [age,setAge] = useState(25)
    var [name, setName1] = useState("Ramu")

    var changeName = ()=>{
            setName1("Bhanu")
    }

    return(
        <div className="StateHook2">

            <div>
             <p>Name: {name}</p>
             <button onClick={changeName}>setNew Name</button>
             </div>
             
             <div>
                <p> Age is:{age}</p>
                <button onClick={()=> setAge+1}>setNewAge</button>
             </div>
        </div>

        
    )
}

export default StateHook2