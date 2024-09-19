import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ListaTelefonica from "../../models/ListaTelefonica";

type ListaState = {
  itens: ListaTelefonica[]
}

const initialState: ListaState = {
  itens: [
    {
      id: 1,
      nome: 'João da Costa',
      telefone: '123456789',
      email: 'joaoficial@gmail.com'
    },
    {
      id: 2,
      nome: 'Rodrigo Pereira do Nascimento',
      telefone: '914781472',
      email: 'Rodrigoficial@gmail.com'
    },
    {
      id: 3,
      nome: 'Maria do Rosario Carvalho',
      telefone: '82748748147',
      email: 'Mariaoficial@gmail.com'
    },
  ]
}

const listaSlice = createSlice({
  name: 'lista',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((lista) => lista.id !== action.payload)
    },
    editar: (state, action: PayloadAction<ListaTelefonica>) => {
      const indexDaLista = state.itens.findIndex((L) => L.id === action.payload.id)

      if (indexDaLista >= 0) {
        state.itens[indexDaLista] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<ListaTelefonica>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { remover, editar, cadastrar } = listaSlice.actions

export default listaSlice.reducer
