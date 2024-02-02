import React from "react";
import { Button } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary:
        "bg-red-500 hover:bg-blue-700 font-bold focus:ring-4 focus:ring-blue-300 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    },
  },
};
export default function Header() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button color="primary">Clique</Button>
    </Flowbite>
  );
}
