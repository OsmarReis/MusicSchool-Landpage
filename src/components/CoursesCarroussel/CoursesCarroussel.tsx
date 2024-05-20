import CourseCard from "../CourseCard/CourseCard"
import styles from "./CoursesCarroussel.module.css"

export default function CoursesCarroussel(){
  const Courses = [
    {
      name: "Baixo",
      altText: "bass lesson",
      src: "/public/vids/bass.mp4"
    },
    {
      name: "Violão",
      altText: "guitar lesson",
      src: "/public/vids/guitar.mp4"
    },
    {
      name: "Canto",
      altText: "sing lesson",
      src: "/public/vids/sing.mp4"
    },
    {
      name: "Guitarra",
      altText: "Eletric Guitar lesson",
      src: "/public/vids/e_guitar.mp4"
    }
  ]

  return(
    <div className={styles.carrousselLayout}>
      <CourseCard 
        name="Violão"
        altText="Aulas de violão"
        src="/imgs/Guitar.png"
      />
      <CourseCard 
        name="Violão"
        altText="Aulas de violão"
        src="/imgs/Guitar.png"
      />
      <CourseCard 
        name="Violão"
        altText="Aulas de violão"
        src="/imgs/Guitar.png"
      />
      <CourseCard 
        name="Violão"
        altText="Aulas de violão"
        src="/imgs/Guitar.png"
      />
    </div>
  )
}