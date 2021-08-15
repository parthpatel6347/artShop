import styled from "styled-components";

export const ContainerMain = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Header = styled.span`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
`;
