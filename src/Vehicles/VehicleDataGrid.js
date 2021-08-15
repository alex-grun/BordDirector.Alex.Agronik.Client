import React from 'react';
import {Table} from 'react-bootstrap';

function Vehicles(props) {

    return(
        <Table className='mt-4' striped bordered hover size='sm'>
            <thead>
                <th>Model</th>
                <th>Owner</th>
                <th>Year</th>
                <th>License Number</th>
                <th>Power</th>
                <th>Top Speed</th>
                <th>Up to 100 km/h</th>
                <th>Torque</th>
                <th>CO2 Emissions</th>
                <th></th>
            </thead>
            <tbody>
                {props.vehicles.map(x => {
                    return <tr key='{x.Id}'>
                        <td>{x.Model}</td>
                        <td>{x.Owner}</td>
                        <td>{x.Year}</td>
                        <td>{x.LicenseNumber}</td>
                        <td>{x.Power}</td>
                        <td>{x.TopSpeed}</td>
                        <td>{x.UpTo100km_h}</td>
                        <td>{x.Torque}</td>
                        <td>{x.CO2Emissions}</td>
                        <td><button className='rm' onClick={() => props.onClick(x.Id)}>&times;</button></td>
                    </tr>
                })}
            </tbody>
        </Table>
    );
}

export default Vehicles