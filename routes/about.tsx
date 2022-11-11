// import Counter from '../islands/Counter.tsx';

import MainMenu from "../components/header/Menu.tsx";

export default function About() {
  return (
    <>
      <title>About Page | Manas' Portofolio Page</title>
      <div class="container p-4 mx-auto bg-blue-50 h-screen dark:bg-gray-900 dark:text-gray-100">
        <MainMenu />
        <a href="/">
          <img
            class="object-center object-none w-full h-12 m-2"
            src="/logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </a>
        <h1 class="font-bold">Masri Manas</h1>
        <h2 class="font-semibold">Flutter Developer</h2>
        <p class="my-6">
          I am a former English Teacher who is currently trying to pursue my
          childhood dream to become a programmer.
        </p>
      </div>
    </>
  );
}
