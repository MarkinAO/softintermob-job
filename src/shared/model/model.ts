export type Project = {
  title: string;
  image: string;
  description: string;
  video: string;
};

export type Vacancy = {
  title: string;
  tags: string[];
  description: {
    title: string;
    text: string;
  }[];
};

export type Article = {
  title: string;
  image: string;
  text: string;
};
