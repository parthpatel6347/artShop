import styled from "styled-components";

export const ProductViewMain = styled.div`
  box-sizing: border-box;
  width: 1100px;
  margin: 40px auto 0;
  padding: 65px;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgDarker};
`;

export const ProductImageContainer = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 640px;
  padding: 42px;
  border: 5px solid ${(props) => props.theme.colors.gold};
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div`
  width: 500px;
  padding-left: 65px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: underline;
  margin-bottom: 6px;
`;

export const SubText = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const SubTextPrimary = styled(SubText)`
  color: ${(props) => props.theme.colors.primary};
`;

export const SubTextGold = styled(SubText)`
  color: ${(props) => props.theme.colors.gold};
`;

export const ProductPrice = styled.span`
  font-size: 28px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
`;

export const Description = styled(SubText)`
  color: ${(props) => props.theme.colors.gold};
  height: 72px;
  overflow: hidden;
`;

export const ButtonStyled = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: white;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 6px 30px;
  font-size: 20px;
  box-sizing: border-box;
  margin: 40px 0;
  &:hover {
    cursor: pointer;
  }
`;
