import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from './logo.svg';
import './SideBar.css';

const menuList = [
  {
    header: "What we do",
    marginBottom: 32,
    textList: [
      { high: "Strategy + R&D", low: "We are essential for forward-thinking enterprises, where strategies shape goals, and R&D drives innovation by exploring new technologies and methodologies.", video: "first.mp4" },
      { high: "Creative Direction", low: "We guide the visual and conceptual aspects of projects, ensuring cohesive messaging and emotional resonance.", video: "second.mp4" },
      { high: "Animation + VFX", low: "We manage all aspects of project realization, from planning and logistics to execution and post-production.", video: "third.mp4" },
      { high: "Full-Service Production", low: "We balance aesthetics and functionality, while design systems maintain consistency and scalability across platforms.", video: "fourth.mp4" },
      { high: "AR + XR Experiences", low: "We merge physical and digital realms to offer immersive and interactive experiences, reshaping how audiences engage with content and surroundings.", video: "five.mp4" },
    ],
  },
  {
    header: "Projects",
    marginBottom: 48,
    textList: [{ high: "We guide the visual and conceptual aspects of projects, ensuring cohesive messaging and emotional resonance.", low: "", video: "third.mp4" }],
  },
  {
    header: "Our team",
    marginBottom: 48,
    textList: [
      { high: "Grishka Baspaly", low: "CEO", link: "/grisha" },
      { high: "Karyuka Artemida", low: "CPIDO", link: "/karen" },
      { high: "Arman Krasny", low: "Мамасита", link: "/platon" },
    ],
  },
  {
    header: "Get in touch",
    marginBottom: 58,
    textList: [{ high: "Fifth", low: "fifthLow", video: "five.mp4" }],
  },
];

function SideBar({ setActiveIndex, setVideoSource }) {
  const navigate = useNavigate();

  const [activeIndexInternal, setActiveIndexInternal] = useState(0); // Active header index
  const [activeTextIndex, setActiveTextIndex] = useState(0); // Active text index

  const handleHeaderClick = (index) => {
    if (activeIndexInternal !== index) {
      setActiveIndex(index); 
      setActiveIndexInternal(index);
  
      // Открыть первый пункт "What we do" по умолчанию
      if (index === 0 && activeTextIndex === null) {
        setActiveTextIndex(0);
      } else {
        setActiveTextIndex(null);
      }
    }
  };
  

  const handleTextClick = (textIndex, video, link) => {
    if (link) {
      navigate(link);
    } else {
      setActiveTextIndex(textIndex === activeTextIndex ? null : textIndex);
      setVideoSource(video);
    }
  };

  useEffect(() => {
    setVideoSource(menuList[0].textList[0].video); // Set default video
  }, [setVideoSource]);

  return (
    <div>
      <div className="sideBarHead">
        <img className="logo" src={logo} alt="Logo" />
        <div className="sideBarHeadText">Menu</div>
      </div>
      <div className="SideBar">
        {menuList.map((data, index) => (
          <div
            className={`sideBarBlock ${
              data.header === "Get in touch" ? "getInTouchBlock" : ""
            }`}
            key={index}
          >
            <div
              className={`sideBarBlockHeadText ${
                activeIndexInternal === index ? "active" : ""
              } ${data.header === "Get in touch" ? "getInTouchHeadText" : ""}`}
              onClick={() => handleHeaderClick(index)}
              style={{
                marginBottom:
                  activeIndexInternal === index ? `${data.marginBottom}vh` : "0vh",
                transition: "margin-bottom 0.3s ease",
              }}
            >
              {data.header}
            </div>
            {activeIndexInternal === index && (
              <div>
                {data.textList.map((text, textIndex) => (
                  <div key={textIndex}>
                    <div
                      className={`sideBarBlockText ${
                        activeTextIndex === textIndex ? "active" : ""
                      }`}
                      onClick={() =>
                        handleTextClick(textIndex, text.video, text.link)
                      }
                    >
                      {text.high}
                    </div>
                    {activeTextIndex === textIndex && (
                      <div className="sideBarBlockLowText">{text.low}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default SideBar;
