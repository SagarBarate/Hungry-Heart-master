const ItemList =({items})=>{
    //console.log(items);
    console.log(items)

    return(
       <div>
         {items.map((item) => (
        <div key={item?.card?.info?.badgesV2?.id} >
            <div>
                <span>{item.card.info.itemBadge.name}</span>
                <span>{item.card.info.itemBadge.price}</span>
            </div>
            <p>{item.card.info.badgesV2.description}</p>
            </div>
            ))}
            <p>item</p>
       </div>
    );
}

export default ItemList;
