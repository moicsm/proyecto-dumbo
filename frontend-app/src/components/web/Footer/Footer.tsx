import React from 'react';
import { IonFooter, IonIcon } from '@ionic/react';
import { logoInstagram, logoTwitter, logoTiktok, mailOutline, locationOutline, heartOutline } from 'ionicons/icons';
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
                                No es uno más, son muchos menos. Dedicados al rescate, rehabilitación y adopción responsable en el estado Aragua, Venezuela.
                            </p>
                            <div className="footer-social">
                                <a href="https://instagram.com/michellefloresm" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <IonIcon icon={logoInstagram} />
                                </a>
                                <a href="https://tiktok.com/@proyectodumbo" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <IonIcon icon={logoTiktok} />
                                </a>
                                <a href="https://x.com/proyectodumbo" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
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
                                <span>Aragua, Venezuela</span>
                            </li>
                            <li>
                                <IonIcon icon={mailOutline} />
                                <a href="mailto:proyectodumbovenezuela@gmail.com">proyectodumbovenezuela@gmail.com</a>
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
