import SearchableList from "@/components/SearchableList";
import { ApiResponse, Item } from "@/types/item";

export default async function Home() {
  // TODO: 1. Fetch your items from a public API using Next.js server-side fetch
  // Link: https://pokeapi.co/api/v2/pokemon?limit=150

  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5000");
  const data = await res.json();

  const items: Item[] = data.results.map(
    (item: ApiResponse, index: number) => ({
      id: index + 1, // Assigning a unique ID based on the index
      name: item.name,
    })
  );

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🚀 Search your pokemon</h1>
      {/* TODO: pass fetched `items` into the client component below */}
      <SearchableList items={items} />
    </main>
  );
}
