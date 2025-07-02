import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-xl mx-auto p-8 bg-white rounded-3xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        🚀 Search Your Pokémon – What to Implement
      </h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-6 text-lg">
        <li className="flex items-start">
          <span className="text-2xl mr-3">⚙️</span>
          <div>
            <strong className="font-semibold text-xl">
              Server-side Data Fetching:
            </strong>
            <p className="mt-1">
              Use Next.js SSR capabilities to fetch data from the public Pokémon
              API.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🔧</span>
          <div>
            <strong className="font-semibold text-xl">Data Typing:</strong>
            <p className="mt-1">
              Transform the API response into a list of objects with{" "}
              <code className="bg-gray-100 px-1 rounded">id</code> and{" "}
              <code className="bg-gray-100 px-1 rounded">name</code> properties.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🎛️</span>
          <div>
            <strong className="font-semibold text-xl">
              Interactive Interface:
            </strong>
            <p className="mt-1">
              Complete the{" "}
              <code className="bg-gray-100 px-1 rounded">
                {"<SearchableList />"}
              </code>{" "}
              component with a search field and a list that updates dynamically
              based on the entered text.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">⚡</span>
          <div>
            <strong className="font-semibold text-xl">
              Efficient Filtering:
            </strong>
            <p className="mt-1">
              Ensure the list filtering runs only when the data or search term
              changes to avoid unnecessary work.
            </p>
          </div>
        </li>

        <li className="flex items-start">
          <span className="text-2xl mr-3">🔒</span>
          <div>
            <strong className="font-semibold text-xl">Stable Actions:</strong>
            <p className="mt-1">
              Keep event handlers identity-stable to reduce re-renders and
              enable future optimizations.
            </p>
          </div>
        </li>
      </ol>
      <Link href={"/search"} className="flex justify-center">
        <button className="mt-8 w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
          Start Coding!!
        </button>
      </Link>
    </section>
  );
}
