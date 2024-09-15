import Image from 'next/image';
import Link from 'next/link';

export const RepositoryStockDetail = () => {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-xl bg-slate-950/10 px-8 py-8 shadow-lg">
      <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3 text-5xl font-bold text-transparent">
        NextJS Stock
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[
          {
            src: '/assets/images/stock/image1.png',
            alt: 'Sample image 1',
            width: 700,
            height: 700,
          },
          {
            src: '/assets/images/stock/image2.png',
            alt: 'Sample image 2',
            width: 700,
            height: 700,
          },
          {
            src: '/assets/images/stock/image5.png',
            alt: 'Sample image 3',
            width: 700,
            height: 700,
          },
          {
            src: '/assets/images/stock/image6.png',
            alt: 'Sample image 4',
            width: 700,
            height: 700,
          },
        ].map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto max-w-full rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href="https://github.com/smilejetgz/nextjs-stock"
          target="_blank"
          className="pt-3 text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export const RepositoryTableDetail = () => {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-xl bg-slate-950/10 px-8 py-8 shadow-lg">
      <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3 text-5xl font-bold text-transparent">
        NextJS Tanstack Table
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 justify-center gap-8">
          {[
            {
              src: '/assets/images/tanstackTable/image1.png',
              alt: 'Sample image 1',
              width: 700,
              height: 700,
            },
            {
              src: '/assets/images/tanstackTable/image2.png',
              alt: 'Sample image 2',
              width: 700,
              height: 700,
            },
          ].map((image, index) => (
            <div key={index} className="w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto max-w-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          href="https://github.com/smilejetgz/nextjs-tanstack-table.git"
          target="_blank"
          className="pt-3 text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
