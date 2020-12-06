import React, { Component } from 'react';
import {BrowserRouter as Router, Link,} from 'react-router-dom';
class Header extends Component{
    render()
    {
        return(
            <div>

                
                <div className="imp-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 left-imp"> <Link href="tel:8418813550"><i className="fa fa-phone" /> +91-841 881 3550</Link> <Link href="mailto:info@impdate.com"><i className="fa fa-envelope-o" /> info@impdate.com</Link></div>
              <div className="col-md-6 right-imp">Follow Us : <Link href="https://www.google.com/"><i className="fa fa-facebook" /></Link> <Link href="https://www.google.com/"><i className="fa fa-twitter" /></Link> <Link href="https://www.google.com/"><i className="fa fa-linkedin" /></Link> <Link href="https://www.google.com/"><i className="fa fa-instagram" /></Link> <Link to="/" className="contactus" data-toggle="modal" data-target="#myModal">Contact Us</Link></div>
            </div>
          </div>
        </div>
        {/*imp-menu*/}
        <div className="imp-menu">
          <nav className="navbar navbar-default bootsnav">
            {/* Start Top Search */}
            {/* End Top Search */}
            <div className="container">            
              {/* Start Atribute Navigation */}
              {/* End Atribute Navigation */}
              {/* Start Header Navigation */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars" />
                </button>
                <Link className="navbar-brand" href="index.html"><img src="images/imp-date.png" className="logo" alt="" /></Link>
              </div>
              {/* End Header Navigation */}
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li><Link to="/month/january">january</Link></li>
                  <li><Link to="/month/january">February</Link></li>
                  <li><Link to="/month/january">March</Link></li>
                  <li><Link to="/month/january">April</Link></li>
                  <li><Link to="/month/january">May</Link></li>
                  <li><Link to="/month/january">June</Link></li>
                  <li><Link to="/month/january">July</Link></li>
                  <li><Link to="/month/january">August</Link></li>
                  <li><Link to="/month/january">September</Link></li>
                  <li><Link to="/month/january">October</Link></li>
                  <li><Link to="/month/january">November</Link></li>
                  <li><Link to="/month/january">December</Link></li>
                  <li className="dropdown">
                    <Link to="/" className="dropdown-toggle" data-toggle="dropdown">Other</Link>
                    <ul className="dropdown-menu">
                      <li><Link to="/">Custom Menu</Link></li>
                      <li><Link to="/">Custom Menu</Link></li>
                      <li><Link to="/">Custom Menu</Link></li>
                      <li><Link to="/">Custom Menu</Link></li>
                      <li><Link to="/">Custom Menu</Link></li>
                      <li><Link to="/">Custom Menu</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>   
            {/* Start Side Menu */}
            {/* End Side Menu */}
          </nav>
        </div>
        {/*imp-braking*/}
        <div className="imp-braking">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-xs-4" style={{paddingRight: '0px'}}><div className="braking">Breaking News</div></div>
              <div className="col-md-6 col-xs-8" style={{paddingLeft: '0px'}}>
                <div className="block-hdnews">
                  <div className="list-wrpaaer">
                    <ul className="list-aggregate" id="marquee-vertical">
                      <li>
                        <Link href>Breaking News 1</Link>
                      </li>
                      <li>
                        <Link href>Breaking News 1</Link>
                      </li>
                      <li>
                        <Link href>Breaking News 1</Link>
                      </li>
                      <li>
                        <Link href>Breaking News 1</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12"><form action>
                  <div className="input-group backgr">
                    <input type="text" className="form-control insearch" placeholder="Search Here"  />
                    <span className="input-group-addon backgr backeresd btnsearchred"><button type="submit" className="input-but birds"><i className="fa fa-search" /></button></span>
                  </div>
                </form></div>
            </div>
          </div>
        </div>
        {/*imp-top-banner*/}
            </div>
        )
    }
}

export default Header;