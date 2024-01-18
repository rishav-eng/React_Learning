import '../CoreConcepts/CoreConcepts.css';

// Custom Component with props usage and re-usage of same component 
export default function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} title={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
