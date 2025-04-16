import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayer = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayer = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
