// Filter.js

import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false);
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleFilter = () => {
    // Construct filter object based on state
    const filters = {
      minExperience,
      companyName,
      location,
      remote,
      techStack,
      role,
      minBasePay
    };
    // Pass filters to parent component for processing
    onFilter(filters);
  }

  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="Minimum Experience" 
        value={minExperience} 
        onChange={(e) => setMinExperience(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Company Name" 
        value={companyName} 
        onChange={(e) => setCompanyName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <label>
        <input 
          type="checkbox" 
          checked={remote} 
          onChange={(e) => setRemote(e.target.checked)} 
        />
        Remote
      </label>
      <input 
        type="text" 
        placeholder="Tech Stack" 
        value={techStack} 
        onChange={(e) => setTechStack(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Role" 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Minimum Base Pay" 
        value={minBasePay} 
        onChange={(e) => setMinBasePay(e.target.value)} 
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
}

export default Filter;
