import Header from "./Header";

function Home() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-rose-300 from-rose-600">
          Manage your tasks
        </span>{" "}
        with ease and efficiency.
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        "Code your way to greatness, turning lines of logic into innovative
        solutions that shape the future." (Programa tu camino hacia la grandeza,
        convirtiendo líneas de lógica en soluciones innovadoras que moldean el
        futuro.)
      </p>
      <Header />
    </div>
  );
}

export default Home;
