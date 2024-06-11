import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

export const Card = ({children}: Props) => {
  return <a className={styles.card}>
    {children}
   </a>;
};
