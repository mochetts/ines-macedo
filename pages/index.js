import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="projects" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/oficinas/pic01.jpeg')`}}>
                        <header className="major">
                            <h3>Oficinas</h3>
                            <p>Reciclaje de antiguo galpon</p>
                        </header>
                        <Link href="/oficinas"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/viviendas/pic01.jpeg')`}}>
                        <header className="major">
                            <h3>Viviendas</h3>
                            <p>Edificio de 10 apartamentos de 1 y 2 dormitorios</p>
                        </header>
                        <Link href="/viviendas"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/urbanismo/banner.jpeg')`}}>
                        <header className="major">
                            <h3>Urbanismo</h3>
                            <p>Paseo costero y mercado de pesca</p>
                        </header>
                        <Link href="/urbanismo"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/mep/pic01.jpeg')`}}>
                        <header className="major">
                            <h3>MEP</h3>
                            <p>Planta de tratamiento de aguas residuales</p>
                        </header>
                        <Link href="/mep"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Trabajemos juntos</h2>
                        </header>
                        Busco aplicar herramientas innovadoras en el diseño y presentación de cada proyecto, brindando una solución óptima para cada situación. Hablemos!
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
