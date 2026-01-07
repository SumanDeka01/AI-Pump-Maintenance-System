import React from "react";

type PumpCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
};

const PumpCard: React.FC<PumpCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
        {icon}
      </div>
    </div>
  );
};

export default PumpCard;
