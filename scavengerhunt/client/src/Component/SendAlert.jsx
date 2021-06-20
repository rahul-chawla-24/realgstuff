import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Link";
import Box from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import axios from 'axios';
import { Autocomplete } from '@material-ui/lab';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import BranchList from './BranchList'

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

export default function SendAlert() {
  const classes = useStyles();
  const [values, setValues] = useState({
    pincodes: [],
    text: "",
  });
  const [ pincodes , setPincodes ] = useState([])

  const [loading, setLoading] = useState(false);
  
  let GET_PINCODES = `${process.env.REACT_APP_API_KEY}pincode`;
  let SEND_ALERT = `${process.env.REACT_APP_API_KEY}alert/create`;
  const { enqueueSnackbar } = useSnackbar();

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [ alertSentToBranches , setAlertSentToBranches ] = useState([])
  useEffect(() => {
    const getPincodes = async () => {
        try {
          setLoading(true);
          const res = await axios.get(GET_PINCODES);
          setLoading(false);
          if (res?.data) {
            setPincodes(res.data)
          }
        } catch (err) {
            console.log(err)
          setLoading(false);
          enqueueSnackbar(err?.response?.data?.message || "Some Error Occured", {
            variant: "error",
          });
        }
      };
      getPincodes()
  },[])


  const sendAlert = async () => {
    try {
      setLoading(true);
      const res = await axios.post(SEND_ALERT, {
        ...values,
      });
      setLoading(false);
      if (res?.data) {
        setAlertSentToBranches(res.data)
        enqueueSnackbar(
          `Alert Sent`,
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

      <div>
        <Typography component="h1" variant="h5">
          Send Alerts
        </Typography>
        <form className={classes.form} noValidate>
        <Autocomplete
            multiple
            fullWidth
            disableCloseOnSelect
            value={values.pincodes}
            id="checkboxes-tags-demo"
            options={pincodes || []}
            loading={loading}
            onChange={(e, value) => {
                setValues({...values, pincodes: value});
            }}
            getOptionLabel={(option) =>`Pincode-${option?.value || 'N/A'} Branch -${option?.branch?.name || 'N/A'}`}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {`Pincode-${option?.value || 'N/A'} Branch -${option?.branch?.name || 'N/A'}`}
                </React.Fragment>
            )}
            renderInput={params => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Select Pincodes"
                    placeholder="Select Pincodes"
                />
            )}
        />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={values.text}
            onChange={(e) => {
              setValues({ ...values, text: e.target.value });
            }}
            fullWidth
            name="text"
            label="text"
            id="text"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
            onClick={async() => {await sendAlert()}}
          >
           Send
          </Button>
        </form>
      </div>
      <Box m={2}>
      {alertSentToBranches && <BranchList branches={alertSentToBranches || []} />}
      </Box>
    </Container>
  );
}
