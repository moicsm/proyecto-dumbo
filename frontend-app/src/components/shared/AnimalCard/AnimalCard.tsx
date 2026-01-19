import React from 'react';
import { IonCard, IonCardContent, IonChip, IonIcon, IonBadge, IonButton } from '@ionic/react';
import { heartOutline, heart, pawOutline, locationOutline } from 'ionicons/icons';
import { Animal } from '@/models/Animal';
import { usePlatform } from '@/hooks/usePlatform';
import './AnimalCard.css';

interface AnimalCardProps {
    animal: Animal;
    onSponsorClick?: (animal: Animal) => void;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onSponsorClick }) => {
    const { isDesktop } = usePlatform();

    const getSpeciesEmoji = (species: string) => {
        switch (species) {
            case 'perro': return '🐕';
            case 'gato': return '🐱';
            case 'ave': return '🦜';
            default: return '🐾';
        }
    };

    const getHealthStatusColor = (status: string) => {
        switch (status) {
            case 'saludable': return 'success';
            case 'en tratamiento': return 'warning';
            case 'recuperado': return 'secondary';
            default: return 'medium';
        }
    };

    return (
        <IonCard
            className={`animal-card ${isDesktop ? 'animal-card-desktop' : 'animal-card-mobile'}`}
            routerLink={`/animal/${animal.id}`}
            button
        >
            {/* Image Container */}
            <div className="animal-card-image-container">
                <img
                    src={animal.imageUrl}
                    alt={animal.name}
                    className="animal-card-image"
                />

                {/* Badges Overlay */}
                <div className="animal-card-badges">
                    {animal.isSponsored && (
                        <IonBadge color="danger" className="animal-badge">
                            <IonIcon icon={heart} /> Apadrinado
                        </IonBadge>
                    )}
                    {animal.isAdoptable && (
                        <IonBadge color="success" className="animal-badge">
                            <IonIcon icon={pawOutline} /> Disponible
                        </IonBadge>
                    )}
                </div>

                {/* Species Icon */}
                <div className="animal-species-icon">
                    {getSpeciesEmoji(animal.species)}
                </div>
            </div>

            <IonCardContent className="animal-card-content">
                {/* Header */}
                <div className="animal-card-header">
                    <div>
                        <h3 className="animal-card-name">{animal.name}</h3>
                        <p className="animal-card-breed">{animal.breed}</p>
                    </div>
                    {animal.sponsorCount && animal.sponsorCount > 0 && (
                        <div className="sponsor-count">
                            <IonIcon icon={heartOutline} className="sponsor-icon" />
                            <span>{animal.sponsorCount}</span>
                        </div>
                    )}
                </div>

                {/* Info Pills */}
                <div className="animal-card-info">
                    <IonChip className="info-chip" color="medium">
                        <span className="chip-label">Edad:</span>
                        <span className="chip-value">{animal.age} {animal.age === 1 ? 'año' : 'años'}</span>
                    </IonChip>
                    <IonChip className="info-chip" color="medium">
                        <span className="chip-label">Tamaño:</span>
                        <span className="chip-value">{animal.size}</span>
                    </IonChip>
                    <IonChip className={`info-chip health-chip-${getHealthStatusColor(animal.healthStatus)}`}>
                        <span className="chip-value">{animal.healthStatus}</span>
                    </IonChip>
                </div>

                {/* Story Preview */}
                <p className="animal-card-story">
                    {animal.story.substring(0, isDesktop ? 120 : 80)}...
                </p>

                {/* Personality Tags */}
                <div className="personality-tags">
                    {animal.personality.slice(0, 3).map((trait, index) => (
                        <span key={index} className="personality-tag">
                            {trait}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                {!animal.isSponsored && (
                    <IonButton
                        expand="block"
                        fill="solid"
                        color="primary"
                        className="sponsor-button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onSponsorClick && onSponsorClick(animal);
                        }}
                    >
                        <IonIcon icon={heartOutline} slot="start" />
                        Apadrinar
                    </IonButton>
                )}
            </IonCardContent>
        </IonCard>
    );
};

export default AnimalCard;
