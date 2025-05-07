import "./projects.css"

export default function Projects() {
    return (
        <div className="projects">
            <div className="pageTitle">
                My projects
            </div>
            <div className="projectsList">
                <div className="project">
                    <div className="projectThumbnail">
                        <img src="my-portfolio/thumbnails/current-portfolio.png" />
                    </div>
                    <div className="projectSummary">
                        <div className="projectTitle">
                            My current porfolio
                        </div>
                        <div className="projectDescription">
                            This is currently where you are at! It is made of course with HTML, CSS, and React. I hope you're enjoying your time here.
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="projectThumbnail">
                        <img src="my-portfolio/thumbnails/old-portfolio.png" />
                    </div>
                    <div className="projectSummary">
                        <div className="projectTitle">
                            My old porfolio
                        </div>
                        <div className="projectDescription">
                            The reason I am even including this here is because this was made with Bootstrap. And I wanted to showcase that I do indeed know the framework.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}