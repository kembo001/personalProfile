import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../public/img'
const profileImg = 'https://pbs.twimg.com/profile_images/3186543075/43e523add068f76ef9767f00106c01d2_400x400.jpeg'
// const navBar=
// const header =
const aboutMe = 'Full stack Web Developer with a passion for problem solving and creativity. Self-driven because of the love of Web Development and what I can do with it in the future.'
const skills = 'JavaScript, React, HTML, CSS, Node, Express, MongoDB, MySQL, GitHub, Bootstrap, Handlebars.js, APIs, Responsive Web Design'
const projects = [
  {
    title : "Weather App", link :'https://kembo001.github.io/weatherApp/' , githubLink : 'https://github.com/kembo001/weatherApp.git',
    img : 'https://user-images.githubusercontent.com/47574348/142781136-81924249-c219-4c0b-96d2-f093da2c095d.png',
    description: "Creating a website that tells you the weather. This application uses the local stoarge to keep track of all of the cities that have been searched.",
    tools : "JavaScript, CSS, HTML, API's, local storage"
  },
  {
    title : "Team Profile Generator", link :'https://github.com/kembo001/teamProfileGenerator.git' , githubLink : 'https://github.com/kembo001/teamProfileGenerator',
    img : 'https://user-images.githubusercontent.com/47574348/141856898-bcccd326-ac63-4099-897b-7fe9f705aba3.png',
    description: "This application was created with the basics of OOP and jest. It shows a group of people that work together and information about each of the member.",
    tools : "OOP, JavaScript, Jest, HTML, CSS"
  },
  {
    title : "Math Quiz", link :'https://kembo001.github.io/mathQuiz/' , githubLink : 'https://github.com/kembo001/mathQuiz.git',
    img : 'https://user-images.githubusercontent.com/47574348/135178610-a43084ab-1c7b-4acb-ba36-5ef59267b8a5.png',
    description: "Random Text",
    tools : "JavaScript, CSS, HTML"
  }
]
// const contact
const Profile = () => { 
  return (
  <section>
    <h1>Brandon Kemboi</h1>
    <img src={profileImg} alt=""/>
  <article className="middleBox">
    <div className = 'aboutMe'>
      <h2>About Me: </h2>
      <h3>{aboutMe}</h3>
    </div>
    <div className="skills">
      <h2>Skills: </h2>
      <h5>{skills}</h5>
    </div>
  </article>
    {projects.map((projects)=>{
      return (
        <Project projects={projects}></Project>
      )
    })}
  </section>
  )}

const Project = (props) => {
  const {title, img, link, githubLink, description, tools} = props.projects
  return <section>
    <h2>{title} - <a href={link}>Deployed site</a> - <a href={githubLink}>Github Link</a></h2>
    <img className='resize' src={img} alt=""/>
    <h4>{description}</h4>
    <h6>tools: {tools}</h6>
  </section>
}


ReactDOM.render(<Profile />, document.getElementById('root'));