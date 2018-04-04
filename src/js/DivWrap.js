import React from 'react';
import CreateFolder from './CreateFolder'
import CreateNew from './CreateNew'
import '../css/DivWrap.css'


export default class DivWrap extends React.Component{
render(){
    return(
     <div className="divWrap">
         <CreateFolder></CreateFolder>
         <CreateNew></CreateNew>
     </div>
    );
}
}