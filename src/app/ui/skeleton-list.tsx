export const SkeletonList = () => {
    return (
        <div className="space-y-4 animate-pulse">
            {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="w-1/4 h-16 bg-blue-300 rounded-lg"></div>
                <div className="flex flex-col w-3/4 space-y-2">
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                </div>
            </div>
            ))}
        </div>
    );
};