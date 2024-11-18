import linkedin_image from "/public/linkedin.png";
import Image from "next/image";
import twitter_image from "/public/twitter.png";
import Link from "next/link";
import github_image from "/public/github.png";
import whatsapp_image from "/public/whatsapp.png";
import profile_pic from "/public/logo.png";

export default function About() {
  const linkedinUrl = "https://www.linkedin.com/in/saher-rameez-1237622b6/";
  const githubUrl = "https://github.com/sahergul";
  const twitterUrl = "";
  const whatsappUrl = "";

  return (
    <div id="about" className="w-fill md:h-screen p-2 items-center bg-gradient-to-r from-cyan-500 to-violet-500">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-3xl mt-10 text-slate-50 font-bold mb-4 ">About Me</h1>
          <p className="text-justify text-slate-50">
           
            Hello! I’m Saher Gul, a passionate Frontend developer based in karachi. With a keen eye for detail and a love for
            creative problem-solving, I strive to deliver innovative solutions that enhance user experiences and drive results.
            <br/>
            I began my journey in 2023, &quot;the tech industry&quot; or &quot;graphic design&quot; and quickly discovered my passion for &quot;front-end development&quot; 
            &quot;creating visually appealing designs,&quot;. Over the years, I’ve honed my skills in HTML, CSS, JavaScript, Tailwind & Next.js, 
            allowing me to transform ideas into engaging digital experiences.
            <br/>
            What I Do
            <br/>
            Currently, I focus on Responsive E-commerce website, &quot;building responsive websites,&quot; &quot;creating branding materials,&quot;. My approach 
            combines Figma UI & UX design &quot;user-centered design,&quot; &quot;agile development,&quot; etc., ensuring that every project I undertake meets both client 
            expectations and user needs.
            <br/>
          
            I am grateful for the opportunities that
            have come my way, and I am determined to keep learning and growing
            in my career.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 mt-10">
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center bg-white">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={linkedin_image} alt="LinkedIn Logo" />
                </div>
              </div>
            </Link>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center bg-white">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={github_image} alt="Github Logo" />
                </div>
              </div>
            </Link>
            <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center bg-white">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={twitter_image} alt="Twitter Logo" />
                </div>
              </div>
            </Link>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 mb-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center bg-white">
                <div className="flex h-10 w-10 place-content-center">
                  <Image src={whatsapp_image} alt="Whatsapp Logo" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl mx-10 shadow-gray-200 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={profile_pic} alt={"Profile Picture"} width={1500} height={1500}/>
        </div>
      </div>
    </div>
  );
}
