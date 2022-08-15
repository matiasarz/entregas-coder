const Title = ({ data, toggle }) => {

    const { name } = data;
    return (
        <div className='title' style={toggle}>
            <h5>{name}</h5>
        </div>
    )
}

export default Title
