import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.scss";
import {FcIdea,FcShare,FcComments} from 'react-icons/fc'
import Headline from "../../components/Headline/headline";
const Home = () => {
  const data = [
    { id: "1", 
    title: "Think",
    icon:<FcIdea/>,
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus ipsum non diam volutpat, tempor molestie nisl posuere." },
    { id: "2", title: "Write" ,
    icon:<FcComments/>,
    text:"Morbi neque est, bibendum laoreet tempor in, accumsan eget nibh. Morbi facilisis quis urna non faucibus. Ut sagittis a leo in ullamcorper." },
    { id: "3", title: "Share",
    icon:<FcShare/>,
    text:"Quisque blandit dolor ac nulla molestie, ac condimentum orci accumsan. Sed posuere purus molestie, suscipit ante a, dignissim ipsum." },
  ];
  return (
    <div className="homepage">
      <Carousel>
        <Carousel.Item>
          <h2 className="subtitle">what we offer</h2>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h2 className="subtitle">what we offer</h2>
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h2 className="subtitle">what we offer</h2>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Headline headline="blog community application" className="title" />

      <div className="box-item">
        {data.map((item) => {
          const {id, title, icon, text} = item;
          return(
          <div className="item" key={id}>
            <h2 className="icon">{icon}</h2>
            <h2>{title}</h2>
            <div className="text">{text}</div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
