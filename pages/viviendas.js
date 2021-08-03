import Head from "next/head"

import Layout from '../components/Layout'
import EmblaCarousel from '../components/EmblaCarousel'

export default () => (
    <Layout>
        <Head>
            <title>Ines Macedo - Viviendas</title>
            <meta name="description" content="10 apartamentos de 1 y 2 dormitorios" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Viviendas</h1>
                    </header>

                    <EmblaCarousel slides={[
                        "/static/images/viviendas/pic01.jpeg",
                        "/static/images/viviendas/pic02.jpeg",
                        "/static/images/viviendas/pic03.jpeg",
                        "/static/images/viviendas/pic04.jpeg",
                        "/static/images/viviendas/pic05.jpeg",
                        "/static/images/viviendas/pic06.jpeg",
                    ]} />


                    <p>Edificio de 10 apartamentos de 1 y 2 dormitorios</p>
                    <p><b>Superficie:</b> 580m2</p>
                    <p>El edificio fue modelado en Revit, esto permitió anticiparse a interferencias que puedan surgir en la etapa de construcción y agilizar el desarrollo del proyecto.</p>
                    <p><i>Coautores: Pinto Turovlin Arquitectos</i></p>

                    <video autoPlay loop style={{ width: '100%', height: '500px' }}>
                        <source src="/static/videos/viviendas.mp4" />
                    </video>
                </div>
            </section>
        </div>
    </Layout>
)
