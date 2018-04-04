import React from 'react';
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';
import './Content.css';

export default class Content extends React.Component {
   render() {
      return (
         <div className="content">
             <Line1></Line1>
             <Line2></Line2>
             <Line3></Line3>
         </div>
      );
   }
}
