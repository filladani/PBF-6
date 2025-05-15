// import type { Metadata } from 'next';
// import Image, {StaticImageData} from 'next/image';
// import image1 from '../../../public/images/project1.png';
// import image2 from '../../../public/images/project2.png';

// export const metadata: Metadata = {
//   title: 'Tentang Saya',
//   description: 'Halaman tentang saya.',
//   openGraph: {
//     title: 'Tentang Saya',
//     description: 'Halaman tentang saya.',
//   },
// };
// type projectItemProps = {
//   name : string;
//   url : string;
//   urlDisplay : string;
//   imageSrc : StaticImageData;
// };

// function ProjectItem({name,url,urlDisplay,imageSrc}:projectItemProps){
//   return (
//     <li>
//       <a href={url}>
//         <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
//           <Image className="w-full" src={imageSrc} alt={name} />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{name}</div>
//           </div>
//           <div className="px-6 pb-4">
//             <span className="inline-block bg gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               {urlDisplay}</span>
//           </div>
//         </div>
//       </a>
//     </li>
//   );
// }

// export default function Projects() {
//   return (
//     <div className="mt-16 px-8">
//       <header>
//         <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
//         <p className="text-base mt-6 text-zinc-600">
//           Berikut adalah beberapa proyek yang telah saya kerjakan.
//         </p>
//       </header>

//       <div className="mt-16">
//         <h2 className="text-2xl">Aplikasi</h2>
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
//           <ProjectItem
//             name="Aplikasi 1"
//             url="https://ibb.co.com/35ytfv4c"
//             urlDisplay="SiRW"
//             imageSrc={image1}
//           />
//           <ProjectItem
//             name="Aplikasi 2"
//             url="https://ibb.co.com/qLBtGTvm"
//             urlDisplay="HerbaScan"
//             imageSrc={image2}
//           />
//         </ul>
//       </div>
//     </div>
//   );
// }




// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Tentang Saya',
//   description: 'Halaman tentang saya.',
//   openGraph: {
//     title: 'Tentang Saya',
//     description: 'Halaman tentang saya.',
//   },
// };

// export default function projects() {
//   return (
//     <div className="mt-16 px-8">
//       <header>
//         <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
//       </header>
//     </div>
//   );
// }




import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../../public/images/project1.png';
import image2 from '../../../public/images/project2.png';

export const metadata: Metadata = {
  title: 'Proyek Saya',
  description: 'Halaman proyek yang menampilkan hasil karya aplikasi saya.',
  openGraph: {
    title: 'Proyek Saya',
    description: 'Halaman proyek yang menampilkan hasil karya aplikasi saya.',
    url: 'http://localhost:3000/projects',
    images: [
      {
        url: 'https://i.ibb.co/Ldp6LHy2/aloe-vera-lidah-buaya-169.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview Proyek',
      }
    ]
  }
};

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
          <Image className="w-full" src={imageSrc} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
        <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>
      </header>

      <div className="mt-16">
        <h2 className="text-2xl">Aplikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem
            name="Aplikasi 1"
            url="https://ibb.co/35ytfv4"
            urlDisplay="SiRW"
            imageSrc={image1}
          />
          <ProjectItem
            name="Aplikasi 2"
            url="https://ibb.co/qLBtGTv"
            urlDisplay="HerbaScan"
            imageSrc={image2}
          />
        </ul>
      </div>
    </div>
  );
}
