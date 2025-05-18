import { useState } from "react";
import FriendsList from "./FriendsList";
import SplitForm from "./SplitForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("");
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [curID, setCurID] = useState("");
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [payer, setPayer] = useState("you");
  const handleBillSubmit = (e) => {
    e.preventDefault();

    const balance = payer === "you" ? bill - yourExpense : -yourExpense;
    setFriendsList((friendsList) =>
      friendsList.map((friend) =>
        friend.id === curID
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
    setCurID("");
    setBill(0);
    setYourExpense(0);
    setPayer("you");
  };
  const curFriend = curID && friendsList.find((friend) => friend.id === curID);

  const friend = {
    name: friendName,
    image: friendImage,
    balance: 0,
    id: Date.now(),
  };
  const addNewFriend = (e) => {
    e.preventDefault();
    if ((!friendName, !friendImage)) return;
    setFriendsList((friendsList) => [...friendsList, friend]);
    setFriendImage("");
    setFriendName("");
    setIsAddFormOpen((isAddFormOpen) => !isAddFormOpen);
  };

  return (
    <div className="app">
      <FriendsList
        list={friendsList}
        onAddNewFriend={addNewFriend}
        onSetFriendImage={setFriendImage}
        onSetFriendName={setFriendName}
        friendName={friendName}
        friendImage={friendImage}
        onSetIsAddFormOpen={setIsAddFormOpen}
        isAddFormOpen={isAddFormOpen}
        onSetCurID={setCurID}
        curID={curID}
      />
      {curID && (
        <SplitForm
          onSetBill={setBill}
          bill={bill}
          onSetYourExpense={setYourExpense}
          yourExpense={yourExpense}
          onSetPayer={setPayer}
          payer={payer}
          curFriend={curFriend}
          onBillSubmit={handleBillSubmit}
        />
      )}
    </div>
  );
}
