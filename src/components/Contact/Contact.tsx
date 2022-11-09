import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    display: flex;
    justify-content: space-around;
`;

const GridIrem = styled('div')`
    width: 50%;
`;

const FormTitle = styled('span')`
    color: rgb(15, 207, 151);
`;

export const Contact = React.memo(() => {
    return (
        <>
            <Wrapper className="r t-rec t-rec_pt_120 t-rec_pb_0">
                <GridIrem>
                    <div style={{ paddingLeft: '200px' }}>
                        <img className="t165__img t-img" src="mounties.jpeg" />
                    </div>
                </GridIrem>
                <GridIrem className="t165__textwrapper" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="t-col t-col_6 t-prefix_1 t165__vmiddle t165__left" style={{ paddingLeft: '200px' }}>
                        <div className="t165__textwrapper">
                            <div className="t165__title t-heading t-heading_md">
                                <span style={{ color: 'rgb(8, 8, 8)' }}>
                                    Leave email for more details
                                </span>
                            </div>
                        <div className="t165__text t-text t-text_sm">
                        <span style={{ color: 'rgb(8, 8, 8)' }}>
                            Let's explore the world together - leave your email for Alpha-testing and receive starter bonus from us (starting Spring 2023)
                            </span>
                            </div> 
                            </div>
                            </div>
                    </GridIrem>
                </Wrapper>            
            <div className="r t-rec t-rec_pt_120 t-rec_pb_0" style={{ paddingTop: '120px',
    paddingBottom: '0px',
    backgroundColor: '#15161b' }}>
                <div className="t030">
                    <div className="t-container t-align_center">
                        <div className="t-col t-col_10 t-prefix_1">
                            <div className="t030__title t-title t-title_xxs" >
                                <div>
                                    <FormTitle>Subscribe for Alpha</FormTitle>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rec449313964" className="r t-rec t-rec_pt_60 t-rec_pb_120" >
                <div className="t107">
                    <div className="t-align_center">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAlLCuulQrbweiCTkAVPy-NMvP1nY64l0bnpvljGfWIn0KXA/viewform?usp=sharing" target="">
                            <img className="t107__widthauto t-img" src="/subscribe_button.png"/>
                        </a>
                    </div>
                </div>
                <div id="rec449313965" className="r t-rec t-rec_pt_45 t-rec_pb_30" >
                
            </div>
            </div>
            </div>
            <div className="t046" style={{
                paddingTop: '45px',
                paddingBottom: '30px',
                backgroundColor: '#000000',
            }}>
                    <div className="t-container">
                        <div className="t-col t-col_6 t-prefix_3">
                            <div className="t046__text t-text t-text_xs">
                                <span style={{ color: 'rgb(255, 255, 255)' }}>TravelCrypto Copyright 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
})
