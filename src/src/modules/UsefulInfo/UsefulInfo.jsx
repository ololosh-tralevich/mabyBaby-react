import styles from './usefulInfo.module.scss'

import InfoList from "./InfoList";
import { literature } from "./info-content/literature";
import { resources } from "./info-content/resources";

const UsefulInfo = () => {
  return (
                  
            <section className={styles.section}>
                <div className={styles.info}>                    
                    <InfoList infoList={literature} listTitle="Useful literature" />                  
                    <InfoList infoList={resources} listTitle="Useful resources" />                
                </div>                 
            </section>           
           
    )
};

export default UsefulInfo;



