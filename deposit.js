function Deposit() {
  const [depositAmount, setDepositAmount] = React.useState("");

  const ctx = React.useContext(UserContext);
  return (
    <>
      <Card
        bgcolor="light"
        header="Deposit"
        txtcolor="black"
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
              onClick={() => console.log("Deposit clicked")}
            >
              Deposit
            </button>
          </>
        }
      />
    </>
  );
}
