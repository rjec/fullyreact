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

const LegalPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Legal Testing</h2>
      <p className="mb-6">
        Lab Testing Solutions is a trusted partner for court-ordered and probation drug testing, simplifying the process for individuals and legal entities.
      </p>

      <Section title="Why Drug Testing is Ordered by Courts">
        <p>Court-ordered drug testing is mandated to ensure compliance with legal standards related to drug use, often in critical situations such as:</p>
        <ul className="list-disc pl-5 mt-2">
            <li>**Child Custody Cases:** To ensure a safe living environment for children.</li>
            <li>**Criminal Probation:** To monitor individuals and ensure adherence to release conditions.</li>
            <li>**Divorce Cases:** To assess the impact of substance abuse on financial settlements or custody agreements.</li>
        </ul>
      </Section>

      <Section title="Types of Tests Used for Legal Matters">
        <p>Courts may order various test types based on the detection window and accuracy needed:</p>
        <ul className="list-disc pl-5 mt-2">
            <li>**Urine Tests:** Common for recent usage.</li>
            <li>**Hair Tests:** Provide a longer detection window (up to 90 days).</li>
            <li>**Blood Tests:** Very accurate for detecting exact amounts of drugs at the time of testing.</li>
            <li>**Saliva Tests:** Easy to administer and less invasive, with quick results.</li>
        </ul>
      </Section>

      <Section title="Procedures and Expectations">
        <p>The process typically involves notification, testing at an approved facility, sample collection with a strict chain of custody, and analysis by certified laboratories. If an observed test is required, you should contact the testing facility after picking it to ensure they offer this service.</p>
      </Section>

      <Section title="Accessing Results for Legal Drug Tests">
        <p>If a drug test was ordered for legal purposes, results are sent directly to the designated law office or public agency. Probation officers can log in to our secure servers to access test results directly, ensuring data integrity and confidentiality.</p>
      </Section>

      <Section title="Implications of Positive or Failed Tests">
        <p>A positive or failed drug test can have serious implications, including loss of custody, probation revocation, or other legal consequences. For probation-specific inquiries, you can visit ProbationDrugTesting.com.</p>
      </Section>
    </div>
  );
};

export default LegalPage;
