import React from 'react';
import Cookies from 'universal-cookie';
import Header from './Components/Header';
import List from './Components/List';
import Delete from './Components/Delete';
import Create from './Components/Create';
import Update from './Components/Update';
import './Cookie.css'

const cookies = new Cookies();

class Cookie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allCookies: cookies.getAll({ doNotParse: true }),
            inputValue: '',
            selectValue: '',
            cookieValue: '',
            cookieName: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.setRandomCookies = this.setRandomCookies.bind(this);
        this.reloadCookieList = this.reloadCookieList.bind(this);
        this.removeAllCookies = this.removeAllCookies.bind(this);
        this.createCookie = this.createCookie.bind(this);
        this.removeCookie = this.removeCookie.bind(this);
        this.updateCookie = this.updateCookie.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({ [name]: value });
    }

    reloadCookieList() {
        this.setState({ allCookies: cookies.getAll({ doNotParse: false }) });
    }

    setRandomCookies() {
        const froots = [
            "fraise",
            "framboises",
            "citron",
            "pomme",
            "poires",
            "oranges",
            "bananes"
        ];

        froots.map((froot) => {
            return cookies.set(froot, Math.floor(Math.random() * 10) + 1, { maxAge: 7200 });
        });

        this.reloadCookieList();
    }

    removeCookie(cookie) {
        cookies.remove(cookie);

        this.reloadCookieList();
    }

    updateCookie(cookie, value) {
        cookies.set(cookie, value);

        this.reloadCookieList();

        this.setState({ inputValue: '' })
    }

    removeAllCookies() {
        for (var cookie in this.state.allCookies) {
            cookies.remove(cookie)
        };

        this.reloadCookieList();
    }

    createCookie(cookie, value) {
        cookies.set(cookie, value, { maxAge: 7200 });

        this.reloadCookieList();
    }

    render() {
        const { allCookies, cookieName, cookieValue, inputValue, selectValue } = this.state;

        return (
            <div className="App">
                <Header setRandomCookies={this.setRandomCookies} />
                <div className="cookies">
                    <Create
                        handleChange={this.handleChange}
                        createCookie={this.createCookie}
                        cookieName={cookieName}
                        cookieValue={cookieValue}
                    />
                    <List removeCookie={this.removeCookie} allCookies={allCookies} />
                    {Object.keys(allCookies).length > 0 && (
                        <Update
                            selectValue={selectValue}
                            inputValue={inputValue}
                            allCookies={allCookies}
                            handleChange={this.handleChange}
                            updateCookie={this.updateCookie}
                        />
                    )}
                    {Object.keys(allCookies).length > 0 && <Delete removeAllCookies={this.removeAllCookies} />}
                </div>
            </div>
        );
    }
}

export default Cookie;
