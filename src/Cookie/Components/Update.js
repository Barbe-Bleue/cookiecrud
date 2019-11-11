import React from 'react';

function Update(props) {
    return (
        <div className="cookies-update">
            <h2>Update de cookie</h2>
            <select name="selectValue" value={props.selectValue} onChange={props.handleChange}>
                {Object.keys(props.allCookies).map((cookie) =>
                    <option key={cookie} value={cookie}>{cookie}</option>
                )}
            </select>
            <input
                type="text"
                value={props.inputValue}
                onChange={props.handleChange}
                name="inputValue"
            />
            <br />
            <button
                className="btn btn-update"
                onClick={() => props.updateCookie(props.selectValue, props.inputValue)}
            >
                Update
            </button>
        </div>
    );
}

export default Update;
