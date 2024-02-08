'use client'

import React, { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');
    setFormData({
      id: '',
      name: '',
    });

    console.log(formData);

  };

  const handleClear =  (e) => {
    e.preventDefault();
    setFormData({
      id: '',
      name: '',
    });
    console.log('clear');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log('change');
  };

  return (
    <div>
      This is home page
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={formData.id}
            onChange={handleInputChange}
            className='block w-1/2 p-2 border border-gray-300 rounded'
            type="text"
            placeholder='ID'
            name="id"
          />
          <input
            
            value={formData.name}
            onChange={handleInputChange}
            className='block w-1/2 p-2 border border-gray-300 rounded'
            type="text"
            placeholder='Name'
            name="name"
          />
        </form>
        <div className='flex gap-x-3'>
          <button onClick={handleSubmit} type="submit"  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
          <button onClick={handleClear} type="submit"  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
