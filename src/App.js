import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

const ContactUs = lazy(() => import('./pages/contactus/contactus.component'));
const DonatePage = lazy(() => import('./pages/donatepage/donatepage.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/donate' component={DonatePage} />
            <Route exact path='/contactus' component={ContactUs} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
