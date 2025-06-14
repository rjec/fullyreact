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

const BusinessPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Business Solutions</h2>
      <p className="mb-6">
        At Lab Testing Solutions, we offer robust drug and alcohol testing services tailored for businesses, focusing on compliance, safety, and productivity.
      </p>

      <Section title="Workplace Drug Testing">
        <p>Implementing a drug testing program is crucial for maintaining a safe and productive environment. We support various testing purposes:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>**Pre-Employment Screening:** For potential employees before they start a job.</li>
          <li>**Random Drug Testing:** As part of workplace drug policies.</li>
          <li>**Post-Accident Testing:** Following incidents, to determine impairment.</li>
          <li>**Reasonable Suspicion Testing:** When observed behavior suggests drug use.</li>
          <li>**Return-to-Duty & Follow-Up Testing:** For employees returning after a violation or rehabilitation.</li>
        </ul>
      </Section>

      <Section title="Compliance and Regulations">
        <p>Employers must navigate complex federal and state laws regarding workplace drug testing.</p>
        <h4 className="font-semibold mt-4">Federal Laws:</h4>
        <ul className="list-disc pl-5 mt-2">
          <li>**Drug-Free Workplace Act (1988):** Requires federal contractors and grantees to maintain a drug-free workplace, though it doesn't mandate testing.</li>
          <li>**Americans with Disabilities Act (ADA):** Protects recovering addicts, but not current illegal drug users.</li>
          <li>**Department of Transportation (DOT) Regulations:** Mandates strict drug and alcohol testing for safety-sensitive positions in transportation sectors. Our AI-driven solution aims for nearly 100% compliance with FMCSA regulations for trucking operations.</li>
        </ul>
        <h4 className="font-semibold mt-4">State Laws:</h4>
        <p>Vary widely and may include specific requirements for consent, notice, limitations on testing circumstances, privacy considerations, and consequences of positive tests.</p>
      </Section>

      <Section title="Handling Positive Test Results">
        <p>A systematic approach is crucial for employers when dealing with positive drug test results:</p>
        <ol className="list-decimal pl-5 mt-2">
          <li>**Confirmation:** Ensuring the initial positive result is confirmed by an accredited laboratory.</li>
          <li>**Notification:** Confidentially discussing results with the employee and allowing them to explain.</li>
          <li>**Policy Review:** Reviewing company policy and legal requirements to determine appropriate action.</li>
          <li>**Action:** Possible actions include suspension, termination, or referral to an Employee Assistance Program (EAP).</li>
          <li>**Documentation:** Recording all actions taken and decisions made.</li>
          <li>**Follow-Up:** If the employee remains, conduct scheduled or random follow-up tests.</li>
        </ol>
      </Section>

      <Section title="AI and Automation in Lab Testing">
        <p>We are at the forefront of integrating automation and AI into lab testing to enhance diagnostic capabilities and customer service.</p>
        <ul className="list-disc pl-5 mt-2">
            <li>**Automation:** Increases efficiency, enhances accuracy, and improves scalability by minimizing human error and speeding up processing.</li>
            <li>**AI Applications:** Used for predictive analytics, image analysis, personalized reports, and can enhance the interpretation of test results, predict patterns of substance abuse, and aid in designing treatment plans. Our AI-driven customer service provides 24/7 support, answering queries, scheduling appointments, and guiding patients.</li>
        </ul>
      </Section>

      <Section title="Testing Methods and Panels">
        <p>LTS offers various drug testing panels and methods to suit different business needs:</p>
        <h4 className="font-semibold mt-4">Panels:</h4>
        <p>Common options include 5-panel, 10-panel, and 12-panel tests.</p>
        <h4 className="font-semibold mt-4">Methods:</h4>
        <ul className="list-disc pl-5 mt-2">
          <li>**Urine Testing:** Cost-effective, rapid results, widely accepted.</li>
          <li>**Hair Testing:** Extended detection period (up to 90 days).</li>
          <li>**Blood Testing:** High accuracy, immediate detection.</li>
          <li>**Saliva Testing:** Easy to administer, less invasive, quick results.</li>
        </ul>
      </Section>
    </div>
  );
};

export default BusinessPage;
