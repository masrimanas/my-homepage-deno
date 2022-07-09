/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
// import Counter from '../islands/Counter.tsx';

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class={tw`font-bold`}>Masri Manas</h1>
      <h2 class={tw`font-semibold`}>Flutter Developer</h2>
      <p class={tw`my-6`}>
        I am a former English Teacher who is currently trying to pursue my
        childhood dream to become a programmer.
      </p>
    </div>
  );
}
