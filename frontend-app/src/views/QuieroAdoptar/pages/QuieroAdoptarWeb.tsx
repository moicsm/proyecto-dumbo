import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton, IonIcon } from '@ionic/react';
import { heart, time, happy, hourglass, checkmarkCircle } from 'ionicons/icons';

const QuieroAdoptarWeb = () => {
    return (
        <WebLayout>
            <div className="page-header">
                <h1 className="page-title">Quiero Adoptar</h1>
                <p className="page-subtitle">
                    Adoptá con conciencia y corazón.
                </p>
            </div>

            <div className="page-container">
                {/* Intro Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Antes de adoptar</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                        Al pensar en adoptar, es crucial tener en cuenta diversos factores para garantizar una convivencia armoniosa. Evalúa el espacio disponible en tu hogar, el tiempo que puedes dedicar al juego y paseo, así como los costos asociados con la alimentación, atención veterinaria y cuidado durante las vacaciones. Asegúrate de que tu elección de mascota se ajuste a tu estilo de vida y a la cantidad de tiempo que puedes comprometer.
                    </p>
                    <div style={{ background: '#fff3e0', padding: '1.5rem', borderRadius: '12px', border: '1px solid #ffcc80' }}>
                        <p style={{ fontWeight: 'bold', color: '#e65100', margin: 0 }}>
                            Es importante recordar que un animal de compañía puede tener una vida promedio de entre 14 y 18 años, y durante todo ese tiempo dependerá de vos. Adoptar implica asumir la responsabilidad de su bienestar y felicidad a lo largo de su vida.
                        </p>
                    </div>
                </div>

                {/* Age Groups Grid */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Etapas de Vida</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <AgeCard
                            title="Cachorro"
                            subtitle="Menos de 1 año"
                            icon={happy}
                            color="#4caf50"
                            desc="Es adorable y es gratificante ver su crecimiento hasta la edad adulta pero demanda tiempo y esfuerzo. Requiere alimentación frecuente, hace sus necesidades muchas veces por día, rompe objetos y acostumbra a llorar en las noches si se queda solo. La paciencia y la educación son esenciales durante su primer año y no se puede garantizar su tamaño final."
                        />
                        <AgeCard
                            title="Joven"
                            subtitle="1-5 años"
                            icon={time}
                            color="#2196f3"
                            desc="Es juguetón pero más adulto. Son más hábiles para aprender y adaptarse. Come dos veces al día. Ya tiene el tamaño definitivo, no cambiará de aspecto, ya tiene rasgos de personalidad desarrollados y estará esterilizado."
                        />
                        <AgeCard
                            title="Adulto"
                            subtitle="5-9 años"
                            icon={heart}
                            color="#9c27b0"
                            desc="No genera problemas por quedarse solo durante períodos razonables de tiempo y son grandes compañeros. Se adaptan fácilmente a un nuevo entorno familiar."
                        />
                        <AgeCard
                            title="Abuelo"
                            subtitle="+ de 10 años"
                            icon={hourglass}
                            color="#ff9800"
                            desc="Nos brinda la ventaja de disponer de mucho tiempo para nosotros. Suelen ser tranquilos y sedentarios. Aunque el período de compañía compartida posiblemente sea más breve, puedes ofrecerles durante los años que les quedan una vida digna y agradable. Estos abuelos, que esperaron durante mucho tiempo un hogar, muestran una gratitud sincera y son pura entrega."
                        />
                    </div>
                </div>

                {/* Requirements & CTA */}
                <div style={{ background: '#f8f9fa', padding: '4rem 2rem', borderRadius: '1rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem', color: '#333' }}>Requisitos de adopción</h2>
                    <ul style={{
                        textAlign: 'left', maxWidth: '800px', margin: '0 auto 3rem', padding: 0, listStyle: 'none'
                    }}>
                        {[
                            'Los animales serán entregados tras una entrevista telefónica con nuestro equipo de adopción.',
                            'Los adoptantes deberán suscribir un contrato de adopción, comprometiéndose a garantizar una tenencia responsable a lo largo de la vida del animal.',
                            'Los animales mayores de 6 meses se entregarán castrados. En el caso de adoptar un cachorro más joven, el adoptante se compromete a castrarlo entre los 6 meses y el primer año de edad, de manera obligatoria.',
                            'Las adopciones están restringidas a la zona de Capital Federal y Gran Buenos Aires, Argentina, sujeto a consideración.',
                            'Nos reservamos el derecho de aprobar o rechazar una postulación según los criterios y valores de nuestra organización.',
                            'Los datos proporcionados por el postulante son confidenciales y se utilizan exclusivamente para el proceso de adopción, sin transferirse a terceros en ningún caso.'
                        ].map((req, i) => (
                            <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', color: '#555', fontSize: '1.05rem' }}>
                                <IonIcon icon={checkmarkCircle} style={{ color: '#4caf50', marginRight: '10px', marginTop: '3px', minWidth: '20px' }} />
                                {req}
                            </li>
                        ))}
                    </ul>

                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#333' }}>
                            Si ya lo decidiste, y te sentís capacitado, es momento de comenzar con la postulación para elegir a tu nuevo compañero de vida.
                        </p>
                        <IonButton routerLink="/conocelos" size="large" shape="round" style={{ '--padding-start': '3rem', '--padding-end': '3rem' }}>
                            Postulate aquí
                        </IonButton>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

// Helper Component
const AgeCard = ({ title, subtitle, icon, color, desc }: { title: string, subtitle: string, icon: any, color: string, desc: string }) => (
    <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderTop: `5px solid ${color}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#333' }}>{title}</h3>
                <span style={{ fontSize: '0.9rem', color: color, fontWeight: 'bold', textTransform: 'uppercase' }}>{subtitle}</span>
            </div>
            <div style={{ background: `${color}15`, padding: '10px', borderRadius: '50%' }}>
                <IonIcon icon={icon} style={{ fontSize: '24px', color: color }} />
            </div>
        </div>
        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{desc}</p>
    </div>
);

export default QuieroAdoptarWeb;
