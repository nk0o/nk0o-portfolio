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

interface DescriptionProperty {
  // id: string;
  // type: "rich_text";
  rich_text: Array<{
    text: {
      content: string;
      link: string | null;
    };
    plain_text: string;
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
  }>;
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