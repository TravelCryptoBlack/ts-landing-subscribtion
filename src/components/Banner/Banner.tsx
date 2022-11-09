import React from 'react';
import styled from 'styled-components';
import { Link } from '../Link';

const Cover = styled('div')`
    height: 100vh;
    background-image: url(frankdenney91407.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ShadowCover = styled('div')`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: -moz-linear-gradient(top, rgba(0,0,0,0.70), rgba(0,0,0,0.70));
    background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.70), rgba(0,0,0,0.70));
    background-image: -o-linear-gradient(top, rgba(0,0,0,0.70), rgba(0,0,0,0.70));
    background-image: -ms-linear-gradient(top, rgba(0,0,0,0.70), rgba(0,0,0,0.70));
    background-image: linear-gradient(top, rgba(0,0,0,0.70), rgba(0,0,0,0.70));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4c000000', endColorstr='#4c000000'); 
    z-index: 1;
`;

const InfoWrapper = styled('div')`
    position: relative;
    z-index: 2;
`;

const InfoTitle = styled('h1')`
    text-transform: uppercase;
`;

export const Banner = React.memo(() => {
    return (
        <div id="rec449313959" className="r t-rec">
                <Cover className="t-cover">
                    <div className="t-cover__carrier" />
                    <ShadowCover className="t-cover__filter" />
                    <InfoWrapper className="t-container">
                        <div className="t-col t-col_12 " >
                            <div className="t-cover__wrapper t-valign_middle" >
                                <div className="t102 t-align_center" data-hook-content="covercontent">
                                    <InfoTitle className="t102__title t-title">TravelCrypto</InfoTitle>
                                    <div className="t102__descr t-descr t-descr_md t102__descr_center">
                                        <strong>TravelCrypto allows you to share unique travelling experience as NFTs. Earn crypto on your travelling experiences. </strong>
                                        <Link href="#rec449313964">
                                            Subscribe today
                                        </Link>
                                    </div>
                                    <span className="space"></span>
                                </div>
                            </div>
                        </div>
                    </InfoWrapper>
                </Cover>
            </div>
    )
})
