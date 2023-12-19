import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WeekDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [weekDates, setWeekDates] = useState([]);
  const [times, setTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const firstDayOfWeek = today.getDate();
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek + i);
      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        isSunday: date.getDay() === 0,
        fullDate: date
      };
    });

    const timeSlots = [];
    for (let hour = 10; hour <= 19; hour++) {
      timeSlots.push(`${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`);
      if (hour !== 19) { // Skip 7:30 PM slot
        timeSlots.push(`${hour % 12 === 0 ? 12 : hour % 12}:30 ${hour < 12 ? 'AM' : 'PM'}`);
      }
    }

    setWeekDates(dates);
    setTimes(timeSlots);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
       
        <div className="w-8"></div>
        <div className="flex space-x-2 overflow-auto">
          {weekDates.map(({ day, date, month, isSunday, fullDate }, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-sm font-medium rounded-lg ${
                selectedDate === fullDate.toISOString()
                  ? 'bg-green-500 text-white'
                  : 'text-gray-700 hover:bg-green-500 hover:text-white'
              } ${isSunday ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
              disabled={isSunday}
              onClick={() => setSelectedDate(fullDate.toISOString())}
            >
              {day} {month} {date}
            </button>
          ))}
        </div>
        {/* Right arrow placeholder */}
        <div className="w-8"></div>
      </div>

      {selectedDate && (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {times.map((time, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-sm font-medium rounded-lg ${
                selectedTime === time
                  ? 'bg-green-500 text-white'
                  : 'text-gray-700 hover:bg-green-500 hover:text-white'
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <button
          className={`py-2 px-4 rounded-lg text-white ${selectedDate && selectedTime ? 'bg-green-500' : 'bg-gray-300 cursor-not-allowed'}`}
          disabled={!selectedDate || !selectedTime}
          onClick={()=>navigate("/payment1")}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default WeekDatePicker;

