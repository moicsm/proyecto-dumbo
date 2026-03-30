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









      {/* About Section - Priority 1: Who we are */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-details">
              <h2 className="about-title">Quiénes Somos</h2>
              <p className="about-text">
                Somos una fundación dedicada al rescate, rehabilitación y adopción responsable de animales en el estado Aragua, Venezuela. Nacimos en 2021 tras el impacto del caso "Dumbo", transformando la solidaridad digital en una estructura sólida que hoy cuenta con dos sedes especializadas. Nuestra misión es erradicar el abandono mediante la esterilización constante y la educación sobre el respeto animal.
              </p>
              <div className="about-actions">
                <a href="/nosotros" className="about-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>ver más</a>
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

      {/* Adopt Section - Priority 2: Core Mission */}
      <section className="adopt-section">
        <div className="container">
          <div className="adopt-content">
            <div className="adopt-image-column">
              <div className="adopt-image-circle">
                <img src="/adopt-hug.png" alt="Persona abrazando perro" />
              </div>
              <a href="/quiero-adoptar" className="adopt-postulate-btn">
                POSTULATE AQUÍ
              </a>
            </div>
            <div className="adopt-details">
              <h2 className="adopt-title">ADOPTÁ</h2>
              <p className="adopt-text">
                Al pensar en adoptar, es crucial tener en cuenta diversos factores para garantizar una convivencia armoniosa. Evalúa el espacio disponible en tu hogar, el tiempo que puedes dedicar al juego y paseo, así como los costos asociados con la alimentación, atención veterinaria y cuidado durante las vacaciones. Asegúrate de que tu elección de mascota se ajuste a tu estilo de vida y a la cantidad de tiempo que puedes comprometer.
              </p>
              <div className="adopt-actions">
                <a href="/antes-de-adoptar" className="adopt-secondary-btn">ANTES DE ADOPTAR</a>
                <a href="/requisitos" className="adopt-secondary-btn">REQUISITOS</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options Section - Priority 3: Support */}
      <section className="donation-options-section">
        <div className="container">
          <h2 className="donation-title">TU AYUDA TRANSFORMA VIDAS</h2>
          <div className="donation-options-grid">
            <div className="donation-option-card">
              <div className="donation-image-circle">
                <img src="/dog-donation-1.png" alt="Happy dog looking up" />
              </div>
              <a href="/donar" className="donation-pill-btn btn-dark-blue">
                DONAR AHORA
              </a>
            </div>
            <div className="donation-option-card">
              <div className="donation-image-circle">
                <img src="/dog-donation-2.png" alt="Happy dog winking" />
              </div>
              <a href="/donacion-insumos" className="donation-pill-btn btn-golden">
                DONAR INSUMOS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section - Priority 4: Seasonal Campaign */}
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
                Nuestro Calendario Solidario 2026 nace del trabajo colectivo y la empatía de una comunidad que decide ayudar. Cada mes es testimonio de una vida transformada gracias a tu apoyo.
              </p>
              <p className="calendar-text">
                Este calendario acompaña tu año y sostiene cada paso del camino hacia una vida mejor para los perros que son víctimas de maltrato y abandono.
              </p>

              <div className="calendar-actions">
                <button>Más información</button>
                <button>Comprar en tienda</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section - Priority 5: Engagement */}
      <section className="social-section">
        <div className="container">
          <div className="social-content">
            <h2 className="social-title">Síguenos en nuestras redes sociales</h2>

            <div className="social-icons">
              {/* Instagram: Gradient Filled */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn instagram">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="insta_gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" fill="url(#insta_gradient)" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" fill="url(#insta_gradient)" />
                  <circle cx="18.406" cy="5.594" r="1.44" fill="url(#insta_gradient)" />
                </svg>
                <span>Instagram</span>
              </a>

              {/* Facebook: Blue Circle */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn facebook">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073C0 18.062 4.388 23.028 10.125 23.928V15.543H7.078V12.073H10.125V9.43C10.125 6.423 11.916 4.783 14.629 4.783C15.928 4.783 17.287 5.015 17.287 5.015V7.937H15.79C14.298 7.937 13.833 8.862 13.833 9.811V12.073H17.127L16.602 15.543H13.833V23.928C19.57 23.028 23.958 18.062 23.958 12.073H24Z" fill="#1877F2" />
                  <path d="M16.602 15.543L17.127 12.073H13.833V9.811C13.833 8.862 14.298 7.938 15.79 7.938H17.287V5.015C17.287 5.015 15.929 4.783 14.629 4.783C11.916 4.783 10.125 6.423 10.125 9.43V12.073H7.078V15.543H10.125V23.928C11.192 24.1 12.07 24.1 12 24.1C11.93 24.1 12.808 24.1 13.833 23.928V15.543H16.602Z" fill="white" />
                </svg>
                <span>Facebook</span>
              </a>

              {/* TikTok: Elaborate Chromatic */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn tiktok">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.589 6.686C18.258 6.556 17.066 5.925 16.145 4.956C16.145 4.956 16.145 4.956 16.145 4.956C16.144 4.955 16.144 4.955 16.143 4.954V2H12.7V15.672C12.7 17.605 11.133 19.172 9.2 19.172C7.267 19.172 5.7 17.605 5.7 15.672C5.7 13.754 7.24 12.195 9.151 12.173L9.153 12.173L9.151 12.172C9.554 12.172 9.932 12.246 10.283 12.38V8.87C9.936 8.777 9.574 8.729 9.2 8.73C5.366 8.73 2.257 11.838 2.257 15.672C2.257 19.506 5.366 22.614 9.2 22.614C13.034 22.614 16.143 19.506 16.143 15.672V8.687C17.605 9.74 19.387 10.297 21.19 10.208V6.789C20.627 6.804 20.089 6.763 19.589 6.686Z" fill="#000000" />
                  <path d="M16 4.955V2H12.7V15.673C12.7 17.606 11.133 19.173 9.2 19.173C7.267 19.173 5.7 17.606 5.7 15.673C5.7 13.755 7.24 12.196 9.151 12.174L9.151 12.173C9.554 12.173 9.932 12.247 10.283 12.381V8.871C9.936 8.778 9.574 8.73 9.2 8.731C5.366 8.731 2.257 11.839 2.257 15.673C2.257 19.507 5.366 22.615 9.2 22.615C13.034 22.615 16.143 19.507 16.143 15.673V8.688C17.605 9.741 19.387 10.298 21.19 10.209V6.79C20.627 6.805 20.089 6.764 19.589 6.687C18.258 6.557 17.066 5.926 16.144 4.957L16 4.955Z" fill="#25F4EE" style={{ mixBlendMode: 'multiply', opacity: 0 }} />
                  <path d="M21.19 10.209C20.627 10.224 20.089 10.183 19.589 10.106C18.258 9.976 17.066 9.345 16.144 8.376V8.688C17.605 9.741 19.387 10.298 21.19 10.209Z" fill="#FE2C55" />
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
