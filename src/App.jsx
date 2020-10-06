import * as React from 'react';

import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const App = () => {
  const debug =
    process.env.NODE_ENV === 'production' ? undefined : new DebugEngine();

  const engine = new Styletron();
  return (
    <>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <h3>Hello world !</h3>
      </StyletronProvider>
    </>
  );
};

export default App;
