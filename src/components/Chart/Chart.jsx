import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.scss";
import "chartjs-plugin-datalabels";

let chartData = [400, 40, 80, 100, 300];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Мясо", "Картоха", "Овощи", "Фрукты", "Рыба"],

        datasets: [
          {
            label: "Money",
            data: chartData,
            backgroundColor: "orange"
          }
        ],
      },
    };
  }

  render() {
    return (
      <div className={styles.chart}>
        <Bar
          data={this.state.chartData}
          className={styles.bar}
          options={{
            legend: {
              display: false,
            },
            //* Почему не работает то, что внутри объекта вложенного в yAxes? Нужно убрать сетку по вертикали
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    display: false, // this will remove only the label
                    suggestedMax: Math.max(...chartData) * 1.05,
                  },
                  gridLines: {
                    drawBorder: false,
                  },
                },
              ],
            },
            plugins: {
              datalabels: {
                anchor: "end",
                align: "top",
                formatter: function (value, context) {
                  return value + " грн";
                },
                font: {
                  weight: "bold",
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;