import { LOGIN_SUCCESS, RESET_SUCCESS } from "./actions";

const initialState = {
    acceptLogin: false,
    employees: [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ],
    isLoading: true
}

export default function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            state = {...state, isLoading: action.payload.isLoading, acceptLogin: action.payload.acceptLogin};
            break;
        case RESET_SUCCESS:
            state = {...state, [action.payload.payload.key]: action.payload.payload.value};
            break;
    }
    return state;
}