import React from "react";

const TimeLine = ({ currentStage, failed = false }) => {
  const stages = [1, 2, 3, 4, 5];

  const getStageClass = (stage) => {
    if (stage < currentStage) return "bg-green-500"; // Completed stages
    if (stage === currentStage) return failed ? "bg-red-500" : "bg-blue-500"; // Current stage (failed or ongoing)
    return "bg-gray-300"; // Future stages
  };

  return (
    <div className="flex items-center justify-between w-full max-w-lg mx-auto">
      {stages.map((stage, index) => (
        <div key={stage} className="flex items-center">
          {/* Stage Circle */}
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${getStageClass(
              stage
            )}`}
          >
            {stage}
          </div>
          {/* Line between stages */}
          {index < stages.length - 1 && (
            <div className="flex-1 h-1 bg-gray-300 mx-2">
              {/* Update line color for completed stages */}
              {stage < currentStage && (
                <div className="h-1 bg-green-500 w-full" />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
