export type ProjectType = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  technologies: string[];
  duration: string;
  github: string;
  repositories: string;
};
// ----------------------------------------------
export type ProjectPageProps = {
  params: Promise<{ name: string }>;
};
