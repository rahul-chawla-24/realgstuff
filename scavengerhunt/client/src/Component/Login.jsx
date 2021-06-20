import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSnackbar } from "notistack";
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">ScavengerHunt</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({
    setUser
}) {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "1incharge",
    password: "ScavengerHunt@2021",
  });
  const [loading, setLoading] = useState(false);
  let LOGIN = `${process.env.REACT_APP_API_KEY}user/auth`;
  const { enqueueSnackbar } = useSnackbar();

  const login = async () => {
    try {
      setLoading(true);
      const res = await axios.post(LOGIN, {
        ...values,
      });
      setLoading(false);
      if (res?.data) {
        window.localStorage.setItem("user",JSON.stringify(res.data));
        setUser(res.data)
        enqueueSnackbar(
          `Hey ${res?.data?.name}, Welcome to ${res?.data?.branch?.name}`,
          {
            variant: "success",
          }
        );
      }
    } catch (err) {
        console.log(err)
      setLoading(false);
      enqueueSnackbar(err?.response?.data?.message || "Some Error Occured", {
        variant: "error",
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={values.username}
            onChange={(e) => {
              setValues({ ...values, username: e.target.value });
            }}
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={values.password}
            onChange={(e) => {
              setValues({ ...values, password: e.target.value });
            }}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
            onClick={async() => {await login()}}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
