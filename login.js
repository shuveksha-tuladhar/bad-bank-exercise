function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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

  function handleLogin() {
    console.log(email, password);
    if (!validate(email, "Email ID")) return;
    if (!validate(password, "Password")) return;
    // TODO: login user (functionality - check if user's email address and password is correct)
    // If user email and password correct: display "User logged in as email address" and Logout button
    // If not correct, throw error "Email/password incorrect"
  }
  return (
    <>
   <div className="row no-gutters mt-5">
    <div className="col-lg-6 text-center border-right">
<img src="bank.webp" alt="Bank" />
    </div>
    <div className="col-lg-6 mx-auto" >
    <Card classes="mx-auto"
        bgcolor="light"
        header="Login"
        txtcolor="black"
        status={status}
        body={
          <>
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="input"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        }
      />
  
    </div>
   </div>

   

    </>
  );
}
