import React from 'react';
import './FormNew.css'

export default class FormNew extends React.Component{
render(){
    return(
     <div className="formNew">
         <form action="" method="" className="startDate">
         <label htmlFor="startDate"><b>Start Date</b></label>
         <input type="text" id="startDate"  placeholder="MM/DD/YY" name="days" />
         </form>

         <form action="" method="" className="endDate">
        <label htmlFor="endDate"><b>End Date</b></label>
        <input type="text" id="endDate" placeholder="MM/DD/YY" name="days" />
        </form>
          
     </div>
    );
}
}