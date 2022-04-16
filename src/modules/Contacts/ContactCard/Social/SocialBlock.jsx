import Linkedin from './Linkedin/Linkedin';
import GitHubItem from './GitHubItem/GitHubItem';
import TeleGram from './TeleGram/TeleGram';
import GoogleMail from './GoogleMail/GoogleMail';
import styles from './socialBlock.module.css';

const SocialBlock = ({ social: { linkedin, github, telegram, google } }) => {
  return (
    <ul>
      <li className={styles.social}>
        <a
          className={styles.links}
          href={linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className={styles.item} color={'#555555'} />
        </a>
      </li>
      <li className={styles.social}>
        <a
          className={styles.links}
          href={github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubItem className={styles.item} color={'#555555'} />
        </a>
      </li>
      <li className={styles.social}>
        <a
          className={styles.links}
          href={telegram}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TeleGram className={styles.item} color={'#555555'} />
        </a>
      </li>
      <li className={styles.social}>
        <a
          className={styles.links}
          href={google}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GoogleMail className={styles.item} color={'#555555'} />
        </a>
      </li>
    </ul>
  );
};
export default SocialBlock;
