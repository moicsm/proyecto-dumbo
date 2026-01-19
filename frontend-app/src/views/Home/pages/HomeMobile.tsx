import React, { useState } from 'react';
import { IonButton, IonIcon, IonChip } from '@ionic/react';
import { heartOutline, pawOutline, sparklesOutline, arrowForward } from 'ionicons/icons';
import HeroSection from '../components/HeroSection/HeroSection';
import AnimalCard from '@/components/shared/AnimalCard/AnimalCard';
import { mockAnimals, foundationStats } from '@/data/mockData';
import type { Animal } from '@/models/Animal';
import './HomeShared.css';

/**
 * HomeMobile - Vista mobile (Ionic)
 * Usa componentes Ionic para mejor UX en mobile
 */
export const HomeMobile = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('todos');

    // Get featured animals (first 6)
    const featuredAnimals = mockAnimals.slice(0, 6);

    // Filter logic
    const getFilteredAnimals = () => {
        switch (selectedFilter) {
            case 'perros':
                return featuredAnimals.filter(a => a.species === 'perro');
            case 'gatos':
                return featuredAnimals.filter(a => a.species === 'gato');
            case 'disponibles':
                return featuredAnimals.filter(a => a.isAdoptable);
            default:
                return featuredAnimals;
        }
    };

    const handleSponsorClick = (animal: Animal) => {
        console.log('Sponsor clicked for:', animal.name);
        // TODO: Open sponsor modal
    };

    return (
        <div className="home-mobile">
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Animals Section */}
            <section className="featured-section">
                <div className="container">
                    {/* Section Header */}
                    <div className="section-header">
                        <div className="section-header-content">
                            <IonIcon icon={sparklesOutline} className="section-icon" />
                            <div>
                                <h2 className="section-title">
                                    Conoce a Nuestros <span className="text-gradient">Rescatados</span>
                                </h2>
                                <p className="section-subtitle">
                                    Cada uno tiene una historia única y está esperando por tu amor
                                </p>
                            </div>
                        </div>
                        <IonButton
                            fill="outline"
                            color="primary"
                            routerLink="/animales"
                        >
                            Ver todos
                            <IonIcon icon={arrowForward} slot="end" />
                        </IonButton>
                    </div>

                    {/* Filter Chips */}
                    <div className="filter-chips">
                        <IonChip
                            className={`filter-chip ${selectedFilter === 'todos' ? 'chip-active' : ''}`}
                            onClick={() => setSelectedFilter('todos')}
                        >
                            <IonIcon icon={pawOutline} />
                            Todos
                        </IonChip>
                        <IonChip
                            className={`filter-chip ${selectedFilter === 'perros' ? 'chip-active' : ''}`}
                            onClick={() => setSelectedFilter('perros')}
                        >
                            🐕 Perros
                        </IonChip>
                        <IonChip
                            className={`filter-chip ${selectedFilter === 'gatos' ? 'chip-active' : ''}`}
                            onClick={() => setSelectedFilter('gatos')}
                        >
                            🐱 Gatos
                        </IonChip>
                        <IonChip
                            className={`filter-chip ${selectedFilter === 'disponibles' ? 'chip-active' : ''}`}
                            onClick={() => setSelectedFilter('disponibles')}
                        >
                            ✨ Disponibles
                        </IonChip>
                    </div>

                    {/* Animals Grid - Mobile (1 column) */}
                    <div className="animals-grid grid-1">
                        {getFilteredAnimals().map((animal) => (
                            <AnimalCard
                                key={animal.id}
                                animal={animal}
                                onSponsorClick={handleSponsorClick}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="impact-section">
                <div className="container">
                    <div className="impact-content">
                        <div className="impact-text">
                            <h2 className="impact-title">
                                Tu Ayuda <span className="text-gradient">Transforma Vidas</span>
                            </h2>
                            <p className="impact-description">
                                Gracias a personas como tú, hemos podido rescatar, rehabilitar y encontrar
                                hogares amorosos para cientos de animales. Tu donación o apadrinamiento
                                hace la diferencia.
                            </p>
                            <div className="impact-actions">
                                <IonButton fill="solid" color="primary" size="large" routerLink="/donar">
                                    <IonIcon icon={heartOutline} slot="start" />
                                    Donar Ahora
                                </IonButton>
                                <IonButton fill="outline" color="primary" size="large" routerLink="/apadrinar">
                                    <IonIcon icon={pawOutline} slot="start" />
                                    Apadrinar una Mascota
                                </IonButton>
                            </div>
                        </div>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-card-icon">🏥</div>
                                <div className="stat-card-number">{foundationStats.totalRescued}</div>
                                <div className="stat-card-label">Animales Rescatados</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-card-icon">🏡</div>
                                <div className="stat-card-number">{foundationStats.totalAdopted}</div>
                                <div className="stat-card-label">Adopciones Exitosas</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-card-icon">❤️</div>
                                <div className="stat-card-number">{foundationStats.totalSponsored}</div>
                                <div className="stat-card-label">Animales Apadrinados</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-card-icon">🐾</div>
                                <div className="stat-card-number">{foundationStats.totalAdoptable}</div>
                                <div className="stat-card-label">Buscan Hogar Ahora</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">¿Listo para hacer la diferencia?</h2>
                        <p className="cta-subtitle">
                            Hay muchas formas de ayudar. Descubre cómo puedes ser parte del cambio.
                        </p>
                        <div className="cta-actions">
                            <IonButton fill="solid" color="light" size="large" routerLink="/como-ayudar">
                                Descubre cómo ayudar
                                <IonIcon icon={arrowForward} slot="end" />
                            </IonButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
