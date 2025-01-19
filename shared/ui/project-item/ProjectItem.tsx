import React from 'react';
import styles from "./projectItem.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);
import { ProjectProps } from '@/pages/projects'


interface ProjectItemProps{
  data: ProjectProps;
}


export const ProjectItem = ( props:ProjectItemProps ) => {
  const {data} = props;
  return (
    <div className={cx("")}>
        <h1>{data.properties.ProjectName.title[0].plain_text}</h1>
        <div>{data.properties.Description.rich_text[0].plain_text}</div>
    </div>
  );
};
