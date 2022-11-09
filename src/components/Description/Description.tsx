import React from 'react';
import styled from 'styled-components';
import { Link } from '../Link';

const DescriptionContainer = styled('section')`
    display: flex;
    justify-content: center;
    padding-top:135px;
    padding-bottom:165px;
    background-color:#ffffff; 
    font-size: 26px;
    line-height: 1.45;
`

const Text = styled('span')`
    color: rgb(8, 8, 8);
    font-weight: 300;
`;

export const Description = React.memo(() => {
    return (
        <DescriptionContainer className="r t-rec t-rec_pt_135 t-rec_pb_165">
                <div className="t225">
                    <div className="t-container t-align_center">
                        <div className="t-col t-col_8 t-prefix_2" style={{ maxWidth: '760px' }}>
                            <div className="t225__title t-title t-title_md">
                                <span>Description</span>
                            </div>
                            <div className="t225__descr t-descr t-descr_xxl">
                                <Text>We create TravelCrypto to motivate people to travel more. We believe that exploring the world makes people more tolerant, happy and free. Travelling experience should be treated in a better way. With TravelCrypto you may track your itineraries in one click. But more important is that you may share your travelling experience and get feedback from others.</Text>
                                <br/>
                                <br/>
                                <Text>Just imagine an exhibition of personal stories which you may visit or participate in. Or even organise! TravelCrypto utilises blockchain technology to create NFT. With this project you may monetise your unique experience. Or you may not - it's your choice what to do with visited places. Explore the world, track, share and earn crypto through travelling. It's no longer a one-ride journey.</Text>
                                <br/>
                                <br/>
                                <Link href="#rec449313964">
                                    Sign up for more details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </DescriptionContainer>
    )
})