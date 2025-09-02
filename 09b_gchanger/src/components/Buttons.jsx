function Buttons({name}){
    return(
        <button className={`bg-${name} m-1.5 p-0 rounded-4xl font-medium`}>{name}</button>
    )
}

export default Buttons