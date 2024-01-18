// usage of forwading props to wrapped element  - Wrapper component
export default function Section({title,children, ...props}){
    return(
        /*  here id other props attributes getting thorugh
          object destructring except the props which we have explicitly extracted: title*/
        <section {...props}>  
         <h2>{title}</h2>
         {children}
        </section>
    )
}