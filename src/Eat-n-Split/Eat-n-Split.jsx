import "./Eat-n-Split.css";
import ListOfFriends from "./ListOfFriends";
import BillAndSplit from "./BillAndSplit";
import AddFriendForm from "./AddFriendForm";
import { useState } from "react";
import { randomProfile } from "./helpers";
import { v4 as uuid } from "uuid";

const data = [
  { id: uuid(), name: "Clark", owe: -7, photo: randomProfile() },
  { id: uuid(), name: "Sarah", owe: 20, photo: randomProfile() },
  { id: uuid(), name: "Anthony", owe: 0, photo: randomProfile() },
];

export default function EatAndSplit() {
  const [list, setList] = useState(data);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const ctrl = {
    addFriend(data) {
      setList((list) => {
        if (!data.photo) data.photo = "./person.png";
        return [...list, { ...data, owe: 0, id: uuid() }];
      });
      setShowAddFriend(false);
    },

    saveData(id, balance) {
      setList((list) =>
        list.map((friend) => {
          console.log(friend);
          if (friend.id == id) return { ...friend, owe: +friend.owe + +balance };
          return friend;
        })
      );
      setSelectedFriend(null);
    },
  };

  const view = {
    showForm: function (i, id) {
      setSelectedFriend((selected) => (selected?.id == id ? null : list[i]));
      setShowAddFriend(false);
    },
  };

  return (
    <div className="eat-n-split">
      <div className="sidebar">
        <ListOfFriends
          listFriends={list}
          onSelect={view.showForm}
          addFriend={ctrl.addFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriendForm addFriend={ctrl.addFriend} />}
        <button className="btn btn-form" onClick={() => setShowAddFriend((state) => !state)}>
          {!showAddFriend ? "Add New Friend" : "Close"}
        </button>
      </div>
      {selectedFriend && <BillAndSplit friend={selectedFriend} saveData={ctrl.saveData} />}
    </div>
  );
}
