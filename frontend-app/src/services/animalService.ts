import { Animal, AnimalFilters } from '../models/Animal';
import { mockAnimals, getFilteredAnimals, getAnimalById } from '../data/mockData';

/**
 * Servicio de API para animales
 * 
 * NOTA: Por ahora usa datos mock (hardcoded)
 * Cuando conectemos el backend, solo cambiamos la implementación
 * de estas funciones para llamar a la API real
 */

// Configuración de la API (para después)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Simula un delay de red para hacer más realista
 */
const simulateNetworkDelay = (ms: number = 500) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Obtiene todos los animales
 */
export const getAllAnimals = async (): Promise<Animal[]> => {
    await simulateNetworkDelay();

    // TODO: Cuando tengamos backend, reemplazar con:
    // const response = await fetch(`${API_BASE_URL}/animals`);
    // return response.json();

    return mockAnimals;
};

/**
 * Obtiene un animal por ID
 */
export const getAnimal = async (id: number): Promise<Animal | undefined> => {
    await simulateNetworkDelay();

    // TODO: Cuando tengamos backend, reemplazar con:
    // const response = await fetch(`${API_BASE_URL}/animals/${id}`);
    // return response.json();

    return getAnimalById(id);
};

/**
 * Obtiene animales filtrados
 */
export const getAnimals = async (filters?: AnimalFilters): Promise<Animal[]> => {
    await simulateNetworkDelay();

    // TODO: Cuando tengamos backend, reemplazar con:
    // const queryParams = new URLSearchParams(filters as any);
    // const response = await fetch(`${API_BASE_URL}/animals?${queryParams}`);
    // return response.json();

    return getFilteredAnimals(filters);
};

/**
 * Obtiene animales disponibles para apadrinamiento
 */
export const getSponsorableAnimals = async (): Promise<Animal[]> => {
    await simulateNetworkDelay();
    return getFilteredAnimals({ isSponsored: false });
};

/**
 * Obtiene animales ya apadrinados
 */
export const getSponsoredAnimals = async (): Promise<Animal[]> => {
    await simulateNetworkDelay();
    return getFilteredAnimals({ isSponsored: true });
};

/**
 * Obtiene animales disponibles para adopción
 */
export const getAdoptableAnimals = async (): Promise<Animal[]> => {
    await simulateNetworkDelay();
    return getFilteredAnimals({ isAdoptable: true });
};

// Exportamos todo como un objeto para facilitar el uso
const animalService = {
    getAllAnimals,
    getAnimal,
    getAnimals,
    getSponsorableAnimals,
    getSponsoredAnimals,
    getAdoptableAnimals,
};

export default animalService;
