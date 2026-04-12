import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import './AporteEconomico.css';

const AporteEconomicoWeb = () => {
    return (
        <WebLayout>
            <div className="aporte-economico-page">
                <header className="aporte-header">
                    <h1>Aporte Económico</h1>
                    <p>
                        Tu ayuda recurrente nos permite planificar rescates y asegurar la alimentación de nuestros protegidos.
                    </p>
                </header>

                <div className="page-container">
                    <div className="aporte-methods-grid">
                        
                        {/* Zelle */}
                        <div className="aporte-card zelle">
                            <div className="aporte-card-icon">💵</div>
                            <h2>Zelle</h2>
                            <div className="method-details">
                                <p><strong>Nombre:</strong> Ana Márques</p>
                                <p className="highlight-text">akarina_95@hotmail.com</p>
                            </div>
                        </div>

                        {/* Pago Móvil */}
                        <div className="aporte-card pago-movil">
                            <div className="aporte-card-icon">📲</div>
                            <h2>Pago Móvil</h2>
                            <div className="method-details">
                                <p><strong>Banco:</strong> Exterior (0115)</p>
                                <p><strong>C.I.:</strong> 26.425.236</p>
                                <p className="highlight-text">0424-3096420</p>
                            </div>
                        </div>

                        {/* PayPal */}
                        <div className="aporte-card paypal">
                            <div className="aporte-card-icon">💳</div>
                            <h2>PayPal</h2>
                            <div className="method-details">
                                <p className="highlight-text">proyectodumbovenezuela@gmail.com</p>
                                <p className="note">Colocar "Regalo" por favor</p>
                            </div>
                        </div>

                        {/* Binance */}
                        <div className="aporte-card binance">
                            <div className="aporte-card-icon">₿</div>
                            <h2>Binance</h2>
                            <div className="method-details">
                                <p className="highlight-text">joseancardier@gmail.com</p>
                            </div>
                        </div>

                    </div>
                    
                    <div className="aporte-footer">
                        <p>📢 <strong>Envía siempre la captura de tu aporte por DM.</strong> Control administrativo a cargo de @michellefloresm</p>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default AporteEconomicoWeb;
