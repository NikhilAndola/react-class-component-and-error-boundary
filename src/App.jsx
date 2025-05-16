import CountReactClassBased from './components/CountReactClassBased';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <>
      <h1>React Class Component</h1>
      
      <ErrorBoundary fallback={<h3>Error has occured</h3>}>
        <CountReactClassBased title="Mango" />
      </ErrorBoundary>

    </>
  );
};

export default App;
