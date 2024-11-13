import { getDocuments } from "outstatic/server"; // Replace with actual import path based on Outstatic’s docs

export default function Page() {
  const collections = getDocuments("posts", ["title"]);
  console.log(collections);

  return <div></div>;
}
