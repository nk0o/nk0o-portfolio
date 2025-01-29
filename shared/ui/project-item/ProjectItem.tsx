'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './projectItem.module.scss';
import cs from 'classnames/bind';
import { ProjectProps } from '@/app/projects/page';
import { SkillSelectProperty } from '@/app/projects/projectType';
import LinkIcon from '@/public/icon/ico_link-24-white.svg';
import { DescriptionRichTextProperty } from '@/app/projects/projectType';

const cx = cs.bind(styles);

interface ProjectItemProps {
  data: ProjectProps;
}

const renderDescriptionToHTML = (description: DescriptionRichTextProperty[]) => {
  return description
    .map((richText: DescriptionRichTextProperty) => {
      const { content } = richText.text;
      const { bold, italic, strikethrough, underline, code, color } = richText.annotations;

      let styledContent = content;

      if (bold) styledContent = `<strong>${styledContent}</strong>`;
      if (italic) styledContent = `<em>${styledContent}</em>`;
      if (strikethrough) styledContent = `<s>${styledContent}</s>`;
      if (underline) styledContent = `<u>${styledContent}</u>`;
      if (code) styledContent = `<code>${styledContent}</code>`;

      if (color !== 'default') {
        styledContent = `<span style="color: ${color};">${styledContent}</span>`;
      }
      return styledContent;
    })
    .join('');
};

export const ProjectItem = (props: ProjectItemProps) => {
  const { data } = props;
  const projectTitle = data.properties.ProjectName.title[0].plain_text;
  const workPeriodStart = data.properties.WorkPeriod.date.start;
  const workPeriodEnd = data.properties.WorkPeriod.date.end;
  const uRL = data.properties.URL.url;
  const skillLanguage = data.properties.SkillLanguage.multi_select;
  const description = data.properties.Description.rich_text;
  const coverImage = data.cover !== null ? data.cover.external.url : null;
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function sanitizeHTML() {
      const { default: DOMPurify } = await import('dompurify'); // 동적 가져오기
      const rawHTML = renderDescriptionToHTML(description); // HTML 생성
      const sanitizedHTML = DOMPurify.sanitize(rawHTML); // HTML 정리
      setHtmlContent(sanitizedHTML); // 상태 업데이트
    }
    sanitizeHTML();
  }, [description]);

  return (
    <div className={cx('project-box')}>
      {coverImage && (
        <figure className={cx('project-box__img')}>
          <Image src={coverImage} fill alt="프로젝트 이미지" />
        </figure>
      )}
      <div className={cx('project-box__inner')}>
        <h3 className={cx('project-box__title')}>
          {projectTitle}
          {uRL && (
            <Link href={uRL} target="_blank" className={cx('project-box__link')}>
              <Image src={LinkIcon} width={24} height={24} alt="링크 열기" />
            </Link>
          )}
        </h3>
        <div className={cx("project-box__desc")} dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        <div className={cx('project-box__date')}>
          작업기간: {workPeriodStart} ~ {workPeriodEnd}
        </div>
        {skillLanguage.length !== 0 && (
          <ul className={cx('skill-list')}>
            {skillLanguage.map((skill: SkillSelectProperty, index: number) => (
              <li key={index} className={cx('skill-list__item')}>
                {skill.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
