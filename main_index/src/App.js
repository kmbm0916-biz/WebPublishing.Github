import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './global_doc/Header';
import Footer from './global_doc/Footer';

import Main from './global_doc/Main';
import Product from './global_doc/Product';
import NotFound from './global_doc/NotFound';

const App = () => {
	return (
		<div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/*" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
		</div>
	);
}

export default App;
