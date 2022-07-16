/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md bg-blue-50 h-screen`}>
      <title>Manas' Portofolio Page</title>
      <img
        class={tw`object-center object-none w-full h-12 m-2`}
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`text-center text-blue-600`}>
        <a href="/about">About me</a>
      </p>

      <p class={tw`my-6`}>A simple homepage.</p>
    </div>
  );
}
