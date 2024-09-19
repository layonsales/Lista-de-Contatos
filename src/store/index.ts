import { configureStore } from "@reduxjs/toolkit"

import listaReducers from "./reducers/lista"

const store = configureStore({
  reducer: {
    lista_contatos: listaReducers
  }
})

export type RoootReducer = ReturnType<typeof store.getState>

export default store
