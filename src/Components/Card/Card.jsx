import Discription from "./Components/Discription";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import "./style.css";

export default function Card() {
  return (
    <div className="card-outer">
      <div className="card">
        <div className="Card-header">
        <img src={require("./images/photo.png")} alt="card-photo" className="card-img"/>
        </div>
        <Info />
        <Discription title="About">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </Discription>
        <Discription title="Interests">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </Discription>
        <Footer />
      </div>
    </div>
  );
}
