import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render()
    {
        return(
            <div>
               <div className="footer-top-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12"><h3>About Company</h3></div>
                  <div className="col-md-12">
                    <hr className="tag-lineee" />
                  </div>
                  <div className="col-md-12">
                    <p>We are the best WordPress Developer Company. We can solve your problem and make the solution nice for you and your company. Support, Service &amp; Development is our main weapon.</p>
                  </div>
                  <div className="col-md-12"><Link to="/" className="fac"><i className="fa fa-facebook" /></Link> <Link to="/" className="fac"><i className="fa fa-twitter" /></Link> <Link to="/" className="fac"><i className="fa fa-linkedin" /></Link> <Link to="/" className="fac"><i className="fa fa-instagram" /></Link> </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12"><h3>Recent Post</h3></div>
                  <div className="col-md-12">
                    <hr className="tag-lineee" />
                  </div>
                  <div className="col-md-12" style={{marginBottom: '10px'}}>
                    <Link to="/">
                      <span><i className="fa fa-calendar" /> September 20, 2018</span>
                      <p>Ducati ‘has all the cards’ to win 2017 MotoGP title, says CEO</p>
                    </Link>
                  </div>
                  <div className="col-md-12" style={{marginBottom: '10px'}}>
                    <Link to="/">
                      <span><i className="fa fa-calendar" /> September 20, 2018</span>
                      <p>Ducati ‘has all the cards’ to win 2017 MotoGP title, says CEO</p>
                    </Link>
                  </div>
                  <div className="col-md-12" style={{marginBottom: '10px'}}>
                    <Link to="/">
                      <span><i className="fa fa-calendar" /> September 20, 2018</span>
                      <p>Ducati ‘has all the cards’ to win 2017 MotoGP title, says CEO</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12"><h3>Popular Categories</h3></div>
                  <div className="col-md-12">
                    <hr className="tag-lineee" />
                  </div>
                  <div className="col-md-12" style={{marginBottom: '10px'}}>
                    <Link to="/" className="footer-link">Action</Link>
                    <Link to="/" className="footer-link">Adventure</Link>
                    <Link to="/" className="footer-link">Animation</Link>
                    <Link to="/" className="footer-link">Apple</Link>
                    <Link to="/" className="footer-link">Boxing</Link>
                    <Link to="/" className="footer-link">Camera</Link>
                    <Link to="/" className="footer-link">Computers</Link>
                    <Link to="/" className="footer-link">Electronics</Link>
                    <Link to="/" className="footer-link">Food</Link>
                    <Link to="/" className="footer-link">Games</Link>
                    <Link to="/" className="footer-link">Health</Link>
                    <Link to="/" className="footer-link">Life style</Link>
                    <Link to="/" className="footer-link">Politics</Link>
                    <Link to="/" className="footer-link">Racing</Link>
                    <Link to="/" className="footer-link">Security</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12"><h3>Tags</h3></div>
                  <div className="col-md-12">
                    <hr className="tag-lineee" />
                  </div>
                  <div className="col-md-12" style={{marginBottom: '10px'}}>
                    <Link to="/" className="tag-link">Action</Link>
                    <Link to="/" className="tag-link">Adventure</Link>
                    <Link to="/" className="tag-link">Animation</Link>
                    <Link to="/" className="tag-link">Apple</Link>
                    <Link to="/" className="tag-link">Boxing</Link>
                    <Link to="/" className="tag-link">Camera</Link>
                    <Link to="/" className="tag-link">Computers</Link>
                    <Link to="/" className="tag-link">Electronics</Link>
                    <Link to="/" className="tag-link">Boxing</Link>
                    <Link to="/" className="tag-link">Camera</Link>
                    <Link to="/" className="tag-link">Computers</Link>
                    <Link to="/" className="tag-link">Electronics</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-line">Copyright ©2020 All rights reserved</div>
            </div>
        )
    }
}

export default Footer;