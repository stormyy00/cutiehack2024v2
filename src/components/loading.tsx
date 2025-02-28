import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-3xl font-bold text-cutie-purple-100">Loading...</p>
      <Loader className="animate-spin text-cutie-purple-100" />
    </div>
  );
};

export default Loading;
