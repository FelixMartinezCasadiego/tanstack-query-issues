import { FiRefreshCcw } from "react-icons/fi";

export function LoadingSpinners() {
  return (
    <div className="loading">
      <div className="flex w-full h-52 justify-center items-center">
        <FiRefreshCcw size={30} className="animate-spin" />
      </div>
    </div>
  );
}
