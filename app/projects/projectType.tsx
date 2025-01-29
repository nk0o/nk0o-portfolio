export type Properties = {
  ProjectName: TitleProperty,
  WorkPeriod:DateProperty,
  URL:URLProperty, 
  SkillLanguage:MultiSelectProperty,
  Description:DescriptionProperty,
};

export interface CoverImgProperty {
  external: {
    url:string | null
  },
  file: {
    url:string | null
  }
}
interface URLProperty {
  //id: string;
  //type: "url";
  url: string | null;
}

export interface SkillSelectProperty {
  id: string;
  name: string;
  color: string;
}

interface MultiSelectProperty {
  multi_select: Array<SkillSelectProperty>;
}

export interface DescriptionRichTextProperty{
    text: {
      content: string; // 텍스트 내용
      link: string | null; // 링크가 있을 경우 URL, 없으면 null
    };
    annotations: {
      bold: boolean; // 굵게
      italic: boolean; // 기울임
      strikethrough: boolean; // 취소선
      underline: boolean; // 밑줄
      code: boolean; // 코드 스타일
      color: string; // 색상 (예: "default", "red", "blue" 등)
    };
    plain_text: string; // 스타일이 제거된 순수 텍스트
    href: string | null; // 하이퍼링크 (null일 수도 있음)
}
export interface DescriptionProperty {
  id: string;
  type: "rich_text";
  rich_text: DescriptionRichTextProperty[];
}

interface DateProperty {
  // id: string;
  // type: "date";
  date: {
    start: string | null;
    end: string | null;
    time_zone: string | null;
  };
}

interface TitleProperty {
  // id: string;
  // type: "title";
  title: Array<{
    // type: "text";
    // annotations: {
    //   bold: boolean;
    //   italic: boolean;
    //   strikethrough: boolean;
    //   underline: boolean;
    //   code: boolean;
    //   color: string;
    // };
    // href: string | null;
    text: {
      content: string;
      link: string | null;
    };
    plain_text: string | null;
  }>;
}