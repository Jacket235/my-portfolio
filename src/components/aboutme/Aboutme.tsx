import "./aboutme.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Aboutme() {
    return (
        <div className="aboutme">
            <div className="header">
                <a href="https://github.com/jacket235" title="GitHub" target="_blank">
                    <GitHubIcon className="infoIcon" />
                </a>
                <a href="my-portfolio/cvDev.pdf" title="CV" download>
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
                            <img src="my-portfolio/html.png" />
                            HTML
                        </div>
                        <div className="skill">
                            <img src="my-portfolio/css.png" />
                            CSS
                        </div>
                        <div className="skill">
                            <img src="my-portfolio/javascript.png" />
                            JavaScript
                        </div>
                        <div className="skill">
                            <img src="my-portfolio/react.png" />
                            React.js
                        </div>
                        <div className="skill">
                            <img src="my-portfolio/bootstrap.png" />
                            Bootstrap
                        </div>
                        <div className="skill">
                            <img src="my-portfolio/java.png" />
                            Java
                        </div>
                        <div className="skill">
                            <img src="my-portfolio/lua.png" />
                            Lua
                        </div>
                        <div className="skill">
                            <img src="my-portfolio/sql.png" />
                            SQL
                        </div>
                    </div>
                </div>
                <div className="imgMe">
                    <img src="my-portfolio/me.jpg" />
                </div>
            </div>
        </div>
    )
}