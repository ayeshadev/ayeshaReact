import React from 'react';
import DivWrap from './DivWrap'
import './Line1.css'


export default class Line1 extends React.Component{
render(){
    return(
     <div className="line1">
         <h1>Header</h1>
         <DivWrap></DivWrap>
     </div>
    );
}
}