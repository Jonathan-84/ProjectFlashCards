import React, { Component } from 'react';
//import Tracker from '../Components/tracker';


export default class newaddition extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      firstnumber: [0],
      secondnumber:[0],
      sum:[0]

    }
  }

  generateNumbers = () => {
    var randomNumber1 = Math.floor(Math.random() * 10) + 1;
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;

    //test for future approach add her, passing math to the user answer
    //Restart here- find way to reswizzle the Addition.js (put the check answer button on next page to compare user
    // inpput and carry over answer- to equal tru eo r false) Need to pass the answer down to the child to compater
    //to user answer
    let added=randomNumber1 + randomNumber2
    console.log(added)

    this.setState({ firstnumber:randomNumber1,secondnumber:randomNumber2, sum:added })
  }


  render(generateNumbers) {

    const {firstnumber,secondnumber,sum} = this.state;
    console.log(sum)
    return (
      <>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Basic Addition</div>
  <div className="card-body ">
    <div className='d-flex justify-content-center'>
        <button title="Generate Random Number" onClick={this.generateNumbers}>Random Numbers</button> 
        </div>
        <h2 className='text-center'>{firstnumber} + {secondnumber}</h2>
        <br></br>
        <br></br>
   
        <div className='d-flex justify-content-center'>
      {/*<Tracker sum={this.state.sum} />*/}
      {generateNumbers}
           </div>
           </div>
           </div>
           </div>
  </div>
  </>
      );
    }
  }


