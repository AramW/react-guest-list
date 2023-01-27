/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import icon from './images/3157972.avif';

const Icon = css`
  display: flex;
  width: 100px;
  margin-right: 5px;
`;

const heading = css`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
`;

const formStyle = css`
  display: flex;
  justify-content: center;
  padding: 10px 10px 10px 10px;
  border: none;
  border-radius: 5px;
  background-color: #3d9970;
  margin: 20px 20% 0 20%;
  input {
    margin-right: 50px;
    line-height: 10px;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
  label {
    margin-right: 5px;
    line-height: 50px;
    font-weight: 100;
  }
  button {
    text-transform: uppercase;
    width: 200px;
    border: none;
    border-radius: 5px;
    background-color: blueviolet;
    color: white;
    font-weight: 100;
    cursor: pointer;
  }
`;

const attendingGuestList = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'monospace', 'fantasy', 'Serif', Arial, sans-serif;
  font-size: 20px;
  list-style-type: none;
  background: #b4d0c3;
  padding-right: 10px;
  justify-content: space-around;
  margin: 20px 20% 0 20%;
  border-radius: 5px;
  li {
    margin: 10px 10px 10px 10px;
  }
  button {
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-weight: 100;
    cursor: pointer;
  }
`;
function App() {
  const baseUrl = '';
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(true);

  // Load guest list from API.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/`);
        const allGuests = await response.json();
        setGuestList(allGuests);
        console.log(allGuests);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Add a new guest to the list.

  // Copy array and add new data

  // Update a guest.

  // Remove guest.

  return (
    <div>
      <div css={heading}>
        <img src={Icon} alt="Guest-list-icon" css={icon} />
        <h1>React Guest List</h1>
      </div>
      <form css={formStyle}>
        <label htmlFor="firstName">First name: </label>
        <input
          id="firstName"
          value={firstName}
          disabled={loading}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <label htmlFor="lastName">Last name: </label>
        <input
          id="lastName"
          value={lastName}
          disabled={loading}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <button
          onClick={(e) => {
            setFirstName(firstName);
            setLastName(lastName);
          }}
        ></button>
      </form>
      <ul css={attendingGuestList}></ul>
    </div>
  );
}

export default App;
