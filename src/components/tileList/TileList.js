import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ( {contacts} ) => {
  if (!contacts || !contacts.length) {
    return <div>No contacts to display</div>;
  }

  return (
    <div>
      {contacts.map((contact, index) => {
        const { name, ...rest } = contact;
        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};
