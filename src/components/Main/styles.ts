import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 400;
    color: ${theme.colors.black};
  `}
`

export const Illustration = styled.img`
  ${({ theme }) => css`
    margin-top: 3rem;
    width: min(30rem, 100%);
    color: ${theme.colors.black};
  `}
`
