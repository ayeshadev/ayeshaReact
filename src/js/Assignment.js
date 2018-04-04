import React from 'react';
import Menu from './Menu'
import VerticalNavigation from './VerticalNavigation'
import Content from './Content'
import  '../css/Assignment.css'

export default class Assignment extends React.Component{
render(){
    return(
     <div className='assignment'>
         <Menu></Menu>
         <VerticalNavigation></VerticalNavigation>
         <Content></Content>
     </div>
    );
}
}