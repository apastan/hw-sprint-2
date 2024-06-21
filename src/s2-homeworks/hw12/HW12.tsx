import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, Theme} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector<AppStoreType, Theme>(state => state.theme.themeId)

    const dispatch = useDispatch()

    const change = (id: Theme) => { // дописать функцию
        // debugger
        console.log(typeof id)
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <div className={s.selectWrapper}>
                    <div className={s.label}>
                        Выберите тему
                    </div>
                    <SuperSelect
                        id={'hw12-select-theme'}
                        className={s.select}
                        // сделать переключение тем
                        defaultValue={themeId}
                        options={themes}
                        onChangeOption={change}
                    />
                </div>
            </div>
        </div>
    )
}

export default HW12
