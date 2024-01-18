import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../../data.js';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                {/* custom component attribute props - passing attribute props using spread operator 
            and object destrucring method */}
                {CORE_CONCEPTS.map(concept =>
                    <CoreConcept key={concept.title} {...concept} /> /* array of data dynamically */
                )}
            </ul>
        </section>
    );

}

