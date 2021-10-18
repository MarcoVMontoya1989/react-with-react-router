import React from 'react';
import {Route} from "react-router-dom";

const WelcomeComponent = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path={'/welcome/:userId'}>
        {/*welcome user: {params.userId}*/}
        hello user!
      </Route>
    </section>
  );
};

export default WelcomeComponent;