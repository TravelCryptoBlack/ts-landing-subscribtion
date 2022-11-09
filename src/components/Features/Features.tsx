import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled('section')`
    padding-top: 90px;
    padding-bottom: 150px;
    background-color: #f2f2f2;
`;

const FeaturesCols = styled('div')`
    display: flex;
    justify-content: center;
    max-width: 1200px;
`;

const ColWrapper = styled('div')`
    width: ${100 / 3}%;
    margin-left: 20px;
    margin-right: 20px;
`;

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ColTitle = styled('span')`
    color: rgb(15, 207, 151);
`;

export const Features = React.memo(() => {
    return (
        <FeaturesWrapper id="rec449313961" className="r t-rec t-rec_pt_90 t-rec_pb_150">
                <Wrapper className="t490">
                    <div className="t-section__container t-container">
                        <div className="t-col t-col_12">
                            <div className="t-section__topwrapper t-align_center">
                                <div className="t-section__title t-title t-title_xs">
                                    <span>Main Features</span>
                                </div>
                                <div className="t-section__descr t-descr t-descr_xl t-margin_auto">
                                    <span>TravelCrypto is a single place where you may plan, track and share travelling experience.</span>
                                    <br/>
                                    <span>Share, get feedback and earn crypto with us.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FeaturesCols className="t-container">
                        <ColWrapper className="t490__col t-col t-col_4 t-align_center t-item">
                            <img className="t490__img t-img" src="Screenshot_2022-10-2.png" />
                            <div className="t490__wrappercenter ">
                                <div className="t-name t-name_xl">
                                    <ColTitle>Gamified</ColTitle>
                                </div>
                                <div className="t-descr t-descr_xs">
                                    <span>Stop just travelling - start playing </span>
                                </div>
                            </div>
                        </ColWrapper>
                        <ColWrapper className="t490__col t-col t-col_4 t-align_center t-item">
                            <img className="t490__img t-img" src="easy_to_use.png"/>
                            <div className="t490__wrappercenter ">
                                <div className="t-name t-name_xl">
                                    <ColTitle>Easy to use</ColTitle>
                                </div>
                                <div className="t-descr t-descr_xs">
                                    <span>No need to learn crypto - you may use TravelCrypto without crypto</span>
                                </div>
                            </div>
                        </ColWrapper>
                        <ColWrapper className="t490__col t-col t-col_4 t-align_center t-item">
                            <img className="t490__img t-img" src="social.png" />
                            <div className="t490__wrappercenter ">
                                <div className="t-name t-name_xl">
                                    <ColTitle>Sociable</ColTitle>
                                </div>
                                <div className="t-descr t-descr_xs">
                                    <span>Explore the world, share your experience and get feedback</span>
                                </div>
                            </div>
                        </ColWrapper>
                    </FeaturesCols>
                </Wrapper>
            </FeaturesWrapper>
    )
})
