import { useState } from "react";

export default function AddFriendForm({ addFriend }) {
  const [formState, setFormState] = useState({ name: "", photo: "" });

  function handleChange(evt) {
    setFormState((state) => ({ ...state, [evt.target.name]: evt.target.value }));
  }

  function handleSave() {
    if (!formState.name) return;
    addFriend(formState);
    setFormState({ name: "", photo: "" });
  }

  return (
    <div className="form-add">
      <label htmlFor="name">Friend Name:</label>
      <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required />
      <label htmlFor="url">Image URL:</label>
      <input type="text" id="url" name="photo" value={formState.photo} onChange={handleChange} />
      <button className="btn" onClick={handleSave}>
        Add
      </button>
    </div>
  );
}
