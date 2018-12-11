import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import './App.css';

const cookies = new Cookies();    

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.setRandomCookies =  this.setRandomCookies.bind(this);
    this.reloadCookieList = this.reloadCookieList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      allCookies: cookies.getAll({doNotParse: true}),
      inputValue: '',
      selectValue:'',
      cookieValue: '',
      cookieName:'',
    }
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;
    
    this.setState({
      [name]: value
    });
   }
   
  reloadCookieList() {
    // update de la liste des cookies du navigateur
    this.setState({
      allCookies: cookies.getAll({doNotParse: false})
    });
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
    
    // génération de plusieurs cookies
    froots.map(froot => {
      return cookies.set(froot, Math.floor(Math.random() * 10) + 1, {maxAge: 7200} );
    });
    
    this.reloadCookieList();
  }

  removeCookie(cookie){
    cookies.remove(cookie);
    this.reloadCookieList();
  }
  
  updateCookie(cookie,value){
    
    // update du cookie
    cookies.set(cookie, value);
    this.reloadCookieList();
    
    // clear input
    this.setState({
      inputValue: ''
    })
  }
  
  removeAllCookies() {    
    for(var cookie in this.state.allCookies) {
      cookies.remove(cookie)
    };
    
    this.reloadCookieList();
  }
  
  createCookie(cookie,value){
    cookies.set(cookie,value,{maxAge: 7200});
    this.reloadCookieList();
  }
  
  renderListCookies() {
    const cookieList = this.state.allCookies;
    
    // liste de tous les cookies du navigateur
    return Object.keys(cookieList).map(cookie => {
      return(
         <tr key={cookie} className="cookie-item">
           <td>{cookie}</td>
           <td>{cookieList[cookie]}</td>
           <td>
             <button 
               className="btn btn-delete"
               onClick={this.removeCookie.bind(this,cookie)}>
               Remove
             </button>
           </td>
         </tr>
       );
     });
  }
  
  renderUpdateCookies() {
    let selectValue = this.state.selectValue;
    let inputValue = this.state.inputValue;
    return(
      <div>
        <h2>Update de cookie</h2> 
        <select name="selectValue" value={selectValue} onChange={this.handleChange}>
          {Object.keys(this.state.allCookies).map(cookie => {
            return <option key={cookie} value={cookie}>{cookie}</option>
          })}
        </select>
        <input 
          type="text" 
          value={inputValue} 
          onChange={this.handleChange}
          name="inputValue"
        />
        <br/>
        <button 
          className="btn btn-update"
          onClick={this.updateCookie.bind(this,selectValue,inputValue)}>
          Update
        </button>
      </div>
    );
  }
  
  renderRemoveAllCookies() {
    return(
      <div>
        <h2>Supprimer tous les cookies</h2>
        <button 
          className="btn btn-delete"
          onClick={this.removeAllCookies.bind(this)}>
          Supprimer
        </button>
      </div>
    );
  }
  
  renderCreateCookies() {
    let cookieName = this.state.cookieName;
    let cookieValue = this.state.cookieValue;
    
    return(
      <div>
       <h2>Créer un cookie</h2>
       
       <label htmlFor="cookieName">Nom</label>
       <input 
         name="cookieName"
         type="text"
         value={cookieName}
         onChange={this.handleChange}
        />
      <br/>
       <label htmlFor="cookieValue">Valeur</label>
       <input 
         name="cookieValue"
         type="text"
         value={cookieValue}
         onChange={this.handleChange}
        />
      <br/>
      <button 
        className="btn btn-primary" 
        onClick={this.createCookie.bind(this,cookieName,cookieValue)}>
        Créer
      </button>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className="header">
            <img 
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/cookie_1f36a.png" 
              srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/cookie_1f36a.png 2x" 
              alt="Cookie on Apple iOS 12.1" 
              width="80" 
              height="80"
              className="App-logo"
             />
            <h1>Cookishibam</h1>
            <img 
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/cookie_1f36a.png" 
              srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/cookie_1f36a.png 2x" 
              alt="Cookie on Apple iOS 12.1" 
              width="80" 
              height="80"
              className="App-logo-bis"
             />
         </div>
          <button
            className="btn btn-primary" 
            onClick={this.setRandomCookies}>
            Créer des cookies
          </button>
        </div>
        
        <div className="cookies">
          
          <div className="cookies-create">
            {this.renderCreateCookies()}
          </div>
          
          <div className="cookies-list">
            {Object.keys(this.state.allCookies).length > 0 ? 
            <div>
              <h2>Liste des cookies</h2>
              <table>
                <thead>
                 <th>Nom</th>
                 <th>Valeur</th>
                 <th>Supprimer</th>
                </thead>
                <tbody>
                  {this.renderListCookies()}
                </tbody>
              </table>
            </div>
            :<h2> Aucun cookies</h2>}
          </div>
         
          <div className="cookies-update">
            {Object.keys(this.state.allCookies).length > 0 ? this.renderUpdateCookies() : null}
          </div>
          
          <div className="cookies-remove">
            {Object.keys(this.state.allCookies).length > 0 ? this.renderRemoveAllCookies() : null}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
