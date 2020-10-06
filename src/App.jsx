import * as React from 'react';

import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import DesignSketches from 'components/DesignSketches';
import Query from 'components/Query';

const App = () => {
  const debug =
    process.env.NODE_ENV === 'production' ? undefined : new DebugEngine();

  const engine = new Styletron();
  return (
    <>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <DesignSketches />
        <Query />
      </StyletronProvider>
    </>
  );
};

export default App;
