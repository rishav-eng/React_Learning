import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    // React fragments to avoid unnecessary div in DOM
    <>
      {/* Split up code in seperate components feature wise to make our app component more cleaner */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App;
