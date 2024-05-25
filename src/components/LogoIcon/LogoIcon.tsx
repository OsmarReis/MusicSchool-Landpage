import Image from 'next/image';
import styles from './LogoIcon.module.css';

export default function LogoIcon() {
  return( 
    <div className={styles.contentTitle}>
    <Image
      src="/logo.svg"
      alt="Guitar Logo"
      className={styles.logoIcon}
      width={24}
      height={24}
    />
    <h1>MusicaUni</h1>
  </div>
  );
};