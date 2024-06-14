'use client'

import { useEffect, useState } from "react";

export function useResponsive(width:number) {
  const [responsive, setResponsive] = useState<Boolean | undefined>(undefined);

  useEffect(() => {
    console.log("Olá");
    const updateResponsive = () => {
      setResponsive(window.innerWidth < width ? true : false)
    }
    updateResponsive()
    window.addEventListener('resize', updateResponsive)
    return () => {
      window.removeEventListener('resize', updateResponsive)
    }
  }, [width]);

  return responsive;
}