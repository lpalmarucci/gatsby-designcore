import React from 'react'
import { TAG_PROPERTIES } from 'react-helmet/lib/HelmetConstants';
import styled from 'styled-components';
import Wave, { WaveBottom, WaveTop } from './Wave';

const handleLinearGradient = color => {
    switch (color) {
        case 'primary':
            return 'linear-gradient(140deg, #852F56 0%, #E84378 100%);'

        case 'secondary':
            return 'linear-gradient(140deg, #E3544E 0%, #FB826A 100%);'

        case 'tertiary':
            return 'linear-gradient(140deg, #FBF26A 0%, #E3544E 100%);';

        default:
            return 'linear-gradient(140deg, #852F56 0%, #E84378 100%);'

    }
}

const StatsGroup = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    margin: 50px 0;
`

const StatsHeader = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 720px){
        grid-template-columns: repeat(1, 1fr);
    }
`

const StatsTextGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    background: ${props => handleLinearGradient(props.variant)}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StatsNumber = styled.h1`
    font-size: 120px;
    margin: 0;
    color: white;
`

const StatsText = styled.p`
    font-weight: 600;
`

const StatsSloganGroup = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
    display: grid;
    align-items: center;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
`

const StatsSlogan = styled.div`
    display: grid;
    text-align: center;
    background: ${props => handleLinearGradient(props.variant)}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    font-weight: 600;
    line-height: 1.1;

    @media (max-width: 720px){
        font-size: 40px;
        line-height: 1.3;
    }
`

const StatsImageGroup = styled.div`
    height: 1000px;
    position: relative;
    margin-top: -400px;
    align-self: start;
`

const StatsImageLaptop = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 700px;
    height: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 720px){
        width: 400px;
        height: 400px;
    }
`

const StatsImageIphone = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
    position: absolute;
    bottom: 0;
    right: 70%;
    transform: translate(110%, -10%);

    @media (max-width: 720px){
        width: 300px;
        height: 300px;
        transform: translate(90%, -50%);
    }

`

const Stats = () => (
    <StatsGroup>
        <StatsHeader>
            <StatsTextGroup variant="primary">
                <StatsNumber>60</StatsNumber>
                <StatsText>hours of video content<br />that's downloadable and<br /> captioned</StatsText>
            </StatsTextGroup>
            <StatsTextGroup variant="secondary">
                <StatsNumber>4</StatsNumber>
                <StatsText>languages supported.<br />English,Chinese,French,<br />Spanish</StatsText>
            </StatsTextGroup>
        </StatsHeader>
        <StatsSloganGroup image={require('../images/wallpaper.jpg')}>
            <WaveTop>
                <Wave />
            </WaveTop>
            <StatsSlogan variant="tertiary">
                Design for everyone.<br />
                Coding for designers.
            </StatsSlogan>
            <WaveBottom>
                <Wave />
            </WaveBottom>
        </StatsSloganGroup>
        <StatsImageGroup>
            <StatsImageLaptop image={require('../images/Laptop.png')} />
            <StatsImageIphone image={require('../images/iPhone.png')} />
        </StatsImageGroup>
    </StatsGroup>
)

export default Stats;