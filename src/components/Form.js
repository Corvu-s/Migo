import React from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
const Forms = props => (
  <Form onSubmit={props.getData}>
    <Label>
      <FormGroup check>
        <Label check>
          Websites:
          <input type="radio" name="top" value="website" />
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <select id="first">
            <option value="ecommerce">Ecommerce</option>
            <option value="webMedia">Socail Media</option>
            <option value="blogs">Blogs</option>
            <option value="portfolio">Portfolio</option>
          </select>
        </Label>
      </FormGroup>
      /////
      <FormGroup check>
        <Label check>
          Apps:
          <input type="radio" name="top" value="app" />
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <select id="second">
            <option value="game">Game</option>
            <option value="hardware">Hardware Interaction</option>
            <option value="appData">Data driven apps</option>
            <option value="comms">Communication</option>
          </select>
        </Label>
      </FormGroup>
    </Label>

    <Button color="primary">Submit</Button>
  </Form>
);
export default Forms;
