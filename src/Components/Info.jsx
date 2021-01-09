import { Button, IconButton } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "55px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Info() {
  const classes = useStyles();
  const history = useHistory();
  const handleGoToSmS = (id,FirstName,SeconndName,contact) => {
    history.push({
      pathname: `/info/sendsms/${id}`,
      state: {
        id: id,
        FirstName: FirstName,
        SeconndName: SeconndName,
        contact: contact,
      },
    });
  };
  return (
    <Card align="center" className={classes.root}>
      <Typography variant="h6" component="h2">
        Name : {history.location.state.FirstName}{" "}
        {history.location.state.SeconndName}
      </Typography>
      <div>Mobile Number : {history.location.state.contact}</div>
      <IconButton onClick={() => history.goBack()}>
        <ArrowBackIcon color="secondary" />
      </IconButton>
      <IconButton
        onClick={() => handleGoToSmS(history.location.state.id, 
            history.location.state.FirstName,
            history.location.state.SeconndName,
            history.location.state.contact)}
      >
        <ArrowForwardIcon color="secondary" />
      </IconButton>
    </Card>
  );
}

export default Info;
