import React from 'react';
import DivWrapper from './DivWrapper'
import FilterBy from './FilterBy'
import FormNew from './FormNew'
import '../css/Line2.css'


export default class Line2 extends React.Component{
render(){
    return(
     <div className="line2">
         <DivWrapper></DivWrapper>
         <FilterBy></FilterBy>
         <FormNew></FormNew>
     </div>
    );
}
}