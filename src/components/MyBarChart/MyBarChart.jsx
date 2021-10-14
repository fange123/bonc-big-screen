import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import { Spin } from 'antd';
import styles from './index.less'
import {fontSize} from '@/utils/utils'

function MyBarChart(props) {

  const {dataY =[120, 200, 150, 80, 70, 110, 130]} = props

  const loading = false;
  const chartRef = useRef(null);
  let myChart = null;
  const getOption = () => {
     myChart = new echarts.init(chartRef.current);
    const option = {
     title:{
       text:'xx图表',
       textStyle: {
                // TODO: 图标中的文字大小，间距，用到px的都地方可以用fontSize这个方法转换
                fontSize: fontSize(24),
                fontStyle: 'normal',
                fontWeight: 'normal',
                color:'#fff'
            },

     },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data:dataY,
      type: 'bar'
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

  },[dataY]);


  return (
    <Spin spinning={loading}>
      <div ref={chartRef} className={styles.chart}/>
    </Spin>
  );
}

export default MyBarChart;
