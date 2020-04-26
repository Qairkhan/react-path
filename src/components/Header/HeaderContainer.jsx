import React from "react";
import { connect } from "react-redux";

import { setUserData } from "../../redux/actionCreators";
import { usersAPI } from "../../api/api";

import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authMe().then((response) => {
      if (response.data.resultCode === 0) {
        this.props.setUserData(response.data.data);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
