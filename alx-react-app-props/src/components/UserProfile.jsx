import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const userData = useContext(UserContext); // Consume user data from context

  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{userData.name}</h2>
      <p style={{ fontSize: '16px', marginBottom: '5px' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{userData.age}</span>
      </p>
      <p style={{ fontSize: '14px', color: 'gray' }}>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
