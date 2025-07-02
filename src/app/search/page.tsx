import SearchableList from "@/components/SearchableList";
import { ApiResponse, Item } from "@/types/item";

export default async function Search() {
  // TODO: 1. Fetch your items from a public API using Next.js server-side fetch
  // Link: https://pokeapi.co/api/v2/pokemon?limit=150

  const items: Item[] = []; // Replace with SearchableList items

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🚀 Search your pokemon</h1>
      {/* TODO: pass fetched `items` into the component below */}
      <SearchableList items={items} />
    </main>
  );
}
