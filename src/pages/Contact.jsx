import { useState } from "react"
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })


  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }


  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>
        If you would like to work with me or ask a question, send me a message.
      </p>

      <form action ="https://formspree.io/f/mzerkanl" method ="POST" className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      
    </section>
  )
}

export default Contact