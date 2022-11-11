import { Handlers } from "$fresh/server.ts";
import MainMenu from "$header/Menu.tsx";

export default function Home() {
  return (
    <>
      <title>Manas' Portofolio Page</title>
      <div class="container p-4 mx-auto bg-blue-50 h-screen dark:bg-gray-900 dark:text-gray-100">
        <MainMenu />

        <p class="my-6">A simple homepage. Let's go!! </p>
      </div>
    </>
  );
}
