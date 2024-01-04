import "./Eat-n-Split.css";
import ListOfFriends from "./ListOfFriends";
import BillAndSplit from "./BillAndSplit";
import { useState } from "react";

const data = [
  { name: "Clark", owe: -7, photo: randomProfile() },
  { name: "Sarah", owe: 20, photo: randomProfile() },
  { name: "Anthony", owe: 0, photo: randomProfile() },
];

export default function EatAndSplit() {
  const [list, setList] = useState(data);
  randomProfile();
  return (
    <div className="eat-n-split">
      <ListOfFriends listFriends={list} />
      <BillAndSplit />
    </div>
  );
}

function randomProfile() {
  const random = Math.floor(Math.random() * 99) + 1;
  return `https://randomuser.me/api/portraits/men/${random}.jpg`;
}
