import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) =>
{
    const onAdd = (qty) => {
        alert(`Has seleccionado ${qty} items`);
    }

    return(
        <>
            <p>{greeting}</p>
            <ItemCount stock = {5} initial = {1} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;