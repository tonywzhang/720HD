import React from 'react';
import { Link } from 'react-router-dom';

const splash = () => {
  return (
    <div className="splash_container">
      <div className="header">
        <div id="large_header_text">Get inspired and share your best photos</div>
        <div id="medium_header_text">Find your home among the world's best photographers</div>
        <Link to="/signup" id="second_sign_up">Join 720HD</Link>
      </div>

      <div className="splash_header_1">The top photos, chosen by you</div>
      <div className="splash_caption_1">Discover what’s trending according to photographers around the world.</div>

      <div className="top_photos">
        <div className="1-1"><img src={window.images.steph_bron}></img></div>
        <div className="1-2"><img src={window.images.dwade_bron}></img></div>
        <div className="2-1"><img src={window.images.jordan}></img></div>
        <div className="2-2"><img src={window.images.vc}></img></div>
      </div>


      <div className="splash_header_2">Get motivated to share your best work</div>
      <div className="splash_caption_2">Become part of a community that celebrates incredible photography.</div>

      <div className="features">
        <div className="1-1"><img src={window.images.sample1}></img></div>
        <div className="1-2">
          <div>
            <h2>
              Get Global Exposure
            </h2>
            <p>
              Imagine having your photos seen by photographers like you from all over the world. When you upload your photos, they’re shared with 720HD members worldwide. Watch as your photos get reactions from the community—and see if your shot makes it to Popular.
            </p>
          </div>
        </div>
        <div className="2-1">
          <div>
            <h2>
              Connect with Photographers Everywhere
            </h2>
            <p>
              You’re not just joining a network—you’re joining a real community. Follow photographers to get their newest photos appearing in your home feed, share your thoughts by liking and commenting on photos, and discuss all the details of photography in groups.
            </p>
          </div>
        </div>
        <div className="2-2"><img src={window.images.sample2}></img></div>
        <div className="3-1"><img src={window.images.sample3}></img></div>
        <div className="3-3">
          <div>
            <h2>
              Make Money Doing What You Love
            </h2>
            <p>
              Submit your photos to 720HD and license your content through our exclusive distribution partners.
            </p>
          </div>
        </div>
        <div className="div4-1">
          <div>
            <div className="splash_header_3">Loved by people around the world</div>
            <div className="splash_caption_3">Join over 13 million other photographers who already use 720HD.</div>
          </div>
        </div>

        <div className="footer">
          <div className="links">
            <div className="ft-headers">© 2018 720HD</div>
            <div className="ft-headers">FOLLOW</div>
            <div className="ft2-1">
              <p>
                720HD is the leading social network for photographers to connect, improve, and share their best work.
              </p>
            </div>
            <div className="ft2-2">

              <a className="socials" href="mailto:tonywzhang@gmail.com">
                <i className="fab fa-google"></i>
              </a>

              <br/>

              <a className="socials" href="tel:+16508883357">
                <i className="fas fa-mobile"></i>
              </a>

              <br/>

                <a className="socials" href='https://www.facebook.com/tonywzhang'>
                  <i className="fab fa-facebook"></i>
                </a>

                <br/>

                <a className="socials" href="https://www.linkedin.com/in/tony-wzhang/">
                  <i className="fab fa-linkedin"></i>
                </a>
            </div>

          </div>
        </div>
      </div>



    </div>
  );
};

export default splash;
