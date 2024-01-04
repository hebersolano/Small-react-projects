export default function ListOfFriends({ listFriends }) {
  return (
    <div className="friend-list">
      <ul className="friends">
        {listFriends.map((friend, i) => (
          <ListItem key={i} name={friend.name} owe={friend.owe} photo={friend.photo} />
        ))}
      </ul>
      <Form />
    </div>
  );
}

function ListItem({ name, owe, photo }) {
  return (
    <li className="friend">
      <img src={photo} alt="profile" />
      <div className="txt">
        <p className="name">{name}</p>
        <p className="state">You and Clark are even</p>
      </div>
      <button className="btn">Select</button>
    </li>
  );
}

function Form() {
  return (
    <div className="form-add">
      <label htmlFor="name">Friend Name:</label>
      <input type="text" id="name" />
      <label htmlFor="url">Image URL:</label>
      <input type="text" id="url" />
      <button className="btn">Add</button>
    </div>
  );
}
