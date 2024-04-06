

 import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import Link from 'next/link'
 
 function Projects() {
   return (
     <div  
     className="flex flex-col items-center justify-center py-20"
     id="projects"
     >

        <h1   className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">My Projects</h1>




         <div  className=' w-full h-full flex flex-col md:flex-row gap-10  px-10'>
             <Link href="https://github.com/hghyhghy">
            <ProjectCard
            src="/NextWebsite.png"
            title='Modern Next.js Portfolio'
            description='That is modern Next.js Portfolio build by using Next.js 14 and Typescrip '
            
            />
            </Link>
            
            <ProjectCard
            src="/CardImage.png"
            title='Intercative Moren Website Cards'
            description='That is modern Next.js Portfolio build by using Next.js 14 and Typescrip '
            
            />
          <Link href="https://github.com/hghyhghy">
            <ProjectCard
            src="/gemini.png"
            title='Google Gemini Ai clone'
            description='That is modern Next.js Portfolio build by using Next.js 14 and Typescrip '
            
            />
            </Link>  



            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Builr for space researchers."
            />
           <Link href="https://github.com/hghyhghy">
            <ProjectCard
              src="/cars.png"
              title="Car showcasing website"
              description="Car showcasing wesite for car lovers."
            />
            </Link>


         </div>
       
     </div>
   )
 }
 
 export default Projects
 