import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import { Spin } from 'antd';
import styles from './index.less'
import {fontSize} from '@/utils/utils'

function MyLieChart(props) {

  const {data = [820, 932, 901, 934, 1290, 1330, 1320]} = props

  const loading = false;
  const chartRef = useRef(null);
  let myChart = null;
  const getOption = () => {
     myChart = new echarts.init(chartRef.current);
    const option = {
        title:{
       text:'折线图',
       textStyle: {
                // TODO: 图标中的文字大小，间距，用到px的都地方可以用fontSize这个方法转换
                fontSize: fontSize(18),
                fontStyle: 'normal',
                fontWeight: 'normal',
                color:'#fff'
            },

     },
      grid:{
            x:fontSize(50),
            y:fontSize(60),
            x2:fontSize(20),
            y2:fontSize(40),
            borderWidth:fontSize(1)
        },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
     axisLabel: {
       show: true,
        textStyle: {
          color: '#c3dbff',  //更改坐标轴文字颜色
          fontSize : fontSize(14)     //更改坐标轴文字大小
        }
     },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
       show: true,
        textStyle: {
          color: '#c3dbff',  //更改坐标轴文字颜色
          fontSize : fontSize(14)      //更改坐标轴文字大小
        }
     },


  },
  series: [
    {
      data,
      type: 'line',
      smooth: true
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

export default MyLieChart;
