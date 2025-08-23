import Hero from "./_components/Hero/Hero";
import ProjectsHome from "./_components/ProjectsHome/ProjectsHome";
import ExperienceHome from "./_components/ExperienceHome/ExperienceHome";
import SkillsHome from "./_components/SkillsHome/SkillsHome";
import MyStoryHome from "./_components/MyStoryHome/MyStoryHome";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsHome />
      <ExperienceHome />
      <SkillsHome />
      <MyStoryHome />
    </>
  );
}
