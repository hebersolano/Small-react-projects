import { useState } from "react";

export default function AddFriendForm({ addFriend }) {
  const [formState, setFormState] = useState({ name: "", photo: "" });
  function handleChange(evt) {
    if (!formState.name) return;
    setFormState((state) => ({ ...state, [evt.target.name]: evt.target.value }));
    setFormState({ name: "", photo: "" });
  }

  return (
    <div className="form-add">
      <label htmlFor="name">Friend Name:</label>
      <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required />
      <label htmlFor="url">Image URL:</label>
      <input type="text" id="url" name="photo" value={formState.photo} onChange={handleChange} />
      <button className="btn" onClick={() => addFriend(formState)}>
        Add
      </button>
    </div>
  );
}
