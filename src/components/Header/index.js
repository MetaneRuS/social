import React, {useContext} from 'react';
import {signInWithGoogle} from "../../firebase/firebase";
import {UserContext} from "../../providers/UserProvider";
import './index.scss';
import * as Icon from 'react-feather';

function Header() {
    const user = useContext(UserContext);

    return (
        <header>
            <a href="/"><Icon.Twitter /></a>
            <input type="text" placeholder="Search on ..." />
            {!user ? <button onClick={signInWithGoogle}>Log in</button> : <button>Tweet</button>}
        </header>
    )
}

export default Header;