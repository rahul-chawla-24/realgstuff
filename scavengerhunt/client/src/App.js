import "./App.css";
import { SnackbarProvider } from "notistack";
import LoginView from "./Pages/Login";
import AlertDashboardView from "./Pages/AlertDashboard";
import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box , Grid } from "@material-ui/core";
import BranchCard from "./Component/BranchCard";
import SendAlert from "./Component/SendAlert";
import { io } from 'socket.io-client'
import { useEffect } from 'react'

function App() {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")) || null);
  const socket = io(process.env.REACT_APP_API_KEY);
  const [ branchAlerts , setBranchAlerts] = useState([])

  useEffect(() => {
    if(user)
    socket.emit("sendBranch",{ id: user?.branch?.id || null , role: user?.role})
    socket.on("getAlerts",(data) => {
      console.log('"aaala',data)
      setBranchAlerts(data?.data || []);
    });
  }, [user]);

  return (
    <SnackbarProvider maxSnack={3}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            {`Scavenger Hunt ${user?.branch?.name ? user?.branch?.name :  ""} Alerts`}
          </Typography>
          <Box flexGrow={1} />
          {user && (
            <Button
              onClick={() => {
                socket.emit("stopSendingBranch")
                setUser(null);
                setBranchAlerts([])
                window.localStorage.removeItem("user");
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <div className="App">
        {!user ? (
          <LoginView setUser={setUser} />
        ) : (
          <Box m={4} p={4}>
          <Grid container>
            <Grid xs={6} item>
              {user?.role?.type === "admin" ? <>
              < SendAlert />
              </> : <BranchCard branch={user?.branch} />}
            </Grid>
            <Grid xs={6} item>
            <AlertDashboardView user={user} branchAlerts={branchAlerts} />
            </Grid>
          </Grid>
          </Box>
        )}
      </div>
    </SnackbarProvider>
  );
}

export default App;
