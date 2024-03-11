import React, { useEffect, useState} from 'react';
import './App.css';
import pic1 from '../src/pic1.png';
import pic4 from '../src/pic4.png';
import pic5 from '../src/pic5.png';
import pic6 from '../src/pic6.png';
import pic7 from '../src/pic7.png';
import pic8 from '../src/pic8.png';
import pic9 from '../src/pic9.png';
import pic10 from '../src/pic10.png';
import pic11 from '../src/pic11.png';
import { FaHome, FaTags, FaReact, FaHeart, FaSearch, FaVolumeUp, FaGithub, FaPhone, FaLinkedin, FaMedium, FaDev } from 'react-icons/fa';

const App = () => {
  useEffect(() => {
    const animationDuration = 1200;

    const redirectAfterAnimation = setTimeout(() => {
      window.location.href = '/#';
    }, animationDuration);


    return () => clearTimeout(redirectAfterAnimation);
  }, []);

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };
  
  const handleMouseLeave = () => {
    setHoveredProject(null);
  };
  
  const generateProjectListItem = (project, index) => (
    <li
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <a href={project.link}>{project.name}</a>
      {hoveredProject === index && (
        <img src={project.tinyImage} alt={`${project.name} Tiny`} width={50} height={50} />
      )}
    </li>
  );

  const projects = [
    { name: 'Event Listener', link: 'https://event-listener-phi.vercel.app/', tinyImage: pic4 },
    { name: 'Birthday Wish App', link: 'https://www-boluwatiwi-com.glitch.me/', tinyImage: pic5 },
    { name: 'UTC Time', link: 'https://slackproject.vercel.app/', tinyImage: pic6 },
    { name: 'Healthify', link: 'https://healthify-app.vercel.app/', tinyImage: pic7 },
    { name: 'Calculator App', link: 'https://calculator-app-julia14op.vercel.app/', tinyImage: pic8 },
    { name: 'Responsive Navbar', link: 'https://responsive-nav-bar-jet.vercel.app/', tinyImage: pic9 },
    { name: 'Task Manager', link: 'https://task-manager-app-jade-chi.vercel.app/', tinyImage: pic10 },
    { name: 'Managata & Gallo', link: 'https://mangata-gallo-hazel.vercel.app/', tinyImage: pic11 }
  ];

  return (
    <div>
      <div className="name-container0">
        <div className="letter" id="letter-I1">I</div>
        <div className="letter" id="letter-D">D</div>
        <div className="letter" id="letter-O1">O</div>
        <div className="letter" id="letter-W">W</div>
        <div className="letter" id="letter-U1">U</div>
      </div>

      <div className="name-container2">
        <div className="letter" id="letter-O">O</div>
        <div className="letter" id="letter-P">P</div>
        <div className="letter" id="letter-E">E</div>
        <div className="letter" id="letter-Y">Y</div>
        <div className="letter" id="letter-E2">E</div>
        <div className="letter" id="letter-M">M</div>
        <div className="letter" id="letter-I">I </div>
      </div>
      <div className="name-container1">
        <div className="letter" id="letter-J"> </div>
        <div className="letter" id="letter-J"> J</div>
        <div className="letter" id="letter-U">U</div>
        <div className="letter" id="letter-L">L</div>
        <div className="letter" id="letter-I2">I</div>
        <div className="letter" id="letter-A">A</div>
      </div>
      <header>
        <p>PORTFOLIO</p>
      </header>
      <div className="pic1">
        <img src={pic1} alt="julia's pic" />
      </div>

      <div className="rectangle" id="ellipse"></div>
      <div className="half-circle1" id="ellipse"></div>
      <div className="half-circle2" id="ellipse"></div>

      <div className="ellipse1" id="ellipse"></div>
      <div className="ellipse2" id="ellipse"></div>

      <div className="app">
        <main>
          <section className="aside">
            <h2>Work With Me <br />Today.</h2>
            <p>Crafting Digital Experiences, One Line <br /> of Code at a Time.</p>
          </section>
          <div className="card">
            <section className="front-content">
              <h2>FRONT <br />END <br /> DEVELOPER </h2>
              <hr />
              <h2>TECHNICAL <br /> WRITER</h2>
            </section>
          </div>
          <div>
            <section className="aside1">
              <h1>BU<br />IL <br /> D.</h1>
            </section>
            <div className="ellipse3" id="ellipse"></div>
            <div className="ellipse4" id="ellipse"></div>
          </div>


          <section className="services">
            <h1>My Services.</h1>
            <div className="grid-container">
              <div className="grid-item">
                < FaReact size="3.0em" style={{ marginRight: '10px' }} />
                <h2>  Responsive Web Design</h2>
                <p>
                  I have the capability to transform <br />your excellent ideas into digital products, <br />bringing them to life.
                </p>
              </div>
              <div className="grid-item">
                <FaSearch size="3.0em" style={{ marginRight: '10px' }} />
                <h2>Tech Solution</h2>
                <p>
                  Prioritize safety over regret. <br />Conducting tests allows me to establish<br /> a secure environment for your business.
                </p>
              </div>
              <div className="grid-item">
                <FaHome size="3.0em" style={{ marginRight: '10px' }} />
                <h2>Websites and Webapps</h2>
                <p>
                  In the absence of an online presence,<br /> your business risks falling behind <br />and becoming obsolete.
                </p>
              </div>
              <div className="grid-item">
                <FaHeart size="3.0em" style={{ marginRight: '10px' }} />
                <h2>SEO</h2>
                <p>
                  Elevate your online visibility with my SEO expertise. <br />Climb the search rankings and stand<br /> out from the competition.
                </p>
              </div>
              <div className="grid-item">
                <FaTags size="3.0em" style={{ marginRight: '10px' }} />
                <h2>Writing and Research</h2>
                <p>
                  Harness the strength of insightful research and polished writing.<br /> Let me transform your ideas into compelling<br /> and well-documented narratives.
                </p>
              </div>
              <div className="grid-item">
                <FaVolumeUp size="3.0em" style={{ marginRight: '10px' }} />
                <h2>Digital Marketing</h2>
                <p>
                  Unlock the full spectrum of opportunities <br />with my tailored digital marketing solutions.<br />Fueling your brand's success.
                </p>
              </div>
            </div>
            <div className="ellipse5" id="ellipse"></div>
            <div className="ellipse6" id="ellipse"></div>
          </section>

          <section className="article">
            <h2> Pick a combination that <br />suits your preferences.</h2>
            <div className="card1">
              <h2>Digital presence</h2>
              <h3>or an upgrade</h3>
              <ul>
                <li>Website or e-shop</li>
                <li>Basic security</li>
                <li>Hosting</li>
              </ul>
            </div>
            <div className="card2">
              <h2>Business upgrade</h2>
              <h3>of existing tools</h3>
              <ul>
                <li> E-commerce store or product upgrade</li>
                <li>Security solutions</li>
              </ul>
            </div>
            <div className="card3">
              <h2>Platform or e-commerce</h2>
              <h3>from scratch</h3>
              <ul>
                <li>System architecture</li>
                <li>Development</li>
                <li>Security solutions</li>
              </ul>
            </div>
            <div className="card4">
              <h2>The kickstart</h2>
              <h3>of an e-shop or platform</h3>
              <ul>
                <li> Architecture and development</li>
                <li>Digital marketing</li>
                <li> Security solutions</li>
              </ul>
            </div>
          </section>

          <section className='projects'>
            <div className="ellipse7" id="ellipse"></div>
            <div className="ellipse8" id="ellipse"></div>
            <h2>My Projects</h2>
            <div className='my-work'>
      <ul>
        {projects.map((project, index) => generateProjectListItem(project, index))}
      </ul>
              <div className="ellipse9" id="ellipse"></div>
              <div className="ellipse10" id="ellipse"></div>
              <div className="half-circle3" id="ellipse"></div>
              <div className="ellipse11" id="ellipse"></div>

            </div>

          </section>

          <section className="arts">
            <h2>GET <br /> IN <br /> TOUCH.</h2>
            <div className="ellipse12" id="ellipse"></div>
            <div className="ellipse13" id="ellipse"></div>
          </section>
        </main>


        <footer>
        <div className="ellipse14" id="ellipse"></div>
            <div className="ellipse15" id="ellipse"></div>
          <h2>Don't Build Mere Links.<br /> Build <br /> With JULIA.</h2>

          <div className='item1'>
            <h3>Address</h3>
            <p>
            Olalekan Adigun Estate,<br /> Bodija, Ibadan.
            </p>
          </div>

          <div className='item2'>
            <h3>E-mail</h3>
            <p>idowujulia56@gmail.com</p>
          </div>

          <div className='item3'>
            <FaPhone />
            <p>09034957604</p>
          </div>
          <div className='item4'>
        <a href="https://github.com/julia14op" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

          <div className='item5'>
        <a href="https://www.linkedin.com/in/opeyemi-julia-idowu-a48027238" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className='item6'>
        <a href="https://medium.com/@opeyemiidowu" target="_blank" rel="noopener noreferrer">
          <FaMedium />
        </a>
      </div> 

      <div className='item7'>
        <a href="https://dev.to/synthscript" target="_blank" rel="noopener noreferrer">
          <FaDev />
        </a>
      </div>
      <div className='item8'>
      <p>&copy;SynthScript 2024 </p>
      </div>
      
        </footer>
      </div>
    </div>
  );
};

export default App;