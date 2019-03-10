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
            <option value="social">SOcail Media</option>
            <option value="blogs">Blogs</option>
            <option value="portfolio">Portfolio</option>
            <option value="data">Data driven apps</option>
            <option value="communication">Communication</option>
          </select>
        </Label>
      </FormGroup>
      <p>
        ____________________________________________________________________________________
      </p>
    </Label>
    <FormGroup check>
      <Label check>
        Mobile Apps:
        <input type="radio" name="top" value="mobile" />
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <select id="second">
          <option value="games">Games</option>
          <option value="Appsocial">Socail Media</option>
          <option value="Hardware">Hardware Interactions</option>
          <option value="Appdata">Data</option>

          <option value="Appcommunication">Communication</option>
        </select>
      </Label>
    </FormGroup>
    <Button color="primary">Submit</Button>
  </Form>
);
export default Forms;
