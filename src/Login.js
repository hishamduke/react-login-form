import { useLoginStore } from "./store/loginStore";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";
function Login() {
  const navigate = useNavigate();

  const name = useLoginStore((state) => state.username);
  const password = useLoginStore((state) => state.password);
  const updateName = useLoginStore((state) => state.updateName);
  const updatePwd = useLoginStore((state) => state.updatePwd);
  const handleSubmit = async (e) => {
    console.log("hi");
    e.preventDefault();
    axios.defaults.withCredentials = true;

    const res = await axios(`http://localhost:8000/login`, {
      method: "post",
      data: { username: name, password },
      // withCredentials: true,
    }).then((res) => {
      console.log(res); // undefined
      // console.log(document.cookie); // nope
      if (res.status === 200) {
        navigate("/");
      }
    });
  };
  return (
    <>
      {/* hi
      <form
        style={{ color: "black" }}
        onClick={() => {
          updateName("Hisham");
        }}
      >
        {name} Hey{" "}
      </form> */}

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30vw",
          gap: "1rem",
          margin: "auto",
          marginTop: "4rem",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant="h5" component="h2">
          Login form
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          value={name}
          onChange={(e) => updateName(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type={"password"}
          value={password}
          onChange={(e) => updatePwd(e.target.value)}
          required
          inputProps={{ minLength: 6 }}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </div>
      </form>
    </>
  );
}
export default Login;
