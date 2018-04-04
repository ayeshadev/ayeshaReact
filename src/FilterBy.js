import React from 'react';
import'./FilterBy.css'

export default class FilterBy extends React.Component{
render(){
    return(
     <div className="filterBy">
          <label htmlFor="filterBy1"><b>filter by</b></label>
          <select name="filterBy1" id="filterBy1" defaultValue="Select a filter...">
                            
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                            </select>
     </div>
    );
}
}