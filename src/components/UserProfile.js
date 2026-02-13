import React from 'react';

const UserProfile = () => {
  // Fetch user data here or receive it as props
  const userData = {
    username: 'Pratthika',
    email: 'prat22112.cs@rmkec.ac.in',
    bloodGroup: 'B+',
    medical_history: 'nil',
    // Add more user data fields as needed
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Blood Group: {userData.bloodGroup}</p>
      {/* Display other user data */}
    </div>
  );
}

export default UserProfile;
