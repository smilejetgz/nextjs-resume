'use client';

import AboutDetail from '@/features/AboutDetail';
import EducationDetail from '@/features/EducationDetail';
import ExperienceDetail from '@/features/ExperienceDetail';
import {
  RepositoryStockDetail,
  RepositoryTableDetail,
} from '@/features/RepositoryDetail';
import SkillsDetail from '@/features/SkillsDetail';
import { Slide, Fade, Zoom, Rotate } from 'react-awesome-reveal';

const Page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div id="about">
        <Zoom triggerOnce fraction={0.1} duration={700}>
          <Slide direction="left" triggerOnce fraction={0.1} duration={600}>
            <AboutDetail />
          </Slide>
        </Zoom>
      </div>
      <section id="skills">
        <Fade triggerOnce fraction={0.1} duration={900}>
          <Slide direction="right" triggerOnce fraction={0.1} duration={800}>
            <SkillsDetail />
          </Slide>
        </Fade>
      </section>
      <section id="education">
        <Rotate triggerOnce fraction={0.1} duration={1000}>
          <Slide direction="up" triggerOnce fraction={0.1} duration={1100}>
            <EducationDetail />
          </Slide>
        </Rotate>
      </section>
      <section id="experience">
        <Zoom triggerOnce fraction={0.1} duration={1200}>
          <Slide direction="down" triggerOnce fraction={0.1} duration={1300}>
            <ExperienceDetail />
          </Slide>
        </Zoom>
      </section>
      <section id="repository">
        <Fade triggerOnce fraction={0.1} duration={1400}>
          <Slide direction="left" triggerOnce fraction={0.1} duration={1500}>
            <RepositoryStockDetail />
          </Slide>
        </Fade>
        <Zoom triggerOnce fraction={0.1} duration={1600}>
          <Slide direction="right" triggerOnce fraction={0.1} duration={1700}>
            <RepositoryTableDetail />
          </Slide>
        </Zoom>
      </section>
    </div>
  );
};

export default Page;
