
// import  './header.css'
import {Link} from 'react'
import Table from 'react-bootstrap/Table'
import logo from '../../../../src/Favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
function TableView({locations}) {
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
  {locations.map((item, index) => {
      return(
<tr key={index}>
      <td>{index + 1}</td>
  <td>{item.locationName}</td>
  <td>{item.latitude}</td>
  <td>{item.longitude}</td>
  <td>
{/* {item._id && <Link to="/locations/Edit" params={{id: item._id}}> */}
  <FontAwesomeIcon icon={faEdit}    />        
      {/* </Link> } */}
   </td>
  <td>

 <FontAwesomeIcon icon={faTrashAlt} onClick={() => this.deleteLocation(item._id)} />

  </td>
</tr>
   ) } )}
    </tbody>
  </Table>
  );
}

export default TableView;
