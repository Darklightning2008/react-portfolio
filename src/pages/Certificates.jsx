import certificates from "../data/certificates"
import "./Certificates.css"

function Certificates() {
  return (
    <section className="certificates">
      <h1>Certificates</h1>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.id}>
            <h2>{certificate.title}</h2>
            <p>{certificate.issuer}</p>
            <span>{certificate.date}</span>

            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </article>
        ))}
      </div>

      <section className="skills-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <span>Python</span>
          <span>C/C++</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>MongoDB</span>
          <span>SQL</span>
          <span>Python-MongoDB Integration</span>
          <span>REST APIs</span>
          <span>React.js</span>
        </div>
      </section>
    </section>
  )
}

export default Certificates