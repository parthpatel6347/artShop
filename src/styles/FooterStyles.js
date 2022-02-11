import styled from "styled-components";
import { maxWidth } from "./size";

export const FooterMain = styled.div`
    /* position:absolute;
    bottom:0; */
    width: 100%;
    background-color: rgba(0,0,0,0.15);
    margin-top: 60px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FooterTop = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    @media ${maxWidth.M}{
        width:80%;
    }
    @media ${maxWidth.XS}{
        width:90%;
    }
    @media ${maxWidth.XXS}{
        width:80%;
        justify-content: space-between;
    }
`
export const FooterList = styled.div`
    display: flex;
    flex-direction: column;
`

export const ListTitle = styled.div`
    font-size: 19px;
    font-weight:900;
    margin-bottom:10px;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    color: ${(props) => props.theme.colors.primary};
    opacity:0.8;
    @media ${maxWidth.XXS}{
        font-size: 16px;
        margin-bottom:7px;

    }
`

export const FooterItem = styled.div`
    font-size:16px;
    font-weight:600;
    font-family: ${(props) => props.theme.fonts.sans};
    color: ${(props) => props.theme.colors.primary};
    opacity:0.5;
    padding: 3px 0;
    &:hover{
        cursor:default;
    }
    @media ${maxWidth.XXS}{
        font-size: 14px;
        padding: 2px 0;
    }
`

export const ListItem = styled(FooterItem)`
    &:hover{
        opacity:0.7;
        cursor: pointer;
    }
`

export const FollowUsContainer = styled.div`
    margin-top:40px;
    display: flex;
    align-items: center;
`

export const FollowUsText = styled(FooterItem)`
    display: flex;
    align-items: center;
    font-size:15px;
    height:35px;
    margin-right:4px;
    padding-top:4px;
    font-weight:600;
`
export const SocialImg = styled.img`
    width:35px;
    margin:0 3px;
`

export const CopyrightText = styled(FooterItem)`
    font-size:14px;
    font-weight: 500;
    opacity:0.8;
    margin:10px 0 10px;
`

export const CreditsContainer = styled.div`
    margin:20px 0;
    display : flex;
    align-items:center;
`

export const CodeLink = styled.img`
    width:22px;
    opacity:0.7;
    &:hover{
        opacity:1;
    }
`

export const CreditsText = styled(FooterItem)`
    font-size:14px;
    font-weight: 600;
    opacity:0.7;
    margin-right:10px;
`

