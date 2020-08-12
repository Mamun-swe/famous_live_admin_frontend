import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Icon } from 'react-icons-kit';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import { ic_menu } from 'react-icons-kit/md/ic_menu';
import { users, user, lock } from 'react-icons-kit/icomoon';

import { dashboard } from 'react-icons-kit/fa/dashboard';

import sidebarBg from '../assets/static/bg.jpg';
import userImg from '../assets/static/user.jpg';


const SideBar = () => {
    const [toggled, setToggled] = useState(false);
    const [image] = useState(true);

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };


    // Logout
    const logout = () => {
        window.location.href = '/'
    }

    return (
        <div className="sidebar">
            <ProSidebar
                image={image ? sidebarBg : false}
                breakPoint="lg"
                toggled={toggled}
                onToggle={handleToggleSidebar}
            >
                <Menu iconShape="round">
                    <MenuItem active={true} icon={<Icon icon={dashboard} />}>
                        Dashboard
                        <Link to="/dashboard/" />
                    </MenuItem>
                    <MenuItem active={true} icon={<Icon icon={users} />}>
                        Users
                        <Link to="/dashboard/users" />
                    </MenuItem>
                    {/* <MenuItem active={true} icon={<Icon icon={grid} />}>Home</MenuItem>
                    <SubMenu title="Components" icon={<Icon icon={grid} />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu> */}
                </Menu>
            </ProSidebar>




            {/* Top Navbar */}
            <div className="top-nav">
                <div className="card border-0 shadow bg-white p-3">
                    <div className="d-flex">
                        <div>
                            <div className="btn-toggle d-lg-none" onClick={() => handleToggleSidebar(true)}>
                                <Icon icon={ic_menu} size={27} />
                            </div>
                        </div>
                        <div className="ml-auto mt-1 pr-2">
                            <p className="mb-0 text-capitalize">abdullah al mamun</p>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic" className="p-0 shadow-none">
                                    <div className="img-box rounded-circle">
                                        <img src={userImg} className="img-fluid" alt="..." />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="border-0 shadow">
                                    <Dropdown.Item className="px-2" as={Link} to="/dashboard/me"><Icon size={15} icon={user} className="mr-1" />My Profile</Dropdown.Item>
                                    <Dropdown.Item className="px-2" onClick={logout}><Icon size={15} icon={lock} className="mr-1" />Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideBar;