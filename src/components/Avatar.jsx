import styles from './Avatar.module.css';

export function Avatar({ image, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={image}
    />
  );
}
