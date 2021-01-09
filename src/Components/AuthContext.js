import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import firebase from "firebase"
import db from "./firebase.js"
const AuthContext = React.createContext();

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://contact-app-kisan.herokuapp.com/users")
      .then((res) =>
        this.setState({
          users: res.data,
        })
      )
      .catch((err) => console.log(`error ${err}`));
  }

  ManagegeInfo = (payload) => {
  };

  handleSendSmsToTwilio = (payload) => {

    axios.post("http://localhost:8080/users",{
      payload
    })

    db.collection('list').add({
      name:`${payload.FirstName} ${payload.SeconndName}`,
      contact:payload.SeconndName,
      otp:payload.oyp,
      message:payload.messageForOtp,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })  
  }
   render() {
    const { users } = this.state;
    const {ManagegeInfo,handleSendSmsToTwilio} = this;
    const value = { users,ManagegeInfo,handleSendSmsToTwilio };
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthContextProvider };
// module.exports =  {obj}