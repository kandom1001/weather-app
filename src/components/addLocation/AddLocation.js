import { useState } from "react";
import "./AddLocation.css";

const AddLocation = ({ addCity }) => {
  const [showAddLocationInput, setShowAddLocationInput] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="add-location-container">
      {!showAddLocationInput && (
        <button
          className="add-location-button"
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
            className="add-location-input"
            type="text"
            value={input}
            placeholder="Add Locations"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" className="add-location-confirm">
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default AddLocation;
