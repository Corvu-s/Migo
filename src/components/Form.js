import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
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
          Ecommerce
          <input type="radio" name="underWeb" value="ecommerce" />
          || Social Media
          <input type="radio" name="underWeb" value="social " />
          || Blogs
          <input type="radio" name="underWeb" value="blogs" />
          || Portfolio
          <input type="radio" name="underWeb" value="portfolio" />
          || Data driven apps
          <input type="radio" name="underWeb" value="data " />
          || Communication
          <input type="radio" name="underWeb" value="communication" />
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
      <Label>
        Games
        <input type="radio" name="underApp" value="games" />
        || Social Media
        <input type="radio" name="underApp" value="appsocial" />
        || Hrdware Interaction
        <input type="radio" name="underApp" value="apphardware" />
        || Data
        <input type="radio" name="underApp" value="appdata" />
        || Communication
        <input type="radio" name="underApp" value="appcommunication" />
      </Label>
    </FormGroup>
    <Button color="primary">Submit</Button>
  </Form>
);
export default Forms;
