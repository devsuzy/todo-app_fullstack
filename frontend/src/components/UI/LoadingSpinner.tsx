import { ClipLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <ClipLoader
        color="#b782f3"
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
