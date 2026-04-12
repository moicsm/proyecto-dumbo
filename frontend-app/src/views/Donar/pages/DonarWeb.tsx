import React from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import './Donar.css';

const DonarWeb = () => {
    return (
        <WebLayout>
            <div className="donar-page">
                <header className="donar-header">
                    <h1>Tu ayuda transforma vidas</h1>
                    <p>
                        Cada donación, por pequeña que sea, nos permite seguir rescatando y rehabilitando a quienes no tienen voz.
                    </p>
                </header>

                <div className="page-container">
                    <div className="donar-methods-grid">
                        
                        {/* Zelle */}
                        <div className="donar-card zelle">
                            <div className="donar-card-icon">💵</div>
                            <h2>Zelle</h2>
                            <div className="method-details">
                                <p><strong>Nombre:</strong> Ana Márques</p>
                                <p className="highlight-text">akarina_95@hotmail.com</p>
                            </div>
                        </div>

                        {/* Pago Móvil */}
                        <div className="donar-card pago-movil">
                            <div className="donar-card-icon">📲</div>
                            <h2>Pago Móvil</h2>
                            <div className="method-details">
                                <p><strong>Banco:</strong> Exterior (0115)</p>
                                <p><strong>C.I.:</strong> 26.425.236</p>
                                <p className="highlight-text">0424-3096420</p>
                            </div>
                        </div>

                        {/* PayPal */}
                        <div className="donar-card paypal">
                            <div className="donar-card-icon">💳</div>
                            <h2>PayPal</h2>
                            <div className="method-details">
                                <p className="highlight-text">proyectodumbovenezuela@gmail.com</p>
                                <p className="note">Colocar "Regalo" por favor</p>
                            </div>
                        </div>

                        {/* Binance */}
                        <div className="donar-card binance">
                            <div className="donar-card-icon">₿</div>
                            <h2>Binance</h2>
                            <div className="method-details">
                                <p className="highlight-text">joseancardier@gmail.com</p>
                            </div>
                        </div>

                        {/* Bizum */}
                        <div className="donar-card bizum">
                            <div className="donar-card-icon">🇪🇸</div>
                            <h2>Bizum (España)</h2>
                            <div className="method-details">
                                <p className="highlight-text">662 27 72 68</p>
                            </div>
                        </div>

                        {/* Panama */}
                        <div className="donar-card panama">
                            <div className="donar-card-icon">🇵🇦</div>
                            <h2>Panamá</h2>
                            <div className="method-details">
                                <p><strong>Banco:</strong> Banco General</p>
                                <p><strong>Nombre:</strong> Alvaro Calza</p>
                                <p className="highlight-text">04 25 99 339566 6</p>
                            </div>
                        </div>

                    </div>
                    
                    <div className="donation-footer">
                        <p>📢 <strong>Importante:</strong> Envía siempre la captura de tu donación por DM a nuestro Instagram <strong>@michellefloresm</strong> para llevar el control.</p>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default DonarWeb;
