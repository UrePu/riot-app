// ItemPage.tsx
import React from "react";
import { fetchItemList } from "../utils/serverApi";
import Item from "@/components/Item";
import { ItemType } from "@/types/Items";
type Object = Omit<ItemType, "id">;

const ItemPage = async () => {
  const data = await fetchItemList();

  const itemList: ItemType[] = Object.entries(data.data).map(
    ([itemId, itemData]) => ({
      id: itemId,
      ...(itemData as Object),
    })
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {itemList.map((item, i) => (
        <Item item={item} key={i} version={data.version} />
      ))}
    </div>
  );
};

export default ItemPage;
