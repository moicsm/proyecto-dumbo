import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton } from '@ionic/react';
import './QuieroAdoptar.css';

const QuieroAdoptarWeb = () => {
    return (
        <WebLayout>
            <div className="adopt-page">
                <header className="adopt-header">
                    <h1 className="page-title">Quiero Adoptar</h1>
                    <p className="page-subtitle">
                        Un compromiso para toda la vida.
                    </p>
                </header>

                <div className="page-container">
                    {/* Reflexion Warning */}
                    <div className="reflexion-container">
                        <div className="reflexion-warning">
                            <h2>🛑 Antes de iniciar tu solicitud</h2>
                            <p>
                                <strong>Lee con el corazón, pero decide con la cabeza.</strong><br/>
                                Adoptar es un acto de amor, pero también un compromiso de vida por los próximos 15 años. Antes de postularte, te invitamos a reflexionar honestamente sobre tu tiempo, tu estabilidad y tu paciencia para brindarles la vida que merecen.
                            </p>
                        </div>

                        <div className="points-grid">
                            <div className="point-card">
                                <h3>1. El compromiso es financiero</h3>
                                <p>Un animal no solo necesita una cama. Requiere alimentación de calidad, vacunas anuales, desparasitaciones constantes y, lo más importante, un fondo de emergencia. Los imprevistos médicos ocurren y debes tener la solvencia para afrontarlos sin que su salud sea sacrificada.</p>
                            </div>
                            
                            <div className="point-card">
                                <h3>2. El recurso más valioso: Tu tiempo</h3>
                                <p>¿Tu ritmo de vida le permite tener paseos, juego y compañía? Los perros y gatos son seres sociales; el aislamiento y el encierro causan estragos en su salud mental. Si no tienes tiempo para ellos hoy, no es el momento de adoptar.</p>
                            </div>

                            <div className="point-card">
                                <h3>3. Educación y Paciencia</h3>
                                <p>Muchos de nuestros rescatados han pasado por traumas. Es posible que al principio rompan algo, se orinen donde no deben o sientan miedo. ¿Estás dispuesto a educar con amor o a buscar ayuda profesional si es necesario? La paciencia es la base de su rehabilitación.</p>
                            </div>

                            <div className="point-card">
                                <h3>4. Estabilidad a largo plazo</h3>
                                <p>Un cambio de casa, un nuevo trabajo o la llegada de un bebé no pueden ser excusas para el abandono. Si no visualizas a este compañero en todos tus planes futuros, por favor, espera a estar listo.</p>
                            </div>
                        </div>

                        <div className="quote-box">
                            <p>
                                "Si estás buscando un accesorio, compra un peluche. Si estás buscando un miembro para tu familia y estás dispuesto a protegerlo pase lo que pase, bienvenido a la mejor etapa de tu vida."
                            </p>
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                            <IonButton routerLink="/conocelos" size="large" shape="round" style={{ '--padding-start': '3rem', '--padding-end': '3rem' }}>
                                Postulate aquí
                            </IonButton>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default QuieroAdoptarWeb;
