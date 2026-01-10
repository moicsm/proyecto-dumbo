import { Animal } from '../models/Animal';

/**
 * Datos mock de animales para desarrollo inicial
 * Estos datos serán reemplazados por la API cuando conectemos el backend
 */
export const mockAnimals: Animal[] = [
    {
        id: 1,
        name: 'Max',
        species: 'perro',
        breed: 'Labrador Retriever',
        age: 3,
        gender: 'macho',
        size: 'grande',
        imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
        images: [
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
            'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600',
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
        name: 'Luna',
        species: 'gato',
        breed: 'Mestizo',
        age: 2,
        gender: 'hembra',
        size: 'pequeño',
        imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
        images: [
            'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
            'https://images.unsplash.com/photo-1573865526739-10c1dd482a9d?w=600',
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
        name: 'Rocky',
        species: 'perro',
        breed: 'Pastor Alemán',
        age: 5,
        gender: 'macho',
        size: 'grande',
        imageUrl: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=600',
        images: [
            'https://images.unsplash.com/photo-1568572933382-74d440642117?w=600',
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
        name: 'Mia',
        species: 'gato',
        breed: 'Siamés',
        age: 1,
        gender: 'hembra',
        size: 'pequeño',
        imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600',
        images: [
            'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600',
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
        name: 'Charlie',
        species: 'perro',
        breed: 'Beagle',
        age: 4,
        gender: 'macho',
        size: 'mediano',
        imageUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600',
        images: [
            'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600',
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
        name: 'Bella',
        species: 'gato',
        breed: 'Persa',
        age: 6,
        gender: 'hembra',
        size: 'mediano',
        imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600',
        images: [
            'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600',
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
        name: 'Buddy',
        species: 'perro',
        breed: 'Golden Retriever',
        age: 2,
        gender: 'macho',
        size: 'grande',
        imageUrl: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600',
        images: [
            'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600',
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
        name: 'Coco',
        species: 'ave',
        breed: 'Loro',
        age: 3,
        gender: 'hembra',
        size: 'pequeño',
        imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600',
        images: [
            'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600',
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
