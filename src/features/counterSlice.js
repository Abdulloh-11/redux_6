import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    count1: 0,
    array: [0],
    users: [
        { id: 1, name: 'Abdulloh', lastname: 'Gulomov', age: 21, email: 'Abu@com' },
        { id: 2, name: 'Asil', lastname: 'olimov', age: 33, email: 'Abu@com' },
        { id: 3, name: 'Polvon', lastname: 'Abuev', age: 16, email: 'Abu@com' },
    ],
    search_arr: [],
    modal: false,
    defualtValue: "",
    index: "",
}

const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload;
        },

        increment1(state) {
            state.count1 += 1;
        },




        users(state) {
            state.users = users
        },

        search(state, action) {
            if (action.payload) {
                let filtered = action.payload ? state.users.filter(item => item.first_name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())) : state.users
                state.search_arr = filtered
            } else {
                state.search_arr = state.users
            }
        },

        openModal(state,) {
            state.modal = true
        },

        toggle(state) {
            state.modal = false
            state.defualtValue = ""
        },

        addUser(state, action) {
            if (state.defualtValue === "") {
                state.search_arr.push(action.payload)
            } else {
                state.search_arr.splice(state.index, 1, action.payload)
            }
            state.modal = false
        },



        deleteUser: (state, action) => {
            state.search_arr.splice(action.payload, 1)
        }



    }
})

export const { increment, deleteUser, increment1, users, search, addUser, openModal, toggle } = countSlice.actions
export default countSlice.reducer