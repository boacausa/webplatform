import React from 'react';
import Icon from './Icon';

const SideBar = () => {
  const isAdmin = true;

  return (
    <div className='navbar-default sidebar' role='navigation'>
      <div className='sidebar-nav navbar-collapse'>
        <ul className='nav' id='side-menu'>
          <li>
            <a href='#'><Icon name='dashboard' fixedWidth /> ONGs</a>
          </li>
          <li>
            <a href='#'><Icon name='qq' /> Pets</a>
          </li>
          {isAdmin ? <li><a href='#'><Icon name='users' /> Usuários</a></li> : null}
          <li>
            <a href='#'><Icon name='home' /> Voltar ao site</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
