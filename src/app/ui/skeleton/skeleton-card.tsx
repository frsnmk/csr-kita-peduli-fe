// components/SkeletonCard.js
export default function SkeletonCard() {
  return (
    <div className="w-[225px] mx-auto">
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="rounded bg-gray-300 h-20"></div>
        <div className="h-2 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
        <div className="h-2 bg-gray-300 rounded w-1/4"></div>
        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
