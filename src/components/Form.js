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
            <option value="1">Ecommerce</option>
            <option value="2">SOcail Media</option>
            <option value="3">Blogs</option>
            <option value="0">Portfolio</option>
          </select>
        </Label>
      </FormGroup>
    </Label>

    <Button color="primary">Submit</Button>
  </Form>
);
export default Forms;
