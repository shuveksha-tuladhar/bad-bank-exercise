function Withdraw(){
    const [withdrawAmount, setWithdrawAmount] = React.useState('');
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
    
      function handleWithdraw() {
        console.log(withdrawAmount);
        if (!validate(withdrawAmount, "Withdraw Amount")) return;
        // TODO: Display withdraw success, total remaining balance and add another withdraw button
        // Validate amount number with two decimal places
      }
    
    return (
        <>
        <Card
          bgcolor="light"
          header="Withdraw"
          txtcolor="black"
          status={status}
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
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
            </>
          }
        />
      </>
    );
}