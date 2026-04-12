import React, { useState } from 'react';
import Header from '@/components/web/Header/Header';
import Footer from '@/components/web/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import AnimalCard from '@/components/shared/AnimalCard/AnimalCard';
import { mockAnimals } from '@/data/mockData';
import type { Animal } from '@/models/Animal';
import './HomeSections.css';

/**
 * HomeWeb - Vista web sectorizada y protegida
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
      default:
        return featuredAnimals;
    }
  };

  const handleSponsorClick = (animal: Animal) => {
    console.log('Sponsor clicked for:', animal.name);
  };

  return (
    <div className="home-web">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section - Who we are */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-details">
              <h2 className="about-title">Quiénes Somos</h2>
              <p className="about-text">
                Somos una fundación dedicada al rescate, rehabilitación y adopción responsable de animales en el estado Aragua, Venezuela. Nuestra misión es rescatar, rehabilitar y ubicar en hogares responsables a animales en situación de abandono, trabajando para erradicar el maltrato a través de la educación y la concientización social. Transformamos la realidad de las calles brindando una segunda oportunidad a quienes no tienen voz.
              </p>
              <div className="about-actions">
                <a href="/nosotros" className="about-btn" style={{ textDecoration: 'none' }}>ver más</a>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img
                src="/about-dumbo.png"
                alt="Proyecto Dumbo - Conocenos"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animals - Section Disabled by User Request */}
      {/* 
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Amigos</h2>
          </div>
          <div className="animals-grid">
            {getFilteredAnimals().map((animal) => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                onSponsor={() => handleSponsorClick(animal)}
              />
            ))}
          </div>
        </div>
      </section> 
      */}

      {/* Adopt Section */}
      <section className="adopt-section">
        <div className="container">
          <div className="adopt-content">
            <div className="adopt-image-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="adopt-image-circle">
                <img src="/adopt-hug.png" alt="Persona abrazando perro" />
              </div>
              <a href="/quiero-adoptar" className="adopt-postulate-btn">
                POSTULATE AQUÍ
              </a>
            </div>
            <div className="adopt-details">
              <h2 className="adopt-title">ADOPTA</h2>
              <p className="adopt-text">
                <strong>Lee con el corazón, pero decide con la cabeza.</strong> Adoptar es un acto de amor, pero también un compromiso de vida por los próximos 15 años. Antes de postularte, te invitamos a reflexionar honestamente sobre tu tiempo, tu estabilidad y tu paciencia para brindarles la vida que merecen.
              </p>
              <div className="adopt-actions">
                <a href="/antes-de-adoptar" className="adopt-secondary-btn">ANTES DE ADOPTAR</a>
                <a href="/requisitos" className="adopt-secondary-btn">REQUISITOS</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="donation-options-section">
        <div className="container">
          <h2 className="donation-title">Tu aporte nos ayuda a salvar vidas</h2>
          <div className="donation-options-grid">
            <div className="donation-option-card">
              <div className="donation-image-circle">
                <img src="/dog-donation-1.png" alt="Happy dog looking up" />
              </div>
              <a href="/donar" className="donation-pill-btn">
                DONAR AHORA
              </a>
            </div>
            <div className="donation-option-card">
              <div className="donation-image-circle">
                <img src="/dog-donation-2.png" alt="Happy dog winking" />
              </div>
              <a href="/donacion-insumos" className="donation-pill-btn">
                DONAR INSUMOS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="calendar-section">
        <div className="container">
          <div className="calendar-content">
            <div className="calendar-image-wrapper">
              <img
                src="/calendario-2026.png"
                alt="Calendario Solidario 2026"
                className="calendar-image"
              />
            </div>
            <div className="calendar-details">
              <h2 className="calendar-title">Calendario 2026</h2>
              <p className="calendar-text">
                Nuestro Calendario Solidario 2026 nace del trabajo colectivo y la empatía de una comunidad que decide ayudar. Cada mes es testimonio de una vida transformada gracias a tu apoyo constante.
              </p>
              <p className="calendar-text">
                Este calendario acompaña tu año y sostiene cada paso del camino hacia una vida mejor para los perros que son víctimas de maltrato y abandono en las calles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <div className="social-content">
            <h2 className="social-title">Síguenos en nuestras redes sociales</h2>

            <div className="social-icons">
              <a href="https://instagram.com/michellefloresm" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="insta_grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" fill="url(#insta_grad)" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" fill="url(#insta_grad)" />
                </svg>
                <span>Instagram</span>
              </a>

              <a href="https://tiktok.com/@proyectodumbo" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span>TikTok</span>
              </a>

              <a href="https://x.com/proyectodumbo" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeWeb;
