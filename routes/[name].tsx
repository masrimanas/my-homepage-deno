import { PageProps } from "$fresh/server.ts";

export default function NotFoundPage(props: PageProps) {
  return (
    <div class="p-4 mx-auto max-w-screen-md bg-blue-50 h-screen">
      <a href="/">
        <img
          class="object-center object-none w-full h-12 m-2"
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </a>

      <p class="my-6 text-center text-blue-600">
        <a class="" href="/">
          Back
        </a>
      </p>
      <p class="my-6 text-center">
        The page you are trying to access{" "}
        <strong>{`/${props.params.name}`}</strong> is not exist!
      </p>
    </div>
  );
}
