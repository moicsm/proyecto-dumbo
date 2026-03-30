import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonCard, IonCardContent, IonIcon } from '@ionic/react';
import { paw } from 'ionicons/icons';

const NosotrosWeb = () => {
    return (
        <WebLayout>
            {/* Header de la página */}
            <div className="page-header">
                <h1 className="page-title">
                    Sobre <span className="text-gradient">Proyecto Dumbo</span>
                </h1>
                <p className="page-subtitle">
                    Somos una organización sin fines de lucro dedicada a cambiar el destino de animales abandonados.
                </p>
            </div>

            <div className="page-container">
                {/* Misión y Visión */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <IonCard style={{ margin: 0 }}>
                        <IonCardContent style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Nuestra Misión</h2>
                            <p>
                                Rescatar, rehabilitar y reubicar animales en situación de abandono, promoviendo la tenencia responsable y educando a la comunidad sobre el bienestar animal.
                            </p>
                        </IonCardContent>
                    </IonCard>

                    <IonCard style={{ margin: 0 }}>
                        <IonCardContent style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Nuestra Visión</h2>
                            <p>
                                Un mundo donde cada animal tenga un hogar amoroso y sea tratado con respeto, dignidad y compasión de por vida.
                            </p>
                        </IonCardContent>
                    </IonCard>
                </div>

                {/* El Legado de Dumbo */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>El Legado de Dumbo</h2>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            La Fundación Proyecto Dumbo se formalizó en julio de 2021 en el estado Aragua, consolidando una labor de rescate que su fundadora, Michelle Flores, inició desde la infancia junto a su madre. El motor definitivo para la creación de esta fundación fue el rescate de Dumbo, un canino atropellado cuya costosa cirugía fue posible gracias a la solidaridad de las personas a través de redes sociales.
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            A raíz de este caso, el proyecto cobró una relevancia masiva, logrando destacar en las fases clasificatorias de un concurso de emprendimiento de Ron Santa Teresa. Aunque el premio no se concretó, la experiencia sirvió para que Michelle Flores, con el apoyo de una comunidad digital apasionada, decidiera fundar formalmente la institución. Hoy en día, la fundación utiliza estrategias de marketing, voluntariado y alianzas con artistas y empresas para profesionalizar la labor de bienestar animal.
                        </p>
                    </div>
                </section>

                {/* Infraestructura y Logística */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Infraestructura y Logística de Rescate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <IonCard style={{ margin: 0 }}>
                            <IonCardContent style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--ion-color-primary)' }}>Sede 1 (Refugio Fundacional)</h3>
                                <p style={{ lineHeight: '1.6' }}>
                                    Con cuatro años de trayectoria, esta sede ha brindado refugio y atención a más de 400 animales. Gracias a convenios con clínicas veterinarias privadas y el apoyo constante de sus seguidores, se han concretado más de 300 adopciones responsables, respaldadas por documentos legales y controles de seguimiento.
                                </p>
                            </IonCardContent>
                        </IonCard>

                        <IonCard style={{ margin: 0 }}>
                            <IonCardContent style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--ion-color-primary)' }}>Sede 2 (Control de Natalidad)</h3>
                                <p style={{ lineHeight: '1.6' }}>
                                    Especializada en la atención de hembras, esta sede se enfoca en romper el ciclo de reproducción en las calles. Cuenta con caniles propios para el cuidado postoperatorio de las perras esterilizadas, habiendo superado ya las 50 intervenciones en 2025.
                                </p>
                            </IonCardContent>
                        </IonCard>
                    </div>
                </section>

                {/* Visión y Metas 2026 */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Visión y Metas 2026</h2>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            La finalidad de la institución es alcanzar un país donde el rescate ya no sea necesario, gracias a una ciudadanía educada y un monitoreo constante de la fauna doméstica. Para este año, la fundación se ha propuesto la adquisición de una unidad móvil de rescates (ambulancia).
                        </p>
                        <p style={{ lineHeight: '1.6' }}>
                            Asimismo, se encuentra en marcha la construcción de un quirófano y consultorio propio en la Sede 2. Este espacio estará destinado a atender perros en situación de calle y a brindar apoyo médico a familias de bajos recursos que, a pesar de sus limitaciones económicas, mantienen a sus animales con amor y cuidados dentro de sus posibilidades.
                        </p>
                    </div>
                </section>

                {/* Valores */}
                <section>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestros Valores</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {['Transparencia', 'Compasión', 'Compromiso', 'Educación'].map((valor, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px', height: '80px', background: '#f0f9ff',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', margin: '0 auto 1rem',
                                    color: '#4ecdc4', fontSize: '2rem'
                                }}>
                                    <IonIcon icon={paw} />
                                </div>
                                <h3 style={{ fontWeight: 'bold' }}>{valor}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </WebLayout>
    );
};

export default NosotrosWeb;
