import React from 'react';
import './Line3.css'


export default class Line3 extends React.Component{
render(){
    return(
     <div className="line3">
                        <table id="tableBox">
                        <tbody>
                            <tr >
                                <th>Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                </tr>
                                
                                <tr>
                                    
                                    <td>na</td>
                                    <td>10/19/2017</td>
                                    <td>10/19/2017</td>
                                    <td>Expired</td>
                                    </tr>
                                    <tr>
                                            <td>na</td>
                                            <td>10/19/2017</td>
                                            <td>10/19/2017</td>
                                            <td>draft</td>
                                            </tr>
                                    <tr>
                                            <td>na</td>
                                            <td>10/19/2017</td>
                                            <td>10/19/2017</td>
                                            <td>Active</td>
                                            </tr>
                                            </tbody>
                            </table>
                             
     </div>
    );
}
}