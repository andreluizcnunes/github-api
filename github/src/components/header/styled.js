import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 0.5rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  input {
    width: 80%;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 1rem;
  }

  input:focus {
    outline: none;
  }

  button {
    font-size: 1.5rem;
    padding: 0.2rem 0.4rem;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
  }

  button:hover {
    background-color: black;
    color: #efefef;
  }
`
