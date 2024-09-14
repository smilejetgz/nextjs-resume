const EducationPage = () => {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-[#b1adb4] shadow-md md:max-w-full">
      <div className="md:flex">
        <div className="p-8">
          <div className="mb-1 border-b p-1">
            <div className="p-4 text-2xl font-bold uppercase tracking-wide text-gray-950">
              Education
            </div>
          </div>
          <div className="mb-1 border-b p-1 md:p-4">
            <div className="p-4 text-xl font-bold uppercase tracking-wide text-gray-950">
              Suratthani Rajabhat University
            </div>
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-950 md:pl-6">
              Information Technology
            </div>
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-950 md:pl-6">
              Bachelor&apos;s Degree
            </div>
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-950 md:pl-6">
              2016 - 2020
            </div>
          </div>
          <div className="mb-1 p-1 md:p-4">
            <div className="p-4 text-xl font-bold uppercase tracking-wide text-gray-950">
              Walailak University
            </div>
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-950 md:pl-6">
              Management of Information Technology
            </div>
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-950 md:pl-6">
              Master&apos;s Degree
            </div>
            <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-950 md:pl-6">
              2020 - 2023
            </div>
          </div>
        </div>
        <div className="hidden flex-1 border-l-4 border-gray-200 md:flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15778.138139422856!2d99.88855402224166!3d8.640603049698282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3053a1796fcd307f%3A0x7aadb40e612ebad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lin4Lil4Lix4Lii4Lil4Lix4LiB4Lip4LiT4LmM!5e0!3m2!1sth!2sth!4v1726265844932!5m2!1sth!2sth"
            loading="lazy"
            className="w-full saturate-50"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
