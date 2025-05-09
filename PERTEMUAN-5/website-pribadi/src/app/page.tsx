import type { Metadata } from 'next';
import Image from 'next/image';
import profilePic from '../../public/images/project1.png';
import { Mail, Github, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function About() {
  return (
    <div className="mt-16 px-8 max-w-4xl mx-auto">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
        <p className="text-zinc-600 mt-2">QA Engineer</p>
      </header>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        {/* Foto Profil */}
        <div className="w-40 h-40 md:w-52 md:h-52 relative overflow-hidden border-4 border-teal-500 shadow-lg">
          <Image src={profilePic} alt="Foto Profil" layout="fill" objectFit="cover" />
        </div>

        {/* Deskripsi Diri */}
        <div className="text-center md:text-left">
          <p className="text-lg text-zinc-700">
            Halo! Saya <span className="font-semibold">Filla</span>, seorang <span className="text-teal-500">QA Engineer</span> yang memiliki ketertarikan dalam menguji sistem baik web maupun mobile.
          </p>
          <p className="mt-4 text-zinc-600">
            Saya memiliki pengalaman dalam pengujian sistem berbasis web pada semester 3 dan 4, selain itu di semester 5 saya juga menguji sistem berbasis mobile yang bernama HerbaScan.
          </p>

          {/* Ikon Sosial Media */}
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <a href="https://instagram.com/" className="flex items-center gap-2 text-zinc-600 hover:text-teal-500 transition">
              <Instagram size={20} /> Instagram
            </a>
            <a href="https://github.com/filladani" className="flex items-center gap-2 text-zinc-600 hover:text-teal-500 transition">
              <Github size={20} /> GitHub
            </a>
            <a href="mailto:fillau123@gmail.com" className="flex items-center gap-2 text-zinc-600 hover:text-teal-500 transition">
              <Mail size={20} /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}





// import type { Metadata } from 'next';
// import Image from 'next/image';
// import profilePic from '../../public/images/profile.jpg';

// export const metadata: Metadata = {
//   title: 'Tentang Saya',
//   description: 'Halaman tentang saya.',
//   openGraph: {
//     title: 'Tentang Saya',
//     description: 'Halaman tentang saya.',
//   },
// };

// export default function Home() {
//   return ( 
//   <div className="mt-16 px-8" >
//     <header>
//       <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
//     </header>
//   </div>
//   )
  
// }
