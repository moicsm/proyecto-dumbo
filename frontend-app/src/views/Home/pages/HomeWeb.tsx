import React, { useState } from 'react';
import Header from '@/components/web/Header/Header';
import Footer from '@/components/web/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import AnimalCard from '@/components/shared/AnimalCard/AnimalCard';
import { mockAnimals, foundationStats } from '@/data/mockData';
import type { Animal } from '@/models/Animal';
import './HomeShared.css';

/**
 * HomeWeb - Vista web (sin Ionic)
 * Usa HTML/CSS puro para mejor SEO y performance en web
 */
export const HomeWeb = () => {
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
    <div className="home-web">
      <Header />
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Animals Section */}
      <section className="featured-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-content">
              <svg className="section-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div>
                <h2 className="section-title">
                  Conoce a Nuestros <span className="text-gradient">Rescatados</span>
                </h2>
                <p className="section-subtitle">
                  Cada uno tiene una historia única y está esperando por tu amor
                </p>
              </div>
            </div>
            <a href="/animales" className="btn-outline-primary">
              Ver todos
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Filter Chips */}
          <div className="filter-chips">
            <button
              className={`filter-chip ${selectedFilter === 'todos' ? 'chip-active' : ''}`}
              onClick={() => setSelectedFilter('todos')}
            >
              🐾 Todos
            </button>
            <button
              className={`filter-chip ${selectedFilter === 'perros' ? 'chip-active' : ''}`}
              onClick={() => setSelectedFilter('perros')}
            >
              🐕 Perros
            </button>
            <button
              className={`filter-chip ${selectedFilter === 'gatos' ? 'chip-active' : ''}`}
              onClick={() => setSelectedFilter('gatos')}
            >
              🐱 Gatos
            </button>
            <button
              className={`filter-chip ${selectedFilter === 'disponibles' ? 'chip-active' : ''}`}
              onClick={() => setSelectedFilter('disponibles')}
            >
              ✨ Disponibles
            </button>
          </div>

          {/* Animals Grid - Web (3 columns) */}
          <div className="animals-grid grid-3">
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
                <a href="/donar" className="btn-primary btn-large">
                  ❤️ Donar Ahora
                </a>
                <a href="/apadrinar" className="btn-outline-primary btn-large">
                  🐾 Apadrinar una Mascota
                </a>
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
              <a href="/como-ayudar" className="btn-light btn-large">
                Descubre cómo ayudar →
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
