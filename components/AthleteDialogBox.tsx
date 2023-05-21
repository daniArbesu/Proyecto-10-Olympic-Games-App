import { styled } from 'styled-components';

const Modal = styled.dialog`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid #888;
  background-color: #ffffff;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  top: 200px; // to see the board
`;

const AthleteModalBox = () => {
  return (
    <Modal open>
      <h2>AthleteDialogBox</h2>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Surname" />
      <input type="text" placeholder="Date of Birth" />
      <label>
        Height:
        <input type="number" placeholder="175" />
      </label>
      <label>
        Weight:
        <input type="number" placeholder="75" />
      </label>
      <input type="text" placeholder="Bio" />
      <label>
        Photo of the Athlete:
        <input type="file" />
      </label>
    </Modal>
  );
};

export default AthleteModalBox;
