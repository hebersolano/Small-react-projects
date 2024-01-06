export default function ListOfFriends({ listFriends, onSelect, selectedFriend }) {
  return (
    <ul className="friends">
      {listFriends.map((friend, i) => (
        <ListItem key={i} friend={friend} selectedFriend={selectedFriend} onSelect={() => onSelect(i, friend.id)} />
      ))}
    </ul>
  );
}

function ListItem({ friend, selectedFriend, onSelect }) {
  const isSelected = friend.id == selectedFriend?.id;

  let state =
    friend.owe == 0
      ? `You and ${friend.name} are even`
      : friend.owe < 0
      ? `You owe ${friend.name} $${Math.abs(friend.owe)}`
      : `${friend.name} owes you $${friend.owe}`;

  return (
    <li className={isSelected ? "friend selected" : "friend"}>
      <img src={friend.photo} alt="profile" />
      <div className="txt">
        <p className="name">{friend.name}</p>
        <p className="state" style={{ color: friend.owe < 0 ? "red" : friend.owe > 0 ? "green" : "" }}>
          {state}
        </p>
      </div>
      <button className="btn" onClick={onSelect}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
