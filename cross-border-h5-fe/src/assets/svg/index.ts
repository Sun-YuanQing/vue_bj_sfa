import SvgIcon from '@/components/SvgIcon'; // svg组件
import Vue from 'vue';

// register globally
Vue.component('SvgIcon', SvgIcon);

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('./icons', false, /\.svg$/);
requireAll(req);
