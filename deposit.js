function Deposit() {
  const [depositAmount, setDepositAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    console.log(depositAmount);
    if (!validate(depositAmount, "Deposit Amount")) return;
    // TODO: Display deposit success, total balance and add another deposit button
    // Validate amount number with two decimal places
  }

  return (
    <>
      <Card
        bgcolor="light"
        header="Deposit"
        txtcolor="black"
        status={status}
        body={
          <>
            Balance $100
            <br />
            Deposit Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit-amount"
              placeholder="Deposit Amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        }
      />
    </>
  );
}
