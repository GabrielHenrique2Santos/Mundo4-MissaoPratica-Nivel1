import React, { createContext, useReducer } from "react";
import suppliers from "../data/suppliers";

const initialState = { suppliers }
const SuppliersContext = createContext({})

const actions = {
    createSupplier(state, acrion) {
        const suppliers = action.payload
        suppliers.id = math.random()
        return{
            ...state,
            suppliers: [...state.suppliers, suppliers],
        }
    },
    updateSupplier(state, action) {
        const updated = action.payload
        return {
            ...state,
            suppliers: state.suppliers.map(s => s.id === updated.id ? updated : s)
        }
    },
    deleteSupplier(state, action) {
        const suppliers = action.payload
        return {
            ...state,
            suppliers: state.suppliers.filter(s => s.id !== suppliers.id)
        }
    }
}

export const SuppliersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <SuppliersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </SuppliersContext.Provider>
    )
}

export default SuppliersContext