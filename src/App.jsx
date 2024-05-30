import React from "react";

function App() {
  return (
    <div>
      <div>
        <header className="flex justify-between p-10 bg-[#1ea2ce] text-white items-center">
          <h1 className="logo text-5xl font-bold text-[#ffd700] ">M&M</h1>

          <nav className="nav-links flex justify-around text-xl font-bold">
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

      <div className="flex gap-[10%]  p-10 items-center">
        <div className="text w-[50%]">
          <p>Hello there, I'm</p>
          <h1 className="text-4xl font-bold text-[#ffd700]">Mugisha Muhammad</h1>
          <h3 className="text-2xl">A Front-end Web Developer From <strong>KanzuCode Foundation</strong></h3>
          <p>I fancy designing and developing responsive mobile sites with my knowledge of HTML and CSS.I'm very enthusiastic and passionate about web development and the tech world in general. </p>
          <div className="flex justify-start p-2 gap-[14px] text-4xl text-[#ffd700]">
            <i class='bx bxl-instagram-alt'></i>
            <i class='bx bxl-linkedin-square' ></i>
            <i class='bx bxl-github' ></i>
            <i class='bx bxl-twitter' ></i>
          </div>
        </div>
        <div className="img w-[40%]">
          <img src="./src/images/moe.png" alt="Muhammad Mugisha" className="w-full rounded-lg" />
        </div>
      </div>

      <section className="about flex gap-[10%] p-10 items-center">
        <div className="w-[45%]">
          <img src="./src/images/developer1.avif" alt="developer" className="rounded-lg" />
        </div>
        <div className="w-[45%]">
          <p><strong className="text-xl">I'm a Front-end Developer</strong></p>
          <h2>I Could Style,Design and Develop something of your choice!</h2>
          <p>Hello there, I'm a front-end developer who is thrilling, passionate and dedicated to my work. I hold a few months of experience in developement and with consistent studies, I'm certain I'll become a Full-stack developer.I believe I already have the skills to enhance your project to success.I'm in love with development and I do enjoy each and every step of my journey in the development world.</p>
        </div>
      </section>

      <section className="projects grid grid-cols-3 gap-[10%] p-10">
        <div className="border-indigo-500/50">
          <h3 className="font-bold text-xl">A Validated Form</h3>
          <img src="./src/images/form-validation.png" alt="A Simple Webpage" className="" />
          <p>For this project, I try to come up with a simple form with an email and password, in this instance, a user enters there credentials and immediately they click the sign in button, a message is sent to verify there login!</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">A Movie Ranking Platform </h3>
          <img src="./src/images/movie-ranking-platform.png" alt="A Movie Ranking Platform" className=""/>
          <p>In this site, I try to use my knowledge of javascript, react js, tailwind css and HTML to come up with a beautifully styled movie Ranking site that is responsive to mobile devices.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">ToDo-List app</h3>
          <img src="./src/images/ToDo-List-App.png" alt="ToDo-List app" className="" />
          <p>For this project, I try to come up with a simple ToDo-List app, majorly practicing my understanding of the local storage and simple javascript </p>
        </div>
      </section>

      <footer className=" p-10 bg-[#1ea2ce] text-white text-center">
        <div className="flex justify-center p-2 gap-[14px] text-4xl ">
          <i class='bx bxl-instagram-alt'></i>
          <i class='bx bxl-linkedin-square' ></i>
          <i class='bx bxl-github' ></i>
          <i class='bx bxl-twitter' ></i>
        </div>
        <p>Built With Atmost Passion By:</p>
        <p>MUGISHA MUHAMMAD</p>
        <p>© Portfolio {new Date().getFullYear()}</p>
      </footer>
    </div>


  )
}

export default App;
