import styled, { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-ziging: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.button`
  max-width: 1000px;
  width: 100%;
  margin-left: 15%;
  border: none;
  background-color: white;
`

export default EstiloGlobal
