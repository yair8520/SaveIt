import React, { useState } from "react";
import styles from "./MonthCarousel.module.css";
import { MonthCarouselProps } from "./MonthCarouselProps";
import Carousel from "react-material-ui-carousel";
import { MonthCarouselItem } from "../MonthCarouselItem";
import { months } from "@/Consts/constant";

export const MonthCarousel = ({}: MonthCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const updateIndex = (i: number | undefined) => {
    if (i !== undefined) setCurrentIndex(i);
  };
  return (
    <div className={styles.container}>
      <Carousel
        onChange={(i) => updateIndex(i)}
        fullHeightHover={false}
        className={styles.carousel}
        autoPlay={false}
      >
        {months.map((item, i) => (
          <MonthCarouselItem key={i} text={months[currentIndex]} />
        ))}
      </Carousel>
    </div>
  );
};
