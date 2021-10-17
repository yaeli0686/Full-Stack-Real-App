import PageHeader from "./common/pageHeader";
import { Route } from "react-router-dom";


const Users = () => {
    return (
        <>
            <PageHeader title="users page"></PageHeader>

            <div className="row">
                <div className="col-12">
                    <h2>List of users</h2>
                    <Route path="/users/edit">
                        <button className="edit mt-5" type="button">Edit Users</button>
                    </Route>
                </div>
            </div>
        </>
    );
}

export default Users;