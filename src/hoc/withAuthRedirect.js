import React from "react";
import { Redirect } from "react-router-dom";

import {ROUTES} from "./../core/constants"

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={ROUTES.LOGIN}/>

            return <Component {...this.props} />
        }
    }

    return RedirectComponent;
}

export {withAuthRedirect};