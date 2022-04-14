// import UsefulInfo from '../../modules/UsefulInfo/UsefulInfo';

import InfoList from "../../shared/components/InfoList";
import { literature } from "./info-content/literature";
import { resources } from "./info-content/resources";

import s from "./info-page.module.scss";

const UsefulInfoPage = () => {
   return (
        <main>            
            <div className="container">
                <div className={s.info}>                    
                    <InfoList infoList={literature} listTitle="Useful literature" />                  
                    <InfoList infoList={resources} listTitle="Useful resources" />                
                </div>                 
            </div>           
        </main>        
    )
};

export default UsefulInfoPage;
