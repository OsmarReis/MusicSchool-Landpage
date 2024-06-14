import Image from 'next/image';
import styles from './Carousel.module.css';
import { ICarouselItem } from '@/types/ICarouselItem';

export default function CarouselItem({ title, altText, imgUrl }: ICarouselItem) {

  return(
    <div className={styles.carouselItemContainer}>
        <Image 
          src={imgUrl}
          alt={altText}
          className={styles.carouselImg}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 33vw"
        />
        <h1>{title}</h1>
    </div>
  )
}