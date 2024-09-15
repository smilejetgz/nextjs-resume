import AboutDetail from '@/features/AboutDetail';
import EducationDetail from '@/features/EducationDetail';
import ExperienceDetail from '@/features/ExperienceDetail';
import {
  RepositoryStockDetail,
  RepositoryTableDetail,
} from '@/features/RepositoryDetail';
import SkillsDetail from '@/features/SkillsDetail';

const Page = () => {
  return (
    <div className="flex flex-col gap-10">
      <section id="about">
        <AboutDetail />
      </section>
      <section id="skills">
        <SkillsDetail />
      </section>
      <section id="education">
        <EducationDetail />
      </section>
      <section id="experience">
        <ExperienceDetail />
      </section>
      <section id="repository">
        <RepositoryStockDetail />
        <RepositoryTableDetail />
      </section>
    </div>
  );
};

export default Page;
