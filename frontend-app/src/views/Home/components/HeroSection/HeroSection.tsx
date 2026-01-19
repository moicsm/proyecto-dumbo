import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { heartOutline, pawOutline } from 'ionicons/icons';
import { usePlatform } from '@/hooks/usePlatform';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    const { isDesktop } = usePlatform();

    return (
        <section className={`hero-section ${isDesktop ? 'hero-desktop' : 'hero-mobile'}`}>
            <div className="hero-background">
                <div className="hero-gradient-overlay"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-text">
                    <h1 className="hero-title animate-fade-in">
                        Rescatamos Vidas,
                        <span className="text-gradient"> Creamos Esperanza</span>
                    </h1>
                    <p className="hero-subtitle animate-slide-left">
                        Cada animal merece una segunda oportunidad. Ayúdanos a darles el amor y cuidado que necesitan.
                    </p>

                    <div className="hero-actions">
                        <IonButton
                            fill="solid"
                            size="large"
                            color="primary"
                            routerLink="/animales"
                        >
                            <IonIcon icon={pawOutline} slot="start" />
                            Conoce a nuestros rescatados
                        </IonButton>
                        <IonButton
                            fill="outline"
                            size="large"
                            className="hero-outline-btn"
                            routerLink="/donar"
                        >
                            <IonIcon icon={heartOutline} slot="start" />
                            Dona ahora
                        </IonButton>
                    </div>

                    {isDesktop && (
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">156</div>
                                <div className="stat-label">Animales Rescatados</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">89</div>
                                <div className="stat-label">Felices Adopciones</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">8</div>
                                <div className="stat-label">Buscan Hogar</div>
                            </div>
                        </div>
                    )}
                </div>

                {isDesktop && (
                    <div className="hero-image">
                        <div className="hero-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80"
                                alt="Perro rescatado"
                                className="hero-img-main"
                            />
                            <div className="floating-card floating-card-1">
                                <IonIcon icon={heartOutline} className="floating-icon" />
                                <span>+50 Padrinos</span>
                            </div>
                            <div className="floating-card floating-card-2">
                                <IonIcon icon={pawOutline} className="floating-icon" />
                                <span>Adopción Responsable</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Decorative elements */}
            <div className="hero-decoration hero-decoration-1"></div>
            <div className="hero-decoration hero-decoration-2"></div>
        </section>
    );
};

export default HeroSection;
