import myimg from "../assets/kissclipart-health-care-clip.jpg";
const Home = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          // flexWrap: "wrap",
          alignItems: "center",
          height: "60vh",
          width: "100vh",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <span style={{ marginRight: "10px" }}>
          <h1>Login to check your health</h1>
        </span>
        <img
          src={myimg}
          alt="medical"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // mixBlendMode: "overlay",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        @ 2023 all rights reserved
      </div>
    </div>
  );
};
export default Home;
