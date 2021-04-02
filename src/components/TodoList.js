import React from "react";

const TodoList = (props) => {
    const handleUpdate = (ele, i) => {
        props["callbackUpdate"](ele, i)

    }
    const handleClickRemove = (i) => {
        props.callback(i)
    }
    return (
        <>
            <table>
                {props["data"].map((ele, i) => {
                    console.log(ele, i)
                    return (
                        <tr key={i}>                          
                            <td>
                                {ele.firstName},
                            </td>
                            <td>
                                {ele.lastName},
                            </td>
                            <td>
                                {ele.address},
                            </td>
                            <td>
                                {ele.city},
                            </td>
                            <td>
                                {ele.zip},
                            </td>
                            <td>
                                <button onClick={handleUpdate.bind(this, ele, i)}>U</button>
                                <button onClick={handleClickRemove.bind(this, i)}>X</button>
                            </td>
                        </tr>
                    )
                })}
            </table>

        </>
    )
}
export default TodoList;