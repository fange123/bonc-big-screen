import React,{useState,useEffect} from 'react';
import styles from './index.less';
import '@/utils/flexible'
import MyBarChart from '@/components/MyBarChart';
import MyPieChart from '@/components/MyPieChart';
import MyLineChart from '@/components/MyLineChart';
import moment from 'moment';

const Screen = () => {
  //TODO:适用于设计稿为 1920 * 1020 的大屏

// TODO:方便使用前提：vs code安装 px to rem 插件,并且把 Root Font Size设置成 192
// TODO:后期在写样式时输入px就会有rem提示，转为rem即可

// TODO: echarts图表使用请参照components中的MyBarChart组件,对E charts字体以及其他进行适配

// TODO：以上仅供参考，具体情况具体处理

const [currentTime, setCurrentTime] = useState(moment().format('YYYY/MM/DD日-HH:mm:ss秒'))

useEffect(() => {
  const time = setInterval(()=> {
    setCurrentTime(moment().format('YYYY/MM/DD日-HH:mm:ss秒'))
  },1000)

  return ()=> { clearInterval(time)}
}, [])

  return (
    <div className={styles.container}>
      {/* 头部 */}
        <header className={styles.header}>
          <h1>XX大屏</h1>
          <span className={styles.show_time}>当前时间：{currentTime}</span>
        </header>
      {/* 内容 */}
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.item}><MyBarChart/></div>
          <div className={styles.item}><MyBarChart/></div>
          <div className={styles.item}><MyBarChart/></div>
        </div>
        <div className={styles.center}>
           <div className={styles.item}><MyLineChart/></div>
          <div className={styles.item}><MyLineChart/></div>
          <div className={styles.item}><MyLineChart/></div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}><MyPieChart/></div>
          <div className={styles.item}><MyPieChart/></div>
          <div className={styles.item}><MyPieChart/></div>

        </div>
      </main>

    </div>
  );
};

export default Screen;
