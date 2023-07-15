export default function Button({ text }: { text: string }) {
  return (
    <div className="mx-auto mt-4 flex w-full pl-4">
      <a
        href="https://legitfit.com/authenticate/signup/FarrellFitness"
        className="ml-auto flex rounded border-0 bg-orange-600 px-6 py-2 text-white hover:bg-orange-900 focus:outline-none"
      >
        {text}
      </a>
    </div>
  );
}
