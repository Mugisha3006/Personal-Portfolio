import React from "react";

function App() {
  return (
    <div>
      <div>
        <header className="flex justify-around p-10 bg-[#1ea2ce] text-white">
          <h1 className="logo ">M&M</h1>

          <nav className="nav-links flex justify-around">
            <ul className="list flex justify-around gap-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div>
        <div className="text ">
          <p>Hello there, I'm</p>
          <h1>Mugisha Muhammad</h1>
          <h3>A Front-end Web Developer From <strong>KanzuCode Foundation</strong></h3>
          <p>I fancy designing and developing responsive mobile sites with my knowledge of HTML and CSS.I'm very enthusiastic and passionate about web development and the tech world in general. </p>
          <a href="#" className="fa fa-github"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <button>About-Me</button>
        </div>
        <div className="img">
          <img src="./src/images/moe.png" alt="" />
        </div>
      </div>

      <section className="about">
        <div>
          <img src="./src/images/developer.png" alt="" />
        </div>
        <div>
          <p><strong>I'm a Front-end Developer</strong></p>
          <h2>I Could Style,Design and Develop something of your choice!</h2>
          <p>Hello there, I'm a front-end developer who is thrilling, passionate and dedicated to my work. I hold a few months of experience in developement and with consistent studies, I'm certain I'll become a Full-stack developer.I believe I already have the skills to enhance your project to success.I'm in love with development and I do enjoy each and every step of my journey in the development world.</p>
          <button>Contact-Me</button>
        </div>
      </section>

      <section className="projects">
        <div>
          <h3>A Simple Webpage</h3>
          <img src="./src/images/simple-webpage.png" alt="A Simple Webpage" />
          <p>For this project, I try to come up with a simple webpage, majorly practicing my understanding of the flex-box layout to create a tremendous page on beauty and constuctions. </p>
        </div>
        <div>
          <h3>A Movie Ranking Platform </h3>
          <img src="./src/images/movie-ranking-platform.png" alt="A Movie Ranking Platform " />
          <p>In this site, I try to use my knowledge of HTML and CSS to come up with a beautifully styled movie Ranking site that is responsive to mobile devices.</p>
        </div>
        <div>
          <h3>ToDo-List app</h3>
          <img src="./src/images/ToDo-List-App.png" alt="ToDo-List app" />
          <p>For this project, I try to come up with a simple ToDo-List app, majorly practicing my understanding of the local storage and simple javascript </p>
        </div>
      </section>

      <footer>
        <p>Built With Atmost Passion By:</p>
        <p>MUGISHA MUHAMMAD</p>
        <span>@2024</span>
      </footer>
    </div>


  )
}

export default App;
