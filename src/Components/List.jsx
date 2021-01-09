import React, { useEffect ,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import db from "./firebase";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function List() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("list")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">OTP</TableCell>
            <TableCell align="left">Message</TableCell>
            <TableCell align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts && posts.map((row,index) => (
            <TableRow >
              <TableCell component="th" scope="row">
                {row.data.name}
              </TableCell>
              <TableCell align="left">{row.data.otp}</TableCell>
              <TableCell align="left">{row.data.message}</TableCell>
              <TableCell align="left">{new Date(row.data.timestamp?.toDate()).toUTCString()}</TableCell>
            </TableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
  );
}

export default List;
