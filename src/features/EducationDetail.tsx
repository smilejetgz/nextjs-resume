import Image from 'next/image';

const EducationDetail = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col space-y-8 rounded-xl bg-slate-950/10 px-8 py-8 shadow-lg md:flex-row md:space-x-8 md:space-y-0">
      {/* Text Section */}
      <div className="w-full space-y-4 p-4 text-center sm:text-left">
        <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3 text-center text-5xl font-bold text-transparent sm:text-left">
          Education
        </h1>

        {/* Suratthani Rajabhat University */}
        <div className="flex flex-col gap-1 font-medium text-slate-200 sm:items-center md:flex-row md:gap-10">
          <div className="flex flex-col">
            <div className="relative mx-auto my-auto flex h-[189px] w-[150px] overflow-hidden rounded-3xl">
              <Image
                className="object-cover"
                src="/assets/images/sru.png"
                layout="fill"
                sizes="(min-width: 800px) 50vw, 500vw"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col sm:text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Suratthani Rajabhat University
            </h3>
            <span className="text-xl font-bold underline">
              Information Technology
            </span>
            <span className="text-md">Bachelor&apos;s Degree</span>
            <span className="text-blue-400">2016 - 2020</span>
          </div>
        </div>

        <hr />
        {/* Suratthani Rajabhat University */}
        <div className="flex flex-col gap-1 font-medium text-slate-200 sm:items-center md:flex-row md:gap-10">
          <div className="flex flex-col">
            <div className="relative mx-auto my-auto flex h-[275px] w-[150px] overflow-hidden rounded-3xl">
              <Image
                className="object-cover"
                src="/assets/images/wu.png"
                layout="fill"
                sizes="(min-width: 800px) 50vw, 500vw"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col sm:text-center md:text-left">
            <h3 className="text-2xl font-bold">Walailak University</h3>
            <span className="text-xl font-bold underline">
              Management of Information Technology
            </span>
            <span className="text-md">Master&apos;s Degree</span>
            <span className="text-blue-400">2020 - 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
