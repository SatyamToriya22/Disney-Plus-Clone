import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h2>Recommended for You</h2>
            <Content>
                <Wrap>
                    <img src='/images/Movie-1-Lion-King.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/Movie-1-Lion-King.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/Movie-1-Lion-King.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='/images/Movie-1-Lion-King.jpg'/>
                </Wrap>
            </Content>
            
        </Container>
    )
}

export default Movies

const Container=styled.div
`

`
const Content=styled.div
`
    display:grid;
    grid-gap:25px;
    margin-top:05px;
    padding:10px 0px 10px;
    grid-template-columns:repeat(4 , minmax(0 , 1fr));
    overflow:visible;
`

const Wrap=styled.div
`
    border-radius:10px;
    cursor:pointer;
    padding:0px 5px 10px 0px;
    border:3px solid rgba(249 , 249 , 249 ,0.1);
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25 , 0.46 , 0.45 ,0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, 7000113264
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color:rgba(249 , 249 , 249,0.4);
    }
`