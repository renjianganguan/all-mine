import AmIcon from './components/icon/index.vue';
import AmButton from './components/button/index.vue';
import AmInput from './components/input/index.vue';
import AmTable from './components/table/index.vue';
import AmTableColumn from './components/table/table-column.vue';
import AmPopover from './components/popover/index.vue';
import AmTab from './components/tab/index.vue';
import AmSelect from './components/select/index.vue';
import AmOption from './components/option/index.vue';
import AmTooltip from './components/tooltip/index.vue';
import AmDivider from './components/divider/index.vue';
import AmPopup from './components/popup/index.vue';
import AmProgress from './components/progress/index.vue';
import AmCheckbox from './components/checkbox/index.vue';
import AmMenu from './components/menu/index.vue';
import AmMenuItem from './components/menu-item/index.vue';
import AmPagination from './components/pagination/index.vue';
import AmLogo from './components/logo/index.vue';
import AmForm from './components/form/index.vue';
import AmFormItem from './components/form-item/index.vue';
import AmAvatar from './components/avatar/index.vue';

import AmMessage from './components/message/index';
import AmLoading from './components/loading/index';
import AmDialog from './components/dialog/index';

import clickanime from './directives/clickanime/index';
import clickoutside from './directives/clickoutside/index';
import './icon/index';
import './styles/reset.css';
import './styles/default.theme.scss';

export default {
    install(app) {
        app.component('AmIcon', AmIcon);
        app.component('AmTab', AmTab);
        app.component('AmButton', AmButton);
        app.component('AmInput', AmInput);
        app.component('AmTable', AmTable);
        app.component('AmTableColumn', AmTableColumn);
        app.component('AmPopover', AmPopover);
        app.component('AmSelect', AmSelect);
        app.component('AmOption', AmOption);
        app.component('AmTooltip', AmTooltip);
        app.component('AmDivider', AmDivider);
        app.component('AmPopup', AmPopup);
        app.component('AmProgress', AmProgress);
        app.component('AmCheckbox', AmCheckbox);
        app.component('AmMenu', AmMenu);
        app.component('AmMenuItem', AmMenuItem);
        app.component('AmPagination', AmPagination);
        app.component('AmLogo', AmLogo);
        app.component('AmForm', AmForm);
        app.component('AmFormItem', AmFormItem);
        app.component('AmAvatar', AmAvatar);

        app.directive('clickoutside', clickoutside);
        app.directive('clickanime', clickanime);

        app.use(AmMessage);
        app.use(AmLoading);
        app.use(AmDialog);
    },
};