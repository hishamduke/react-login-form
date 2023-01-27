import { useLoginStore } from "./store/loginStore";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { display } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
function Login() {
  const navigate = useNavigate();

  const name = useLoginStore((state) => state.username);
  const password = useLoginStore((state) => state.password);
  const updateName = useLoginStore((state) => state.updateName);
  const updatePwd = useLoginStore((state) => state.updatePwd);

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
      >
        <Typography variant="h5" component="h2">
          Login form
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type={"password"}
          value={password}
          onChange={(e) => updatePwd(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant="contained">Login</Button>
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
