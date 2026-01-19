import React from 'react';
import { IonFooter, IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, mailOutline, callOutline, locationOutline, heartOutline } from 'ionicons/icons';
import { usePlatform } from '@/hooks/usePlatform';
import './Footer.css';

const Footer: React.FC = () => {
    const { isDesktop } = usePlatform();

    // Solo renderizar en desktop/web
    if (!isDesktop) return null;

    return (
        <IonFooter className="app-footer">
            <div className="footer-content container-wide">
                {/* Main Footer */}
                <div className="footer-main">
                    {/* Column 1: About */}
                    <div className="footer-column">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <span className="footer-logo-icon">🐘</span>
                                <span className="footer-logo-text">Proyecto Dumbo</span>
                            </div>
                            <p className="footer-description">
                                Rescatando animales con amor desde 2020. Cada vida importa, cada animal merece una segunda oportunidad.
                            </p>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <IonIcon icon={logoFacebook} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <IonIcon icon={logoInstagram} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <IonIcon icon={logoTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-column">
                        <h3 className="footer-title">Enlaces Rápidos</h3>
                        <ul className="footer-links">
                            <li><a href="/adopciones">Adopciones</a></li>
                            <li><a href="/apadrinar">Apadrinar una Mascota</a></li>
                            <li><a href="/donar">Hacer una Donación</a></li>
                            <li><a href="/voluntariado">Voluntariado</a></li>
                            <li><a href="/casos-exito">Casos de Éxito</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div className="footer-column">
                        <h3 className="footer-title">Ayuda</h3>
                        <ul className="footer-links">
                            <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                            <li><a href="/como-ayudar">Cómo Ayudar</a></li>
                            <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
                            <li><a href="/politica-privacidad">Política de Privacidad</a></li>
                            <li><a href="/terminos">Términos y Condiciones</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="footer-column">
                        <h3 className="footer-title">Contacto</h3>
                        <ul className="footer-contact">
                            <li>
                                <IonIcon icon={locationOutline} />
                                <span>San Juan, Puerto Rico</span>
                            </li>
                            <li>
                                <IonIcon icon={mailOutline} />
                                <a href="mailto:info@proyectodumbo.org">info@proyectodumbo.org</a>
                            </li>
                            <li>
                                <IonIcon icon={callOutline} />
                                <a href="tel:+17871234567">+1 (787) 123-4567</a>
                            </li>
                        </ul>
                        <div className="footer-cta">
                            <a href="/donar" className="footer-donate-btn">
                                <IonIcon icon={heartOutline} />
                                Donar Ahora
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Proyecto Dumbo. Todos los derechos reservados.
                    </p>
                    <p className="footer-love">
                        Hecho con <IonIcon icon={heartOutline} className="heart-icon" /> para los animales
                    </p>
                </div>
            </div>
        </IonFooter>
    );
};

export default Footer;
