import React from "react";
import './Mywork.css';
import one from "../../assets/one.jpeg";

import two from '../../assets/two.jpeg'
import three from '../../assets/three.jpeg'
import four from '../../assets/four.jpeg'
import five from '../../assets/five.jpeg'
import six from '../../assets/six.jpeg'
// import seven from '../../assets/seven.jpeg'
const Mywork = () => {
    return (
        <div id="work" className="mywork">
            <h1 className="mywork-heading">My Latest Work</h1>
            <div className="works">

                <a href=""> <img className="work" src={one} />
                </a>           
                  <a href="">  <img className="work" src={two} />
                </a>         
                  <a href="">   <img className="work" src={three} /></a>
                <a href="">   <img className="work" src={four} />
                </a>           
                  <a href="">   <img className="work" src={five} />
                </a>           
                  <a href="">   <img className="work" src={six} />
                </a>               {/* <img className="work" src={{seven}}/> */}
            </div>
        </div>
    )
}
export default Mywork