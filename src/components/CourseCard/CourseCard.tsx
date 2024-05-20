import Image from "next/image";
import styles from "./CourseCard.module.css"

interface ICourseCardLayout{
  name: string,
  src: string,
  altText: string
}

export default function CourseCard({name, src, altText}: ICourseCardLayout){
  return(
    <div className={styles.courseCardContainer}>

      <h1>{name}</h1>
      <Image 
        src={src}
        alt={altText}
        className={styles.courseCardLayout}
        width={490}
        height={490}
      />
    </div>
  )
}