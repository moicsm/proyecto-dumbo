/**
 * Modelo de datos para un animal rescatado
 */
export interface Animal {
  id: number;
  name: string;
  species: 'perro' | 'gato' | 'ave' | 'otro';
  breed?: string; // Raza (opcional)
  age: number; // Edad en años
  gender: 'macho' | 'hembra';
  size: 'pequeño' | 'mediano' | 'grande';
  imageUrl: string;
  images?: string[]; // Galería de imágenes
  story: string; // Historia del rescate
  healthStatus: 'saludable' | 'en tratamiento' | 'recuperado';
  personality: string[]; // Tags de personalidad: ["juguetón", "tranquilo"]
  isSponsored: boolean; // ¿Tiene padrino?
  sponsorCount?: number; // Número de padrinos
  arrivalDate: string; // Fecha de llegada a la fundación
  isAdoptable: boolean; // ¿Está disponible para adopción?
  specialNeeds?: string; // Necesidades especiales
}

/**
 * Modelo para un usuario/padrino
 */
export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  profileImage?: string;
  sponsoredAnimals: number[]; // IDs de animales apadrinados
  totalDonations: number;
  createdAt: string;
}

/**
 * Modelo para donaciones
 */
export interface Donation {
  id: number;
  userId: number;
  animalId?: number; // Opcional: donación general o específica
  amount: number;
  currency: 'USD' | 'EUR';
  paymentMethod: 'stripe' | 'paypal' | 'binance' | 'transferencia';
  isRecurring: boolean;
  frequency?: 'daily' | 'weekly' | 'monthly';
  status: 'pendiente' | 'completada' | 'fallida' | 'cancelada';
  transactionId?: string;
  message?: string; // Mensaje de dedicación
  createdAt: string;
  nextPaymentDate?: string;
}

/**
 * Modelo para apadrinamiento
 */
export interface Sponsorship {
  id: number;
  userId: number;
  animalId: number;
  startDate: string;
  isActive: boolean;
  monthlyAmount: number;
  totalContributed: number;
}

/**
 * Filtros para búsqueda de animales
 */
export interface AnimalFilters {
  species?: 'perro' | 'gato' | 'ave' | 'otro';
  size?: 'pequeño' | 'mediano' | 'grande';
  gender?: 'macho' | 'hembra';
  isSponsored?: boolean;
  isAdoptable?: boolean;
}
