import React, { Component } from 'react'
import  './src.css'

export default class STATE extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cont:0
        }
    }

    HandleInc=()=>{
       this.setState({
           cont:this.state.cont+1
       })
    }
    HandleDec=()=>{
        this.setState({
            cont:this.state.cont-1
        })
     }

    render() {
      let {cont}=this.state
        return (
           
            <div>
              <h1> Count: {cont}</h1>
              <button className="pls" onClick={this.HandleInc} disabled={cont===10 ? true:false}>+</button>
              <button className="mns" onClick={this.HandleDec} disabled= {cont===0 ? true:false} >-</button>
            </div>
        )
    }
}
