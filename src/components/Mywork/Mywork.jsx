import React from "react";
import './Mywork.css';
import netflix from "../../assets/netflix.jpeg";
import bubble_game from '../../assets/bubble_game.jpeg'
import cash_calculator from '../../assets/cash_calculator.jpg'
import spotify from '../../assets/spotify.jpeg'
import stopwatch_timer from '../../assets/stopwatch_timer.jpeg'
import vowel_counter from '../../assets/vowel_counter.jpeg'
import age_calculator from '../../assets/age_calculator.jpeg'
import weather from '../../assets/weather.jpeg'
import calculator from '../../assets/calculator.jpg'
import todo_app from '../../assets/todo_app.jpeg'



const Mywork = () => {
  let projects = [{ title: "Netflix", imageSrc: netflix, webUrl: "https://sachin-codespace.github.io/netflix_home/" },
  { title: "Bubble Game", imageSrc: bubble_game, webUrl: "https://sachin-codespace.github.io/bubble_game/" },
  
  { title: "Spotify Clone", imageSrc: spotify, webUrl: "https://sachin-codespace.github.io/spotify/" },
  { title: "Cash Calculator", imageSrc: cash_calculator, webUrl: "https://sachin-codespace.github.io/cash_calculator/" },
  { title: "StopWatch Timer", imageSrc: stopwatch_timer, webUrl: "https://sachin-codespace.github.io/stopwatch/" },
  { title: "Vowel Counter", imageSrc: vowel_counter, webUrl: "https://sachin-codespace.github.io/vowel_counter/" },
  { title: "Age Calculator", imageSrc: age_calculator, webUrl: "https://sachin-codespace.github.io/age_calculator/" },
  { title: "Weather", imageSrc: weather, webUrl: "https://sachin-codespace.github.io/weather_app/" },{ title: "ToDo App", imageSrc: todo_app, webUrl: "https://sachin-codespace.github.io/todo_app/" },
  { title: "Calculator", imageSrc: calculator, webUrl: "https://sachin-codespace.github.io/calculator/" },
  ]

  return (
    <div id="work" className="mywork">
      <h1 className="mywork-heading">My Latest Work</h1>
      <div className="works">
        {projects.map((project) => {
          return (
            <a key={project.title} target="_blank" href={project.webUrl}> <img className="work" title={project.title} src={project.imageSrc} />
            </a>

          )
        })}

      </div>
    </div>
  )
}
export default Mywork