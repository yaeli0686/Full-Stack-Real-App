import { Redirect, Route } from "react-router-dom";
import usersService from "../../services/usersService";


const ProtectedRoute = ({ component: Component, render, biz, ...rest }) => {
    const currentUser = usersService.getCurrentUser();
    return (
        <Route
            {...rest}
            render={(props) => {
                //only logged-in BUSINESS user is allowed:
                if (!currentUser || (biz && !currentUser.biz)) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

export default ProtectedRoute;