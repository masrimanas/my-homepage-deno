/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Manas' Portofolio Page");
    return resp;
  },
};

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md bg-blue-50 h-screen`}>
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
