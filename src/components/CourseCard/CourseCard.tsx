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

      <Image 
        src={src}
        alt={altText}
        className={styles.courseCardImg}
        width={240}
        height={240}
        // fill={true}
        // sizes="240px, 240px"
        />
        <h1>{name}</h1>
    </div>
  )
}