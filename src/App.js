import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect";
import ParticlesComponent from "./Particle";

function App() {
  const [activeSection, setActiveSection] = useState("about"); // State to track active section

  const handleNavClick = (section) => {
    setActiveSection(section); // Update active section when a nav link is clicked
  };

  return (
    <>
      <div className="particles">
        <ParticlesComponent className="particles" />
      </div>
      <div className="App">
        <header className="App-header">
          <h1 className="left-header">
            {activeSection === "about" ? (
              // Show Typewriter only when the About section is active
              <div className="typewriter">
                <Typewriter
                  options={{
                    loop: true,
                    typingSpeed: 50,
                    delay: 50,
                    autoStart: true, // Ensures typewriter effect starts automatically
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `HELLO, I'M <span class="highlight">BURGEON</span>,<br/> A WEB DEVELOPER 😍 `
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        `I'M PASSIONATE ABOUT CREATING,<span class="highlight"><br/> INTERACTIVE</span><br/> WEB PAGES 👌`
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        `LET'S BUILD SOMETHING AMAZING <span class="highlight"><br/>TOGETHER</span> 💪`
                      )
                      .pauseFor(500)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
            ) : (
              // Show the selected component instead of Typewriter
              <>
                {activeSection === "skills" && <Skills />}
                {activeSection === "contact" && <Contact />}
              </>
            )}
          </h1>

          <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
        </header>
      </div>
    </>
  );
}

export default App;

// Navbar component
const Navbar = ({ activeSection, onNavClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => onNavClick("about")}
        >
          About
        </li>
        <li
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => onNavClick("skills")}
        >
          Skills
        </li>
        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => onNavClick("contact")}
        >
          Contact Me
        </li>
      </ul>
    </nav>
  );
};

// Skills component
const Skills = () => {
  // Skills data with name and difficulty level
  const skills = [
    { name: "JavaScript", difficulty: "Intermediate" },
    { name: "React", difficulty: "Advanced" },
    { name: "CSS", difficulty: "Beginner" },
    { name: "Node.js", difficulty: "Intermediate" },
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>
              Difficulty:{" "}
              <span className="difficulty">
                {`${skill.difficulty} ${
                  skill.difficulty === "Intermediate" ? "👌" : ""
                }`}
                {skill.difficulty === "Advanced" ? "💪" : ""}
                {skill.difficulty === "Beginner" ? "👶" : ""}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Contact component
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, feel free to send me a message!</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};
