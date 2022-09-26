import React, {useEffect} from 'react';

const Alert = ({name = '', closeAlert = Function.prototype}) => {

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)
        return ()=>{
            // eslint-disable-next-line
            clearTimeout(timerId)
        }
    }, [name])

    return (
        <div id='toast-container'>
            <div className="toast">"{name}" добавлен</div>
        </div>
    )
};

export default Alert;
