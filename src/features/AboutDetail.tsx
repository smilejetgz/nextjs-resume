import { FaFacebook, FaGithub, FaMailBulk, FaLine } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const AboutDetail = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col space-y-8 rounded-xl bg-slate-950/10 px-8 py-8 shadow-lg md:flex-row md:space-x-8 md:space-y-0">
      {/* Image Section */}
      <div className="relative mx-auto my-auto flex h-[450px] w-[350px] overflow-hidden rounded-3xl">
        <Image
          className="object-cover"
          src="/assets/images/avatar.jpg"
          layout="fill"
          sizes="(min-width: 800px) 50vw, 500vw"
          alt="Profile"
        />
      </div>

      {/* Text Section */}
      <div className="w-full space-y-4 p-4 text-center sm:text-left">
        <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3 text-5xl font-bold text-transparent">
          Tirajet Chukleang
        </h1>
        <p className="font-medium text-slate-200">
          I am a recent Master&apos;s graduate with a degree in Management of
          Information Technology and a passion for programming. I am proficient
          in JavaScript, Python, HTML, and CSS. I am dedicated to continuously
          learning and developing new skills.
        </p>
        <p className="font-medium text-slate-200">Contact :</p>

        {/* Contact Buttons */}
        <div className="flex flex-col space-y-2">
          <Link
            href="https://line.me/ti/p/WqtyVitbBA"
            target="_blank"
            className="flex items-center rounded-full bg-green-600 px-4 py-2 text-lg font-semibold text-blue-100 hover:border-transparent hover:bg-green-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
          >
            <FaLine className="mr-2 h-5 w-5" />
            <span>092 081 9728</span>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100008374176106"
            target="_blank"
            className="flex items-center rounded-full bg-blue-600 px-4 py-2 text-lg font-semibold text-blue-100 hover:border-transparent hover:bg-blue-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
          >
            <FaFacebook className="mr-2 h-5 w-5" />
            <span>Smile Jet</span>
          </Link>
          <Link
            href="https://github.com/smilejetgz/"
            target="_blank"
            className="flex items-center rounded-full bg-gray-600 px-4 py-2 text-lg font-semibold text-blue-100 hover:border-transparent hover:bg-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            <FaGithub className="mr-2 h-5 w-5" />
            <span>SmilejetGz</span>
          </Link>
          <Link
            href="mailto:TirajetChukleang@gmail.com"
            target="_blank"
            className="flex items-center rounded-full bg-gray-200 px-4 py-2 text-lg font-semibold text-black hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            <FaMailBulk className="mr-2 h-5 w-5" />
            <span>TirajetChukleang@gmail.com</span>
          </Link>
        </div>

        <p className="py-4 font-medium text-slate-200">
          Address : 25/1 Moo 5, Takhienthong Subdistrict, Kanchanadit District,
          Surat Thani Province
        </p>
      </div>
    </div>
  );
};

export default AboutDetail;
