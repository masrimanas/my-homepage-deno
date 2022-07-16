/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import Counter from '../islands/Counter.tsx';

export default function About() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md bg-blue-50 h-screen`}>
      <a href="/">
        <img
          class={tw`object-center object-none w-full h-12 m-2`}
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </a>
      <h1 class={tw`font-bold`}>Ayatul Ikhsan</h1>
      <h2 class={tw`font-semibold`}>Front-End Developer</h2>
      <p class={tw`my-6`}>
        I am a former English Teacher who is currently trying to pursue my
        childhood dream to become a programmer.
      </p>
    </div>
  );
}
