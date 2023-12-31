import React from "react"
import { User } from '../types'
import useNewUserForm from "../hooks/useNewUserForm"

interface FormProps {
    onNewUser: (newUser: User) => void
}


const Form: React.FC<FormProps> = ({ onNewUser }) => {
    const [inputValues, dispatch] = useNewUserForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewUser(inputValues)
        dispatch({ type: "clear" })
    }

    const handleInputsValues = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target
        dispatch({
            type: "changeValues",
            payload: {
                inputName: name, inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({ type: "clear" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputsValues} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleInputsValues} value={inputValues.level} type="number" name="level" placeholder="level" />
                <input onChange={handleInputsValues} value={inputValues.avatar} type="text" name="avatar" placeholder="link avatar" />
                <textarea onChange={handleInputsValues} value={inputValues.description} name="description" placeholder="description" />
                <button onClick={handleClear} type="button">Clear Form</button>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Form;