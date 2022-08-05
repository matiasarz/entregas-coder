const Title = ({ data, toggle }) => {

    const { name, size } = data;
    return (
        <div className='title' style={toggle}>
            <h5>{name}</h5>
            <h5>Talle: {size}</h5>
        </div>
    )
}

export default Title
