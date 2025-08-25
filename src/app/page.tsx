import Hero from "./_components/Hero/Hero";
import ProjectsHome from "./_components/ProjectsHome/ProjectsHome";
import ExperienceHome from "./_components/ExperienceHome/ExperienceHome";
import SkillsHome from "./_components/SkillsHome/SkillsHome";
import MyStoryHome from "./_components/MyStoryHome/MyStoryHome";
import Education from "./_components/Education/Education";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-15 pt-15">
        <Hero />
        <ProjectsHome />
        <Education />
        <ExperienceHome />
        <SkillsHome />
        <MyStoryHome />
      </div>
    </>
  );
}
