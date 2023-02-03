import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <header className="App-header">
                <nav>
                    <ul>
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
            </header>
        </header>
    );
};

export default Header;