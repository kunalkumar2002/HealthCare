import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Medicine = () => {
  const [property, setProperty] = useState({
    name: "",
    time1: "",
    time2: "",
    expiry: "",
  });
  const navigate = useNavigate();
  const [curruser, setCurruser] = useState("");
  const [cart, setCart] = useState([]);

  // Get the currently signed-in user
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

    if (curruser) {
      fetchData();
    }
  }, [curruser]);
  const handlesubmit = async (e) => {
    e.preventDefault();

    const postDocRef = doc(db, "user-info", curruser);

    // Get postData from current state
    const postData = cart;
    console.log(postData.userCart);
    // Add new medicine details to userCart array
    postData.userCart.push({
      name: property.name,
      time1: property.time1,
      time2: property.time2,
      expiry: property.expiry,
    });

    // Write updated data to Firestore
    setDoc(postDocRef, postData)
      .then(() => {
        console.log("Medicine data updated successfully!");
        // Update local state with the updated postData
        setCart(postData.userCart);
        navigate("/details");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            textAlign: "left",
            border: "2px solid black",
            padding: "40px",
          }}
          onSubmit={handlesubmit}
        >
          <label style={{ marginBottom: "10px" }}>Medicine Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={property.name}
            onChange={(e) =>
              setProperty((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label style={{ marginBottom: "10px", marginTop: "10px" }}>
            Time 1
          </label>
          <input
            type="time"
            placeholder="time"
            value={property.time1}
            onChange={(e) =>
              setProperty((prev) => ({ ...prev, time1: e.target.value }))
            }
          />
          <label style={{ marginBottom: "10px", marginTop: "10px" }}>
            Time 2
          </label>
          <input
            type="time"
            placeholder="Time "
            value={property.time2}
            onChange={(e) =>
              setProperty((prev) => ({ ...prev, time2: e.target.value }))
            }
          />
          <label style={{ marginBottom: "10px", marginTop: "10px" }}>
            Expiry Date
          </label>
          <input
            type="date"
            placeholder="Expiry Date"
            value={property.expiry}
            onChange={(e) =>
              setProperty((prev) => ({ ...prev, expiry: e.target.value }))
            }
          />
          <button
            style={{
              marginTop: "20px",
              width: "100px",
              background: "green",
              color: "white",
              fontSize: "large",
              padding: "5px",
            }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default Medicine;
