import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import ListaTelefonica from '../../models/ListaTelefonica'
import { cadastrar } from '../../store/reducers/lista'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new ListaTelefonica(nome, email, telefone, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <S.Form onSubmit={cadastrarContato}>
      <S.Campo value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder="nome completo" name="" id="" />
      <S.Campo value={email} onChange={(evento) => setEmail(evento.target.value)} placeholder="email" name="" id="" />
      <S.Campo value={telefone} onChange={(evento) => setTelefone(evento.target.value)} placeholder="telefone" name="" id="" />
      <S.Botao type="submit">Cadastrar</S.Botao>
    </S.Form>
  )
}

export default Formulario
