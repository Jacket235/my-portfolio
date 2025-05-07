import "./aboutme.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImgMe from '../../assets/me.jpg';
import ImgHTML from '../../assets/html.png';
import ImgCSS from '../../assets/css.png';
import ImgJS from '../../assets/javascript.png'
import ImgReact from '../../assets/react.png'
import ImgJava from '../../assets/java.png'
import ImgLua from '../../assets/lua.png'
import ImgSQL from '../../assets/sql.png'
import ImgBootstrap from '../../assets/bootstrap.png'

export default function Aboutme() {
    return (
        <div className="aboutme">
            <div className="header">
                <a href="https://github.com/jacket235" title="GitHub" target="_blank">
                    <GitHubIcon className="infoIcon" />
                </a>
                <a href="" title="CV" download>
                    <ContactPageIcon className="infoIcon" />
                </a>
                <a href="https://instagram.com/masti_235" title="Instagram" target="_blank">
                    <InstagramIcon className="infoIcon" />
                </a>
            </div>
            <div className="body">
                <div className="introduction">
                    <div className="welcomeMessage">
                        Hello,
                    </div>
                    <div className="description">
                        My name is <b> Sebastian Mastalerz </b> and I am a fresh high school graduate with a passion for web developement. Through school, and my own dedication I have learned such things as:
                    </div>
                    <div className="mySkills">
                        <div className="skill">
                            <img src={ImgHTML} />
                            HTML
                        </div>
                        <div className="skill">
                            <img src={ImgCSS} />
                            CSS
                        </div>
                        <div className="skill">
                            <img src={ImgJS} />
                            JavaScript
                        </div>
                        <div className="skill">
                            <img src={ImgReact} />
                            React.js
                        </div>
                        <div className="skill">
                            <img src={ImgBootstrap} />
                            Bootstrap
                        </div>
                        <div className="skill">
                            <img src={ImgJava} />
                            Java
                        </div>
                        <div className="skill">
                            <img src={ImgLua} />
                            Lua
                        </div>
                        <div className="skill">
                            <img src={ImgSQL} />
                            SQL
                        </div>
                    </div>
                </div>
                <div className="imgMe">
                    <img src={ImgMe}></img>
                </div>
            </div>
        </div>
    )
}