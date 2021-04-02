import { useState, useEffect } from "react";

const UpdateTodo = (props) => {
    const [updateNewState, setUpdateNewState] = useState({
        "firstName": "",
        "lastName": "",
        "address": "",
        "city": "",
        "zip": ""
    })

    useEffect(() => {
        console.log(props["updateData"]["updateObj"]['ele'])
        if (props["updateData"]["updateObj"]['ele'] !== undefined)
            setUpdateNewState(props["updateData"]["updateObj"]['ele'])
    }, [props])
    const handleClickUpdate = () => {

        props["callback"](props["updateData"]["updateObj"]['i'], updateNewState)

    }
    const handleOnChangeUpdate = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const previousState = JSON.parse(JSON.stringify(updateNewState));
        previousState[name] = value;

        setUpdateNewState(previousState);

    }
    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>
                            <label>
                                First Name
                        </label>
                        </td>
                        <td>
                            <input name="firstName" value={updateNewState.firstName} onChange={(e) => handleOnChangeUpdate(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Last Name
			            </label>
                        </td>
                        <td>
                            <input name="lastName" value={updateNewState.lastName} onChange={(e) => handleOnChangeUpdate(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Address
			            </label>
                        </td>
                        <td>
                            <input name="address" value={updateNewState.address} onChange={(e) => handleOnChangeUpdate(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                City
			            </label>
                        </td>
                        <td>
                            <input name="city" value={updateNewState.city} onChange={(e) => handleOnChangeUpdate(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Zip
			            </label>
                        </td>
                        <td>
                            <input name="zip" value={updateNewState.zip} onChange={(e) => handleOnChangeUpdate(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <button onClick={handleClickUpdate.bind(this)}>UpdateItem</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default UpdateTodo;