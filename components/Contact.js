import Link from 'next/link'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <div className="contact-method">
                    <span className="icon alt fa-envelope"></span>
                    <a href="mailto:arq.inesmacedo@gmail.com">arq.inesmacedo@gmail.com</a>
                </div>
            </section>
            <section>
                <div className="contact-method">
                    <span className="icon alt fa-mobile"></span>
                    <a href="tel:+59898575158">(598) 98 575 158</a>
                </div>
            </section>
            <section>
                <div className="contact-method">
                    <span className="icon alt fa-linkedin"></span>
                    <a href="https://www.linkedin.com/in/inesmacedo/">@inesmacedo</a>
                </div>
            </section>
        </div>

        <div className="inner">
            <section>
                <div className="contact-method center-large">
                    <span className="icon alt fa-download"></span>
                    <Link href="/static/files/portfolio.pdf"><a target="_blank"><span>Descargar Portfolio</span></a></Link>
                </div>
            </section>
            <section>
                <div className="contact-method">
                    <span className="icon alt fa-download"></span>
                    <Link href="/static/files/cv.pdf"><a target="_blank"><span>Descargar Currículum</span></a></Link>
                </div>
            </section>
        </div>
    </section>
)

export default Contact
