import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-family: poppins, sans-serif;
  text-align: center;
  font-size: 2rem;
  color: #333;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`
export const ListItem = styled.li`
  font-family: poppins, sans-serif;
  margin: 0.5rem 0;
  padding: 0.6rem 1rem;
  background: #404aaf;
  color: #fff;
  border-radius: 25px;
`
export const LinkHome = styled(Link)`
  font-family: poppins, sans-serif;
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  padding: 0.7rem 1rem;
  background-color: #c94040;
  border-radius: 25px;
  color: #fff;
  text-decoration: none;
`
