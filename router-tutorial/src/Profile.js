import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  yoseph: {
    name: 'Lee',
    description: 'hello',
  },
  nana: {
    name: 'Kawabata',
    description: 'hi',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <dv>존재하지 않는 사람입니다.</dv>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
