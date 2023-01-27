// import { useBearStore } from "./store/loginStore";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRegStore } from "./store/regStore";
function Register() {
  const username = useRegStore((state) => state.username);
  const password = useRegStore((state) => state.password);
  const firstname = useRegStore((state) => state.firstname);
  const lastname = useRegStore((state) => state.lastname);

  const updateFirst = useRegStore((state) => state.updateFirst);
  const updateLast = useRegStore((state) => state.updateLast);
  const updatePwd = useRegStore((state) => state.updatePwd);
  const updateUname = useRegStore((state) => state.updateUname);

  const navigate = useNavigate();

  return (
    <>
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
          Register form
        </Typography>
        <TextField
          label="First Name"
          variant="outlined"
          required
          value={firstname}
          onChange={(e) => updateFirst(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          required
          value={lastname}
          onChange={(e) => updateLast(e.target.value)}
        />

        <TextField
          label="Username"
          variant="outlined"
          required
          value={username}
          onChange={(e) => updateUname(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          required
          type={"password"}
          value={password}
          onChange={(e) => updatePwd(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant="contained" type="submit">
            Register
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
}
export default Register;
