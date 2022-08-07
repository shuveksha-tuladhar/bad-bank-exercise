function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);
  return (
    <>
      <Card
        bgcolor="light"
        header="Login"
        txtcolor="black"
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
              onClick={() => console.log("Login clicked")}
            >
              Login
            </button>
          </>
        }
      />
    </>
  );
}
