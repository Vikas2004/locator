
// import  './header.css'
import {Link} from 'react'
import Table from 'react-bootstrap/Table'
import logo from '../../../../src/Favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory, withRouter, Redirect, Route } from "react-router-dom"


function TableView({locations, deleteLoc, editLoc}) {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Location Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
  {locations && locations.map((item, index) => {
      return(
<tr key={index}>
      <td>{index + 1}</td>
  <td>{item.locationName}</td>
  <td>{item.latitude}</td>
  <td>{item.longitude}</td>
  <td>
 
  <Route render={({ history}) => (
   <FontAwesomeIcon icon={faEdit} onClick={() => { history.push('/locations/edit') }}   />       
  )} />
   </td>
  <td>

 <FontAwesomeIcon icon={faTrashAlt} onClick={() => {deleteLoc(item._id)}}  />

  </td>
</tr>
   ) } )}
    </tbody>
  </Table>
  );
}

export default withRouter(TableView);
