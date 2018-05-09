import React from 'react';
import '../css/Capacity.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {shelters} from '../helpers';
import axios from 'axios';

class Capacity extends React.Component{

    state = {
        'shelterName': null,
        'shelterLocation': null,
        'currentQuantity': null,
        'capacity': null
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(event.target.shelter.value === 'true'){
            return 0
        }else{
            const data = new FormData(event.target);
            console.log(event.target.shelter.value);
            const url = `http://localhost:5000/api/shelter/${event.target.shelter.value}`
            console.log(url)
            axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
            .then(data => this.handleSuccess(data.data));
        }
    }

    handleSuccess = ({address, name, current_occupants, total_capacity}) => {
        const shelter = {
        'shelterName': name,
        'shelterLocation': address,
        'currentQuantity': current_occupants,
        'capacity': total_capacity
        }
        this.setState(shelter)
    }

    render() {
        return (
            <div>
                <h2>Shelters</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="shelterCheck">Check Shelter Availability</Label>
                            <Input type="select" name="shelterSelection" id="shelter" required>
                            <option disabled selected value> -- select an option -- </option>
                                {shelters.map((place, i) => {
                                    return (
                                        <option value={place.name}>{place.name} - ({place.address})</option>
                                    )
                                    })}
                            </Input>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                        <br/><br/>
                        <FormGroup>
                            <Label>Shelter Name: {this.state.shelterName}</Label><br/>
                            <Label>Shelter Location: {this.state.shelterLocation} </Label><br/>
                            <Label>Current Quantity: {this.state.currentQuantity} </Label><br/>
                            <Label>Total Capacity: {this.state.capacity}</Label>
                        </FormGroup>
                </Form>
                    
            </div>
        )
    }
}

export default Capacity;