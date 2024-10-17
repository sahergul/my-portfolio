import Image from "next/image";
import html_image from "./img/html.png";
import css_image from "./img/css.png";
import javaScript from "./img/javascript.png";
import typescript_image from "./img/typescript.png";
import office from "./img/office.jpeg";
import canva from "./img/canva.png";
import next from "/public/next.svg";

export default function About() {
  return (
    <div id="skills" className="w-full p-4 bg-gradient-to-r from-cyan-500 to-violet-500">
      <div className="max-w-[1240px] mx-auto flex justify-center items-center my-5">
        
        <h2 className="py-4 text-4xl font-bold">What Can I Do</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              98%
            </div>
            <div className="relative">
              <Image
                src={html_image}
                alt="Logo"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-8 text-3xl font-bold">HTML</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              92%
            </div>
            <div className="relative">
              <Image
                src={css_image}
                alt="Logo"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">CSS</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              72%
            </div>
            <div className="relative">
              <Image
                src={javaScript}
                alt="Logo"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">JavaScript</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              83%
            </div>
            <div className="relative">
              <Image
                src={typescript_image}
                alt="Logo"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">TypeScript</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              99%
            </div>
            <div className="relative">
              <Image
                src={office}
                alt=""
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Ms Office</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              62%
            </div>
            <div className="relative">
              <Image
                src={next}
                alt="Logo"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Nextjs</h3>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative">
          <div className="flex items-center justify-center">
            <div className="absolute top-0 right-0 p-2 text-white text-xs bg-[#2b34a8] rounded-bl-md">
              79%
            </div>
            <div className="relative">
              <Image
                src={canva}
                alt="Logo"
                className="h-24 w-24 object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
            <h3 className="pl-5 text-3xl font-bold">Canva</h3>
          </div>
        </div>
       </div>
    </div>
  );
}