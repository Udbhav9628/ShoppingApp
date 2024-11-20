export const filterItem = (allData , seletedSize)=> {
    const filteredItems = allData.filter(item=> item.availableSizes?.includes(seletedSize))
    return filteredItems
}


export const sortItems = (allItems, sortIn) => {
    const data = [...allItems];
    if (sortIn === 'accending') {
     return data.sort((a, b) => a?.price - b?.price);
    } else {
     return data.sort((a, b) => b?.price - a?.price);
    }
 };