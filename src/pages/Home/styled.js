import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  font-family: poppins, sans-serif;
`

export const Input = styled.input`
  font-family: poppins, sans-serif;
  height: 2.5rem;
  min-width: 180px;
  padding: 0 0.8rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const Button = styled.button`
  font-family: poppins, sans-serif;
  padding: 0.6rem 2rem;
  border: 1px solid #404aaf;
  background: #404aaf;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const ErrorMsg = styled.p`
  font-family: poppins, sans-serif;
  margin-top: 25px;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  color: #fff;
  background-color: #df2218;
`
