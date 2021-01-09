import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const history = useHistory();
  const classes = useStyles();
 const handleHome = () => {
  history.push({
    pathname: "/",
  });
 }
 
 const HandleList = () => {
  history.push({
    pathname: "/contactlist",
  });
 }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={handleHome} variant="h6" className={classes.title}>
           Kisan Network
          </Typography>
          <Button onClick={HandleList} color="inherit">Contact List</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
