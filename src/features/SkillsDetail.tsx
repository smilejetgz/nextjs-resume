import {
  FaPython,
  FaPhp,
  FaBootstrap,
  FaDocker,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';
import {
  SiLua,
  SiHtml5,
  SiCss3,
  SiSolidity,
  SiTailwindcss,
  SiApachenetbeanside,
  SiXampp,
  SiPostman,
  SiJupyter,
  SiMysql,
  SiMui,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si';
import { RiNextjsFill, RiAngularjsFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
const SkillsDetail = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl space-y-8 rounded-xl bg-slate-950/10 px-8 py-8 shadow-lg md:space-x-8 md:space-y-0">
      {/* Text Section */}
      <div className="w-full space-y-4 p-4 text-center sm:text-left">
        <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3 text-5xl font-bold text-transparent">
          Skills
        </h1>

        {/* Skill Languages */}
        <p className="font-medium text-slate-200">Languages :</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <FaPython className="h-24 w-24 p-4" />
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <FaPhp className="h-24 w-24 p-4" />
            <span>PHP</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <BiLogoJavascript className="h-24 w-24 p-4" />
            <span>Javascript</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <BiLogoTypescript className="h-24 w-24 p-4" />
            <span>Typescript</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiLua className="h-24 w-24 p-4" />
            <span>Lua</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiHtml5 className="h-24 w-24 p-4" />
            <span>Html</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiCss3 className="h-24 w-24 p-4" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiSolidity className="h-24 w-24 p-4" />
            <span>Solidity</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiNodedotjs className="h-24 w-24 p-4" />
            <span>NodeJS</span>
          </div>
        </div>
        <hr />

        {/* Skill Frameworks */}
        <p className="font-medium text-slate-200">Frameworks :</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiExpress className="h-24 w-24 p-4" />
            <span>ExpressJS</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <RiNextjsFill className="h-24 w-24 p-4" />
            <span>NextJS</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <RiAngularjsFill className="h-24 w-24 p-4" />
            <span>Angular</span>
          </div>
        </div>
        <hr />

        {/* Skill Frameworks CSS */}
        <p className="font-medium text-slate-200">Frameworks CSS :</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiTailwindcss className="h-24 w-24 p-4" />
            <span>Tailwind</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <FaBootstrap className="h-24 w-24 p-4" />
            <span>Bootstrap</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiMui className="h-24 w-24 p-4" />
            <span>Material UI</span>
          </div>
        </div>
        <hr />

        {/* Skill Database */}
        <p className="font-medium text-slate-200">Database :</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiMysql className="h-24 w-24 p-4" />
            <span>Mysql</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <BiLogoPostgresql className="h-24 w-24 p-4" />
            <span>Postgresql</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <BiLogoMongodb className="h-24 w-24 p-4" />
            <span>MongoDB</span>
          </div>
        </div>
        <hr />

        {/* Skill Tools */}
        <p className="font-medium text-slate-200">Tools :</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <FaDocker className="h-24 w-24 p-4" />
            <span>Docker</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <VscVscode className="h-24 w-24 p-4" />
            <span>VSCode</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiApachenetbeanside className="h-24 w-24 p-4" />
            <span>NetBeans</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiJupyter className="h-24 w-24 p-4" />
            <span>Jupyter</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiXampp className="h-24 w-24 p-4" />
            <span>Xampp</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <FaGithub className="h-24 w-24 p-4" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <FaFigma className="h-24 w-24 p-4" />
            <span>Figma</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-100/5 px-4 py-2 text-lg font-semibold text-blue-100 hover:bg-slate-950/50 hover:text-white">
            <SiPostman className="h-24 w-24 p-4" />
            <span>Postman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetail;
