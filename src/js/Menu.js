import React from 'react';
import Menubar from './Menubar';
import '../css/Menu.css';
import '../css/Menubar.css'

export default class Menu extends React.Component {
   render() {
      return (
         <div className="menu">
             <ul>
                 <Menubar></Menubar>
                            <li><a href="#news">Home</a></li>
                            <li><a href="#contact">Page</a></li>
                          </ul>
         </div>
      );
   }
}
