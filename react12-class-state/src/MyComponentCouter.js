import {Component} from 'react'

class MyCounter extends Component{

    constructor(){
        super()
        this.state = {count: 0}
        this.increment = this.increment.bind(this)
    }
    
    increment(){
        this.setState({
            count: this.state.count +1
        })
    }
    
    render(){
        return(
          <div>
            <button style={{color: "green",fontSize: "20px", width: "150px"}} onClick={this.increment}>MyIncrement</button><br></br>
            {this.state.count}
          </div>
        )
    }
}

export default MyCounter