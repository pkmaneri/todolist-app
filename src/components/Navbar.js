import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <>
            <ul>
                <Link exect to="/todo">
                    <li>Todo</li>
                </Link>
                <Link exect to="/updateTodo">
                    <li>UpdateTodo</li>
                </Link>
                <Link exect to="/todoList">
                    <li>TodoList</li>
                </Link>
            </ul>
        </>
    )
}
export default Navbar