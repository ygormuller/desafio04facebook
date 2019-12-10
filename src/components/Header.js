import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src={require('../assets/face.jpg')} alt= "facelogo"/>
        <div>
          <span>Meu perfil</span>
          <img src={require('../assets/icon_login.png')} alt= "icon login"/>
        <div></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;