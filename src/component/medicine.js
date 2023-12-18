import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Medicine = () => {
  const [property, setProperty] = useState({
    name: "",
    time1: "",
    time2: "",
    expiry: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const input = location.state && location.state.input;
  console.log(input);

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(property);
    const updatedCart = [...input.userCart, property];
    setDoc(doc(db, "uesr-info", input.email), {
      ...input,
      userCart: updatedCart,
    });
    navigate("/details");
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
