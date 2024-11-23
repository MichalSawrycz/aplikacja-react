import { type ReactNode } from "react";

interface CourseGoalProps {
    src: string;
    alt: string;
    children: ReactNode; 
}


 export default function Header({src, alt, children}: CourseGoalProps) {
 return (
  <header>
        <img src={src} alt={alt}/>
         {children}
    </header>
  
 )
}