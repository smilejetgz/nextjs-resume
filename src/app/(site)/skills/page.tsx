import Image from 'next/image';

const SkillPage = () => {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-[#b1adb4] shadow-md md:max-w-full">
      <div className="items-center justify-center lg:flex">
        <div className="md:shrink-0">
          <Image
            src="/assets/images/different-programming-languages.png"
            alt="Avatar"
            width={500}
            height={500}
            className="p-4"
          />
        </div>
        <div className="p-8">
          {/* Expertise Header */}
          <div className="mb-4 border-b p-1">
            <div className="text-2xl font-bold uppercase tracking-wide text-gray-950">
              Expertise
            </div>
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
            {/* Front-end Column */}
            <div>
              <div className="p-4">
                <h3 className="text-xl font-bold uppercase tracking-wide text-gray-950">
                  Front-end
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    HTML/CSS
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Next.js
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Tailwind
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Bootstrap
                  </li>
                </ul>
              </div>
            </div>

            {/* Back-end Column */}
            <div>
              <div className="p-4">
                <h3 className="text-xl font-bold uppercase tracking-wide text-gray-950">
                  Back-end
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    PHP
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Next.js
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Solidity (Blockchain Ethereum)
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    MySQL
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    PostgreSQL
                  </li>
                </ul>
              </div>
            </div>

            {/* Miscellaneous Column */}
            <div>
              <div className="p-4">
                <h3 className="text-xl font-bold uppercase tracking-wide text-gray-950">
                  Miscellaneous
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Javascript
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Typescript
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Python
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Lua
                  </li>
                </ul>
              </div>
            </div>

            {/* Tools Column */}
            <div>
              <div className="p-4">
                <h3 className="text-xl font-bold uppercase tracking-wide text-gray-950">
                  Tools
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Postman
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    VSCode
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    GitHub
                  </li>
                  <li className="text-sm font-semibold uppercase tracking-wide text-gray-950">
                    Figma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
