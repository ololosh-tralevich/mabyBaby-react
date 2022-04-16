// import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
// import "../../../styles/style.scss";

import s from "./info-list.module.scss";


const InfoList = ({ infoList, listTitle } ) => {    

    const elements = infoList.map(item => (
        <li className={s.info__item} key={nanoid()}>
            <a className={s.a} href={item.link} rel="noreferrer" target="_blank">{item.content}</a>
        </li>
    ));       

    return (
        <div className={s.info__box}>
            <h2 className={s.info__title}>{listTitle}</h2>
        <ol className={s.info__list}>
            {elements}
            </ol>
        </div>
    )
};


export default InfoList;