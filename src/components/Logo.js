import styled from 'styled-components';

export default function Logo() {
  return(
    <LogoContainer>
      <p>MyWallet</p>
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  font-family: 'Saira Stencil One', cursive;
  font-size: 2rem;
  color: #ffffff;
`;