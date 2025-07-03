import SearchableList from "@/components/SearchableList";
import { Item } from "@/types/item";

export default async function Search() {
  // TODO: 1. Fetch your items from a public API using Next.js server-side fetch
  // Link: https://pokeapi.co/api/v2/pokemon?limit=500

  const items: Item[] = []; // Transform the fetched data into the desired shape;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🚀 Search your pokemon</h1>
      {/* TODO: Render SearchableList component passing the correct data */}
    </main>
  );
}
