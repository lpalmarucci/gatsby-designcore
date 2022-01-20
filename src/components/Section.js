import React from 'react';
import styled from 'styled-components';
import Wave, { WaveTop, WaveBottom } from './Wave';

const SectionGroup = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
    margin-top: -100px;

    @media (max-width: 720px){
        height: 920px;
        margin-top: -200px;
    }
`

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;
    margin: 0 auto;
    gap: 20px;
    max-width: 800px;

    @media (max-width: 720px){
        grid-template-columns: 1fr;
        text-align: center
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 720px){
        margin-top: 30px;
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;
    width: 480px;

    @media (max-width: 720px){
        line-height: 1.5;
        width: 330px;
        justify-self: center;
    }
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop>
            <Wave />
        </WaveTop>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <WaveBottom>
            <Wave />
        </WaveBottom>
    </SectionGroup>
)

export default Section