import React from 'react';
import Button1 from './Button1'
import Button2 from './Button2'
import './VerticalNavigation.css'

export default class VerticalNavigation extends React.Component{
render(){
    return(
     <div className="verticalNavigation">
         <ul>
         <li><Button1></Button1></li>
         <li><Button2></Button2></li>
         <li><a href="#contact">Contact</a></li>
         <li><a href="#about">About</a></li>
         </ul>
     </div>
    );
}
}