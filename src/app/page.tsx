import AboutDetail from '@/features/AboutDetail';
import EducationDetail from '@/features/EducationDetail';
import SkillsDetail from '@/features/SkillsDetail';

const Page = () => {
  return (
    <div className="flex flex-col gap-10">
      <AboutDetail />
      <SkillsDetail />
      <EducationDetail />
    </div>
  );
};

export default Page;
