import React from 'react'
import './style.css'

export default function Screen(props) {
  const screenInput = props.screenInput;
    //make the screen more responsive: if input characters are greater than 8
    // then reduce font size
    if (screenInput.length > 8) {
        var font = '40px';
    }
  return(
          <div>
            <div className="screen" style={{fontSize: font}}>{screenInput}</div>
          </div>
         )
}
