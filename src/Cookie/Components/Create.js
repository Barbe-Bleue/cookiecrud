import React from 'react';

function Create(props) {
    return (
        <div className="cookies-create">
            <h2>Créer un cookie</h2>
            <label htmlFor="cookieName">Nom</label>
            <input
                name="cookieName"
                type="text"
                value={props.cookieName}
                onChange={props.handleChange}
            />
            <br />
            <label htmlFor="cookieValue">Valeur</label>
            <input
                name="cookieValue"
                type="text"
                value={props.cookieValue}
                onChange={props.handleChange}
            />
            <br />
            <button className="btn btn-primary"onClick={() => props.createCookie(props.cookieName, props.cookieValue)}>
                Créer
            </button>
        </div>
    );
}

export default Create;
