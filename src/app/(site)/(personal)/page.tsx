import { Facebook, Github, House, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PersonalPage = () => {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-[#b1adb4] shadow-md md:max-w-full">
      <div className="lg:flex">
        <div className="md:shrink-0">
          <Image
            src="/assets/images/avatar.jpg"
            alt="Avatar"
            width={400}
            height={400}
            className="h-full w-full lg:h-[600px] lg:w-auto"
          />
        </div>
        <div className="p-8">
          <div className="mb-1 border-b p-1 md:p-4">
            <div className="p-4 text-xl font-semibold uppercase tracking-wide text-gray-950">
              About Me
            </div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-950">
              I am a recent Master&apos;s graduate with a degree in Management
              of Information Technology and a passion for programming. I am
              proficient in JavaScript, Python, HTML, and CSS. I am dedicated to
              continuously learning and developing new skills.
            </div>
          </div>
          <div className="mb-1 border-b p-1 md:p-4">
            <div className="p-4 text-xl font-semibold uppercase tracking-wide text-gray-950">
              Content
            </div>
            <div className="m-1 mx-0 flex max-w-xs items-center rounded-full bg-gray-800 p-2 text-white shadow-lg hover:bg-gray-400">
              <Phone className="mx-3" />
              <span className="text-md font-semibold">+66 92 081 9728</span>
            </div>
            <div className="m-1 mx-0 flex max-w-xs items-center rounded-full bg-gray-800 p-2 text-white shadow-lg hover:bg-gray-400">
              <Mail className="mx-3" />
              <span className="text-md font-semibold">
                TirajetChukleang@gmail.com
              </span>
            </div>
            <Link href={`https://github.com/smilejetgz`} target="_blank">
              <div className="m-1 mx-0 flex max-w-xs items-center rounded-full bg-gray-800 p-2 text-white shadow-lg hover:bg-gray-400">
                <Github className="mx-3" />
                <span className="text-md font-semibold">SmileJetGz</span>
              </div>
            </Link>
            <Link
              href={`https://www.facebook.com/profile.php?id=100008374176106`}
              target="_blank"
            >
              <div className="m-1 mx-0 flex max-w-xs items-center rounded-full bg-gray-800 p-2 text-white shadow-lg hover:bg-gray-400">
                <Facebook className="mx-3" />
                <span className="text-md font-semibold">Smile Jet</span>
              </div>
            </Link>
          </div>

          <p className="mt-2 flex flex-row items-center justify-center text-slate-500">
            <House />
            <span className="pl-4">
              25/1 Moo 5, Takhienthong Subdistrict, Kanchanadit District, Surat
              Thani Province
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
