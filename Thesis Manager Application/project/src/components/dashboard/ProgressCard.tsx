import React, { ReactNode } from 'react';

interface ProgressCardProps {
  title: string;
  percentage: number;
  icon: ReactNode;
  color: string;
}

export const ProgressCard = ({ title, percentage, icon, color }: ProgressCardProps) => {
  return (
    <div className="border dark:border-gray-700 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <div className="text-2xl font-bold mt-1">{percentage}%</div>
        </div>
        <div className={`${color} p-2 rounded-lg text-white`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};