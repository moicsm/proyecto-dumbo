import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import WebLayout from '@/components/web/Layout/WebLayout';
import { IonButton } from '@ionic/react';
import './ConocelosWeb.css';

import { mockAnimals } from '@/data/mockData';

const ANIMALS_DATA = mockAnimals.map(animal => ({
    id: animal.id,
    name: animal.name,
    image: animal.imageUrl,
    type: animal.species === 'perro' ? 'Perro' : animal.species === 'gato' ? 'Gato' : 'Otro',
    age: `${animal.age} ${animal.age === 1 ? 'año' : 'años'}`,
    gender: animal.gender === 'hembra' ? 'Hembra' : 'Macho'
}));

const ITEMS_PER_PAGE = 12;
const TOTAL_PAGES = Math.ceil(ANIMALS_DATA.length / ITEMS_PER_PAGE);

const ConocelosWeb = () => {
    const history = useHistory();
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
            <div className="conocelos-page">
                {/* Header Section */}
                <header className="conocelos-header">
                    <div className="container">
                        <h1 className="conocelos-title">Conócelos</h1>
                        <p className="conocelos-subtitle">
                            Encuentra a tu nuevo mejor amigo entre nuestros adorables animales esperando un hogar
                        </p>
                    </div>
                </header>

                <div className="container">
                    {/* Animals Grid */}
                    <div className="animals-grid">
                        {currentAnimals.map((animal) => (
                            <div 
                                key={animal.id} 
                                className="animal-card"
                                onClick={() => history.push(`/animal/${animal.id}`)}
                                role="button"
                                tabIndex={0}
                            >
                                <div className="animal-image">
                                    {animal.image.startsWith('/') ? (
                                        <img src={animal.image} alt={animal.name} className="animal-photo" />
                                    ) : (
                                        <span className="animal-emoji">{animal.image}</span>
                                    )}
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
            </div>
        </WebLayout>
    );
};

export default ConocelosWeb;
