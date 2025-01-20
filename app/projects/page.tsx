import { TOKEN, DATABASE_ID } from '../../config/index';
import { CoverImgProperty, Properties } from './projectType'
import { ProjectItem } from '@/shared/ui/project-item/ProjectItem';

export interface ProjectProps{
  cover: CoverImgProperty | null;
  properties: Properties;
}

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <>
      <ul>
        {projects.map((aProject: ProjectProps, index: number) => (
          <li key={index}>
            <ProjectItem data={aProject} />
          </li>
        ))}
      </ul>
    </>
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
    next: { revalidate: 60 }, // 캐싱 옵션
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const repo = await res.json();
  return repo.results;
}