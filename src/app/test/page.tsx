import { getCollections } from "outstatic/server"; // Replace with actual import path based on Outstatic’s docs

export default function Page() {
  const collections = getCollections();
  console.log(collections);

  return <div>{collections}</div>;
}
