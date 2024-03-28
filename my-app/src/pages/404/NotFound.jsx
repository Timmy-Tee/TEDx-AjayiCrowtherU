import Button from "../../components/Button/Button";

function NotFound() {
  return (
    <main className="grid min-h-[100vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[35px] font-beau tracking-[5px] font-semibold text-second-red">
          404
        </p>
        <h1 className="mt-4 text-[50px] font-bold font-beau tracking-[5px] text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-1 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button text="Go Back Home" link="/" />
        </div>
      </div>
    </main>
  );
}

export default NotFound;
