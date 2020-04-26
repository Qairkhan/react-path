import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {ROUTES} from "./../core/constants"

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  }); 

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={ROUTES.LOGIN}/>

            return <Component {...this.props} />
        }
    }
   
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

export {withAuthRedirect};