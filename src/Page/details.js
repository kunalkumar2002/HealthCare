import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Details = () => {
  const [curruser, setCurruser] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();

  //const email = location.state.email;
  //console.log(email);
  //console.log(location.state.email);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.uid);
        setCurruser(user.email);
      } else {
        console.log("not found");
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (curruser) {
      fetchData();
    }
  }, [curruser]);

  const fetchData = () => {
    const postDocRef = doc(db, "user-info", curruser);

    onSnapshot(postDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const postData = {
          id: docSnapshot.id,
          ...docSnapshot.data(),
        };

        const userCart = postData;
        // setCart(userCart);
        console.log(userCart);
      } else {
        console.log("Document does not exist or there was an error.");
      }
    });
  };

  const handleclick = (e) => {
    e.preventDefault();
    // console.log(e);
    // navigate("/medicine", { state: { email: email } });
    navigate("/medicine");
  };

  return (
    <div>
      <div style={{ textAlign: "left", margin: "0px 30px 20px" }}>
        <button
          style={{
            background: "green",
            color: "white",
            fontSize: "x-large",
            padding: "5px",
            border: "2px solid black",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleclick}
        >
          Add Medicine
        </button>
        {/* <div> Habits</div> */}
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", margin: "0px 30px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "300px",
              background: "white",
              border: "2px solid black",
            }}
          >
            <h4 style={{ background: "white" }}>Medicine taken</h4>
            <div>
              <ul style={{ listStyle: "none", textAlign: "left" }}>
                <li>Limcee</li>
                <li>Neurobion Forte </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              width: "500px",
              height: "300px",
              background: "white",
              border: "2px solid black",
            }}
          >
            <h4 style={{ background: "white" }}>Medicine have to take</h4>
            <div></div>
          </div>
        </div>
        <div style={{ padding: "0px 20px", width: "100%", height: "100vh" }}>
          <div style={{ background: "white", border: "2px solid black" }}>
            <h3
              style={{
                background: "white",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              Habits
            </h3>
            <div
              style={{
                width: "100%",
                height: "90vh",
                background: "white",
              }}
            ></div>
            <button> Habits</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
