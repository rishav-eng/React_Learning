import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { useState } from 'react';

function App() {
  //react state hook will return an array with two elements and destructing.
  const [selectedTopic,setTopic] = useState('please click a button'); 

  console.log('App component executing');

  // event handler implementation in react
  function clickHandler(selected_component) {
   setTopic(selected_component); //react Hooks method
    console.log(selectedTopic);
  }

  
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* custom component attribute props - passing attribute props using spread operator 
            and object destrucring method */}
            {CORE_CONCEPTS.map(concept =>
              <CoreConcept {...concept} />
            )}

          </ul>
        </section>

        {/* custom component attribute props - content b/w closing and opening tag same like html */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>clickHandler("Components")}>Components</TabButton>
            <TabButton onSelect={()=>clickHandler("JSX")}>JSX</TabButton>
            <TabButton onSelect={()=>clickHandler("Props")}>Props</TabButton>
            <TabButton onSelect={()=>clickHandler("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  )
}

export default App;
