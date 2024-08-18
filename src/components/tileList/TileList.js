import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ( {items} ) => {
  if (!items || !items.length) {
    return <div>No items to display</div>;
  }

  return (
    <div>
      {items.map((contact, index) => {
        const { name, ...rest } = contact;
        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};
