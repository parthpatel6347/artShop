import React from 'react';
import { BackButtonContainer, ProductTitle, ProductViewMain, SubTextPrimary } from '../styles/ProductViewStyles';

function NotFound() {
    return (
        <ProductViewMain>
            <BackButtonContainer>
                <h1><ProductTitle>Sorry!</ProductTitle></h1>
                <SubTextPrimary>The page you are looking for does not exist.</SubTextPrimary>
            </BackButtonContainer>
        </ProductViewMain>
    );
}

export default NotFound;