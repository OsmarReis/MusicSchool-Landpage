import Carousel from "../Carousel/Carousel"
import CourseCard from "../CourseCard/CourseCard"
import styles from "./CoursesCarroussel.module.css"

export default function CoursesCarroussel(){
  const Courses = [
    {
      title: "Baixo",
      altText: "bass lesson",
      imgUrl: "/imgs/Bass.png"
    },
    {
      title: "Violão",
      altText: "guitar lesson",
      imgUrl: "/imgs/Guitar.png"
    },
    {
      title: "Canto",
      altText: "sing lesson",
      imgUrl: "/imgs/Sing.png"
    },
    {
      title: "Guitarra",
      altText: "Eletric Guitar lesson",
      imgUrl: "/imgs/E-guitar.png"
    }
  ]

  return(
    <div>
      <Carousel data={[...Courses]}/>
    </div>
  )
}