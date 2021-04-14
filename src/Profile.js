import React from 'react';

const data = {
  gororing: {
    name: 'yoseph',
    description: 'hello',
  },
  gildong: {
    name: 'hong',
    description: 'novel',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>not found user</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
