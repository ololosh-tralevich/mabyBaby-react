import {useSelector, shallowEqual} from 'react-redux';

import { getGlobalStore } from '../../redux/userAccount/userAccount-selectors';

const MainModule = () => {
    const globalStore = useSelector(getGlobalStore, shallowEqual)
    console.log(globalStore)

    return (
        <div>
         {/* your code */}
         <p>main</p>
        </div>
    )
}

export default MainModule;