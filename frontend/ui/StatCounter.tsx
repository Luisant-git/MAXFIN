
import React, { useState, useEffect } from 'react';

interface StatCounterProps {
    target: number;
    label: string;
    duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ target, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        if (start === end) return;

        const incrementTime = (duration / end);
        const timer = setInterval(() => {
            start += Math.ceil(end / (duration / 16));
            if(start > end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration]);

    return (
        <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-extrabold text-maxfin-green">
                {count.toLocaleString()}+
            </h3>
            <p className="text-gray-600 mt-2 font-medium">{label}</p>
        </div>
    );
};

export default StatCounter;
