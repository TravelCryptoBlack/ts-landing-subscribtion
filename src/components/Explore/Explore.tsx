import React from 'react';
import styled from 'styled-components';


const ExploreContainer = styled('section')`
padding-top: 150px;
padding-bottom: 150px;
align-items: center;
`;

const ListWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
`;

const CardTitle = styled('span')`
    color: rgb(15, 207, 151);
`;

const CardWrapper = styled('div')`
    display: flex;
    margin-bottom: 55px;
    max-width: 760px;
`;

const CardMarkerWrapper = styled('div')`
    color: #0fcf97;
    border: 2px solid #0fcf97;
    font-weight: 600;
`;

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Explore = React.memo(() => {
    return (
        <ExploreContainer className="r t-rec t-rec_pt_150 t-rec_pb_150">
                <Wrapper className="t510">
                    <div className="t-section__container t-container">
                        <div className="t-col t-col_12">
                            <div className="t-section__topwrapper t-align_center">
                                <div className="t-section__title t-title t-title_xs">
                                    <span>Explore Our Features</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ListWrapper className="t-container">
                        <CardWrapper className="t-col t-col_8 t-prefix_2 t-item">
                            <div className="t-cell t-valign_top">
                                <CardMarkerWrapper className="t510__circle t-valign_top">1</CardMarkerWrapper>
                            </div>
                            <div className="t510__textwrapper t-cell t-valign_top">
                                <div className="t-name t-name_md t510__bottommargin">
                                    <CardTitle>Track your experience automatically</CardTitle>
                                </div>
                                <div className="t-descr t-descr_sm">
                                    <span>Receive Travel Journal for free to gather all travelling experiences. That's the place where you track unique experience (visited places, photos and videos made, notes left)</span>
                                </div>
                            </div>
                        </CardWrapper>
                        <CardWrapper className="t-col t-col_8 t-prefix_2 t-item">
                            <div className="t-cell t-valign_top">
                                <CardMarkerWrapper className="t510__circle t-valign_top">2</CardMarkerWrapper>
                            </div>
                            <div className="t510__textwrapper t-cell t-valign_top" >
                                <div className="t-name t-name_md t510__bottommargin">
                                    <CardTitle>Review and rate the place</CardTitle>
                                </div>
                                <div className="t-descr t-descr_sm">Rate the place you've visit. Leave an honest review. Your personal experience really matters.</div>
                            </div>
                        </CardWrapper>
                        <CardWrapper className="t-col t-col_8 t-prefix_2 t-item">
                            <div className="t-cell t-valign_top">
                                <CardMarkerWrapper className="t510__circle t-valign_top">3</CardMarkerWrapper>
                            </div>
                            <div className="t510__textwrapper t-cell t-valign_top" >
                                <div className="t-name t-name_md t510__bottommargin">
                                    <CardTitle>Create NFTs</CardTitle>
                                </div>
                                <div className="t-descr t-descr_sm">
                                    <span>Create unique routes and itineraries through NFTs. Share them through events or sell on the market - do whatever you want with your travelling experience.</span>
                                </div>
                            </div>
                        </CardWrapper>
                        <CardWrapper className="t-col t-col_8 t-prefix_2 t-item">
                            <div className="t-cell t-valign_top">
                                <CardMarkerWrapper className="t510__circle t-valign_top">4</CardMarkerWrapper>
                            </div>
                            <div className="t510__textwrapper t-cell t-valign_top" >
                                <div className="t-name t-name_md t510__bottommargin">
                                    <CardTitle>Get feedback and crypto</CardTitle>
                                </div>
                                <div className="t-descr t-descr_sm">
                                    <span>Participate in events and share NFTs. Get feedback, ranks, earn crypto and organise your own events.</span>
                                </div>
                            </div>
                        </CardWrapper>
                    </ListWrapper>
                </Wrapper>
            </ExploreContainer>
    )
})
