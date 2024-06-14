'use client'

import {ReactNode, useEffect, useRef, useState} from 'react';
import styles from './Carousel.module.css';
import CarouselItem from './CarouselItem';
import { ICarouselItem } from '@/types/ICarouselItem';


export default function Carousel({ data }: {data: ICarouselItem[]}) {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
        setCarouselSize({
            width,
            height,
        })
    }
}, [])

  return(
    // <div className={styles.carouselContainer}>
    //   <div className={styles.carouselImgContainer}>
    //     <Image 
    //       src={imgUrl}
    //       alt={altText}
    //       className={styles.carouselImg}
    //       fill
    //     />
    //   </div>
    //   <h1>{title}</h1>
    // </div>
    <div className={styles.carouselTopContainerWraper}>
        <div className={styles.carouselTopContainer}>
            <div ref={carouselRef}
                style={{
                    left: -currentImg * carouselSize.width
                }}
                className={styles.carouselWrapItemContainer}>
                {data.map((item, index): ReactNode => {
                  return (
                    <CarouselItem key={index} title={item.title} altText={item.altText} imgUrl={item.imgUrl}/>
                  )
                })}
            </div>
        </div>
        <div className={styles.buttonContainer}>
            <button
                disabled={currentImg == 0}
                onClick={() => setCurrentImg(prev => prev - 1)}
                className={`${styles.buttonItem} ${currentImg == 0 && styles.disabled}`}
            >
                {"<"}
            </button>
            <button
                disabled={currentImg == data.length - 1}
                className={`${styles.buttonItem} ${currentImg == 0 && styles.disabled}`}
                onClick={() => setCurrentImg(prev => prev + 1)}
            >
                {">"}
            </button>
        </div>
    </div>
  )
}