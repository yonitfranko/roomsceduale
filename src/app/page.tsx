'use client';

import { useState } from 'react';
import { Search, Calendar, Plus, Trash2 } from 'lucide-react';
import { DAYS, TIME_SLOTS, ROOMS, INITIAL_OCCUPANCY } from '@/constants';
import { Day } from '@/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'search' | 'schedule' | 'new'>('search');
  const [selectedDay, setSelectedDay] = useState<Day>(DAYS[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0].id);
  const [selectedRoom, setSelectedRoom] = useState<string>(ROOMS[0]);
  const [reservations, setReservations] = useState<Array<{
    id: string;
    room: string;
    day: Day;
    timeSlot: number;
    teacher: string;
    subject?: string;
    class: string;
    date: string;
    isPermanent: boolean;
  }>>([]);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({
    room: '',
    teacher: '',
    subject: '',
    class: '',
    date: new Date().toISOString().split('T')[0],
    isPermanent: false
  });

  // פונקציה לבדיקת זמינות חדר
  const isRoomAvailable = (roomName: string, day: Day, period: number, date?: string) => {
    const isOccupied = INITIAL_OCCUPANCY.some(
      occupancy => 
        occupancy.roomName === roomName && 
        occupancy.day === day && 
        occupancy.period === period
    );
    
    const isReserved = reservations.some(
      reservation =>
        reservation.room === roomName &&
        reservation.day === day &&
        reservation.timeSlot === period &&
        (reservation.isPermanent || (!reservation.isPermanent && reservation.date === date))
    );

    return !isOccupied && !isReserved;
  };

  // פונקציה לקבלת כל החדרים הפנויים
  const getAvailableRooms = () => {
    return ROOMS.filter(room => isRoomAvailable(room, selectedDay, selectedTimeSlot, reservationDetails.date));
  };

  // פונקציה להצגת סטטוס החדר
  const getRoomStatus = (room: string, day: Day, period: number) => {
    const isPermanentlyOccupied = INITIAL_OCCUPANCY.some(
      occupancy => 
        occupancy.roomName === room && 
        occupancy.day === day && 
        occupancy.period === period
    );

    const reservation = reservations.find(
      r => r.room === room && r.day === day && r.timeSlot === period
    );

    if (isPermanentlyOccupied) {
      return <div className="bg-red-100 text-red-800 p-2 text-center">תפוס (קבוע)</div>;
    } else if (reservation) {
      return (
        <div className="bg-orange-100 text-orange-800 p-2 text-center flex justify-between items-center">
          <span>מוזמן{reservation.isPermanent ? ' (קבוע)' : ''}</span>
          <button 
            onClick={() => handleDeleteReservation(reservation.id)}
            className="text-orange-800 hover:text-orange-900"
          >
            <Trash2 size={16} />
          </button>
        </div>
      );
    }
    return <div className="bg-green-100 text-green-800 p-2 text-center">פנוי</div>;
  };

  // פונקציה למחיקת הזמנה
  const handleDeleteReservation = (id: string) => {
    setReservations(reservations.filter(r => r.id !== id));
  };

  // פונקציה להזמנת חדר
  const handleReservation = (room: string) => {
    setReservationDetails({ 
      ...reservationDetails, 
      room,
      date: new Date().toISOString().split('T')[0]
    });
    setShowReservationForm(true);
  };

  // פונקציה לשמירת ההזמנה
  const handleSubmitReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const newReservation = {
      id: Math.random().toString(36).substr(2, 9),
      room: reservationDetails.room,
      day: selectedDay,
      timeSlot: selectedTimeSlot,
      teacher: reservationDetails.teacher,
      subject: reservationDetails.subject || undefined,
      class: reservationDetails.class,
      date: reservationDetails.date,
      isPermanent: reservationDetails.isPermanent
    };
    setReservations([...reservations, newReservation]);
    setShowReservationForm(false);
    setReservationDetails({
      room: '',
      teacher: '',
      subject: '',
      class: '',
      date: new Date().toISOString().split('T')[0],
      isPermanent: false
    });
  };

  return (
    <div className="max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden bg-gray-50 min-h-screen flex flex-col" dir="rtl">
      {/* כותרת */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">מערכת ניהול חדרים - בית ספר</h1>
      </header>

      {/* תוכן ראשי */}
      <main className="flex-1 p-4">
        {/* לשוניות */}
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('search')}
            className={`px-4 py-2 ${activeTab === 'search' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}
          >
            <Search className="inline-block ml-2" size={20} />
            חיפוש חדר
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 ${activeTab === 'schedule' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}
          >
            <Calendar className="inline-block ml-2" size={20} />
            מערכת שעות
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`px-4 py-2 ${activeTab === 'new' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}
          >
            <Plus className="inline-block ml-2" size={20} />
            הזמנה חדשה
          </button>
        </div>

        {/* טופס הזמנה */}
        {showReservationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">הזמנת חדר</h3>
              <form onSubmit={handleSubmitReservation} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">חדר:</label>
                  <input
                    type="text"
                    value={reservationDetails.room}
                    readOnly
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">יום:</label>
                  <input
                    type="text"
                    value={selectedDay}
                    readOnly
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">שעה:</label>
                  <input
                    type="text"
                    value={TIME_SLOTS.find(slot => slot.id === selectedTimeSlot)?.display}
                    readOnly
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">תאריך:</label>
                  <input
                    type="date"
                    value={reservationDetails.date}
                    onChange={(e) => setReservationDetails({ ...reservationDetails, date: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">מורה:</label>
                  <input
                    type="text"
                    value={reservationDetails.teacher}
                    onChange={(e) => setReservationDetails({ ...reservationDetails, teacher: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">מקצוע (אופציונלי):</label>
                  <input
                    type="text"
                    value={reservationDetails.subject}
                    onChange={(e) => setReservationDetails({ ...reservationDetails, subject: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">כיתה:</label>
                  <input
                    type="text"
                    value={reservationDetails.class}
                    onChange={(e) => setReservationDetails({ ...reservationDetails, class: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isPermanent"
                    checked={reservationDetails.isPermanent}
                    onChange={(e) => setReservationDetails({ ...reservationDetails, isPermanent: e.target.checked })}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="isPermanent" className="text-gray-700">הזמנה קבועה</label>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowReservationForm(false)}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    ביטול
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    אישור הזמנה
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* תוכן הלשונית */}
        <div className="space-y-4">
          {activeTab === 'search' && (
            <div>
              {/* בחירת יום */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר יום:</label>
                <div className="flex gap-2 flex-wrap">
                  {DAYS.map(day => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-4 py-2 rounded ${
                        selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-200'
                      }`}
                    >
                      יום {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* בחירת שעה */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר שעה:</label>
                <select
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                >
                  {TIME_SLOTS.map(slot => (
                    <option key={slot.id} value={slot.id}>
                      {slot.display}
                    </option>
                  ))}
                </select>
              </div>

              {/* בחירת תאריך */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר תאריך:</label>
                <input
                  type="date"
                  value={reservationDetails.date}
                  onChange={(e) => setReservationDetails({ ...reservationDetails, date: e.target.value })}
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* תוצאות החיפוש */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">חדרים פנויים:</h3>
                <div className="grid gap-4">
                  {getAvailableRooms().map(room => (
                    <div key={room} className="border p-4 rounded shadow bg-white">
                      <div className="flex justify-between items-center">
                        <button 
                          onClick={() => handleReservation(room)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          הזמן
                        </button>
                        <div className="text-right">
                          <div className="font-bold">{room}</div>
                          <div className="text-sm text-gray-600">
                            פנוי ביום {selectedDay}, {TIME_SLOTS.find(slot => slot.id === selectedTimeSlot)?.display}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div>
              <h2 className="text-xl font-bold mb-4">מערכת שעות שבועית</h2>
              
              {/* בחירת חדר */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר חדר:</label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {ROOMS.map(room => (
                    <option key={room} value={room}>
                      {room}
                    </option>
                  ))}
                </select>
              </div>

              {/* רשימת הזמנות */}
              {reservations.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">הזמנות שבוצעו:</h3>
                  <div className="grid gap-4">
                    {reservations.map((reservation) => (
                      <div key={reservation.id} className="border p-4 rounded shadow bg-white">
                        <div className="flex justify-between items-start">
                          <button 
                            onClick={() => handleDeleteReservation(reservation.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 size={20} />
                          </button>
                          <div className="text-right">
                            <div className="font-bold">{reservation.room}</div>
                            <div className="text-sm text-gray-600">
                              יום {reservation.day}, {TIME_SLOTS.find(slot => slot.id === reservation.timeSlot)?.display}
                            </div>
                            <div className="text-sm text-gray-600">
                              תאריך: {reservation.date}
                            </div>
                            <div className="text-sm text-gray-600">
                              מורה: {reservation.teacher}
                            </div>
                            {reservation.subject && (
                              <div className="text-sm text-gray-600">
                                מקצוע: {reservation.subject}
                              </div>
                            )}
                            <div className="text-sm text-gray-600">
                              כיתה: {reservation.class}
                            </div>
                            {reservation.isPermanent && (
                              <div className="text-sm font-semibold text-blue-600">
                                הזמנה קבועה
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* טבלת מערכת שעות */}
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr>
                      <th className="border p-2">שעה</th>
                      {DAYS.map(day => (
                        <th key={day} className="border p-2">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TIME_SLOTS.map(slot => (
                      <tr key={slot.id}>
                        <td className="border p-2 font-medium">{slot.display}</td>
                        {DAYS.map(day => (
                          <td key={day} className="border p-2">
                            {getRoomStatus(selectedRoom, day, slot.id)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'new' && (
            <div>
              <h2 className="text-xl font-bold mb-4">הזמנת חדר חדשה</h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר חדר:</label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {ROOMS.map(room => (
                    <option key={room} value={room}>
                      {room}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר יום:</label>
                <div className="flex gap-2 flex-wrap">
                  {DAYS.map(day => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-4 py-2 rounded ${
                        selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-200'
                      }`}
                    >
                      יום {day}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר שעה:</label>
                <select
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                >
                  {TIME_SLOTS.map(slot => (
                    <option key={slot.id} value={slot.id}>
                      {slot.display}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">בחר תאריך:</label>
                <input
                  type="date"
                  value={reservationDetails.date}
                  onChange={(e) => setReservationDetails({ ...reservationDetails, date: e.target.value })}
                  className="w-full p-2 border rounded"
                />
              </div>
              {isRoomAvailable(selectedRoom, selectedDay, selectedTimeSlot, reservationDetails.date) ? (
                <button
                  onClick={() => handleReservation(selectedRoom)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  הזמן חדר
                </button>
              ) : (
                <div className="text-red-600">החדר תפוס בזמן שנבחר</div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 