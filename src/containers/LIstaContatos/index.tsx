//import * as S from "./styles";
import { useSelector } from "react-redux";
import ListaDeContatos from "../../components/Lista";

import { RoootReducer } from "../../store";

const Formulario = () => {
  const { itens } = useSelector((state: RoootReducer) => state.lista_contatos);

  return (
    <main>
      <h1>Lista de Contatos</h1>
      <ul>
        {itens.map((lista) =>
          <li key={lista.nome}>
            <ListaDeContatos nome={lista.nome} telefone={lista.telefone} email={lista.email} id={lista.id} />
          </li>
        )}
      </ul>
    </main>
  )
}

export default Formulario
