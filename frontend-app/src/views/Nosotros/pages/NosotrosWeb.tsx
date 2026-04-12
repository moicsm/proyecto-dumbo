import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonIcon } from '@ionic/react';
import { paw } from 'ionicons/icons';
import './Nosotros.css';

const NosotrosWeb = () => {
    return (
        <WebLayout>
            <div className="nosotros-page">
                {/* Header de la página */}
                <header className="nosotros-header">
                    <h1>Sobre <span>Proyecto Dumbo</span></h1>
                    <p>
                        Somos una organización sin fines de lucro dedicada a cambiar el destino de animales abandonados.
                    </p>
                </header>

                <div className="page-container">
                    {/* Misión y Visión */}
                    <section className="mv-section">
                        <div className="mv-card">
                            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎯</div>
                            <h2>Nuestra Misión</h2>
                            <p>
                                Rescatar, rehabilitar y ubicar en hogares responsables a animales en situación de abandono, trabajando bajo la premisa de que cada vida salvada contribuye a la meta colectiva de erradicar el maltrato. A través de la educación constante y la concientización social, transformamos la realidad de las calles, brindando una segunda oportunidad a quienes no tienen voz.
                            </p>
                        </div>

                        <div className="mv-card">
                            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>👁️</div>
                            <h2>Nuestra Visión</h2>
                            <p>
                                Ser una fundación referente en bienestar animal para Venezuela, reconocida por reducir significativamente la sobrepoblación de animales en las calles y por formar una sociedad más empática y educada. Aspiramos a un futuro donde el abandono sea la excepción y donde cada ciudadano sea un guardián activo de la vida animal.
                            </p>
                        </div>
                    </section>

                    {/* El Legado de Dumbo */}
                    <section className="legado-section">
                        <h2 className="legado-title">El Legado de Dumbo</h2>
                        <div className="legado-content">
                            <p style={{ marginBottom: '1.5rem' }}>
                                La Fundación Proyecto Dumbo se formalizó en julio de 2021 en el estado Aragua, consolidando una labor de rescate que su fundadora, Michelle Flores, inició desde la infancia junto a su madre. El motor definitivo para la creación de esta fundación fue el rescate de Dumbo, un canino atropellado cuya costosa cirugía fue posible gracias a la solidaridad de las personas a través de redes sociales.
                            </p>
                            <p>
                                A raíz de este caso, el proyecto cobró una relevancia masiva, logrando destacar en las fases clasificatorias de un concurso de emprendimiento de Ron Santa Teresa. Aunque el premio no se concretó, la experiencia sirvió para que Michelle Flores, con el apoyo de una comunidad digital apasionada, decidiera fundar formalmente la institución. Hoy en día, la fundación utiliza estrategias de marketing, voluntariado y alianzas con artistas y empresas para profesionalizar la labor de bienestar animal.
                            </p>
                        </div>
                    </section>

                    {/* Infraestructura y Logística */}
                    <section className="sedes-section">
                        <h2 className="legado-title">Infraestructura y Logística de Rescate</h2>
                        <div className="sedes-grid">
                            <div className="sede-card">
                                <h3>Sede 1 (Refugio Fundacional)</h3>
                                <p>
                                    Con cuatro años de trayectoria, esta sede ha brindado refugio y atención a más de 400 animales. Gracias a convenios con clínicas veterinarias privadas y el apoyo constante de sus seguidores, se han concretado más de 300 adopciones responsables, respaldadas por documentos legales y controles de seguimiento.
                                </p>
                            </div>

                            <div className="sede-card">
                                <h3>Sede 2 (Control de Natalidad)</h3>
                                <p>
                                    Especializada en la atención de hembras, esta sede se enfoca en romper el ciclo de reproducción en las calles. Cuenta con caniles propios para el cuidado postoperatorio de las perras esterilizadas, habiendo superado ya las 50 intervenciones en 2025.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Visión y Metas 2026 */}
                    <section className="metas-section">
                        <div className="metas-container">
                            <h2 className="legado-title">Visión y Metas 2026</h2>
                            <div className="legado-content">
                                <p style={{ marginBottom: '1.5rem' }}>
                                    La finalidad de la institución es alcanzar un país donde el rescate ya no sea necesario, gracias a una ciudadanía educada y un monitoreo constante de la fauna doméstica. Para este año, la fundación se ha propuesto la adquisición de una unidad móvil de rescates (ambulancia).
                                </p>
                                <p>
                                    Asimismo, se encuentra en marcha la construcción de un quirófano y consultorio propio en la Sede 2. Este espacio estará destinado a atender perros en situación de calle y a brindar apoyo médico a familias de bajos recursos que, a pesar de sus limitaciones económicas, mantienen a sus animales con amor y cuidados dentro de sus posibilidades.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Valores */}
                    <section className="valores-section">
                        <h2 className="legado-title">Nuestros Valores</h2>
                        <div className="valores-grid">
                            {['Transparencia', 'Compasión', 'Compromiso', 'Educación'].map((valor, index) => (
                                <div key={index} className="valor-item">
                                    <div className="valor-icon">
                                        <IonIcon icon={paw} />
                                    </div>
                                    <h3>{valor}</h3>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </WebLayout>
    );
};

export default NosotrosWeb;
