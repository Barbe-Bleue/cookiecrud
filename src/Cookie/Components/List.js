import React from 'react';

function List(props) {
    return (
        <div className="cookies-list">
            {Object.keys(props.allCookies).length > 0 ?
                <div>
                    <h2>Liste des cookies</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Valeur</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(props.allCookies).map((cookie) =>
                                <tr key={cookie} className="cookie-item">
                                    <td>{cookie}</td>
                                    <td>{props.allCookies[cookie]}</td>
                                    <td>
                                        <button className="btn btn-delete" onClick={() => props.removeCookie(cookie)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                : 
                <h2> Aucun cookies</h2>
            }
        </div>
    )
}

export default List;
