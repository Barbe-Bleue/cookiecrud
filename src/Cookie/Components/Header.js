import React from 'react';

function Header(props) {
    return (
        <div>
            <div className="header">
                <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/cookie_1f36a.png"
                    srcSet="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/cookie_1f36a.png 2x"
                    alt="Cookie on Apple iOS 12.1"
                    width="80"
                    height="80"
                    className="App-logo"
                />
                <h1>CookieCrud</h1>
                <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/cookie_1f36a.png"
                    srcSet="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/cookie_1f36a.png 2x"
                    alt="Cookie on Apple iOS 12.1"
                    width="80"
                    height="80"
                    className="App-logo-bis"
                />
            </div>
            <button className="btn btn-primary" onClick={props.setRandomCookies}>
                Créer des cookies
            </button>
        </div>
    );
}

export default Header;
