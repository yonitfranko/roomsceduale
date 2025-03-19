export interface Room {
  id: string;
  name: string;
  type: 'כיתה' | 'מעבדה' | 'אולם' | 'חדר מיוחד' | 'אחר';
  capacity?: number;
  description?: string;
}

export type Day = 'ראשון' | 'שני' | 'שלישי' | 'רביעי' | 'חמישי' | 'שישי';

export interface TimeSlot {
  id: number;
  display: string;
  description: string;
}

export interface Occupancy {
  roomId: number;
  roomName: string;
  day: Day;
  period: number;
  teacher?: string;
  subject?: string;
  class?: string;
}

export interface RoomAvailability {
  roomId: number;
  roomName: string;
  day: Day;
  period: number;
  isAvailable: boolean;
  teacher?: string;
  subject?: string;
  class?: string;
} 