import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartWithText = () => {
  const percentage = 70;
  const chartRef = useRef(null);

  const data = {
    labels: ['Used', 'Unused'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#7294fe', '#DDDDDD'],
        hoverBackgroundColor: ['#FF6384', '#DDDDDD'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.options.plugins.tooltip.enabled = false;
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '50%', height:"100%", margin: 'auto' }}>
      <Doughnut ref={chartRef} data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '18px',
          fontFamily: 'Arial',
        }}
      >
        {`${percentage}%`}
      </div>
    </div>
  );
};

export default DonutChartWithText;
