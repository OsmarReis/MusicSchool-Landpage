import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import ActionBtn from "@/components/ActionBtn/ActionBtn";
import CoursesCarroussel from "@/components/CoursesCarroussel/CoursesCarroussel";
import Form from "@/components/Form/Form";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

export default function Home() {
  return (
    <main id="Home" className={styles.main}>
      {/* <Header/> */}
      <HeaderMobile />
      
      <section id="Home" className={styles.homeSection}>
        <Image 
          src="/imgs/bg-1.png"
          alt="Background image, guitar"
          className={styles.bgImg}
          fill={true}
          priority
        />
        <h1>Quer aprender música?</h1>
        <h1>Aprenda com os <span>melhores!</span></h1>
        <ul>
          <li>A melhor didática que já viu!</li>
          <li>Aulas completas(teoria e prática)!</li>
          <li>Temos acessibilidade e compromentimento!</li>
        </ul>

        <ActionBtn/>
      </section>

      <section id="About" className={styles.aboutSection}>
        <Image
          src="/imgs/img-2.png"
          alt="A Sheet Music Book"
          className={styles.aboutImg}
          width={256}
          height={171}
        />

        <div>
        <h1>Somos a MusicaUni</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id rhoncus felis. Donec molestie rutrum libero non efficitur. Maecenas malesuada efficitur enim, sed fermentum augue. Etiam quis elit vel nulla varius malesuada. Curabitur accumsan tellus odio, ac dignissim nulla imperdiet in. Praesent sed nisl mollis, facilisis eros sed, luctus magna. Duis aliquam in nibh cursus malesuada. Nam eu accumsan risus. Fusce quis nisl sed neque tristique tincidunt. Aliquam quam nunc, dictum in lectus ut, sagittis malesuada velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id rhoncus felis. Donec molestie rutrum libero non efficitur. Maecenas malesuada efficitur enim, sed fermentum augue. Etiam quis elit vel nulla varius malesuada. Curabitur accumsan tellus odio, ac dignissim nulla imperdiet in. Praesent sed nisl mollis, facilisis eros sed, luctus magna. Duis aliquam in nibh cursus malesuada. Nam eu accumsan risus. Fusce quis nisl sed neque tristique tincidunt. Aliquam quam nunc, dictum in lectus ut, sagittis malesuada velit.</p>
        </div>
      </section>

      <section id="Courses" className={styles.courseSection}>
        <h1>Se liga nos nossos cursos!</h1>
        <CoursesCarroussel />
      </section>

      <section id="Contact" className={styles.contactSection}>
        <div>
          <h1>Entre em contato!</h1>
          <Image 
            src="/imgs/img-3.png"
            alt="Class Students"
            className={styles.aboutImg}
            width={256}
            height={171}
          />
          <h1>Faça parte dessa turma você também!</h1>
        </div>

        <Form />
      </section>

      <footer><span>&copy; Osmar Reis 2024</span></footer>
    </main>
  );
}
