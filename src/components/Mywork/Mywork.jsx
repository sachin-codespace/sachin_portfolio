import React from "react";
import './Mywork.css';
import one from "../../assets/one.jpeg";
import two from '../../assets/two.jpeg'
import three from '../../assets/three.jpeg'
import four from '../../assets/four.jpeg'
import five from '../../assets/five.jpeg'
import six from '../../assets/six.jpg'
// import seven from '../../assets/seven.jpeg'
const Mywork = () => {
    return (
        <div id="work" className="mywork">
            <h1 className="mywork-heading">My Latest Work</h1>
            <div className="works">

                <a target="_blank" href="https://sachin-codespace.github.io/netflix_home/"> <img className="work" src={one} />
                </a>           
                  <a target="_blank" href="https://sachin-codespace.github.io/bubble_game/">  <img className="work" src={two} />
                </a>      
                
                   
                  <a target="_blank" href="https://sachin-codespace.github.io/todo_app/">   <img className="work" src={three} /></a>
                <a target="_blank" href="https://sachin-codespace.github.io/spotify/">   <img className="work" src={four} />
                </a>           
                  <a target="_blank" href="https://sachin-codespace.github.io/weather_app/">   <img className="work" src={five} />
                </a>           
                  <a target="_blank" href="https://sachin-codespace.github.io/calculator/">   <img className="work" src={six} />
                </a>             
            </div>
        </div>
    )
}
export default Mywork