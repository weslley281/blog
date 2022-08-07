export function Post(props){
    return(
        <>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>Escripo por: {props.author}</p>
        </> 
    )
}