import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authcontext";
import axios from "axios";

const Login = () => {
  let emailRef = useRef();
  let passwordRef= useRef();
  let navigate = useNavigate();
  const { login } = useContext(AuthContext);

  let handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcgxl3bMeYFuO8FhonLMVC25ryqupr5BU",
        {
          email: email,
          password: password,
        }
      );
      login(res.data.idToken);
      alert("login successful");
      navigate("/home");
    } catch (error) {
      alert("Something went wrong\n Please check your password or email");
    }
    // fetch("http://localhost:3000/users")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     let user = data.find((user) => {
    //       return user.email === email.current.value;
    //     });
    //     console.log(user);
    //     if (user == undefined) {
    //       alert("user not found");
    //     } else if (user.password !== password.current.value) {
    //       alert("invalid password");
    //     } else {
    //       alert("login successfull");
    //       localStorage.setItem("userdetails", JSON.stringify(user));
    //       navigate("/home");
    //     }
    //   });
  };

  return (
    <div className="login-cont">
      <div className="login-box">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email id" ref={emailRef} required />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <input type="submit" value="login" />
        </form>
        <span>Dont have an account ? </span>
        <Link to="/">
          <button>Create account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
