"use client";
import { MaskContainer } from "@/components/ui/maskEffect";

export function Features() {
  return (
  <>
    <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-6 mt-8 text-center">Packed with Features </h1>
    <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden mt-8 ">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-200 dark:text-white">
            Keep your friends close and your semicolons closer
          </p>
        }
        className="h-[40rem]  text-white dark:text-black p-8"
      >
        
        <span className='text-blue-500'>Embrace the power of collaboration </span > 
        and unlock your potential with the
        <span className='text-blue-500'> right mentorship</span> to turn ideas into reality.
      </MaskContainer>
      <div className="w-[5rem]"></div>
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-200 dark:text-white">
            There is no ‘try’ in coding, only ‘do’ or ‘debug
          </p>
        }
        className="h-[40rem]  text-white dark:text-black p-8"
      >
        Connect with <span className="text-blue-500">the right mentors</span>, access
<span className="text-blue-500"> relevant research papers</span>, and collaborate seamlessly
to bring your project to life
      </MaskContainer>
    </div>
    </>
  );
}
