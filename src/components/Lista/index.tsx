import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as S from "./styles"

import { remover, editar } from '../../store/reducers/lista'
import ListaTelefonica from "../../models/ListaTelefonica"

type Props = ListaTelefonica

const ListaDeContatos = ({ nome: nomeOriginal, email: emailOriginal, telefone: telefoneOriginal, id }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 2) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 2) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 8) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Nome disabled={!estaEditando} value={nome} onChange={(evento) => setNome(evento.target.value)}></S.Nome>
      <S.Email disabled={!estaEditando} value={email} onChange={(evento) => setEmail(evento.target.value)}></S.Email>
      <S.Telefone disabled={!estaEditando} value={telefone} onChange={(evento) => setTelefone(evento.target.value)}></S.Telefone>
      <S.Opcoes>
        {estaEditando ? (
          <>
            <S.Botao onClick={() => {
              dispatch(editar({ id, nome, email, telefone }))
              setEstaEditando(false)
            }}>Salvar</S.Botao>
            <S.Botao onClick={() => { cancelarEdicao() }}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao onClick={() => dispatch(remover(id))}>Remover</S.Botao>
          </>
        )}
      </S.Opcoes>
    </S.Card>
  )
}

export default ListaDeContatos
