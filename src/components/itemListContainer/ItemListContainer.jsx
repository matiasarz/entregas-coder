import ItemCount from '../itemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({text}) => {
    const productos = [
        {
            imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_993197-MLA41298888949_032020-W.jpg',
            id: 1
        },
        {
            imgUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/047/907/products/manzana-070319e41bb1720ed915702021215596-1024-1024.jpg',
            id: 2
        },
        {
            imgUrl: 'https://tommyargentina.vteximg.com.br/arquivos/ids/193983-500-667/MW0MW10839_BDS_1.jpg?v=637768241192800000',
            id: 3
        },
    ]

    return (
        <>
            <main className="mainContainer">
                <h1>{text}</h1>
                <div className='productsContainer'>
                    {
                        productos.map(prod => (
                            <ItemCount 
                                key={prod.id} 
                                imgUrl={prod.imgUrl}
                                initial={1}
                                stock={15}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default ItemListContainer