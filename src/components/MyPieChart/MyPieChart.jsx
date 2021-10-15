import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import { Spin } from 'antd';
import styles from './index.less'
import {fontSize} from '@/utils/utils'

function MyPieChart(props) {

  const {data = [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
      ]} = props

  const loading = false;
  const chartRef = useRef(null);
  let myChart = null;
  const getOption = () => {
     myChart = new echarts.init(chartRef.current);
    const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle: {
            color: "#fff",
            fontSize: fontSize(18),
          },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '60%'], //图的位置
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: fontSize(18),
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data
    }
  ]
};

    myChart.setOption(option);
  };

  //TODO：监听屏幕尺寸变化事件
  useEffect(() => {
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  },[]);


  useEffect(() => {
    getOption();

  },[data]);


  return (
    <Spin spinning={loading}>
      <div ref={chartRef} className={styles.chart}/>
    </Spin>
  );
}

export default MyPieChart;
