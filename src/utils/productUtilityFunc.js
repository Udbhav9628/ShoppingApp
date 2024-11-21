export const filterItem = (allData, seletedSize) => {
  const filteredItems = allData.filter((item) =>
    item.availableSizes?.includes(seletedSize)
  );
  return filteredItems;
};

export const sortItems = (allItems, sortIn) => {
  const data = [...allItems];
  if (sortIn === 'ascending') {
    return data.sort((a, b) => a?.price - b?.price);
  } else {
    return data.sort((a, b) => b?.price - a?.price);
  }
};

export const addToCartUtilityFunc = (allItems, newItem) => {
  const addedItems = [...allItems];
  const itemIndex = addedItems.findIndex((item) => item.id === newItem?.id);
  if (itemIndex !== -1) {
    addedItems[itemIndex] = {
      ...addedItems[itemIndex],
      quantity: addedItems[itemIndex].quantity + 1,
    };
    return addedItems;
  } else {
    const data = [...addedItems, { ...newItem, quantity: 1 }];
    return data;
  }
};

export const decreaseQuantityUtilityFunc = (addedItems, newItem) => {
  const updatedItems = [...addedItems];
  const itemIndex = updatedItems.findIndex((item) => item.id === newItem?.id);

  if (itemIndex !== -1 && updatedItems[itemIndex].quantity > 1) {
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      quantity: updatedItems[itemIndex].quantity - 1,
    };
  }
  return updatedItems;
};
