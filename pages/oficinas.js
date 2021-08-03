import Head from "next/head"

import Layout from '../components/Layout'
import EmblaCarousel from '../components/EmblaCarousel'

export default () => (
    <Layout>
        <Head>
            <title>Ines Macedo - Oficinas</title>
            <meta name="description" content="Reciclaje de antiguo galpon" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Oficinas</h1>
                    </header>
                    <EmblaCarousel slides={[
                        "/static/images/oficinas/pic01.jpeg",
                        "/static/images/oficinas/pic02.jpeg",
                        "/static/images/oficinas/pic03.jpeg",
                        "/static/images/oficinas/pic04.jpeg",
                        "/static/images/oficinas/pic05.jpeg",
                        "/static/images/oficinas/pic06.jpeg",
                        "/static/images/oficinas/pic07.jpeg",
                    ]} />
                    <p><b>Reciclaje</b> de antiguo galpón construido en 1940.</p>
                    <p><b>Demolición</b> de las construcciones precarias en su interior.</p>
                    <p><b>Conservación</b> de la envolvente del edificio y su estructura.</p>
                    <p><b>Superficie: 580m2</b></p>
                    <p>Se reubicó el acceso principal en el sector central de la fachada longitudinal. Este acceso da a un hall de doble altura, donde se encuentra la circulación vertical, espacio comunicador de todo el edificio.
                    El hall se transforma en el espacio interior más significativo, en torno al cual se ubican oficinas, sala de reuniones, comedor y servicios.
                    Recaudos gráficos en <b>Autocad, 3d Max y Vray.­­</b></p>
                    <p><i>Coautores: Arqs. Inés Macedo y Gustavo Marzoa.</i></p>
                </div>
            </section>
        </div>
    </Layout>
)
