export default function BillAndSplit() {
  return (
    <div className="bill-and-split">
      <h2 className="title">Split a bill with Clark</h2>
      <div className="bill-form">
        <label htmlFor="bill-value">Bill value</label>
        <input type="text" id="bill-value" />
        <label htmlFor="your-expense">Your expense</label>
        <input type="text" id="your-expense" />
        <label htmlFor="friend-expense">Clark expense</label>
        <input type="text" id="friend-expense" />
        <label htmlFor="who-pay">Who is paying the bill?</label>
        <select name="names">
          <option value="Clark">Clark</option>
          <option value="You">You</option>
        </select>
        <button className="btn">Split bill</button>
      </div>
    </div>
  );
}
