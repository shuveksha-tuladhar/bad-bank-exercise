function Withdraw(){
    const [withdrawAmount, setWithdrawAmount] = React.useState('');
    const ctx = React.useContext(UserContext);
    return (
        <>
        <Card
          bgcolor="light"
          header="Withdraw"
          txtcolor="black"
          body={
            <>
              Balance $100
              <br />
              Withdraw Amount
              <br />
              <input
                type="input"
                className="form-control"
                id="withdraw-amount"
                placeholder="Withdraw Amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => console.log("Withdraw clicked")}
              >
                Withdraw
              </button>
            </>
          }
        />
      </>
    );
}