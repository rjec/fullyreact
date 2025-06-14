import React from 'react';
import { FlashcardItem } from '../types';

interface HomePageProps {
  onOpenModal: (data: FlashcardItem) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenModal }) => {
    const flashcards: FlashcardItem[] = [
        {
          title: 'Welcome to Lab Testing Solutions',
          description: 'Your trusted partner for accurate and reliable lab results.',
          modalTitle: 'Welcome!',
          modalContent: <p>We are committed to providing the highest quality lab testing services. Our state-of-the-art facilities and experienced team ensure you receive timely and accurate results you can depend on.</p>
        },
        {
          title: 'Our Services',
          description: 'A wide range of testing options to meet your needs.',
          modalTitle: 'Our Services',
          modalContent: (
            <ul>
              <li>- Diagnostic Testing</li>
              <li>- Wellness Screenings</li>
              <li>- Genetic Testing</li>
              <li>- And more...</li>
            </ul>
          )
        },
        {
            title: 'Book an Appointment',
            description: 'Schedule your test at a time that works for you.',
            modalTitle: 'Book an Appointment',
            modalContent: (
              <p>
                Booking an appointment is easy. Simply visit our scheduling page or call our customer service line to find a time and location that is convenient for you. We offer flexible hours to accommodate your busy schedule.
              </p>
            )
          },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {flashcards.map((card, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700" onClick={() => onOpenModal(card)}>
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
