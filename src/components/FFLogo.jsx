export default function FF() {
  return (
    <div className="h-full w-full flex flex-col justify-around items-center md:space-y-48 space-y-24 py-24 ">
      <svg
        width="306"
        height="204"
        fill="none"
        className="md:scale-150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.00297555L33.0278 44.8438H100.446V59.5929H43.8915L75.0884 101.948H96.6469V131.217L150.255 204V0.00595106L0 0.00297555ZM155.745 0.00297555V203.997L209.353 131.214V101.945H230.911L262.109 59.5898H205.554V44.8411H272.972L306 0L155.745 0.00297555Z"
          fill="white"
        />
      </svg>
      <h1 className="md:text-8xl text-4xl font-black text-center space-y-2 flex flex-col">
        <span>sign up to</span>
        <a
          href="https://legitfit.com/authenticate/signup/FarrellFitness"
          className="text-orange-600 hover:text-orange-800 hover:cursor-pointer"
        >
          farrell fitness
        </a>
        <span>now</span>
      </h1>
    </div>
  );
}
