import React from "react";
import { Main } from "../home/main";

export function meta() {
  return [
    { title: "bonny's space (WIP)" },
    { name: "description", content: "this is what i do when im bored :3" },
  ];
}

export default function Home() {
  return <Main />;
}
