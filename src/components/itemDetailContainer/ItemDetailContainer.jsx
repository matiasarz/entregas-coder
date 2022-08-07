import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = ({ data, setMount }) => {

    return (
        <>
          <ItemDetail data={data} setMount={setMount} />
        </>
    )
}

export default ItemDetailContainer
