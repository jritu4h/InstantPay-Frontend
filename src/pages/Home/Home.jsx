import React from 'react';
import Hero from '../../components/Hero/Hero';
import Balance from '../../components/Balance/Balance';
import SendMoneyCashOutSection from '../../components/MoneySender/SendCashout';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Balance></Balance>
          <SendMoneyCashOutSection></SendMoneyCashOutSection>
        </div>
    );
};

export default Home;