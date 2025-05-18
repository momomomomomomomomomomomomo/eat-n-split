import Friend from "./Friend";

export default function FriendsList({
  list,
  onAddNewFriend,
  onSetFriendName,
  onSetFriendImage,
  friendName,
  friendImage,
  isAddFormOpen,
  onSetIsAddFormOpen,
  onSetCurID,
  curID,
}) {
  return (
    <div className="sidebar">
      <ul>
        {list.map((friend, i) => (
          <Friend
            curID={curID}
            onSetCurID={onSetCurID}
            key={i}
            friend={friend}
          />
        ))}
      </ul>
      {isAddFormOpen && (
        <form
          onSubmit={(e) => {
            onAddNewFriend(e);
          }}
          className="form-add-friend"
        >
          <label>👩🏿‍💻Friend name</label>{" "}
          <input
            value={friendName}
            onChange={(e) => onSetFriendName(e.target.value)}
            type="text"
          ></input>
          <label>🔗 Image URL</label>{" "}
          <input
            value={friendImage}
            onChange={(e) => onSetFriendImage(e.target.value)}
            type="text"
          ></input>
          <button className="button">Add</button>
        </form>
      )}
      <button
        onClick={() => onSetIsAddFormOpen((isAddFormOpen) => !isAddFormOpen)}
        className="button"
      >
        {isAddFormOpen ? "close" : "Add friend"}
      </button>
    </div>
  );
}
