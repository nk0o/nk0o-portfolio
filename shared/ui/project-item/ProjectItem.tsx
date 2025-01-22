import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./projectItem.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);
import { ProjectProps } from '@/app/projects/page'
import { SkillSelectProperty } from '@/app/projects/projectType'
import LinkIcon from '@/public/icon/ico_link-24-white.svg'

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
  console.log(data)
  return (
    <div className={cx("project-box")}>
        { coverImage !== null  &&
          <figure  className={cx("project-box__img")}>
            <Image src={coverImage} layout="fill" objectFit="cover" alt="" />
          </figure>
        }
        <div className={cx("project-box__inner")}>
          <h3 className={cx("project-box__title")}>
            {projectTitle}
            { URL !== null &&
              <Link href={URL} target="_blank" className={cx("project-box__link")}>
                <Image src={LinkIcon} width={24} height={24} alt="링크열기"></Image>
              </Link>
            }
          </h3>
          <p className={cx("project-box__desc")}>{Description}</p>
          <div className={cx("project-box__date")}>작업기간: {WorkPeriodStart}~{WorkPeriodEnd}</div>
          { SkillLanguage.length !== 0 &&
            <ul className={cx("skill-list")}>
                {SkillLanguage.map((skill: SkillSelectProperty, index: number) => (
                  <li key={index} className={cx("skill-list__item")}>
                    {skill.name}
                  </li>
                ))}
            </ul>
          }
        </div>
    </div>
  );
};
