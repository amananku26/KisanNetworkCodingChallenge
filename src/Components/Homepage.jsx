import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AuthContext } from "./AuthContext";
import { Avatar, Button, IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ContactMailSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  table: {
    minWidth: 650,
  },
}));

function Homepage() {
  const history = useHistory();
  const user = useContext(AuthContext);
  const classes = useStyles();
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const handleInfo = (id, FirstName, SeconndName, contact) => {

    user.ManagegeInfo({id, FirstName, SeconndName, contact});
    history.push({
      pathname: `/info/${id}`,
      state: {
        id: id,
        FirstName: FirstName,
        SeconndName: SeconndName,
        contact: contact
      },
    });
  };

  if (user.users.length == 0) {
    return (
      <div className={classes.root}>
        <CircularProgress align="center" disableShrink color="secondary" />
      </div>
    );
  } else {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="center">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.users?.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.FirstName}
                </TableCell>
                <TableCell align="left">{row.SeconndName}</TableCell>
                <TableCell align="center">
                  {/* <Link to={`/info/${row.id}`}> */}
                    <IconButton
                    onClick={() =>
                      handleInfo(
                        row.id,
                        row.FirstName,
                        row.SeconndName,
                        row.contact
                      )
                    }
                  >
                    <InfoIcon color="primary"/>
                  </IconButton>
                  {/* </Link> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Homepage;
