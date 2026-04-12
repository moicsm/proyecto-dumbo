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
                        No es uno más,
                        <span className="text-gradient"> son muchos menos</span>
                    </h1>
                    <p className="hero-subtitle animate-slide-left">
                        Cada vida rescatada es un paso hacia un futuro distinto. En Proyecto Dumbo, entendemos que salvar a un animal es, en realidad, trabajar por muchos menos perros en las calles. Nuestra meta es transformar el abandono en esperanza, una pata a la vez.
                    </p>

                    <div className="hero-actions">
                        <a href="/donar" className="hero-btn hero-btn-outline">
                            <IonIcon icon={heartOutline} slot="start" />
                            Dona ahora
                        </a>
                        <a href="/animales" className="hero-btn hero-btn-primary">
                            <IonIcon icon={pawOutline} slot="start" />
                            Conoce a nuestros rescatados
                        </a>
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
                                <span>Segundas Oportunidades</span>
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
