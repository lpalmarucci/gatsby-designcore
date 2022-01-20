import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    gap: 25px;
    align-items: center;

`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`

const CellTitle = styled.div`
    font-size: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 30px 0;
`

const Cell = (props) => (
    <CellGroup>
        <CellImage image={props.image} />
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell;