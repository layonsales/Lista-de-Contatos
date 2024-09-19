import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  background-color: lightblue;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

export const Nome = styled.textarea`
  width: 400px;
  margin-left: 30%;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
  resize: none;
  display: block;
  text-align: center;
  border-radius: 10px;
`

export const Email = styled.textarea`
  width: 400px;
  margin-left: 30%;
  font-size: 20px;
  padding-top: 10px;
  font-weight: bold;
  resize: none;
  display: block;
  text-align: center;
  border-radius: 10px;
`

export const Telefone = styled.textarea`
  width: 400px;
  margin-left: 30%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 10px;
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  resize: none;
  display: block;
  text-align: center;
  border-radius: 10px;
`

export const Opcoes = styled.div`
  border-top: 1px solid black;
  padding-top: 16px;
`

export const Botao = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 12px;
`
