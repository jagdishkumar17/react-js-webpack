import React from "react";
import { RingLoader } from 'react-spinners';
import '../../sass/style.scss'
class Spinner extends React.Component {

   constructor(props) {
      super(props);

   };

   render() {
      return (
         <div className='coverAll'>
            <RingLoader
               color={'#E42884'}
               loading={this.props.loading}
            />
         </div>
      );
   }
}

export default Spinner;