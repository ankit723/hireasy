import logo from './about-icons/logo.png';
import cbse from './about-icons/cbse.png';
import fee from './about-icons/fee.png';
import gl from './about-icons/gl.png';
import lb from './about-icons/lb.png';
import mg from './about-icons/mg.png';
import tc from './about-icons/tc.png';
import about from './bg/about-bg.jpg';
import './App.css';



function App() {
  return (  
    <>  
    <div className="App">

      {/* extreme top nav bar */}

      <nav>
          <div className="left">
              <ul>
                  <li><a href="contact.html">Have a questions?</a></li>
                  <li><a href="www.google.com/truecaller">+979721050626</a></li>
                  <li><a href="www.gmail.com">info@hireasy.com</a></li>
              </ul>
          </div>

          <div className="right">
              <ul>
                  <li><a href="teacher-login.html">Developer's Login</a></li>
                  <li><a href="student-login">User's Login</a></li>
              </ul>
          </div>
      </nav>

      {/* nav bar */}

      <header id="navbar">
        <div className="left1">
            <img src={logo} alt="" id="title"/>
            <h2 id="title-name">Hireasy</h2>
        </div>

        <div className="mid">
            <ul>
                <li><a href="index.html" className="mid-js">Home</a></li>
                <li><a href="get-hired.html" className="mid-js">Get Hired</a></li>
                <li><a href="get-service.html" className="mid-js">Get Services</a></li>
                <li><a href="contact.html" className="mid-js">Contact</a></li>
            </ul>
        </div>
      </header>

      {/* extreme top section */}

      <div className="container">
          <h1>
              Hireasy <br/> Your partner in finance
          </h1>

          <p>
              We are provide best in className services provided, by the <br />
              best developers at a very resonable price. The only moto<br />
              of our company is to enhance your financial and technical status.
          </p>

          <div className="button">
              <a href="addmissions.html">Get Service</a>
          </div>
      </div>

      {/* Insider section */}

      <div className="cont-insider">
        <div className="insider">
            <div className="insider1">
                <h3>Our Founders</h3>
                <p>You Can See The Faces Behind This Initiative</p>
            </div>
            <div className="insider2">
                <h3>Our Developers</h3>
                <p>Check Out Our Developers </p>
            </div>
            <div className="insider3">
                <h3>Contact Us</h3>
                <p>CLick Here To COntact Us</p>
            </div>   

        </div>

        <div className="head-title">
            <h2>Hireasy Insider's</h2>
            <div className="title-discription">
                <p>In this section you can find out more about how the hiring and services process work and more</p>
                <p id="next-p">Welcome to Hireasy.co</p>
            </div>
        </div>

        <div className="insiders1">
            <div className="management">
                <img src={mg} alt=""/>
                <h3>Management</h3>
                <p className="manage-p">
                    Every service provider needs to have systems
                    that help create the conditions for 
                    Developers and Service user to work effectively together...
                </p>
            </div>
            
            <div className="Transfer">
                <img src={tc} alt=""/>
                <h3>Terms and Conditions</h3>
                <p className="manage-p">
                    Here you can find the terms and conditions of the 
                    service provider as well as the Developers
                </p>
            </div>
            
            <div className="fee">
                <img src={fee} alt=""/>
                <h3>Monetary Structure</h3>
                <p className="manage-p">
                    Here you can find the monetary structure i.e. the
                    base fee of the service provider and the Developers
                </p>
            </div>
        </div>  

        <div className="insiders2">
            <div className="library">
                <img src={lb} alt=""/>
                <h3>Testemonials</h3>
                <p className="manage-p">
                    We believe you money is precious and we want to make sure
                    that you invest it in the right way at the right thing.
                    To Check The Testimonials of  developers click here!
                </p>
            </div>
            
            <div className="galary">
                <img src={gl} alt=""/>
                <h3>Galary</h3>
                <p className="manage-p">
                    Here you will find a large collection of some 
                    of our best photos to give you a peek at Our Workspace
                </p>
            </div>
            
            <div className="cbse">
                <img src={cbse} alt=""/>
                <h3>Company Details</h3>
                <p className="manage-p">
                    Cick Here To See The Details Of The Company!
                </p>
            </div>
        </div>       
      </div>

      {/* mid section */}

      <div className="container2">
        <h1>
            Solutions For Tommorow's Leaders
        </h1>

        <p>
            "Opportunities dont happen, you create them, but when it does  <br />
            should be your own responsibility to make sure it is a good one."
        </p>
        <p id="auth">Ankit Biswas</p>

        <div className="button2">
            <a href="addmissions.html">Get Hired Now</a>
        </div>

      </div>

      {/* about section */}

      <div className="about">
        <div className="about-us">
            <h1>About Us</h1>
            <p>
            About the company: Hey everyone ! , Hireasy is platform dedicated <br /> 
            for your growth and financial freedom, we support you with jobs,  <br /> 
            internship and skills in fields like data entry, operator, type writing, <br />
            bpo, content creation, animation, video editing, photoshop, seo etc. <br />
            Our vision is to make every Indian financially free. <br />
            For more queries call- 9721050626 <br />
            email: info@hireasy.com
            </p>
            <ul>
                <li>We Believe in Quality Services</li>
                <li>Work Completed By Profetional Developer</li>
            </ul>

            <div className="button3">
                <a href="addmissions.html">Get Service  </a>
            </div>

        </div>

        <div className="design">
            <div className="des-img"> <img src={about} alt=""/></div>
        </div>
      </div>

    </div>

    </>
  );
}

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("navbar").style.backgroundColor = "rgb(27, 36, 48)";
      document.getElementById("navbar").style.boxShadow = "0px 0px 10px rgba(0,0,0,0.6)";
      document.getElementById("title-name").style.marginLeft="-210px";
      document.getElementById("title-name").style.transition="0.5s";
      document.getElementById("title-name").style.opacity="0";
      document.getElementById("title").style.opacity="1";
  } 
  else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("title-name").style.transition="0.5s";
      document.getElementById("title-name").style.marginLeft="139px";
      document.getElementById("title-name").style.opacity="1";
      document.getElementById("title").style.opacity="1";

  }
}
window.onscroll = function() {scrollFunction()};

export default App;
