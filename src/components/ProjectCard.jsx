import './ProjectCard.css'
function ProjectCard({project}) {
    return (
        <div className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='tech-stack'>
                {project.tech.map((t) =>(
                    <span key ={t}>{t}</span>
                ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
        </div>
    )
}
export default ProjectCard