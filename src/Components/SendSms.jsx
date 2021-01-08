import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "55px",
  },
  messageInput: {
    marginBottom: 12,
    width:"500px",
    height:"150px"
  },
});

function SendSms() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card align="center" className={classes.root}>
      <Typography variant="h6" component="h2">
        Name : {history.location.state.FirstName}{" "}
        {history.location.state.SeconndName}
      </Typography> <br/>
      <div>Mobile Number : {history.location.state.contact}</div>
      <br/>
      <form>
        <TextField className={classes.messageInput} required iid="outlined-basic" variant="outlined" label="Message for OTP" />
      </form>
      <IconButton onClick={() => history.goBack()}>
        <ArrowBackIcon color="secondary" />
      </IconButton>
    </Card>
  );
}

export default SendSms;
