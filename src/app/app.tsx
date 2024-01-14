import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="folder-structure-example-by-feature" />
    </StyledApp>
  );
}

export default App;
