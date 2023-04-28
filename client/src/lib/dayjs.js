import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

dayjs().format('L LT');
dayjs.locale('pt-br');