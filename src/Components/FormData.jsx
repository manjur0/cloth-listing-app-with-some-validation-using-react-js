import { useState } from "react";
import "./FormData.css";
import ClothTable from "./ClothTable";
import { localStorag } from "./LocalStorag";
const FormData = () => {
  const [input, setInput] = useState(localStorag());

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = {};
    const inputElements = [...event.target.elements];
    inputElements.forEach((element) => {
      if (element.tagName !== "BUTTON" && element.value !== "") {
        //radio button condition
        if (element.type === "radio" && !element.checked) {
          return;
        }
        inputValue[element.name] = element.value;
        element.value = "";
      }
    });
    // Size checking for cloths
    if (inputValue.size === "S") {
      inputValue.size = "S";
    } else if (inputValue.size === "M") {
      inputValue.size = "M";
    } else if (inputValue.size === "XL") {
      inputValue.size = "XL";
    }

    //price condition
    if (inputValue.price <= 0) {
      return alert("Price must be greater than 0");
    }
    //quantity condition
    else if (inputValue.quntitry <= 0 ) {
      return alert("Quantity must be greater than 0");
    }
    // Cloth id condition
    else if (inputValue.clothId <= 0) {
      return alert("Cloth Id must be greater than 0");
    } else {
      setInput([...input, inputValue]);
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} id="contact">
          <h3
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Cloths list Application
          </h3>
          <fieldset>
            <label>Cloth Name: </label>
            <input
              placeholder="Cloth Name"
              name="name"
              // value="name"
              type="text"
              required
            />
          </fieldset>
          <fieldset>
            <label>Cloth Id: </label>
            <input
              placeholder="Cloth Id"
              name="clothId"
              // value="id"
              type="number"
              required
            />
          </fieldset>
          <fieldset>
            <label>Your Price: </label>
            <input
              placeholder="Your Price"
              name="price"
              // value="price"
              type="number"
              required
            />
          </fieldset>
          {/* Quantity */}
          <fieldset>
            <label>Your Quantity: </label>
            <input
              max={5}
              placeholder="Your Quantity"
              type="number"
              // value="quantity"
              name="quantity"
              required
            />
          </fieldset>

          {/* Select color Option */}
          <select name="color" id="pet-select">
            <option>--Please choose an Color--</option>
            <option value="blue" name="color">
              Blue
            </option>
            <option value="red" name="color">
              Red
            </option>
            <option value="green" name="color">
              Green
            </option>
          </select>

          {/* Date */}
          <fieldset>
            <label>Manufacture date:</label>
            <input
              type="date"
              name="date"
              // value="date"
              required
            />
          </fieldset>

          {/* Size button for size */}
          <fieldset>
            <input type="radio" value="M" id="contactChoice1" name="size" />
            <label> M </label>

            <input type="radio" value="L" id="contactChoice2" name="size" />
            <label> L </label>

            <input type="radio" value="XL" id="contactChoice3" name="size" />
            <label> XL </label>
          </fieldset>

          {/* Checkbox */}
          <fieldset>
            <input
              required
              type="checkbox"
              id="coding"
              // value="checked"
              name="checkbox"
            />
            <label> Check terms and condition </label>
          </fieldset>

          {/* description */}
          <fieldset>
            <label>Description: </label>
            <textarea
              maxLength={20}
              placeholder="Type your message here...."
              name="description"
              type="text"
              required
            ></textarea>
          </fieldset>
          {/* submit button */}
          <fieldset>
            <button type="submit" id="contact-submit" data-submit="...Sending">
              Add Your Cloth
            </button>
          </fieldset>
        </form>
      </div>
      <ClothTable input={input} setInput={setInput}></ClothTable>
    </div>
  );
};

export default FormData;
