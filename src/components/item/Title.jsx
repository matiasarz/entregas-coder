const Title = ({ data }) => {

    const { name, size } = data;
    return (
        <div className='hola'>
            <h5>{name}</h5>
            <h5>Talle: {size}</h5>
        </div>
    )
}

export default Title
