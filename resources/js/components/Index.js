import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './Home';
import Post from './Post';
import PostDetails from './PostDetails';

function Index() {
    return (
        <div>
        <BrowserRouter>
        <Header/>

        <Route path="/" exact component={Home}></Route>
        <Route path="/month/:catId" exact component={Post}></Route>
        <Route path="/post/:url" exact component={PostDetails}></Route>
        <Footer/>
        </BrowserRouter>
      </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
