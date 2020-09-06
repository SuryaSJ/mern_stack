import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLinks/NavLinks';
import './MainNavigation.css';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop';

const MainNavigation = () => {

    const [isDrawerOpen, setDrawer] = useState(false);

    const openSideDrawer=()=>{
        setDrawer(true);
    }

    const closeDrawer=()=>{
        setDrawer(false);
    }
    return (
        <React.Fragment>
            {isDrawerOpen &&  <Backdrop onClick={closeDrawer}/>}
            
            <SideDrawer show={isDrawerOpen} onClick={closeDrawer}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer> 
           
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openSideDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/"> Your Places</Link> </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>

    )
}

export default MainNavigation;
