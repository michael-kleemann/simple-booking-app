import styles from './styles.module.css';
import Link from 'next/link'

interface Props {
  children: React.ReactNode;
  href: string;
}

export const Card = ({children, href}: Props) => {
  return <Link href={href}>
    <a className={styles.card}>
    {children}
    </a>
   </Link>;
};
