import React from 'react';

// import styled components
import {
    FooterList,
    FooterMain,
    FooterTop,
    ListTitle,
    ListItem,
    FollowUsContainer,
    FollowUsText,
    SocialImg, CopyrightText,
    CodeLink,
    CreditsText,
    CreditsContainer
} from '../styles/FooterStyles';

// import icons
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import twitter from "../icons/twitter.png";
import github from "../icons/github.png";

function Footer(props) {
    return (
        <FooterMain>
            <FooterTop>
                <FooterList>
                    <ListTitle>Useful Links</ListTitle>
                    <ListItem>Return & Refunds</ListItem>
                    <ListItem>FAQs</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                </FooterList>
                <FooterList>
                    <ListTitle>Company</ListTitle>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>About Us</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>Blog</ListItem>
                </FooterList>
            </FooterTop>
            <FollowUsContainer>
                <FollowUsText>Follow Us:</FollowUsText>
                <SocialImg src={facebook} alt="facebook" />
                <SocialImg src={instagram} alt="instagram" />
                <SocialImg src={twitter} alt="twitter" />
            </FollowUsContainer>
            <CopyrightText>
                &copy; artShop 2022
            </CopyrightText>
            <CreditsContainer>
                <CreditsText>Designed and developed by Parth Patel </CreditsText>
                <a href='https://github.com/parthpatel6347/artShop'>
                    <CodeLink src={github} alt="github" />
                </a>
            </CreditsContainer>
        </FooterMain>
    );
}

export default Footer;