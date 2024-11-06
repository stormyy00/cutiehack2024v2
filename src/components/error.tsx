import Fault from "@/utils/error";

const Error = ({ code, name, message, dev }: Fault) => {
  return (
    <div className="fixed flex h-screen w-screen flex-col items-center justify-center bg-cutie-purple-100 font-righteous">
      <p className="m-0 text-center text-6xl font-extrabold text-cutie-blue-200">
        {code}
      </p>
      <p className="m-0 text-center text-lg font-bold text-black md:text-2xl">
        {name}
      </p>
      <p className="m-0 text-center text-sm text-cutie-blue-200 md:text-lg">
        {message}
      </p>
      {dev && (
        <p className="m-0 text-center text-sm text-cutie-blue-200 md:text-lg">
          Developer Notes: {dev}
        </p>
      )}
    </div>
  );
};

export default Error;
