import React, { useState } from 'react';
import Navbar from '../components/Navbar/NavbarIndex';
import Clock from '../components/time/Clock';
import Sidebar from "../components/Sidebar/SidebarIndex";
import Hero from '../components/HeroSection/HeroIndex';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <Clock/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero/>
        </>
    );
};

export default Home;
