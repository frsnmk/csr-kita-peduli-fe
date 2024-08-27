export const ProgramDetailSkeleton = () => {
    return (
        <div className="p-4 space-y-4 animate-pulse">
            {/* Skeleton for Image */}
            <div className="bg-gray-300 h-64 w-full rounded-lg"></div>
    
            {/* Skeleton for Title and Progress */}
            <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded mt-2"></div>
    
            {/* Skeleton for Donation Info */}
            <div className="bg-gray-300 h-4 w-1/4 rounded mt-4"></div>
            <div className="bg-gray-300 h-4 w-1/3 rounded mt-2"></div>
    
            {/* Skeleton for Fundraiser Info */}
            <div className="bg-gray-300 h-6 w-1/2 rounded mt-4"></div>
            <div className="bg-gray-300 h-4 w-1/3 rounded mt-2"></div>
    
            {/* Skeleton for Donations */}
            <div className="space-y-4 mt-4">
                <div className="bg-gray-300 h-6 w-full rounded"></div>
                <div className="bg-gray-300 h-6 w-full rounded"></div>
                <div className="bg-gray-300 h-6 w-full rounded"></div>
            </div>
    
            {/* Skeleton for Prayers */}
            <div className="space-y-4 mt-4">
                <div className="bg-gray-300 h-6 w-full rounded"></div>
                <div className="bg-gray-300 h-6 w-full rounded"></div>
            </div>
        </div>
    )
}