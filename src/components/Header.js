import React from 'react';
import MenuContainer from '../containers/MenuContainer';



function Header(){
    return(
        <div className="header" id="header">
            <h1> News Feeds</h1>
            <MenuContainer/>
        </div>
    );
}

export default Header;