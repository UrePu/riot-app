// ItemPage.tsx
import React from "react";
import { fetchItemList } from "../../utils/serverApi";
import Item from "@/components/Item";
import { ItemType } from "@/types/Items";
type ItemObject = Omit<ItemType, "id">;

const ItemPage = async () => {
  const data = await fetchItemList();

  const itemList: ItemType[] = Object.entries(data.data).map(
    ([itemId, itemData]) => ({
      id: itemId,
      ...(itemData as ItemObject),
    })
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">아이템 목록</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {itemList.map((item, i) => (
          <Item item={item} key={i} version={data.version} />
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
