import React, { useState } from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-indigo-400 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && <div className="mt-2 text-gray-300">{children}</div>}
    </div>
  );
};

const PersonalPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personal Testing</h2>
      <p className="mb-6">
        For individuals needing a drug test for personal reasons, Lab Testing Solutions offers flexible and convenient options. You might need a drug test for self-monitoring, or if you purchased the test for yourself only and nobody else needs to see the results.
      </p>

      <Section title="Types of Personal Tests Offered">
        <h4 className="font-semibold mt-4">Drug Testing:</h4>
        <p>Common drug test panels include the 5-panel and 10-panel urine tests. We also offer hair, blood, and saliva tests, each with different detection windows. For personal or legal testing, LTS offers lower and more sensitive cutoff levels than normal.</p>
        
        <h4 className="font-semibold mt-4">Health & Wellness DNA Testing:</h4>
        <p>Beyond drug tests, we offer genetic testing services that revolutionize preventive health by analyzing your unique genetic makeup.</p>
        <ul className="list-disc pl-5 mt-2">
            <li>**GxSlim (Health Weight):** Analyzes genetic markers for personalized weight-loss insights.</li>
            <li>**GxRenew (Age Renew):** Examines genetic markers for insights into skin health, mental function, and more.</li>
            <li>**GxNutrient (Nutrient Absorption):** Provides personalized nutrition and supplement suggestions.</li>
            <li>**GxPerform (Fitness and Strength):** Offers insights into genetic traits linked to physical performance.</li>
            <li>**GxGutHealth:** Provides insights into your microbiome and nutrient absorption.</li>
        </ul>
      </Section>

      <Section title="Preparing for Your Test">
        <p>To ensure a smooth process, consider these tips:</p>
        <ul className="list-disc pl-5 mt-2">
            <li>**Timing:** Most sites collect specimens from 9 am to 4 pm.</li>
            <li>**Hydration:** Drink at least 16 oz of water one hour before your arrival.</li>
            <li>**Hair Length:** For hair drug tests, ensure your head hair is at least 1.5 inches long.</li>
            <li>**Children:** Do not bring children to your drug test appointment.</li>
            <li>**Attire:** Dress casually for your visit.</li>
            <li>**Medications:** If taking prescription medications, bring documentation.</li>
        </ul>
      </Section>

      <Section title="Accessing and Managing Your Test">
        <h4 className="font-semibold mt-4">Accessing Your Results (Self-Purchased):</h4>
        <p>If you purchased the test for personal reasons, you'll receive an email with instructions and login credentials to view your results.</p>
        
        <h4 className="font-semibold mt-4">Managing Your Appointment and Barcode:</h4>
        <ul className="list-disc pl-5 mt-2">
            <li>**Barcode Validity:** Your barcode is valid nationally and can be used at any respective lab within our network.</li>
            <li>**Changing Locations:** If you need to change the lab location, contact our support team to reassign your barcode.</li>
            <li>**Expired Barcode:** If your barcode expires, contact us to request a new one at no additional charge.</li>
            <li>**Refunds:** You can request a refund for unused tests through our Refund Request page.</li>
        </ul>
      </Section>
    </div>
  );
};

export default PersonalPage;
