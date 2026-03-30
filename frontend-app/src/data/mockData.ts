import { Animal } from '../models/Animal';

/**
 * Datos mock de animales para desarrollo inicial
 * Estos datos serán reemplazados por la API cuando conectemos el backend
 */
export const mockAnimals: Animal[] = [
    {
        id: 1,
        name: 'Bandida',
        species: 'perro',
        breed: 'Mestizo',
        age: 3,
        gender: 'hembra',
        size: 'mediano',
        imageUrl: '/Bandida/bandida 1.jpeg',
        images: [
            '/Bandida/bandida 1.jpeg',
            '/Bandida/bandida 2.jpeg',
            '/Bandida/bandida 3.jpeg',
            '/Bandida/bandida 4.jpeg',
        ],
        story: 'Max fue encontrado abandonado en las calles de la ciudad. A pesar de su difícil comienzo, es un perro alegre y cariñoso que adora jugar con otros perros y niños.',
        healthStatus: 'saludable',
        personality: ['juguetón', 'amigable', 'energético', 'sociable'],
        isSponsored: false,
        sponsorCount: 0,
        arrivalDate: '2025-06-15',
        isAdoptable: true,
    },
    {
        id: 2,
        name: 'Catire',
        species: 'perro',
        breed: 'Mestizo',
        age: 2,
        gender: 'macho',
        size: 'mediano',
        imageUrl: '/Catire/Catire 1.jpeg',
        images: [
            '/Catire/Catire 1.jpeg',
        ],
        story: 'Luna llegó a la fundación como una gatita bebé rescatada de un drenaje. Ahora es una gata hermosa, independiente pero cariñosa que ama tomar siestas al sol.',
        healthStatus: 'saludable',
        personality: ['tranquila', 'independiente', 'cariñosa'],
        isSponsored: true,
        sponsorCount: 2,
        arrivalDate: '2025-03-20',
        isAdoptable: true,
    },
    {
        id: 3,
        name: 'Dulce',
        species: 'perro',
        breed: 'Mestizo',
        age: 1,
        gender: 'hembra',
        size: 'mediano',
        imageUrl: '/Dulce/Dulce 1.jpeg',
        images: [
            '/Dulce/Dulce 1.jpeg',
            '/Dulce/Dulce 2.jpeg',
            '/Dulce/Dulce 3.jpeg',
        ],
        story: 'Rocky fue rescatado de un caso de maltrato. Con paciencia y amor, ha aprendido a confiar nuevamente en las personas. Es leal, protector y muy inteligente.',
        healthStatus: 'recuperado',
        personality: ['leal', 'protector', 'inteligente', 'tranquilo'],
        isSponsored: true,
        sponsorCount: 3,
        arrivalDate: '2024-11-10',
        isAdoptable: false,
        specialNeeds: 'Necesita un hogar sin otros perros machos',
    },
    {
        id: 4,
        name: 'Firu',
        species: 'perro',
        breed: 'Mestizo',
        age: 4,
        gender: 'macho',
        size: 'mediano',
        imageUrl: '/Firu/Firu 1.jpeg',
        images: [
            '/Firu/Firu 1.jpeg',
            '/Firu/Firu 2.jpeg',
        ],
        story: 'Mia es una gatita muy activa y curiosa. Fue encontrada sola en un parque cuando apenas tenía semanas de vida. Le encanta explorar y jugar con juguetes.',
        healthStatus: 'saludable',
        personality: ['curiosa', 'juguetona', 'activa', 'vocal'],
        isSponsored: false,
        sponsorCount: 0,
        arrivalDate: '2025-08-05',
        isAdoptable: true,
    },
    {
        id: 5,
        name: 'Miel',
        species: 'perro',
        breed: 'Mestizo',
        age: 5,
        gender: 'hembra',
        size: 'mediano',
        imageUrl: '/Miel/miel 1.jpeg',
        images: [
            '/Miel/miel 1.jpeg',
            '/Miel/miel 2.jpeg',
            '/Miel/Miel 3.jpeg',
        ],
        story: 'Charlie vino a nosotros cuando su dueño ya no pudo cuidarlo. Es un perro muy noble, tranquilo y perfecto para familias. Adora los paseos y las golosinas.',
        healthStatus: 'saludable',
        personality: ['tranquilo', 'amigable', 'noble', 'obediente'],
        isSponsored: true,
        sponsorCount: 1,
        arrivalDate: '2025-01-15',
        isAdoptable: true,
    },
    {
        id: 6,
        name: 'Nina',
        species: 'perro',
        breed: 'Mestizo',
        age: 1,
        gender: 'hembra',
        size: 'pequeño',
        imageUrl: '/Nina/Nina 1.jpeg',
        images: [
            '/Nina/Nina 1.jpeg',
            '/Nina/Nina 2.jpeg',
            '/Nina/Nina 3.jpeg',
            '/Nina/nina 4.jpeg',
        ],
        story: 'Bella es una gata mayor que necesita cuidados especiales. A pesar de su edad, tiene mucho amor para dar. Busca un hogar tranquilo donde pasar sus años dorados.',
        healthStatus: 'en tratamiento',
        personality: ['tranquila', 'cariñosa', 'relajada'],
        isSponsored: true,
        sponsorCount: 4,
        arrivalDate: '2024-05-20',
        isAdoptable: false,
        specialNeeds: 'Requiere medicación diaria para artritis',
    },
    {
        id: 7,
        name: 'Rocky',
        species: 'perro',
        breed: 'Mestizo',
        age: 3,
        gender: 'macho',
        size: 'grande',
        imageUrl: '/Rocky/Rocky 1.jpeg',
        images: [
            '/Rocky/Rocky 1.jpeg',
            '/Rocky/Rocky 2.jpeg',
        ],
        story: 'Buddy es pura alegría. Fue rescatado de la calle siendo cachorro y ha crecido como un perro hermoso, amigable y lleno de energía. Perfecto para familias activas.',
        healthStatus: 'saludable',
        personality: ['energético', 'juguetón', 'amigable', 'cariñoso'],
        isSponsored: false,
        sponsorCount: 0,
        arrivalDate: '2025-09-10',
        isAdoptable: true,
    },
    {
        id: 8,
        name: 'Sasha',
        species: 'perro',
        breed: 'Mestizo',
        age: 2,
        gender: 'hembra',
        size: 'mediano',
        imageUrl: '/Sasha/Sasha 1.jpeg',
        images: [
            '/Sasha/Sasha 1.jpeg',
            '/Sasha/Sasha 2.jpeg',
            '/Sasha/Sasha 3.JPEG',
        ],
        story: 'Coco es una loro muy inteligente y habladora. Fue rescatada de un hogar donde no recibía la atención adecuada. Le encanta socializar y aprender nuevas palabras.',
        healthStatus: 'saludable',
        personality: ['inteligente', 'vocal', 'sociable', 'activa'],
        isSponsored: false,
        sponsorCount: 0,
        arrivalDate: '2025-04-12',
        isAdoptable: true,
        specialNeeds: 'Necesita mucha interacción social',
    },
    {
        id: 9,
        name: 'Sugar',
        species: 'perro',
        breed: 'Mestizo',
        age: 4,
        gender: 'hembra',
        size: 'mediano',
        imageUrl: '/Sugar/sugar 1.jpeg',
        images: [
            '/Sugar/sugar 1.jpeg',
            '/Sugar/sugar 2.jpeg',
            '/Sugar/sugar 3.jpeg',
        ],
        story: 'Sugar es dulce y tranquila, ideal para compañía.',
        healthStatus: 'saludable',
        personality: ['tranquila', 'cariñosa'],
        isSponsored: false,
        sponsorCount: 0,
        arrivalDate: '2025-05-10',
        isAdoptable: true,
    },
    {
        id: 10,
        name: 'Summer',
        species: 'perro',
        breed: 'Mestizo',
        age: 2,
        gender: 'hembra',
        size: 'mediano',
        imageUrl: '/Summer/Sommer 1.jpeg',
        images: [
            '/Summer/Sommer 1.jpeg',
            '/Summer/Sommer 2.jpeg',
        ],
        story: 'Summer es alegre, lista para aventuras.',
        healthStatus: 'saludable',
        personality: ['alegre', 'activa'],
        isSponsored: false,
        sponsorCount: 0,
        arrivalDate: '2025-07-20',
        isAdoptable: true,
    },
];

/**
 * Función helper para obtener animales filtrados
 */
export const getFilteredAnimals = (filters?: {
    species?: string;
    isSponsored?: boolean;
    isAdoptable?: boolean;
}): Animal[] => {
    let filtered = [...mockAnimals];

    if (filters?.species) {
        filtered = filtered.filter(animal => animal.species === filters.species);
    }

    if (filters?.isSponsored !== undefined) {
        filtered = filtered.filter(animal => animal.isSponsored === filters.isSponsored);
    }

    if (filters?.isAdoptable !== undefined) {
        filtered = filtered.filter(animal => animal.isAdoptable === filters.isAdoptable);
    }

    return filtered;
};

/**
 * Función helper para obtener un animal por ID
 */
export const getAnimalById = (id: number): Animal | undefined => {
    return mockAnimals.find(animal => animal.id === id);
};

/**
 * Estadísticas de la fundación
 */
export const foundationStats = {
    totalAnimals: mockAnimals.length,
    totalSponsored: mockAnimals.filter(a => a.isSponsored).length,
    totalAdoptable: mockAnimals.filter(a => a.isAdoptable).length,
    totalRescued: 156, // Total histórico
    totalAdopted: 89, // Total de adopciones exitosas
};
