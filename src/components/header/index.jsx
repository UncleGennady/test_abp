import React from 'react';
import {Link} from "react-router-dom";
import Container from "../container";
import { css } from '@emotion/css'
import logo from '../../logo.svg';
const Header = () => {
    return (
        <header className={css`
          padding: 20px 0 0;
          background-color: black;
          box-shadow: 0 0 90px 20px #61dafb;
          position: relative;
          ::after{
            content: "";
            position: absolute;
            box-shadow:0 0 45px 20px #61dafb;
            width: 100%;
          }

        `}>
           <Container>
               <nav className={css`
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 24px;
                      padding-bottom: 20px;
                      @media(max-width: 600px){
                      font-size: 18px;
                      }
               `}>
                   <Link className={css`
                          height: 50px;
                          
                   `}
                   to={'/'}>
                       <img className={"App-logo"}
                           src={logo} alt="logo" />
                   </Link>
                   <ul className={css`
                    display: flex;
                    justify-content: end;
                    gap: 30px;
                    list-style: none;
                    margin: 0;
                    font-weight: 600;
                `}>
                       <li>
                           <Link to={'/'}>
                               Home
                           </Link>
                       </li>
                       <li>
                           <Link to={'/variables'}>
                               Variables
                           </Link>
                       </li>
                   </ul>
               </nav>
           </Container>
        </header>
    );
};

export default Header;