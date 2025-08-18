import React from 'react';
import './Profile.css'; // We'll create this next

function Profile() {
  return (
    <div className="profile">
      <h1>My Profile</h1>
      
      <div className="profile-pic">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLkgMcNIiaWkQI3zGWyPx84mr3lv8RnPh6PWXk0hlw3I1khm2-6QSIUD_lJHsSfn8gHk&amp;usqp=CAU"
          alt="Profile" 
        />
      </div>

      <div className="info">
        <p><strong>Name:</strong> Mikasa Ackerman</p>
        <p><strong>Email:</strong> mikasa@gmail.com</p>
        <p><strong>Joined:</strong> January 2023</p>
           <p><strong>Bio:</strong> This world is cruel,but it's also very beautiful</p>
      </div>

      <button className="edit-button">Edit Profile</button>
    </div>
  );
}

export default Profile;