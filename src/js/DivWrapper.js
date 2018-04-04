import React from 'react';
import '../css/DivWrapper.css'

export default class DivWrapper extends React.Component{
render(){
    return(
     <div className="divWrapper">
          <button type="submit" className="searchButton">Icon</button>
          <input type="text" placeholder="search..." className="searchInput"/>
     </div>
    );
}
}