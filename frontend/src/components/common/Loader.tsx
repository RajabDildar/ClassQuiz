import { Spinner } from "../ui/spinner";

const Loader = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center p-3 bg-gray-50">
      <Spinner className="size-12 text-blue-600" />
    </div>
  );
};

export default Loader;
