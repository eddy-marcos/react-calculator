import React from 'react'
import './style.css'

export default function Screen(props) {
  const screenInput = props.screenInput;

  return(
          <div>
            <div className="screen">{screenInput}</div>
          </div>
         )
}

// class Screen extends React.Component{
//   render() {
//     const screenInput = this.props.screenInput;
//       return(
//         <div>
//           <div className="screen">{screenInput}</div>
//         </div>
//             )
// }
//
// }

//export default Screen;
