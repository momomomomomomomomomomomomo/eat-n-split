export default function Friend({ friend, onSetCurID, curID }) {
  return (
    <li>
      <img src={friend.image} alt={`${friend.name} your friend`} />
      <h3>{friend.name}</h3>

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes you {friend.balance}€
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {-friend.balance}€
        </p>
      )}

      <button
        onClick={() =>
          onSetCurID((id) => (friend.id === id ? null : friend.id))
        }
        className="button"
      >
        {curID === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
}
