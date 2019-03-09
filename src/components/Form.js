import React from "react";

function Form() {
  return (
    <form>
      <label>
        Websites:
        <input type="radio" name="top" value="website" />
        Mobile:
        <input type="radio" name="top" value="Mobile" />
      </label>
    </form>
  );
}
export default Form;
