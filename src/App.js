import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './config';

import * as firebase from 'firebase';

export default class   App extends Component{

  state = {
    name: "",
    age: "",

//    ya data name ka empty json format may karnay kay liya hy 
    data : []
  }

componentDidMount(){


  // data add horaha hay 
  // firebase
  // .database()
  // .ref ("users")
  // .push({
  //   name: "saad   ",
  //   age: 219 
  
  // data remove horaha hy 
    
  // firebase
  //   .database()
  //   .ref ("users")
  //   .child("-MFB4kuxy7TG_9jEPwP4")
  //   .remove();
 
  // ya data fetch karnay ky liya hay 

  firebase
     .database()
     .ref ("users")
     .once("value")
     .then(snapShot => {
       snapShot.forEach(item => {
         // val keyword sy only data aata hy but we required unique key to identify 
        //  this.state.data.push(item.val());

        // aur is sy only key aati hay but we required unique key to identify 
        // console.log(item.key);

        // so we create a custome object  
        this.state.data.push({id:item.key, name:item.val().name, age:item.val().age});
        


       });
     });

}

submit = e => {
  e.preventDefault();

  firebase
  .database()
  .ref ("users")
  .push({
    name: this.state.name,

    age: this.state.age,
  })

}
  render(){
    return (
      <div> 
      <h1>Hello sadiq amin </h1>
     {console.log(this.state)}

      <form onSubmit ={e=>  this.submit(e)}>
        <input placeholder="name" onChange= {e => this.setState({name:e.target.value})}/>
        
        <input placeholder="age" onChange= {e => this.setState({age:e.target.value})}/>

        <input type ="submit"/>
      </form>
      </div>
    )
  }
}