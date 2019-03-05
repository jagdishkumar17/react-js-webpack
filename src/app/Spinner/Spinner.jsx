import React from "react";
import { HashLoader } from 'react-spinners';
import '../sass/style.scss'
class Spinner extends React.Component {

   constructor(props) {
      super(props);

   };

   render() {
      return (
         <div className='coverAll'>
             <HashLoader
               color={'#36D7B7'}
               loading={this.props.loading}
               size={70}
            />
         </div>
      );
   }
}

export default Spinner;