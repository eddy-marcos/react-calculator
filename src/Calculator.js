import React from 'react'
import './style.css'

class Calculator extends React.Component {

  //return screen to Zero
  clearScreen(){
    this.props.clearScreen();
  }

  // +/- button
  toggleSign(){
    this.props.toggleSign();
  }

  //call calculatePercent function using properties
  calculatePercent(){
    this.props.calculatePercent();
  }
  //call typeDot function using properties
  typeDot(dot){
    this.props.typeDot(dot);
  }
   //call typeDigit function using properties
  typeDigit(screenInput){
    this.props.typeDigit(screenInput); //passing screen value
  }
   //call makeOperation function using properties
  makeOperation(nextOperator){
    this.props.makeOperation(nextOperator);
  }

  render(){

    return (
      //buttons
      <div>
        <div className="shell">
          <div className="btn clear" onClick={(e) => this.clearScreen()}>C</div>
          <div className="btn sign" onClick={(e) => this.toggleSign()}>±</div>
          <div className="btn" onClick={(e) => this.calculatePercent()}>%</div>
          <div className="btn" onClick={(e) => this.makeOperation('/')}>÷</div>
          <div className="btn" onClick={(e) => this.typeDigit(1)}>1</div>
          <div className="btn" onClick={(e) => this.typeDigit(2)}>2</div>
          <div className="btn" onClick={(e) => this.typeDigit(3)}>3</div>
          <div className="btn" onClick={(e) => this.makeOperation('-')}>-</div>
          <div className="btn" onClick={(e) => this.typeDigit(4)}>4</div>
          <div className="btn" onClick={(e) => this.typeDigit(5)}>5</div>
          <div className="btn" onClick={(e) => this.typeDigit(6)}>6</div>
          <div className="btn" onClick={(e) => this.makeOperation('+')}>+</div>
          <div className="btn" onClick={(e) => this.typeDigit(7)}>7</div>
          <div className="btn" onClick={(e) => this.typeDigit(8)}>8</div>
          <div className="btn" onClick={(e) => this.typeDigit(9)}>9</div>
          <div className="btn" onClick={(e) => this.makeOperation('*')}>x</div>
          <div className="btn" onClick={(e) => this.typeDigit(0)}>0</div>
          <div className="btn" onClick={(e) => this.typeDot('.')}>.</div>
          <div className="btn equals" onClick={(e) => this.makeOperation('=')}>=</div>
        </div>
      </div>

    )
  }
}

export default Calculator;
