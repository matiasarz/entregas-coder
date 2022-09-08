import './Dashboard.css';

const ItemRequested = ({ ItemRequested }) => {
    const { imgUrl, name, count, price } = ItemRequested;

    return (
        <div className="itemRequested">
            <img src={imgUrl} alt={name} className="ItemRequestedImg" />
            <p>{name}</p>
            <p>Total: ${price * count}</p>
        </div>
    );
};

export default ItemRequested;
