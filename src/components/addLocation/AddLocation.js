import { useState } from "react";
import "./AddLocation.scss";

const AddLocation = ({ addCity }) => {
  const [showAddLocationInput, setShowAddLocationInput] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="addLocation__container">
      {!showAddLocationInput && (
        <button
          className="addLocation__button"
          onClick={() => setShowAddLocationInput(true)}
        >
          Add Location
        </button>
      )}

      {showAddLocationInput && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCity(input);
            setInput("");
            setShowAddLocationInput(false);
          }}
        >
          <input
            type="text"
            value={input}
            placeholder="Add Locations"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" className="addLocation__confirm">
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default AddLocation;
