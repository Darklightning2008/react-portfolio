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
    </section>
  )
}

export default Certificates