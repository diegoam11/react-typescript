import React, { useState } from "react"
import {User} from '../types'

interface FormState{
    inputValues: User
}

interface FormProps{
    onNewUser: React.Dispatch<React.SetStateAction<User[]>>
}

const Form: React.FC<FormProps> = ({onNewUser}) => {
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: '',
        level: 0,
        avatar: '',
        description: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewUser(users => [...users, inputValues])
    }

    const handleInputsValues = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputsValues} type="text" name="nick" placeholder="nick"/>
                <input onChange={handleInputsValues} type="number" name="level" placeholder="level"/>
                <input onChange={handleInputsValues} type="text" name="avatar" placeholder="link avatar"/>
                <textarea onChange={handleInputsValues} name="description" placeholder="description"/>
                <button>Save</button>
            </form>
        </div>
    )
}

export default Form;