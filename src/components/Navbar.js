import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Link exact to="/todo">
                        <li className="list-group-item active">Create User</li>
                    </Link>
                </div>
                <div className="col">
                    <Link  to="/updateTodo">
                        <li className="list-group-item active"> Update User</li>
                    </Link>
                </div>
                <div className="col">
                    <Link  to="/todoList">
                        <li className="list-group-item active">List of User</li>
                    </Link>
                </div>
            </div>
        
        </>
    )
}
export default Navbar;
