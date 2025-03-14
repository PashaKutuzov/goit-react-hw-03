


export default function Contact ({data, onDelete}) {
    return(
        <div>
            <p>{data.name}</p>
            <p>{data.number}</p>
            <button onClick={() => onDelete(data.id)} type="button">Delete</button>
        </div>
    )
}