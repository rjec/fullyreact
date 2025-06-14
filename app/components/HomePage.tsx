import React from 'react';
import { FlashcardItem } from '../types';

interface HomePageProps {
  onOpenModal: (data: FlashcardItem) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenModal }) => {
    const flashcards: FlashcardItem[] = [
        {
          title: 'Welcome to Lab Testing Solutions',
          description: 'A nationwide provider of drug and alcohol testing services, making your experience seamless and stress-free.',
          modalTitle: 'Your Partner in Testing',
          modalContent: (
            <div>
              <p className="mb-4">
                Welcome to Lab Testing Solutions (LTS), a nationwide provider of drug and alcohol testing services. Our goal is to make your drug testing experience as seamless and stress-free as possible by offering accurate, fast, and compliant testing across multiple industries. We are committed to providing comprehensive information and services to meet your diverse testing needs.
              </p>
              <p>
                We pride ourselves on our extensive network, offering access to over 10,000 locations across the United States. We partner with major national labs like Quest Diagnostics and LabCorp, allowing you to use your unique barcode at any affiliated location nationwide. This barcode acts like a tracking number, essential for tracking your test from generation to completion. No payment is required at the collection site as all billing is handled through our system.
              </p>
            </div>
          )
        },
        {
          title: 'Our Lab-Based Process',
          description: 'Our process is designed for accuracy and reliability, with specimens handled by accredited laboratories.',
          modalTitle: 'How Our Testing Works',
          modalContent: (
            <div>
                <p className="mb-4">
                    Our lab-based drug testing process is designed for accuracy and reliability: a specimen is collected at an LTS site, sealed, and shipped to an accredited laboratory. The lab then performs the test using various methods (e.g., immunoassay, GC-MS, LC-MS/MS) and reports results to LTS, which then reports them to the customer.
                </p>
                <p>
                    Our partner laboratories are accredited by organizations like the College of American Pathologists (CAP) or the Drug Enforcement Administration (DEA), and we implement quality control measures such as splitting specimens and conducting regular audits.
                </p>
            </div>
          )
        },
        {
            title: 'Fast & Reliable Results',
            description: 'Most results are available within 24-48 hours, with clear processes for confirmation analysis.',
            modalTitle: 'Receiving Your Results',
            modalContent: (
                <div>
                    <p className="mb-4">
                        Generally, most drug test results are available within 24-48 hours of being received by the lab. However, factors like the type of test, sample volume, lab workload, and shipping can influence turnaround times. If any findings are detected, lab-based tests may experience a time extension of 5 more business days for confirmation analysis using techniques like LC-MS and GC-MS.
                    </p>
                    <p>
                        For any inquiries or assistance, you can contact us directly via email at info@labtestingsolutions.com or by calling our customer support line at 1-866-777-8667. Online support is also available through our website.
                    </p>
                </div>
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
