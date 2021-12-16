import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg'/>
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
                
            </NavMenu>
            <UserImg src='/images/prof_pic.jpg'/>
        </Nav>
    )
}

export default Header;

const Nav=styled.nav`
    background:#090b13;
    height:70px;
    display:flex;
    align-items:center;
    padding:0px 36px;
    overflow-x:hidden;
`
const Logo=styled.img`
    width:80px;

`
const NavMenu=styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    a{
        display:flex;
        align-items:center;
        padding:0px 13px;
        cursor:pointer;
        img{
            height:20px
        }
        span{
            margin-left:2px;
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:'';
                height:2px;
                position:absolute;
                left:0px;
                right:0px;
                bottom:-6px;
                background-color:white;
                opacity:0;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.45,0.59,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform:scaleX(1);
            }
        }
    }
    
`
const UserImg=styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
`