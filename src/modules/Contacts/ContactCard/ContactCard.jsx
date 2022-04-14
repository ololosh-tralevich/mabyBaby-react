import styles from './contactCard.module.scss';

const ContactCard = ({ img, name, position, social, location }) => {
  return (
    <div className={styles.block}>
      <img
        className={styles.foto}
        src={img}
        alt={name}
        width="250"
        height="250"
      />
      <ul className={styles.list}>
        <li className={styles.name}>{name}</li>
        <li className={styles.position}>{position}</li>
        <li className={styles.location}>{location}</li>
      </ul>
    </div>
  );
};
export default ContactCard;
