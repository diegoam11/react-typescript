import React, { useReducer } from "react"
import { User } from '../types'

interface FormState {
    inputValues: User
}

const INITIAL_STATE = {
    nick: '',
    level: 0,
    avatar: '',
    description: ''
}

const formReducer = (state: FormState["inputValues"], action: formActions) => {
    switch (action.type) {
        case "changeValues":
            const { inputName, inputValue } = action.payload
            return ({
                ...state,
                [inputName]: inputValue
            })

        case "clear":
            return INITIAL_STATE
    }
}

type formActions =
    | { type: "changeValues", payload: { inputName: string, inputValue: string } }
    | { type: "clear" }


const useNewUserForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewUserForm;