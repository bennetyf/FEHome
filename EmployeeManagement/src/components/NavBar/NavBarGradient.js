import React from "react";
// import Link from "umi/link";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import logo from "../../assests/logo.png";


import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,
         Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from 'mdbreact';

export default class NavigationBar extends React.PureComponent{
    state = {
        isOpen: false
      };
    
    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
 
    render(){
        return(
            <Navbar color="aqua-gradient" dark expand="md" style={{'height':'5rem'}}>
            
            <NavbarBrand href="/" className="pt-0 ml-3">
              <img src={logo}/>
            </NavbarBrand>

            <NavbarToggler onClick={this.toggleCollapse} />

            <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="/"><Fa icon="home" size='lg'/><span className="ml-2 h4-responsive font-weight-bold">Home</span></NavLink>
                </NavItem>
                
                <NavItem>
                  <Dropdown>
                   <DropdownToggle nav caret>
                      <Fa icon="cubes" size='lg'/><span className="ml-2 h4-responsive font-weight-bold">Products</span>
                   </DropdownToggle>
                    <DropdownMenu className="rgba-cyan-strong" left>
                      <DropdownItem href="#!" className="text-center"><span className="h5-responsive">Employee Management System</span></DropdownItem>
                      <DropdownItem href="#!" className="text-center"><span className="h5-responsive">Online Chatroom</span></DropdownItem>
                      <DropdownItem href="#!" className="text-center"><span className="h5-responsive">BBS System</span></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>

                <NavItem>
                <Dropdown>
                   <DropdownToggle nav caret>
                      <Fa icon="desktop" size='lg'/><span className="ml-2 h4-responsive font-weight-bold">Technology</span>
                   </DropdownToggle>
                    <DropdownMenu className="rgba-cyan-strong" basic>
                      <DropdownItem header className="text-center"><span className="font-weight-bold h2-responsive">JavaWeb</span></DropdownItem>
                      <DropdownItem href="#!" className="text-center"><span className="h5-responsive">Spring FrameWork</span></DropdownItem>
                      <DropdownItem href="#!" className="text-center"><span className="h5-responsive">Spring MVC</span></DropdownItem>
                      <DropdownItem href="#!" className="text-center"><span className="h5-responsive">Spring Data</span></DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem header className="text-center"><span className="font-weight-bold h5-responsive">DataBase</span></DropdownItem>
                      <DropdownItem href="#!" className="text-center"><span className="h5-responsive">MyBatis</span></DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>

              <NavbarNav right>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      <Fa icon="user" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
        </Navbar>
        );
    }
}
