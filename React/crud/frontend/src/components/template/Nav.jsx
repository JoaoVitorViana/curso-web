import './Nav.css';
import React from 'react';
import NavItem from './NavItem';

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" title="Início" url="/" />
            <NavItem icon="users" title="Usuários" url="/users" />
        </nav>
    </aside>