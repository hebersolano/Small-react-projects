export default function ListOfFriends({ listFriends, onSelect }) {
  return (
    <ul className="friends">
      {listFriends.map((friend, i) => (
        <ListItem key={i} name={friend.name} owe={friend.owe} photo={friend.photo} onSelect={() => onSelect(i)} />
      ))}
    </ul>
  );
}

function ListItem({ name, owe, photo, onSelect }) {
  let state =
    owe == 0 ? `You and ${name} are even` : owe < 0 ? `You owe ${name} $${Math.abs(owe)}` : `${name} owes you $${owe}`;
  return (
    <li className="friend">
      <img src={photo} alt="profile" />
      <div className="txt">
        <p className="name">{name}</p>
        <p className="state" style={{ color: owe < 0 ? "red" : owe > 0 ? "green" : "" }}>
          {state}
        </p>
      </div>
      <button className="btn" onClick={onSelect}>
        Select
      </button>
    </li>
  );
}
