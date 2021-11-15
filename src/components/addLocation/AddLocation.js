import { useState } from "react";
import styled from "styled-components";
import locationBackground from "../../images/locationBackground.gif";

const AddLocationContainer = styled.div`
  width: 270px;
  height: 135px;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${locationBackground});
  background-size: cover;
  border-radius: 25px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }

  input {
    width: 150px;
    height: 25px;
    color: purple;
    background-color: lightGrey;
    border-radius: 12.5px;
    border-color: transparent;
    text-align: center;
  }
`;
const AddLocationButton = styled.button`
  height: 25px;
  background-color: lightGrey;
  border-color: transparent;
  cursor: pointer;
  width: 100px;
  border-radius: 25.5px;
  text-align: center;
`;
const ConfirmButton = styled(AddLocationButton)`
  width: 50px;
  border-radius: 12.5px;
`;

const AddLocation = ({ addCity }) => {
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
          <ConfirmButton type="submit" className="addLocation__confirm">
            Add
          </ConfirmButton>
        </form>
      )}
    </AddLocationContainer>
  );
};

export default AddLocation;
