import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChartComponent = () => {
  const options = {
    series: [{
      name: 'count',
      data: [5, 4.5, 5.1, 4.8, 4.5, 5.0, 4.7, 5.1 ,4.8, 4.5, 5.0, 4.7]
    }],
    chart: {
      height: 210,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 25,
        dataLabels: {
          position: 'center', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    xaxis: {
      categories: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "24", "25", "27"],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: '',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    },
    title: {
      text: 'Activity',
      floating: true,
      offsetY: 330,
      align: 'left',
      style: {
        color: '#444'
      }
    }
  };

  return (
    <div id="chart">
      <ApexCharts options={options} series={options.series} type="bar" height={210} />
    </div>
  );
};

export default BarChartComponent;
