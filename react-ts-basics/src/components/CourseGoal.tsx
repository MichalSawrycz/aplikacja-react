//import { type FC, type ReactNode } from "react";
import { type ReactNode } from "react";

interface CourseGoalProps {
    id: number;
    title: string; 
    children: ReactNode
    onDelete: (id: number) => void
}

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return (
//     <article>
//      <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//     </div>
//      <button>Delete</button>
//   </article>
//     )
// }
// export default CourseGoal;

 export default function CourseGoal({title, children, id, onDelete}: CourseGoalProps) {
 return (
  <article>
     <div>
         <h2>{title}</h2>
         <p>{children}</p>
     </div>
     <button onClick={() => onDelete(id)}>Delete</button>
  </article>
 )
}