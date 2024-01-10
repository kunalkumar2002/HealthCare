import { useState } from "react";
import styles from "../style/signup.module.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const initialFormValues = {
    email: "",
    pass: "",
  };
  const [logvalue, setLogvalue] = useState(initialFormValues);
  // const [islogdin, setIslogdin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(logvalue);
    signInWithEmailAndPassword(auth, logvalue.email, logvalue.pass)
      .then((res) => {
        const user = res.user;
        console.log("logd in successfully", user);
        navigate("/details");
      })
      .catch((err) => {
        console.log("geating error in login page", err);
      });
    setLogvalue(initialFormValues);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={logvalue.email}
            onChange={(e) =>
              setLogvalue((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            value={logvalue.pass}
            onChange={(e) =>
              setLogvalue((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
          <button>signup</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
