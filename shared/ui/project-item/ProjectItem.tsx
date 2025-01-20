import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./projectItem.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);
import { ProjectProps } from '@/app/projects/page'
import { SkillSelectProperty } from '@/app/projects/projectType'


interface ProjectItemProps{
  data: ProjectProps;
}

export const ProjectItem = ( props:ProjectItemProps ) => {
  const { data } = props;
  const projectTitle = data.properties.ProjectName.title[0].plain_text;
  const WorkPeriodStart = data.properties.WorkPeriod.date.start;
  const WorkPeriodEnd = data.properties.WorkPeriod.date.end;
  const URL = data.properties.URL.url;
  const SkillLanguage = data.properties.SkillLanguage.multi_select;
  const Description = data.properties.Description.rich_text[0].plain_text;
  const coverImage = data.cover !== null ? data.cover.external.url : null;

  return (
    <div className={cx("box-project")}>
        <h1>{projectTitle}</h1>
        <div>{WorkPeriodStart}~{WorkPeriodEnd}</div>
        { URL !== null &&
          <Link href={URL}>링크열기 </Link>
        }
        { coverImage !== null  &&
          <Image src={coverImage} width={600} height={300} objectFit="cover" layout="responsive" alt="" />
        }
        {SkillLanguage.map((skill: SkillSelectProperty, index: number) => (
          <div key={index}>
            {skill.name}
          </div>
        ))}
        <p>{Description}</p>
    </div>
  );
};
