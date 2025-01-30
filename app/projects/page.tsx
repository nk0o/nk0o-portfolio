import { TOKEN, DATABASE_ID } from '../../config/index';
import { CoverImgProperty, Properties } from './projectType'
import { ProjectItem } from '@/shared/ui/project-item/ProjectItem';
import styles from "./page.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);
export interface ProjectProps{
  cover: CoverImgProperty | null;
  properties: Properties;
}

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className={cx("project-page")}>
        <div className={cx("wrapper__inner")}>
            <ul className={cx("project-list")}>
              {[...projects]
                .sort((a, b) => {
                  const dateA = a.properties.WorkPeriod.date.start ? new Date(a.properties.WorkPeriod.date.start).getTime() : 0; 
                  const dateB = b.properties.WorkPeriod.date.start ? new Date(b.properties.WorkPeriod.date.start).getTime() : 0;
                  return dateB - dateA; 
                })
                .map((aProject: ProjectProps, index: number) => (
                  <li key={index}>
                    <ProjectItem data={aProject} />
                  </li>
              ))}
            </ul>
        </div>
    </div>
  );
}

async function fetchProjects(): Promise<ProjectProps[]> {
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'WorkPeriod',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
    cache: 'no-cache', // 캐싱 비활성화
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const repo = await res.json();
  return repo.results;
}