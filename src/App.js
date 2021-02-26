import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactUs from './pages/contactus/contactus.component';
import DonatePage from './pages/donatepage/donatepage.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { GlobalStyle } from './global.styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/donate' component={DonatePage} />
        <Route exact path='/contactus' component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
