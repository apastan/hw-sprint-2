import React from 'react'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import { Layout } from './layout/Layout'
import Pages from './Pages'

/*
* 1 - в файле Pages.tsx дописать роуты на все страницы
* 2 - в файле Sidebar.tsx дописать className так чтоб вешался класс s.active когда мы уже на соответствующей странице
* 3 - застилизовать хэдэр и сайдбар в соответствии с дизайном
* */

function HW5() {
    return (
        // <BrowserRouter basename={"/hw-sprint-2"}></BrowserRouter>
        <HashRouter>
            {/*в gh-pages лучше работает HashRouter, с BrowserRouter скорее всего не пройдёт тест*/}
            <Layout>
                <Pages />
            </Layout>
        </HashRouter>
    )
}

export default HW5
