import { ContactContainer } from "./style";

export function Contact(){
  return (
    <ContactContainer>
      <div className="socials">
        <h2>Reach Out Via Socials</h2>
        <h3>
         <ol>
          <li><span>.socials</span>{' {'}</li>
          
          <li>Email: <a href="mailto: lucas_hcosta@live.com" target="_blank">lucas_hcosta@live.com</a>;</li>
          <li>github: <a href="https://github.com/Lunatic02" target="_blank">Lunatic02</a>;</li>
          <li>linkedin: <a href="https://www.linkedin.com/in/lucas-torresin-0052b9207/" target="_blank">Lucas Torresin</a>;</li>
          <li>instagram: <a href="https://www.instagram.com/lucas_torresin/" target="_blank">lucas_torresin</a>;</li>
          <li>discord: <a href="">Lunaticooo#3770</a>;</li>
          <li></li>
          <li>{'}'}</li>
         </ol>
        </h3>
      </div>
      <div className="contact">
        <h2 className="contact-title">Or Fill Out This Form</h2>
        <form action="https://formspree.io/f/mzbqlonk" method="POST" className="form">
          <div className="flex">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text"  id="name" name="name"/>
            </div>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
          <div>
          <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </ContactContainer>
  )
}