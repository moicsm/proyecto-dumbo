import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import WebLayout from '@/components/web/Layout/WebLayout';
import { getAnimalById } from '@/data/mockData';
import { IonButton, IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import './AnimalDetailWeb.css';

const AnimalDetailWeb = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const animalId = parseInt(id, 10);
    const animal = getAnimalById(animalId);
    
    // Si queremos un carrusel manual o galer\u00eda simple
    const [mainImage, setMainImage] = useState(animal?.imageUrl || '');

    if (!animal) {
        return (
            <WebLayout>
                <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
                    <h2>Animal no encontrado</h2>
                    <IonButton onClick={() => history.goBack()}>Volver atrás</IonButton>
                </div>
            </WebLayout>
        );
    }

    return (
        <WebLayout>
            <div className="animal-detail-container">
                <button className="back-btn" onClick={() => history.push('/conocelos')}>
                    <IonIcon icon={arrowBack} /> Volver
                </button>

                <div className="animal-detail-grid">
                    {/* Left: Images */}
                    <div className="animal-gallery">
                        <div className="main-image-wrapper">
                            <img src={mainImage} alt={animal.name} className="main-image" />
                        </div>
                        {animal.images && animal.images.length > 1 && (
                            <div className="thumbnail-list">
                                {animal.images.map((imgUrl, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`thumbnail ${mainImage === imgUrl ? 'active' : ''}`}
                                        onClick={() => setMainImage(imgUrl)}
                                    >
                                        <img src={imgUrl} alt={`${animal.name} foto ${idx}`} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Info */}
                    <div className="animal-info-section">
                        <h1 className="animal-detail-title">{animal.name}</h1>
                        <div className="animal-badges">
                            <span className="badge">{animal.species}</span>
                            <span className="badge">{animal.age} {animal.age === 1 ? 'año' : 'años'}</span>
                            <span className="badge">{animal.gender}</span>
                            <span className="badge">{animal.size}</span>
                        </div>

                        <div className="animal-story">
                            <h3>Su Historia</h3>
                            <p>
                                {animal.story} 
                                <br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur arcu at risus vulputate, nec tempor odio eleifend. Quisque ac magna sit amet arcu blandit bibendum id a urna. Nullam ultrices, elit a sollicitudin vulputate, ipsum sapien varius eros, eu iaculis magna nisl consequat diam. 
                            </p>
                        </div>

                        <div className="animal-personality">
                            <h3>Personalidad</h3>
                            <div className="tags-container">
                                {animal.personality.map((trait, idx) => (
                                    <span key={idx} className="trait-tag">{trait}</span>
                                ))}
                            </div>
                        </div>

                        <div className="action-buttons">
                            <IonButton 
                                expand="block" 
                                color="primary" 
                                size="large"
                                onClick={() => history.push('/quiero-adoptar')}
                            >
                                ¡Quiero Adoptarlo!
                            </IonButton>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default AnimalDetailWeb;
