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
        />
      
    </div>
  )
}