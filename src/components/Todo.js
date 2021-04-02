import { useState } from "react";

const Todo = (props) => {
    const [state, setState] = useState({
        "firstName": "",
        "lastName": "",
        "address": "",
        "city": "",
        "zip": ""
    })
    const handleClick = () => {
        props["callback"](state);

    }
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const previousState = JSON.parse(JSON.stringify(state));
        previousState[name] = value;

        setState(previousState);

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
                            <input name="firstName" value={state.firstName} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Last Name
			            </label>
                        </td>
                        <td>
                            <input name="lastName" value={state.lastName} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Address
			            </label>
                        </td>
                        <td>
                            <input name="address" value={state.address} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                City
			            </label>
                        </td>
                        <td>
                            <input name="city" value={state.city} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Zip
			            </label>
                        </td>
                        <td>
                            <input name="zip" value={state.zip} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <td>

                    </td>
                    <td>
                        <button onClick={handleClick.bind(this)}>AddItem</button>
                    </td>
                </tbody>
            </table>
        </>
    )
}
export default Todo;