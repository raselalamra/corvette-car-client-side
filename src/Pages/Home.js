import React from 'react';
import About from '../Components/HomeComponents/About/About';
import Copyright from '../Components/HomeComponents/Footer/Copyright';
import Footer from '../Components/HomeComponents/Footer/Footer';
import Header from '../Components/HomeComponents/Header/Header';
import LatestNews from '../Components/HomeComponents/LatestNews/LatestNews';
import OurTeam from '../Components/HomeComponents/OurTeam/OurTeam';
import OurWark from '../Components/HomeComponents/OurWork/OurWark';
import Services from '../Components/HomeComponents/Services/Services';
import Testimonials from '../Components/HomeComponents/Testimonials/Testimonials';

const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <OurTeam />
            <Services />
            <OurWark />
            <LatestNews />
            <Testimonials />
            <Footer />
            <Copyright/>
        </main>
    );
};

export default Home;