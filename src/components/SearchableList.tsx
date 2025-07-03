// components/SearchableList.tsx
import { Item } from "@/types/item";

interface Props {
  items: Item[];
}

export default function SearchableList({ items }: Props) {
  // TODO: Render:
  //   • a text <input> for search
  //   • a list (e.g. <ul> and <li>) mapping over filteredItems
  //   • an empty state message if no items match or if you haven't searched yet

  return (
    <section>
      {/* TODO: Search input */}
      {/* TODO: Render filtered list */}
    </section>
  );
}
