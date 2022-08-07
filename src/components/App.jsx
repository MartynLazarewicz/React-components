import { Wrapper } from './Wrapper/Wrapper';

import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
    </Wrapper>
  );
};
