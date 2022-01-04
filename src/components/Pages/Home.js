import React, {
  Fragment,
  // useContext
} from 'react';
import Users from '../users/Users.js';
import Search from '../users/Search.js';
// import { GlobalContext } from '../../context/theme/ThemeState.js';
export const Home = () => {
  // const { theme, themeSwitchHandler } = useContext(GlobalContext);
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};
export default Home;
