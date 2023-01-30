import { userStore } from "./store/userStore";
import Button from "@mui/material/Button";
import { InputLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

function Home() {
  const [isLoading, setIsloading] = useState(true);
  axios.defaults.withCredentials = true;
  const {
    isLoading: dataLoading,
    error,
    data,
  } = useQuery("userData", () =>
    axios
      .get("http://localhost:8000/user", {
        withCredentials: "true",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        // console.log(err);
        navigate("/login");
      })
  );

  const navigate = useNavigate();

  const fname = userStore((state) => state.firstname);
  const lname = userStore((state) => state.lastname);
  const uname = userStore((state) => state.username);

  const updateFirst = userStore((state) => state.updateFirst);
  const updateLast = userStore((state) => state.updateLast);
  const updateUname = userStore((state) => state.updateUname);
  async function handleSubmit(e) {
    e.preventDefault();
    queryClient.invalidateQueries([`userData`]);
    console.log("hi");
    await axios(`http://localhost:8000/logout`, {
      method: "get",
      // withCredentials: true,
    }).then((res) => {
      console.log(res); // undefined
      // console.log(document.cookie); // nope
      if (res.status === 200) {
        setIsloading(true);
        navigate("/login");
      }
    });
  }
  if (dataLoading) {
    return <>Loading</>;
  }
  if (isLoading) {
    console.log(data);
    updateFirst(data.fname);
    updateLast(data.lname);
    updateUname(data.uname);
    setIsloading(false);
  }
  if (data) {
    console.log(data);
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
            User details
          </Typography>
          <InputLabel>Username</InputLabel>
          <TextField variant="outlined" value={uname} required disabled />
          <InputLabel>First Name</InputLabel>
          <TextField variant="outlined" value={fname} required disabled />
          <InputLabel>Last Name</InputLabel>
          <TextField variant="outlined" value={lname} required disabled />

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button variant="contained" type="submit">
              Logout
            </Button>
          </div>
        </form>
      </>
    );
  }
}
