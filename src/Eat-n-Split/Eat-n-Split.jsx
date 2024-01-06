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
  const [dataForm, setDataForm] = useState(null);

  const ctrl = {
    addFriend(data) {
      setList((list) => {
        if (!data.photo) data.photo = "./person.png";
        return [...list, { ...data, owe: 0, id: uuid() }];
      });
    },

    saveData(id, owe) {
      setList((list) =>
        list.map((friend) => {
          if (friend.id == id) return { ...friend, owe };
          return friend;
        })
      );
    },
  };

  const view = {
    showForm: function (i) {
      setDataForm(list[i]);
    },
  };

  console.log(list);

  return (
    <div className="eat-n-split">
      <div className="sidebar">
        <ListOfFriends listFriends={list} onSelect={view.showForm} addFriend={ctrl.addFriend} />
        {showAddFriend && <AddFriendForm addFriend={ctrl.addFriend} />}
        <button className="btn btn-form" onClick={() => setShowAddFriend((state) => !state)}>
          {!showAddFriend ? "Add New Friend" : "Close"}
        </button>
      </div>
      {dataForm && <BillAndSplit friend={dataForm} saveData={ctrl.saveData} />}
    </div>
  );
}
