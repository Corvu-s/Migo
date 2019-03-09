import React from "react";
import Button from "react-bootstrap/Button";
const Form = props => (
  <form onSubmit={props.getData}>
    <label>
      Websites:
      <input type="radio" name="top" value="website" />
      || Ecommerce
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
      //
      <p> __________________________________________________________________</p>
    </label>
    <label>
      Mobile Apps:
      <input type="radio" name="top" value="mobile" />
      || Games
      <input type="radio" name="underApp" value="games" />
      || Social Media
      <input type="radio" name="underApp" value="appsocial" />
      || Hrdware Interaction
      <input type="radio" name="underApp" value="apphardware" />
      || Data
      <input type="radio" name="underApp" value="appdata" />
      || Communication
      <input type="radio" name="underApp" value="appcommunication" />
    </label>
    <p />
    <Button>Submit</Button>
  </form>
);

export default Form;
