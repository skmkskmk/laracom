import React, { Component } from 'react';

class Home extends Component{
    render()
    {
        return(
            <div>
                   <div className="imp-top-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="responsive-slider" data-spy="responsive-slider" data-autoplay="true">
                  <div className="slides" data-group="slides">
                    <ul>
                      <li>
                        <div className="slide-body box" data-group="slide">
                          <img src="images/news1.jpg" />
                          <a href="#">
                            <div className="caption header" data-animate="slideAppearRightToLeft" data-delay={500} data-length={300}>
                              <h2>My Wonderful Trip To Paris</h2>
                              <div className="caption sub" data-animate="slideAppearLeftToRight" data-delay={800} data-length={300}>Sep 22, 2016</div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="slide-body box" data-group="slide">
                          <img src="images/new2.jpg" />
                          <a href="#">
                            <div className="caption header" data-animate="slideAppearRightToLeft" data-delay={500} data-length={300}>
                              <h2>My Wonderful Trip To Paris</h2>
                              <div className="caption sub" data-animate="slideAppearLeftToRight" data-delay={800} data-length={300}>Sep 22, 2016</div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="slide-body box" data-group="slide">
                          <img src="images/news3.jpg" />
                          <a href="#">
                            <div className="caption header" data-animate="slideAppearRightToLeft" data-delay={500} data-length={300}>
                              <h2>My Wonderful Trip To Paris</h2>
                              <div className="caption sub" data-animate="slideAppearLeftToRight" data-delay={800} data-length={300}>Sep 22, 2016</div>
                            </div>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a className="slider-control left" href="#" data-jump="prev">Prev</a>
                  <a className="slider-control right" href="#" data-jump="next">Next</a>
                  <div className="pages">
                    <a className="page" href="#" data-jump-to={1}>1</a>
                    <a className="page" href="#" data-jump-to={2}>2</a>
                    <a className="page" href="#" data-jump-to={3}>3</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <div className="thumbnail box">
                      <img src="images/news3.jpg" className="img-responsive" />
                      <a href="#">
                        <div className="caption">
                          <h3>Kasturba Medical College...</h3>
                          <p>Sep 22, 2016</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-6">
                    <div className="thumbnaill box">
                      <img src="images/news4.jpg" className="img-responsive" />
                      <a href="#">
                        <div className="caption">
                          <h3>Kasturba Medical College...</h3>
                          <p>Sep 22, 2016</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-6">
                    <div className="thumbnaill box">
                      <img src="images/news5.jpg" className="img-responsive" />
                      <a href="#">
                        <div className="caption">
                          <h3>Kasturba Medical College...</h3>
                          <p>Sep 22, 2016</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="imp-expolr">
          <div className="container">
            <div className="row text-center margen-bottom">
              <div className="colmd-12 tag">EXPLORERS</div>
              <div className="colmd-12 tags">INSPIRATIONAL PEOPLE INSPIRATIONAL PEOPLE</div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="news-slider" className="owl-carousel">
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/news1.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"> <i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/new2.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"><i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/news3.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"><i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/news1.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"><i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/new2.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"><i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/news3.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"><i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/news1.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"> <i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/new2.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"><i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                  <div className="post-slide">
                    <div className="post-img">
                      <span className="over-layer" />
                      <img src="images/news3.jpg" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h3>
                    <span className="post-date"><i className="fa fa-calendar" /> july 11, 2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*imp-top-stories*/}
        <div className="imp-top-stories">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-11">
                    <div className="row"><div className="braking">Top Stories</div>
                      <div className="col-md-12" style={{borderTop: 'solid 2px #f82a2a'}}>&nbsp;</div></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6" style={{paddingLeft: '0px', marginBottom: '20px'}}>
                        <div className="thumbnailll box">
                          <img src="images/news4.jpg" className="img-responsive" />
                          <a href="#">
                            <div className="caption">
                              <h3>Kasturba Medical College...</h3>
                              <p>Sep 22, 2016</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row news-top">
                          <a href="#">
                            <div className="col-md-4 col-xs-4 box"><img src="images/news6.jpg" className="img-responsive" /></div>
                            <div className="col-md-8 col-xs-8">
                              <div className="row">
                                <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                                <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="row news-top">
                          <a href="#">
                            <div className="col-md-4 col-xs-4 box"><img src="images/news7.jpg" className="img-responsive" /></div>
                            <div className="col-md-8 col-xs-8">
                              <div className="row">
                                <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                                <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="row news-top">
                          <a href="#">
                            <div className="col-md-4 col-xs-4 box"><img src="images/news8.jpg" className="img-responsive" /></div>
                            <div className="col-md-8 col-xs-8">
                              <div className="row">
                                <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                                <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="row news-top">
                          <a href="#">
                            <div className="col-md-4 col-xs-4 box"><img src="images/news9.jpg" className="img-responsive" /></div>
                            <div className="col-md-8 col-xs-8">
                              <div className="row">
                                <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                                <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail" style={{padding: '0px', border: 'none !important'}}>
                  <div className="row">
                    <div className="recent">Stay Connected</div>
                    <div className="col-md-12" style={{borderBottom: 'solid 2px #ffab00', marginTop: '-20px'}}>&nbsp;</div>
                  </div>
                  <div className="row" style={{margin: '20px -29px'}}>
                    <div className="col-md-3 col-xs-3">
                      <a href="#">
                        <div className="thumbnail facebook">
                          <i className="fa fa-facebook" />
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3 col-xs-3">
                      <a href="#">
                        <div className="thumbnail twitter">
                          <i className="fa fa-twitter" />
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3 col-xs-3">
                      <a href="#"><div className="thumbnail linkedin"><i className="fa fa-linkedin" /></div></a>
                    </div>
                    <div className="col-md-3 col-xs-3">
                      <a href="#"><div className="thumbnail instagram"><i className="fa fa-instagram" /></div></a>
                    </div>
                  </div>
                </div>
                <div className="thumbnail" style={{padding: '0px', border: 'none !important'}}>
                  <div className="row">
                    <div className="blogs">Recent News</div>
                    <div className="col-md-12" style={{borderBottom: 'solid 2px #546e7a', marginTop: '-20px'}}>&nbsp;</div>
                  </div>
                </div>
                <div className="row news-top" style={{margin: '15px -29px'}}>
                  <div className="col-md-6 col-xs-6" style={{padding: '0px 8px', marginBottom: '15px'}}>
                    <a href="#">
                      <div className="col-md-12 box"><img src="images/news8.jpg" className="img-responsive" style={{marginBottom: '10px', height: '105px'}} /></div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-12"><h3>If Obama Had Governed Like This.</h3></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-xs-6" style={{padding: '0px 8px', marginBottom: '15px'}}>
                    <a href="#">
                      <div className="col-md-12 box"><img src="images/news9.jpg" className="img-responsive" style={{marginBottom: '10px', height: '105px'}} /></div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-12"><h3>If Obama Had Governed Like This.</h3></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-xs-6" style={{padding: '0px 8px', marginBottom: '15px'}}>
                    <a href="#">
                      <div className="col-md-12 box"><img src="images/news6.jpg" className="img-responsive" style={{marginBottom: '10px', height: '105px'}} /></div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-12"><h3>If Obama Had Governed Like This.</h3></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-xs-6" style={{padding: '0px 8px', marginBottom: '15px'}}>
                    <a href="#">
                      <div className="col-md-12 box"><img src="images/news7.jpg" className="img-responsive" style={{marginBottom: '10px', height: '105px'}} /></div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-12"><h3>If Obama Had Governed Like This.</h3></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sports">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="row"><div className="braking">Sporst</div>
                  <div className="col-md-12" style={{borderTop: 'solid 2px #f82a2a'}}>&nbsp;</div></div>
                <div className="row">
                  <div className="thumbnail row-bor">
                    <div className="col-md-12">
                      <div className="thumbnaill box">
                        <img src="images/news4.jpg" className="img-responsive" />
                        <a href="#">
                          <div className="caption">
                            <h3>Kasturba Medical College...</h3>
                            <p>Sep 22, 2016</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12" style={{padding: '21px'}}>
                      <div className="row news-top">
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news6.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="row news-top">
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news7.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="row news-top" style={{marginBottom: '0px'}}>
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news8.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row"><div className="recent">Health &amp; Fitness</div>
                  <div className="col-md-12" style={{borderTop: 'solid 2px #ffab00'}}>&nbsp;</div></div>
                <div className="row">
                  <div className="thumbnail row-bor" style={{borderLeft: 'none !important'}}>
                    <div className="col-md-12">
                      <div className="thumbnaill box">
                        <img src="images/news5.jpg" className="img-responsive" />
                        <a href="#">
                          <div className="caption">
                            <h3>Kasturba Medical College...</h3>
                            <p>Sep 22, 2016</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12" style={{padding: '21px'}}>
                      <div className="row news-top">
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news6.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="row news-top">
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news7.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="row news-top" style={{marginBottom: '0px'}}>
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news8.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row"><div className="blogs">Politics</div>
                  <div className="col-md-12" style={{borderTop: 'solid 2px #546e7a'}}>&nbsp;</div></div>
                <div className="row">
                  <div className="thumbnail row-bor" style={{borderLeft: 'none !important'}}>
                    <div className="col-md-12">
                      <div className="thumbnaill box">
                        <img src="images/news4.jpg" className="img-responsive" />
                        <a href="#">
                          <div className="caption">
                            <h3>Kasturba Medical College...</h3>
                            <p>Sep 22, 2016</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12" style={{padding: '21px'}}>
                      <div className="row news-top">
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news6.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="row news-top">
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news7.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="row news-top" style={{marginBottom: '0px'}}>
                        <a href="#">
                          <div className="col-md-4 box"><img src="images/news8.jpg" className="img-responsive" /></div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12" style={{marginTop: '10px'}}><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                              <div className="col-md-12"><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="imp-top-stories">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-11">
                    <div className="row"><div className="moree">More News</div>
                      <div className="col-md-12" style={{borderTop: 'solid 2px #930'}}>&nbsp;</div></div>
                  </div>
                </div>
                <div className="row news-top">
                  <a href="#">
                    <div className="col-md-4 box"><img src="images/news6.jpg" className="img-responsive" /></div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-12" style={{marginTop: '10px'}}><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                        <div className="col-md-12"><p>Nmply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s andard dummy text ever since the 1500s, when an unknown</p><p>Nmply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s andard dummy text ever since the 1500s, when an unknown</p></div>
                        <div className="col-md-12"><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="row news-top">
                  <a href="#">
                    <div className="col-md-4 box"><img src="images/news7.jpg" className="img-responsive" /></div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-12" style={{marginTop: '10px'}}><h3>If Obama Had Governed Like This In 2017 He’d Be The Transformational.</h3></div>
                        <div className="col-md-12"><p>Nmply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s andard dummy text ever since the 1500s, when an unknown</p><p>Nmply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s andard dummy text ever since the 1500s, when an unknown</p></div>
                        <div className="col-md-12"><p><i className="fa fa-calendar" /> july 11, 2015</p></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="thumbnail">
                      <img src="images/add.jpg" className="img-responsive" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="thumbnail" style={{background: '#ff4b52', border: 'none', padding: '35px 20px', color: '#fff'}}>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <h3 className="subscr">
                            Subscribe to our mailing list to get the new updates!
                          </h3>
                        </div>
                        <div className="col-md-12 text-center">
                          <i className="fa fa-envelope-o" style={{fontSize: '60px !important', color: '#fc7f84 !important'}} />
                        </div>
                        <div className="col-md-12 text-center">
                          <p style={{margin: '0px 0px 10px 0px'}}>Subscribe our newsletter to stay updated</p>
                        </div>
                        <div className="col-md-12" style={{marginBottom: '10px'}}>
                          <form action>
                            <div className="input-group backgr">
                              <input type="text" className="form-control" placeholder="Enter Email ID" style={{height: '50px !important', border: 'none !important'}} />
                              <span className="input-group-addon backgr backeresd"><button type="submit" className="input-but birds"><i className="fa fa-paper-plane" /></button></span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}
export default Home;