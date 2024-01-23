import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import styles from '@/styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['cyrillic'] });

export default function DetailBook() {
  const { query } = useRouter();

  return (
    <>
      <div className={`${styles.main} ${montserrat.className}`}>
        <h1>Detail Buku</h1>
        <h3>Buku : {query.id}</h3>
      </div>
    </>
  );
}
