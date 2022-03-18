import Github from "../img/github.png";

const Login = () => {
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <div className="wrapper">
      <div className="login">
        <h1 className="login--title">Please Login with Github</h1>
        <div className="login--button" onClick={github}>
          <img src={Github} alt="" className="login--icon" />
          Github
        </div>
      </div>
    </div>
  );
};

export default Login;
