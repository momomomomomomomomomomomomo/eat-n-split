export default function SplitForm({
  curFriend,
  onSetBill,
  bill,
  onSetYourExpense,
  yourExpense,
  onSetPayer,
  payer,
  onBillSubmit,
}) {
  return (
    <form onSubmit={(e) => onBillSubmit(e)} className="form-split-bill">
      <h2>Split the bill with {curFriend.name}</h2>
      <label>💼Bill value</label>{" "}
      <input
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
        type="text"
      ></input>
      <label>🙍🏿Your expense</label>{" "}
      <input
        value={yourExpense}
        onChange={(e) => onSetYourExpense(+e.target.value)}
        type="text"
      ></input>
      <label>👩🏿‍🔧{curFriend.name}'s' expense</label>{" "}
      <input
        type="text"
        value={bill ? bill - yourExpense : ""}
        disabled
      ></input>
      <label>😒Who is paying the bill?</label>{" "}
      <select value={payer} onChange={(e) => onSetPayer(e.target.value)}>
        <option value={"you"}>You</option>
        <option value={curFriend.name}>{curFriend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
