import { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(username === "admin" && password === "1234"){
      alert("Login Successful ✅");
    } else {
      alert("Invalid Credentials ❌");
    }
  }

  return (

    <div style={styles.container}>

      <form style={styles.form} onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>
          Login
        </button>

      </form>

    </div>

  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0"
  },

  form: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray",
    textAlign: "center"
  },

  input: {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "250px"
  },

  button: {
    padding: "10px",
    width: "100%",
    backgroundColor: "blue",
    color: "white",
    border: "none"
  }

};

export default App;
