import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 60%;
  background-color: #0d1117;
  border-radius: 1rem;
  color: #c9d1d9;
  display: flex;
  margin-inline: auto;
`
export const WrapperInfoUser = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`

export const WrapperGeneric = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  h3 {
    font-weight: bold;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #c9d1d9;
  }
`

export const WrapperStatusCount = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const WrapperStatusCountItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
`

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 15rem;
  margin: 1rem;
`
