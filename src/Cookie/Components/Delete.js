import React from 'react';

function Delete(props) {
    return (
        <div className="cookies-remove">
            <h2>Supprimer tous les cookies</h2>
            <button className="btn btn-delete" onClick={props.removeAllCookies}>
                Supprimer
            </button>
        </div>
    );
}

export default Delete;
