export type Properties = {
  ProjectName: TitleProperty,
  WorkPeriod:DateProperty,
  Link:LinkProperty, 
  SkillLanguage:MultiSelectProperty,
  Description:DescriptionProperty
};

export interface LinkProperty {
  id: string;
  type: "url";
  url: string | null;
}

export interface MultiSelectProperty {
  id: string;
  type: "multi_select";
  multi_select: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

export interface DescriptionProperty {
  id: string;
  type: "rich_text";
  rich_text: Array<{
    type: "text";
    text: {
      content: string;
      link: string | null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: string | null;
  }>;
}

export interface DateProperty {
  id: string;
  type: "date";
  date: {
    start: string;
    end: string | null;
    time_zone: string | null;
  };
}

export interface TitleProperty {
  id: string;
  type: "title";
  title: Array<{
    type: "text";
    text: {
      content: string;
      link: string | null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: string | null;
  }>;
}