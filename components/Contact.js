const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            {/* <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Enviar Mensaje" className="special" /></li>
                        <li><input type="reset" value="Limpiar" /></li>
                    </ul>
                </form>
            </section> */}
            {/* <section> */}
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:arq.inesmacedo@gmail.com">arq.inesmacedo@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-mobile"></span>
                        <h3>Teléfono</h3>
                        <a href="tel:+59898575158">(598) 98 575 158</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-linkedin"></span>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/inesmacedo/">@inesmacedo</a>
                    </div>
                </section>
            {/* </section> */}
        </div>
    </section>
)

export default Contact
