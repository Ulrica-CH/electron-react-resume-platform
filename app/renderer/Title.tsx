import React from 'react';
import { FC } from 'react';
import lessStyle from './index.less';
interface ITitle {
  title: string;
}
const Title: FC<ITitle> = ({ title }) => {
  return <div className={lessStyle.title}>{title}</div>;
};
export default Title;
