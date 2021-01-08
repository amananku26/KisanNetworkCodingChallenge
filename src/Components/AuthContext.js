import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
   console.log("manahe",payload)
  };
  render() {
    //   console.log(this.state.users)
    const { users } = this.state;
    const {ManagegeInfo} = this;
    const value = { users,ManagegeInfo };
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthContextProvider };
