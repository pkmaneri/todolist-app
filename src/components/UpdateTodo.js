import { useState, useEffect } from "react";

const UpdateTodo = (props) => {
    const [firstName, setFirstName] = useState()

    useEffect(() => {
        console.log(props)
        setFirstName(props["updateData"]["updateObj"]['ele'])

    }, [props])
    const handleClickUpdate = () => {
        props["callback"](props["updateData"]["updateObj"]['i'],[firstName])

    }
    return (
        <>
            <input type="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            <button type="button" onClick={handleClickUpdate.bind(this)}>UpdateItem</button>

        </>
    )
}
export default UpdateTodo;