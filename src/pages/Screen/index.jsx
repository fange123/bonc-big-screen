import React from 'react';
import styles from './index.less';
import '@/utils/flexible'
import MyBarChart from '@/components/MyBarChart';

const Screen = () => {
  //TODO:适用于设计稿为 1920 * 1020 的大屏

// TODO:方便使用前提：vs code安装 px to rem 插件,并且把 Root Font Size设置成 192
// TODO:后期在写样式时输入px就会有rem提示，转为rem即可

// TODO: echarts图表使用请参照components中的MyBarChart组件,对E charts字体以及其他进行适配

// TODO：以上仅供参考，具体情况具体处理

  return (
    <div className={styles.container}>
       <MyBarChart data={[120, 200, 150, 80, 70, 110, 130]}/>
    </div>
  );
};

export default Screen;
