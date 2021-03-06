import Head from "next/head"

import Layout from '../components/Layout'
import EmblaCarousel from '../components/EmblaCarousel'
import Link from 'next/link'

export default () => (
    <Layout>
        <Head>
            <title>Ines Macedo - Urbanismo</title>
            <meta name="description" content="Paseo costero y mercado de pesca" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <Link href="/#projects"><a className="button back scrolly">Proyectos</a></Link>

                    <header className="major">
                        <h1>Urbanismo</h1>
                    </header>

                    <EmblaCarousel slides={[
                        "/static/images/urbanismo/pic01.jpeg",
                        "/static/images/urbanismo/pic02.jpeg",
                        "/static/images/urbanismo/pic03.jpeg",
                        "/static/images/urbanismo/pic04.jpeg",
                        "/static/images/urbanismo/pic05.jpeg",
                    ]} />

                    <p><b>Primera mención</b> en Concurso Paseo Costero y Mercado de Pesca / 2010</p>

                    <p>El proyecto se organiza en tres sectores: paseo costero, mercado de pescadores y parador.</p>
                    <p>El mercado de venta de pesca artesanal y el parador se presentan como continuidades del paseo costero, afianzándolo y a la vez generando nuevas conexiones transversales con el paisaje. Infiltraciones en la playa de menor escala, por su acceso e implantación se proyectan en dirección a la costa re- matando con áreas libres, y hacia la ciudad por medio de cruces peatonales (paso de cebras) que los vinculan con la trama urbana.</p>
                    <p><i>Coautores: Arqs. Diego Ferrando, Fernanda Goyos, Carolina Lecuna.</i></p>
                    <p><i>Colaboradores: Bach. Cris an Ayala, Karina Lens, Catalina Radi, Claudio Spalvier, Florencia Vidal, Inés Macedo, Botánica: Ing. Agr. Clara Villalba.</i></p>
                </div>
            </section>
        </div>
    </Layout>
)
