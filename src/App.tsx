// Import's
import Header from "./components/Header";
import { useState } from "react";

// Asset's
import "./App.css";
import {
  SiGentoo,
  SiArchlinux,
  SiFedora,
  SiDebian,
  SiPopos,
  SiAssemblyscript,
  SiJavascript,
  SiPython,
  SiCsharp,
  SiElixir,
  SiRust,
  SiZig,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { BsGithub, BsDiscord } from "react-icons/bs";
import utorrent from "./assets/utorrent.png";
import qbittorrent from "./assets/qbittorrent.svg";

const Application = () => {
  const [torrent, setTorrent] = useState("utorrent");

  const handleChangeTorrent = () => {
    if (torrent === "utorrent") {
      setTorrent("qbittorrent");
    } else {
      setTorrent("utorrent");
    }
  };

  return (
    <>
      <Header />
      <main
        className="home-container"
        style={
          torrent === "utorrent"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 10% 20%,rgb(9, 105, 52) 0%,rgb(10, 93, 94) 90%)",
              }
            : {
                backgroundImage:
                  "radial-gradient(circle at 10% 20%,rgba(45,116,213,1) 0%,rgba(121,137,212,1)",
              }
        }
      >
        <section className="home-leftside">
          <div className="apresentation-texts">
            <h1>Hello Guys!</h1>
            <h1>
              i'm Alvaro Richard, But call me <span>µTorrent</span>.
            </h1>
          </div>
          <div className="os-skills-container">
            <h1>Operacional Systems Used</h1>
            <div className="os">
              <SiGentoo size={50} />
              <SiArchlinux size={50} />
              <SiFedora size={50} />
              <SiDebian size={50} />
              <SiPopos size={50} />
            </div>
          </div>
          <div className="programming-language-skills-container">
            <h1>Programming Language Skills</h1>
            <div className="langs">
              <FaJava size={50} />
              <TbBrandCpp size={50} />
              <SiCsharp size={50} />
              <SiRust size={50} />
              <SiAssemblyscript size={50} />
              <SiElixir size={50} />
              <SiZig size={50} />
              <SiJavascript size={50} />
              <SiPython size={50} />
            </div>
          </div>
          <div className="about-container">
            <h1>
              About Me <FaUserAlt size={30} />
            </h1>
            <p>
              I'm currently living in São Paulo - SP I have 19 years old. <br />{" "}
              I'm Student in SENAC, Analysis and systems development.
            </p>
            <div className="socials-link">
              <a href="https://discord.com/users/848283585320452096">
                µTorrent#8485
                <BsDiscord size={30} />
              </a>
              <a href="https://github.com/alvarorichard/">
                Github <BsGithub size={30} />
              </a>
            </div>
          </div>
        </section>
        <section className="home-rightside">
          <img
            onClick={handleChangeTorrent}
            src={torrent === "utorrent" ? utorrent : qbittorrent}
            className="torrent-img"
            alt=""
          />
        </section>
      </main>
    </>
  );
};

export default Application;
