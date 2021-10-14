/*
 * @Author: liuxingtao
 * @Date: 2021-08-02 10:53:14
 * @LastEditors: liuxingtao
 * @LastEditTime: 2021-08-05 16:50:55
 * @Description: file content
 */
import { parse } from 'querystring';

const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);

//echarts中px转换函数
export function fontSize(res) {
  let clientWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = clientWidth / 1920;
  return res * fontSize;
}
