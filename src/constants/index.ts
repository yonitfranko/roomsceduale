import { Day, TimeSlot, Occupancy } from '../types';

export const DAYS: Day[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];

export const TIME_SLOTS: TimeSlot[] = [
  { id: 1, display: '08:00-09:00' },
  { id: 2, display: '09:00-10:00' },
  { id: 3, display: '10:00-11:00' },
  { id: 4, display: '11:00-12:00' },
  { id: 5, display: '12:00-13:00' },
  { id: 6, display: '13:00-14:00' },
  { id: 7, display: '14:00-15:00' },
  { id: 8, display: '15:00-16:00' },
];

// רשימת החדרים
export const ROOMS: string[] = [
  'חדר אומנות צעירים',
  'חדר אומנות בוגרים',
  'חדר אנגלית',
  'חדר הנצחה',
  'החדר של יעל',
  'חדר מחול',
  'מחשבים בוגרים',
  'חדר חושים',
  'חדר מתמטיקה',
  'חדר גל/ מועדון טייסת',
  'חדר תאטרון',
  'חדר מוצרט',
  'חדר סיגל',
  'חדר אסנת',
  'חדר רויטל',
  'מקלט גדול',
  'מקלט קטן',
  'ספרייה',
  'קורפיי'
];

// המרת יום מספרי ליום בשבוע
function getDay(dayNum: number): Day {
  const days: Day[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי'];
  return days[dayNum - 1];
}

// נתוני תפוסה ראשוניים
export const INITIAL_OCCUPANCY: Occupancy[] = [
  // חדר אומנות צעירים
  { roomId: 1, roomName: ROOMS[0], day: 'ראשון', period: 1 },
  { roomId: 1, roomName: ROOMS[0], day: 'ראשון', period: 2 },
  { roomId: 1, roomName: ROOMS[0], day: 'ראשון', period: 3 },
  { roomId: 1, roomName: ROOMS[0], day: 'ראשון', period: 4 },
  { roomId: 1, roomName: ROOMS[0], day: 'ראשון', period: 5 },
  { roomId: 1, roomName: ROOMS[0], day: 'ראשון', period: 6 },
  { roomId: 1, roomName: ROOMS[0], day: 'ראשון', period: 7 },
  { roomId: 1, roomName: ROOMS[0], day: 'שני', period: 1 },
  { roomId: 1, roomName: ROOMS[0], day: 'שני', period: 2 },
  { roomId: 1, roomName: ROOMS[0], day: 'שני', period: 3 },
  { roomId: 1, roomName: ROOMS[0], day: 'שני', period: 4 },
  { roomId: 1, roomName: ROOMS[0], day: 'שני', period: 5 },
  { roomId: 1, roomName: ROOMS[0], day: 'שני', period: 6 },

  // חדר אומנות בוגרים
  { roomId: 2, roomName: ROOMS[1], day: 'רביעי', period: 1 },
  { roomId: 2, roomName: ROOMS[1], day: 'רביעי', period: 2 },
  { roomId: 2, roomName: ROOMS[1], day: 'רביעי', period: 3 },
  { roomId: 2, roomName: ROOMS[1], day: 'רביעי', period: 4 },
  { roomId: 2, roomName: ROOMS[1], day: 'רביעי', period: 5 },
  { roomId: 2, roomName: ROOMS[1], day: 'רביעי', period: 6 },

  // חדר אנגלית
  { roomId: 3, roomName: ROOMS[2], day: 'ראשון', period: 1 },
  { roomId: 3, roomName: ROOMS[2], day: 'ראשון', period: 2 },
  { roomId: 3, roomName: ROOMS[2], day: 'ראשון', period: 3 },
  { roomId: 3, roomName: ROOMS[2], day: 'ראשון', period: 4 },
  { roomId: 3, roomName: ROOMS[2], day: 'ראשון', period: 5 },
  { roomId: 3, roomName: ROOMS[2], day: 'ראשון', period: 6 },
  { roomId: 3, roomName: ROOMS[2], day: 'ראשון', period: 7 },
  { roomId: 3, roomName: ROOMS[2], day: 'שני', period: 2 },
  { roomId: 3, roomName: ROOMS[2], day: 'שני', period: 3 },
  { roomId: 3, roomName: ROOMS[2], day: 'שני', period: 4 },
  { roomId: 3, roomName: ROOMS[2], day: 'שני', period: 5 },
  { roomId: 3, roomName: ROOMS[2], day: 'שני', period: 6 },
  { roomId: 3, roomName: ROOMS[2], day: 'שלישי', period: 1 },
  { roomId: 3, roomName: ROOMS[2], day: 'שלישי', period: 2 },
  { roomId: 3, roomName: ROOMS[2], day: 'שלישי', period: 3 },
  { roomId: 3, roomName: ROOMS[2], day: 'שלישי', period: 4 },
  { roomId: 3, roomName: ROOMS[2], day: 'שלישי', period: 5 },
  { roomId: 3, roomName: ROOMS[2], day: 'שלישי', period: 6 },
  { roomId: 3, roomName: ROOMS[2], day: 'שלישי', period: 7 },
  { roomId: 3, roomName: ROOMS[2], day: 'רביעי', period: 1 },
  { roomId: 3, roomName: ROOMS[2], day: 'רביעי', period: 2 },
  { roomId: 3, roomName: ROOMS[2], day: 'רביעי', period: 3 },
  { roomId: 3, roomName: ROOMS[2], day: 'רביעי', period: 4 },
  { roomId: 3, roomName: ROOMS[2], day: 'רביעי', period: 5 },
  { roomId: 3, roomName: ROOMS[2], day: 'רביעי', period: 6 },
  { roomId: 3, roomName: ROOMS[2], day: 'רביעי', period: 7 },

  // החדר של יעל
  { roomId: 5, roomName: ROOMS[4], day: 'ראשון', period: 1 },
  { roomId: 5, roomName: ROOMS[4], day: 'ראשון', period: 2 },
  { roomId: 5, roomName: ROOMS[4], day: 'ראשון', period: 3 },
  { roomId: 5, roomName: ROOMS[4], day: 'ראשון', period: 4 },
  { roomId: 5, roomName: ROOMS[4], day: 'ראשון', period: 5 },
  { roomId: 5, roomName: ROOMS[4], day: 'ראשון', period: 6 },
  { roomId: 5, roomName: ROOMS[4], day: 'ראשון', period: 7 },
  { roomId: 5, roomName: ROOMS[4], day: 'שני', period: 1 },
  { roomId: 5, roomName: ROOMS[4], day: 'שני', period: 2 },
  { roomId: 5, roomName: ROOMS[4], day: 'שני', period: 3 },
  { roomId: 5, roomName: ROOMS[4], day: 'שני', period: 4 },
  { roomId: 5, roomName: ROOMS[4], day: 'שני', period: 5 },
  { roomId: 5, roomName: ROOMS[4], day: 'שני', period: 6 },
  { roomId: 5, roomName: ROOMS[4], day: 'שני', period: 7 },
  { roomId: 5, roomName: ROOMS[4], day: 'רביעי', period: 1 },
  { roomId: 5, roomName: ROOMS[4], day: 'רביעי', period: 2 },
  { roomId: 5, roomName: ROOMS[4], day: 'רביעי', period: 3 },
  { roomId: 5, roomName: ROOMS[4], day: 'רביעי', period: 4 },
  { roomId: 5, roomName: ROOMS[4], day: 'רביעי', period: 5 },

  // חדר מחול
  { roomId: 6, roomName: ROOMS[5], day: 'ראשון', period: 1 },
  { roomId: 6, roomName: ROOMS[5], day: 'ראשון', period: 2 },
  { roomId: 6, roomName: ROOMS[5], day: 'ראשון', period: 3 },
  { roomId: 6, roomName: ROOMS[5], day: 'ראשון', period: 4 },
  { roomId: 6, roomName: ROOMS[5], day: 'ראשון', period: 5 },
  { roomId: 6, roomName: ROOMS[5], day: 'ראשון', period: 6 },
  { roomId: 6, roomName: ROOMS[5], day: 'ראשון', period: 7 },
  { roomId: 6, roomName: ROOMS[5], day: 'שני', period: 1 },
  { roomId: 6, roomName: ROOMS[5], day: 'שני', period: 2 },
  { roomId: 6, roomName: ROOMS[5], day: 'שני', period: 3 },
  { roomId: 6, roomName: ROOMS[5], day: 'שני', period: 4 },
  { roomId: 6, roomName: ROOMS[5], day: 'שני', period: 5 },
  { roomId: 6, roomName: ROOMS[5], day: 'שני', period: 6 },
  { roomId: 6, roomName: ROOMS[5], day: 'שני', period: 7 },
  { roomId: 6, roomName: ROOMS[5], day: 'רביעי', period: 1 },
  { roomId: 6, roomName: ROOMS[5], day: 'רביעי', period: 2 },
  { roomId: 6, roomName: ROOMS[5], day: 'רביעי', period: 3 },
  { roomId: 6, roomName: ROOMS[5], day: 'רביעי', period: 4 },
  { roomId: 6, roomName: ROOMS[5], day: 'רביעי', period: 5 },
  { roomId: 6, roomName: ROOMS[5], day: 'רביעי', period: 6 },
  { roomId: 6, roomName: ROOMS[5], day: 'רביעי', period: 7 },

  // מחשבים בוגרים
  { roomId: 7, roomName: ROOMS[6], day: 'שני', period: 1 },
  { roomId: 7, roomName: ROOMS[6], day: 'שני', period: 2 },
  { roomId: 7, roomName: ROOMS[6], day: 'שני', period: 3 },
  { roomId: 7, roomName: ROOMS[6], day: 'שני', period: 4 },
  { roomId: 7, roomName: ROOMS[6], day: 'שני', period: 5 },
  { roomId: 7, roomName: ROOMS[6], day: 'רביעי', period: 1 },
  { roomId: 7, roomName: ROOMS[6], day: 'רביעי', period: 2 },
  { roomId: 7, roomName: ROOMS[6], day: 'רביעי', period: 3 },
  { roomId: 7, roomName: ROOMS[6], day: 'רביעי', period: 4 },
  { roomId: 7, roomName: ROOMS[6], day: 'רביעי', period: 5 },
  { roomId: 7, roomName: ROOMS[6], day: 'רביעי', period: 6 },
  { roomId: 7, roomName: ROOMS[6], day: 'חמישי', period: 4 },
  { roomId: 7, roomName: ROOMS[6], day: 'חמישי', period: 5 },

  // חדר מתמטיקה
  { roomId: 9, roomName: ROOMS[8], day: 'ראשון', period: 3 },
  { roomId: 9, roomName: ROOMS[8], day: 'ראשון', period: 6 },
  { roomId: 9, roomName: ROOMS[8], day: 'שני', period: 1 },

  // חדר גל/ מועדון טייסת
  { roomId: 10, roomName: ROOMS[9], day: 'ראשון', period: 1 },
  { roomId: 10, roomName: ROOMS[9], day: 'ראשון', period: 2 },
  { roomId: 10, roomName: ROOMS[9], day: 'ראשון', period: 3 },
  { roomId: 10, roomName: ROOMS[9], day: 'ראשון', period: 4 },
  { roomId: 10, roomName: ROOMS[9], day: 'שלישי', period: 1 },
  { roomId: 10, roomName: ROOMS[9], day: 'שלישי', period: 2 },
  { roomId: 10, roomName: ROOMS[9], day: 'שלישי', period: 3 },
  { roomId: 10, roomName: ROOMS[9], day: 'שלישי', period: 4 },
  { roomId: 10, roomName: ROOMS[9], day: 'רביעי', period: 1 },
  { roomId: 10, roomName: ROOMS[9], day: 'רביעי', period: 2 },
  { roomId: 10, roomName: ROOMS[9], day: 'רביעי', period: 3 },
  { roomId: 10, roomName: ROOMS[9], day: 'רביעי', period: 4 },
  { roomId: 10, roomName: ROOMS[9], day: 'רביעי', period: 5 },
  { roomId: 10, roomName: ROOMS[9], day: 'חמישי', period: 1 },
  { roomId: 10, roomName: ROOMS[9], day: 'חמישי', period: 2 },
  { roomId: 10, roomName: ROOMS[9], day: 'חמישי', period: 3 },
  { roomId: 10, roomName: ROOMS[9], day: 'חמישי', period: 4 },
  { roomId: 10, roomName: ROOMS[9], day: 'חמישי', period: 5 },

  // ספרייה
  { roomId: 18, roomName: ROOMS[17], day: 'ראשון', period: 1 },
  { roomId: 18, roomName: ROOMS[17], day: 'ראשון', period: 2 },
  { roomId: 18, roomName: ROOMS[17], day: 'ראשון', period: 3 },
  { roomId: 18, roomName: ROOMS[17], day: 'ראשון', period: 4 },
  { roomId: 18, roomName: ROOMS[17], day: 'ראשון', period: 5 },
  { roomId: 18, roomName: ROOMS[17], day: 'שלישי', period: 1 },
  { roomId: 18, roomName: ROOMS[17], day: 'שלישי', period: 2 },
  { roomId: 18, roomName: ROOMS[17], day: 'שלישי', period: 3 },
  { roomId: 18, roomName: ROOMS[17], day: 'שלישי', period: 4 },
  { roomId: 18, roomName: ROOMS[17], day: 'שלישי', period: 5 },

  // קורפיי
  { roomId: 19, roomName: ROOMS[18], day: 'ראשון', period: 6 },
  { roomId: 19, roomName: ROOMS[18], day: 'ראשון', period: 7 },
  { roomId: 19, roomName: ROOMS[18], day: 'שני', period: 6 },
  { roomId: 19, roomName: ROOMS[18], day: 'שני', period: 7 },
  { roomId: 19, roomName: ROOMS[18], day: 'שלישי', period: 6 },
  { roomId: 19, roomName: ROOMS[18], day: 'שלישי', period: 7 },
  { roomId: 19, roomName: ROOMS[18], day: 'רביעי', period: 6 },
  { roomId: 19, roomName: ROOMS[18], day: 'רביעי', period: 7 },
  { roomId: 19, roomName: ROOMS[18], day: 'חמישי', period: 6 },
  { roomId: 19, roomName: ROOMS[18], day: 'חמישי', period: 7 }
]; 