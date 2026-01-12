import React from 'react';
import { TrendingUp, Clock, Percent } from 'lucide-react';

const metrics = [
    {
        icon: TrendingUp,
        value: "$72k",
        label: "Recovered Year 1",
        color: "text-secondary"
    },
    {
        icon: Clock,
        value: "80+",
        label: "Hours Back/Month",
        color: "text-primary"
    },
    {
        icon: Percent,
        value: "3%",
        label: "Prime Cost Reduction",
        color: "text-secondary"
    }
];

const MetricsDisplay = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 mb-12">
            {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col p-4 rounded-xl bg-surface border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <metric.icon className={`w-5 h-5 ${metric.color}`} />
                        <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                    </div>
                    <span className="text-sm text-textSecondary font-medium">{metric.label}</span>
                </div>
            ))}
        </div>
    );
};

export default MetricsDisplay;








