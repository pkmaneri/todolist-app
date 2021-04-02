import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Link exect to="/todo">
                        <li className="list-group-item active">Todo</li>
                    </Link>
                </div>
                <div className="col">
                    <Link exect to="/updateTodo">
                        <li className="list-group-item active">UpdateTodo</li>
                    </Link>
                </div>
                <div className="col">
                    <Link exect to="/todoList">
                        <li className="list-group-item active">TodoList</li>
                    </Link>
                </div>
            </div>
        
        </>
    )
}
export default Navbar