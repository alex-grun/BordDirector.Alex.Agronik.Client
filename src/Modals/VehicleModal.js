import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const styles = {
    lb: {
        width: '150px',
        display: 'inline-block',
        paddingRight: '10px',
        paddingBottom: '10px',
        fontWeight: 'bold'
    },
}

function VehicleModal(props) {
    const [state, setState] = useState({
        Model: '',
        Owner: '',
        Year: '',
        LicenseNumber: '',
        Power: '',
        TopSpeed: '',
        UpTo100km_h: '',
        Torque: '',
        CO2Emissions: '',
    });

    function handleChange(event) {
        const value = event.target.value;
        setState({...state, [event.target.name]: value});
    }

    const submitHandler = () => {
        if (state.Model.trim() && state.Owner.trim() && state.Year.trim() && state.LicenseNumber.trim() && state.Power.trim() && state.TopSpeed.trim() && state.UpTo100km_h.trim() && state.Torque.trim() && state.CO2Emissions.trim())
            props.onCreate(state);
    }

    return(
        <Modal show={props.showModal} onHide={submitHandler}>
            <Modal.Header>
                <Modal.Title>Create Vehicle</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label><span style={styles.lb}>Model:</span><input type='text' name='Model' value={state.Model} onChange={handleChange} /></label>
                <label><span style={styles.lb}>Owner:</span><input type='text' name='Owner' value={state.Owner} onChange={handleChange} /></label>
                <label><span style={styles.lb}>Year:</span><input type='number' name='Year' value={state.Year} onChange={handleChange} /></label>
                <label><span style={styles.lb}>License Number:</span><input type='text' name='LicenseNumber' value={state.LicenseNumber} onChange={handleChange} /></label>
                <label><span style={styles.lb}>Power:</span><input type='number' name='Power' value={state.Power} onChange={handleChange} /></label>
                <label><span style={styles.lb}>Top Speed:</span><input type='number' name='TopSpeed' value={state.TopSpeed} onChange={handleChange} /></label>
                <label><span style={styles.lb}>Up to 100 km/h:</span><input type='number' name='UpTo100km_h' value={state.UpTo100km_h} onChange={handleChange} /></label>
                <label><span style={styles.lb}>Torque:</span><input type='text' name='Torque' value={state.Torque} onChange={handleChange} /></label>
                <label><span style={styles.lb}>CO2 Emissions:</span><input type='number' name='CO2Emissions' value={state.CO2Emissions} onChange={handleChange} /></label>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.hideModal}>Cancel</button>
                <button onClick={submitHandler}>Save</button>
            </Modal.Footer>
        </Modal>            
    );
}

export default VehicleModal