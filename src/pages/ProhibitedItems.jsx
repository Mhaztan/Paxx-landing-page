import React from 'react';

export const ProhibitedItems = () => {
  return (
    <div className="bg-accent text-bkg py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-invert">
        <h1 className="text-4xl font-extrabold text-white mb-6">Prohibited Items & Activities</h1>
        <p>To protect our users and ensure a positive experience, certain items and activities are strictly prohibited. Violations may result in account suspension.</p>
        
        <h2>1. Prohibited Items</h2>
        <p>Do not list, sell, or promote the following on PAXX:</p>
        <ul>
          <li><strong>Illegal items:</strong> Drugs, controlled substances, or any illegal goods.</li>
          <li><strong>Weapons:</strong> Firearms, knives, explosives, or any items intended to harm.</li>
          <li><strong>Counterfeit products:</strong> Fake merchandise or unauthorized branded items.</li>
          <li><strong>Hazardous materials:</strong> Toxic chemicals, flammable items, or dangerous equipment.</li>
          <li><strong>Adult content:</strong> Pornographic materials or sexual services.</li>
          <li><strong>Stolen goods:</strong> Any item that is stolen or obtained illegally.</li>
        </ul>

        <h2>2. Prohibited Activities</h2>
        <p>Users must not engage in the following behaviors:</p>
        <ul>
          <li><strong>Scamming or fraud:</strong> Misleading buyers or sellers.</li>
          <li><strong>Harassment or bullying:</strong> Threatening or intimidating other users.</li>
          <li><strong>Spamming:</strong> Posting repetitive or irrelevant content.</li>
          <li><strong>Impersonation:</strong> Pretending to be another user or official PAXX staff.</li>
        </ul>
      </div>
    </div>
  );
};