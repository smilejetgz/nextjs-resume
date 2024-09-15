import Link from 'next/link';

const ExperienceDetail = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col space-y-8 rounded-xl bg-slate-950/10 px-8 py-8 shadow-lg md:flex-row md:space-x-8 md:space-y-0">
      <div className="w-full space-y-4 p-4 text-center sm:text-left">
        <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3 text-5xl font-bold text-transparent">
          Experience
        </h1>

        <div className="flex flex-col gap-1 border-b p-4 sm:text-center md:text-left">
          <h3 className="text-2xl font-bold">
            Restaurant recommendation system
          </h3>
          <div className="text-xl">
            <span className="font-bold underline">
              Suratthani Rajabhat University
            </span>
            <span className="pl-4 font-normal text-blue-400">2018 - 2019</span>
          </div>
          <span className="break-all pt-4 text-left indent-8">
            This graduation project is to develop a web application that helps
            restaurants to mark their locations on a map and present their menus
            and various promotions. This allows consumers to know which areas
            have restaurants and to rate or comment on those restaurants
          </span>
        </div>

        <div className="flex flex-col gap-1 border-b p-4 sm:text-center md:text-left">
          <h3 className="text-2xl font-bold">IT Asset Management System</h3>
          <div className="text-xl">
            <span className="font-bold underline">
              TUENJAI PANIT GROUP CO. LTD
            </span>
            <span className="pl-4 font-normal text-blue-400">2019</span>
          </div>
          <span className="break-all pt-4 text-left indent-8">
            During my internship at TUENJAI PANIT GROUP CO. LTD. , I developed a
            web application for managing IT assets. This application allows the
            company to track IT assets such as computers and cctv, and to see
            which department or branch they are located in. It also includes a
            map showing over 120 branches nationwide, and can calculate the
            distance and estimated travel time between branches.
          </span>
        </div>

        <div className="flex flex-col gap-1 border-b p-4 sm:text-center md:text-left">
          <h3 className="text-2xl font-bold">
            Network Asset Management System
          </h3>
          <div className="text-xl">
            <span className="font-bold underline">
              TUENJAI PANIT GROUP CO. LTD
            </span>
            <span className="pl-4 font-normal text-blue-400">2019</span>
          </div>
          <span className="break-all pt-4 text-left indent-8">
            During my internship at TUENJAI PANIT GROUP CO. LTD. , I developed a
            web application for managing servers. This application helps the
            company track servers in use, as well as servers that are faulty and
            have been sent for repair.
          </span>
        </div>

        <div className="flex flex-col gap-1 border-b p-4 sm:text-center md:text-left">
          <h3 className="break-all text-2xl font-bold">
            Web Application Developer Tutor
          </h3>
          <div className="text-xl">
            <span className="font-bold underline">Freelance</span>
            <span className="pl-4 font-normal text-blue-400">2020 - 2022</span>
          </div>
          <span className="pt-4 text-left indent-8">
            Freelance tutoring for undergraduate students in basic PHP, SQL,
            HTML, and CSS, empowering them to explore and develop on their own.
          </span>
        </div>

        <div className="flex flex-col gap-1 border-b p-4 sm:text-center md:text-left">
          <h3 className="text-2x break-alll font-bold">
            Security Enhancement in Smart Logistics with Blockchain Technology:
            A Home Delivery Use Case
          </h3>
          <div className="text-xl">
            <span className="font-bold underline">Walailak University</span>
            <span className="pl-4 font-normal text-blue-400">2020 - 2022</span>
          </div>
          <span className="pt-4">Abstract</span>
          <span className="break-all text-left indent-8">
            Home delivery (B2C) experienced rapid growth during the COVID-19
            pandemic, especially food delivery. Nonrepudiation is a problem in
            security and affects delivery. Blockchain technology is a new
            technology that addresses this issue. This paper proposes preventing
            nonrepudiation in home delivery through blockchain technology. We
            also design a data structure and smart contract for distributed
            application. In addition, we evaluate the performance of the
            proposed framework in terms of transaction fees and response times.
            We experimented on the blockchain emulator, stored data in RDBMS,
            and implemented a client with a mobile application. The data in the
            smart contract were directly impacted by the gas used and the
            response time. Primarily, the function processes the large data size
            and involves high transaction fees and long response times. The gas
            used accounts for 9061 times of data length, while the response time
            accounts for 2.84 times of data length. Finally, we propose a
            security policy for the proposed framework.
          </span>
          <Link
            href="https://www.mdpi.com/2227-9709/9/3/70"
            target="_blank"
            className="p-3 text-right text-blue-600 hover:underline"
          >
            Link Paper
          </Link>
        </div>

        <div className="flex flex-col gap-1 p-4 sm:text-center md:text-left">
          <h3 className="text-2xl font-bold">
            Transaction Fees Minimization in Blockchain-Based Home Delivery
            System
          </h3>
          <div className="text-xl">
            <span className="font-bold underline">Walailak University</span>
            <span className="pl-4 font-normal text-blue-400">2022 - 2023</span>
          </div>
          <span className="pt-4">Abstract</span>
          <span className="break-all text-left indent-8">
            This study investigates the impact of Zlib compression on gas
            consumption within blockchain systems, focusing particularly on
            Ethereum transactions. By employing the Ethereum simulator Ganache,
            we simulate 100 realistic home delivery system datasets to evaluate
            the performance of compressed versus uncompressed data. The
            methodology encompasses rigorous statistical analysis to ensure
            robust results. Our findings reveal that using the Zlib algorithm to
            compress textual data exceeding 141 bytes before submitting
            transactions on the Ethereum network reduces the gasUsed while
            maintaining the system time unchanged. This demonstrates the
            effectiveness of data compression in optimizing transaction costs
            without affecting operational efficiency. Additionally, our research
            extends to analyzing real gasPrice trends on the Ethereum network.
            We propose a non-linear regression model that accurately predicts
            hourly gasPrice variations based on the day of the week and the
            specific time. This provides a valuable tool for users to plan
            transactions strategically. These insights enhance the understanding
            of blockchain dynamics and offer practical solutions for improving
            economic and system efficiency in blockchain operations.
          </span>
          <Link
            href="https://ieeexplore.ieee.org/document/10630504"
            target="_blank"
            className="p-3 text-right text-blue-600 hover:underline"
          >
            Link Paper
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
