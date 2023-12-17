const Details = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "0px 30px" }}>
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
          <div></div>
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
        </div>
      </div>
    </div>
  );
};
export default Details;
