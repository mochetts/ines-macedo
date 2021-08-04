import Head from "next/head"

import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
    <Layout>
        <Head>
            <title>Ines Macedo - MEP</title>
            <meta name="description" content="Planta de tratamiento de aguas residuales" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <Link href="/#projects"><a className="button back scrolly">Proyectos</a></Link>

                    <header className="major">
                        <h1>MEP</h1>
                    </header>

                    <span className="image main"><img src="/static/images/mep/pic01.jpeg" alt="" /></span>

                    <p><b>Planta de tratamiento de aguas residuales</b></p>

                    <p><b>Superficie:</b>  5800m2 (área de trabajo)</p>

                    <p>Recibimos planos, detalles y cateos en formato PDF y CAD.</p>
                    <p>Elaboramos un modelo de coordinación en <b>Revit</b> de ductos y caños de servicios públicos (electricidad, drenaje, agua y gas natural).</p>
                    <p>Detectamos interferencias y elaboramos un informe del modelo.</p>
                    <p><i>Coautores: Turcatti Structural Engineering & Bim Consulting Company</i></p>
                </div>
            </section>
        </div>
    </Layout>
)
