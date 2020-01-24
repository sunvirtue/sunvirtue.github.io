import 'promise-polyfill/src/polyfill';
import 'svgxuse';
import ObjectFitImages from 'object-fit-images';
// import HeaderMenu from './blocks/header/menu/header-menu';
// import Slider from './blocks/slider/slider';

require('custom-event-polyfill');
require('./autoload.scss');

ObjectFitImages(null, { watchMQ: true });

// HeaderMenu.init();
