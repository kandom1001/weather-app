import { useState } from "react";
import {
  AddLocationButton,
  AddLocationContainer,
  ConfirmButton,
} from "./style";

const AddLocation = ({ handleAddCity }) => {
  const [showAddLocationInput, setShowAddLocationInput] = useState(false);
  const [input, setInput] = useState("");
  return (
    <AddLocationContainer>
      {!showAddLocationInput && (
        <AddLocationButton
          className="addLocation__button"
          onClick={() => setShowAddLocationInput(true)}
        >
          Add Location
        </AddLocationButton>
      )}

      {showAddLocationInput && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            input && handleAddCity(input);
            setInput("");
            input && setShowAddLocationInput(false);
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
          <ConfirmButton type="submit" className="addLocation__confirm">
            Add
          </ConfirmButton>
        </form>
      )}
    </AddLocationContainer>
  );
};

export default AddLocation;
