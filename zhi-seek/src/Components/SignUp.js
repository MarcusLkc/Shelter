import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/style.css';
import axios from 'axios';
import {shelters} from '../helpers';

export default class SignUp extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      const form = new FormData(event.target);
      console.log(form);
      console.log(event.target);
     axios({
        method: 'post',
        url: 'http://localhost:5000/api/checkin',
        data: new FormData(event.target)
      
    }).then(
        response => {
          console.log(response)
        },
        reject => {
            console.log(reject)
        }
      )
    }
  render() {
    const style = {
      width: '90%',
      height: '85vh',
    }; 


    return (
      <Form name="submitForm" style={style} onSubmit={this.handleSubmit}>
        <h2>Reserve Spot / Check In</h2>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="John Smith" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email@email.com" required  title="Please use a valid email"/>
        </FormGroup>
        <FormGroup>
          <Label for="people_select">Number of people?</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option disabled selected value> -- select an option -- </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="shelterSelect">Select Shelter</Label>
            <Input type="select" name="shelterSelection" id="shelter" required>
              <option disabled selected value> -- select an option -- </option>
              {shelters.map((place, i) => {
              return (
                <option value={i+1}>{place.name} - ({place.address})</option>
              )
            })}
            </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
} 
