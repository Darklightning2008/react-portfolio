import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import './Projects.css'
function Projects() {
    return (
        <section className="projects">
            <h1>Projects</h1>
            <p className="projects-intro">
    Here are some of the projects I have built while learning software
    development, machine learning, and web technologies.
  </p>

            <div className="projects-grid">
                {projects.map((p)=>(
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
            
            
            </section>)
}
export default Projects