import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import style from "./navbar-style.scss";
import logo from "../../assests/logo.png";


import {  Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Fa,
          NavbarToggler, Collapse,
          Dropdown, DropdownToggle, DropdownMenu,  DropdownItem} from 'mdbreact';

export default class NavigationBar extends React.PureComponent{
    state = {
        isOpen: false
      };
    
    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    render(){
        return(
        <Navbar color="transparent" dark expand="md" className={style.navbar} fixed="top">
            
            <NavbarBrand href="/" className="pt-0 ml-3">
              <img src={logo}/>
            </NavbarBrand>
            
            <NavbarNav left>
                <NavItem>
                  <NavLink to="/"><Fa icon="home" size='lg'/><span className="ml-2 h4-responsive font-weight-bold">Home</span></NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink to="/"><Fa icon="cubes" size='lg'/><span className="ml-2 h4-responsive font-weight-bold">Products</span></NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/"><Fa icon="desktop" size='lg'/><span className="ml-2 h4-responsive font-weight-bold">Technology</span></NavLink>
                </NavItem>
            </NavbarNav>

            <NavbarToggler onClick={this.toggleCollapse} />

            <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav right>
            <Dropdown>
              <DropdownToggle nav>
                <span className="text-white"><Fa icon="user" size="lg" /><span className="ml-2 h4-responsive font-weight-bold">About</span></span>
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor:'rgba(255,255,255,0.6)'}} right>
                    <DropdownItem href="https://bennetyf.github.io/" target="_blank">
                      <span className="h5 font-weight-bold"><Fa icon="home"/><span className="ml-2">HomePage</span></span>
                    </DropdownItem>
                    <DropdownItem href="https://github.com/bennetyf" target="_blank">
                      <span className="h5 font-weight-bold"><Fa icon="github"/><span className="ml-2">GitHub</span></span>
                    </DropdownItem>
                    {/* <DropdownItem href="#!">Blog</DropdownItem> */}
                    {/* <DropdownItem href="#!"></DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
            </NavbarNav>
          </Collapse>
        </Navbar>
        );
    }
}
