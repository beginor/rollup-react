import { ThemeConfig } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import dayjs from 'dayjs';
import locale from 'dayjs/locale/zh-cn';

import weekday from 'dayjs/plugin/weekday.js';
import localeData from 'dayjs/plugin/localeData.js';

dayjs.locale('zh-cn', locale);
dayjs.extend(weekday);
dayjs.extend(localeData);

const theme: ThemeConfig = {
    token: {

    }
};

export { zhCN, dayjs, theme }
