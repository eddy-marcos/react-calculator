//todo: add proptypes, make screen responsive, add comments

import React from 'react'
import './style.css'
import Calculator from './Calculator'
import Screen from './Screen'

class Operations extends React.Component{
  constructor(){
    super();
    this.state = {
      screenInput: '0',
      pendingOperation: false,
      operator: null,
      value: null
    }

    this.typeDigit = this.typeDigit.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
    this.calculatePercent = this.calculatePercent.bind(this);
    this.typeDot = this.typeDot.bind(this);
    this.makeOperation = this.makeOperation.bind(this);
  }//constructor

  typeDigit(screenInput){
    //console.log(screenInput)
    let currentDigit = this.state.screenInput;
    let pendingOperation = this.state.pendingOperation;
    let newDigit = String(screenInput);
    const screenVal = currentDigit === '0' ? newDigit : (currentDigit + newDigit);

    if(pendingOperation){
      this.setState({screenInput: newDigit, pendingOperation: false})
    } else {
      this.setState({screenInput: screenVal})
    }

  }//typeDigit

  typeDot(dot) {
    const currentDigit = this.state.screenInput;
    const pendingOperation = this.state.pendingOperation;
    if(pendingOperation){
      this.setState({screenInput: dot, pendingOperation: false})
    } else if(currentDigit.indexOf(dot) === -1){ //if dot is not found
      this.setState({screenInput: (currentDigit+dot), pendingOperation: false})
    }
  }//typeDot

  clearScreen(){
    this.setState({screenInput: '0'})
  }//clearScreen

  toggleSign(){
    //short way
    let currentDigit = this.state.screenInput;
    this.setState({screenInput: currentDigit.charAt(0) === '-' ? currentDigit.substr(1) : '-' + currentDigit});

    //larger way
    //   let currentDigit = this.state.screenInput;
    //   let turnNegative = currentDigit - (currentDigit*2);
    //   let turnPositive = Math.abs(currentDigit);
    //   if(currentDigit > 0){
    // this.setState({screenInput: turnNegative})
    // } else if(currentDigit < 0){this.setState({screenInput: turnPositive})}
  } //toggleSign

  calculatePercent(){
    let currentDigit = this.state.screenInput;
    let toDecimal = (currentDigit/100).toFixed(2);
    this.setState({screenInput: toDecimal})
  }//calculatePercent

  makeOperation(nextOperator){
    const currentDigit = this.state.screenInput;
    const operator = this.state.operator;
    const value = this.state.value;
    const nextValue = parseFloat(currentDigit);

    const calculations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    if(value == null){
      //no previous value, hit an operator key
      this.setState({value: nextValue})
    } else if(operator){
      const currentValue = value || 0
      const computedValue = calculations[operator](currentValue, nextValue)
      this.setState({value: computedValue, screenInput: String(computedValue)})
    }

    this.setState({pendingOperation: true, operator: nextOperator})

  }//makeOperation

  render() {
    const screenInput = this.state.screenInput;

    return(
      <div>
        <Screen screenInput={screenInput} />

        <Calculator clearScreen={this.clearScreen}
          toggleSign={this.toggleSign}
          calculatePercent={this.calculatePercent}
          typeDot={this.typeDot}
          typeDigit={this.typeDigit}
          makeOperation={this.makeOperation} />
        </div>
      )
    }
  }

  export default Operations;
