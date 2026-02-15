import React, { useState } from 'react';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton } from '@ionic/react';
import './ConocelosWeb.css';

// Mock data de animales disponibles para adopción
const ANIMALS_DATA = [
    { id: 1, name: 'Ginny', image: '🐕', type: 'Perro', age: '2 años', gender: 'Hembra' },
    { id: 2, name: 'Pepita', image: '🐕', type: 'Perro', age: '3 años', gender: 'Hembra' },
    { id: 3, name: 'Bigotes', image: '🐈', type: 'Gato', age: '1 año', gender: 'Macho' },
    { id: 4, name: 'Titina', image: '🐈', type: 'Gato', age: '4 años', gender: 'Hembra' },
    { id: 5, name: 'Maca', image: '🐕', type: 'Perro', age: '5 años', gender: 'Hembra' },
    { id: 6, name: 'Boku', image: '🐕', type: 'Perro', age: '1 año', gender: 'Macho' },
    { id: 7, name: 'Teddy', image: '🐕', type: 'Perro', age: '3 años', gender: 'Macho' },
    { id: 8, name: 'Yoli', image: '🐈', type: 'Gato', age: '2 años', gender: 'Hembra' },
    { id: 9, name: 'Roma', image: '🐕', type: 'Perro', age: '4 años', gender: 'Hembra' },
    { id: 10, name: 'Teddy', image: '🐕', type: 'Perro', age: '2 años', gender: 'Macho' },
    { id: 11, name: 'Zazu', image: '🐈', type: 'Gato', age: '1 año', gender: 'Macho' },
    { id: 12, name: 'Lego', image: '🐕', type: 'Perro', age: '6 años', gender: 'Macho' },
    // Páginas adicionales de ejemplo
    { id: 13, name: 'Luna', image: '🐈', type: 'Gato', age: '3 años', gender: 'Hembra' },
    { id: 14, name: 'Max', image: '🐕', type: 'Perro', age: '2 años', gender: 'Macho' },
    { id: 15, name: 'Michi', image: '🐈', type: 'Gato', age: '1 año', gender: 'Macho' },
    { id: 16, name: 'Canela', image: '🐕', type: 'Perro', age: '4 años', gender: 'Hembra' },
    { id: 17, name: 'Nieve', image: '🐈', type: 'Gato', age: '2 años', gender: 'Hembra' },
    { id: 18, name: 'Rocky', image: '🐕', type: 'Perro', age: '5 años', gender: 'Macho' },
    { id: 19, name: 'Pelusa', image: '🐈', type: 'Gato', age: '3 años', gender: 'Hembra' },
    { id: 20, name: 'Thor', image: '🐕', type: 'Perro', age: '3 años', gender: 'Macho' },
    { id: 21, name: 'Simba', image: '🐈', type: 'Gato', age: '2 años', gender: 'Macho' },
    { id: 22, name: 'Bella', image: '🐕', type: 'Perro', age: '1 año', gender: 'Hembra' },
    { id: 23, name: 'Garfield', image: '🐈', type: 'Gato', age: '4 años', gender: 'Macho' },
    { id: 24, name: 'Chispa', image: '🐕', type: 'Perro', age: '2 años', gender: 'Hembra' },
];

const ITEMS_PER_PAGE = 12;
const TOTAL_PAGES = Math.ceil(ANIMALS_DATA.length / ITEMS_PER_PAGE);

const ConocelosWeb = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calcular animales de la página actual
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentAnimals = ANIMALS_DATA.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= TOTAL_PAGES) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 6;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(TOTAL_PAGES, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={`page-number ${i === currentPage ? 'active' : ''}`}
                    onClick={() => goToPage(i)}
                >
                    Page {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <WebLayout>
            <div className="conocelos-container">
                {/* Header Section */}
                <div className="conocelos-header">
                    <h1 className="conocelos-title">Conocelos</h1>
                    <p className="conocelos-subtitle">
                        Encuentra a tu nuevo mejor amigo entre nuestros adorables animales esperando un hogar
                    </p>
                </div>

                {/* Animals Grid */}
                <div className="animals-grid">
                    {currentAnimals.map((animal) => (
                        <div key={animal.id} className="animal-card">
                            <div className="animal-image">
                                <span className="animal-emoji">{animal.image}</span>
                                <div className="animal-overlay">
                                    <IonButton
                                        fill="solid"
                                        color="primary"
                                        size="small"
                                        routerLink="/quiero-adoptar"
                                    >
                                        Quiero Adoptarlo
                                    </IonButton>
                                </div>
                            </div>
                            <div className="animal-info">
                                <h3 className="animal-name">{animal.name}</h3>
                                <div className="animal-details">
                                    <span className="detail-badge">{animal.type}</span>
                                    <span className="detail-badge">{animal.age}</span>
                                    <span className="detail-badge">{animal.gender}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination-container">
                    <button
                        className="pagination-arrow"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt; Anterior
                    </button>

                    <div className="page-numbers">
                        {renderPageNumbers()}
                    </div>

                    <button
                        className="pagination-arrow"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === TOTAL_PAGES}
                    >
                        Siguiente &gt;
                    </button>
                </div>
            </div>
        </WebLayout>
    );
};

export default ConocelosWeb;
