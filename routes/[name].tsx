/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { PageProps } from '$fresh/server.ts';

export default function NotFoundPage(props: PageProps) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md bg-blue-50 h-screen`}>
      <a href="/">
        <img
          class={tw`object-center object-none w-full h-32 m-2`}
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </a>

      <p class={tw`my-6 text-center text-blue-600`}>
        <a class={tw``} href="/">
          Back
        </a>
      </p>
      <p class={tw`my-6 text-center`}>
        The page you are trying to access{' '}
        <strong>{`/${props.params.name}`}</strong> is not exist!
      </p>
    </div>
  );
}
