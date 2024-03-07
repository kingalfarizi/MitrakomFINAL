/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";

// Material Dashboard 2 React base styles
import colors from "admin/assets/theme/base/colors";
import breakpoints from "admin/assets/theme/base/breakpoints";
import typography from "admin/assets/theme/base/typography";
import boxShadows from "admin/assets/theme/base/boxShadows";
import borders from "admin/assets/theme/base/borders";
import globals from "admin/assets/theme/base/globals";

// Material Dashboard 2 React helper functions
import boxShadow from "admin/assets/theme/functions/boxShadow";
import hexToRgb from "admin/assets/theme/functions/hexToRgb";
import linearGradient from "admin/assets/theme/functions/linearGradient";
import pxToRem from "admin/assets/theme/functions/pxToRem";
import rgba from "admin/assets/theme/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "admin/assets/theme/components/sidenav";
import list from "admin/assets/theme/components/list";
import listItem from "admin/assets/theme/components/list/listItem";
import listItemText from "admin/assets/theme/components/list/listItemText";
import card from "admin/assets/theme/components/card";
import cardMedia from "admin/assets/theme/components/card/cardMedia";
import cardContent from "admin/assets/theme/components/card/cardContent";
import button from "admin/assets/theme/components/button";
import iconButton from "admin/assets/theme/components/iconButton";
import input from "admin/assets/theme/components/form/input";
import inputLabel from "admin/assets/theme/components/form/inputLabel";
import inputOutlined from "admin/assets/theme/components/form/inputOutlined";
import textField from "admin/assets/theme/components/form/textField";
import menu from "admin/assets/theme/components/menu";
import menuItem from "admin/assets/theme/components/menu/menuItem";
import switchButton from "admin/assets/theme/components/form/switchButton";
import divider from "admin/assets/theme/components/divider";
import tableContainer from "admin/assets/theme/components/table/tableContainer";
import tableHead from "admin/assets/theme/components/table/tableHead";
import tableCell from "admin/assets/theme/components/table/tableCell";
import linearProgress from "admin/assets/theme/components/linearProgress";
import breadcrumbs from "admin/assets/theme/components/breadcrumbs";
import slider from "admin/assets/theme/components/slider";
import avatar from "admin/assets/theme/components/avatar";
import tooltip from "admin/assets/theme/components/tooltip";
import appBar from "admin/assets/theme/components/appBar";
import tabs from "admin/assets/theme/components/tabs";
import tab from "admin/assets/theme/components/tabs/tab";
import stepper from "admin/assets/theme/components/stepper";
import step from "admin/assets/theme/components/stepper/step";
import stepConnector from "admin/assets/theme/components/stepper/stepConnector";
import stepLabel from "admin/assets/theme/components/stepper/stepLabel";
import stepIcon from "admin/assets/theme/components/stepper/stepIcon";
import select from "admin/assets/theme/components/form/select";
import formControlLabel from "admin/assets/theme/components/form/formControlLabel";
import formLabel from "admin/assets/theme/components/form/formLabel";
import checkbox from "admin/assets/theme/components/form/checkbox";
import radio from "admin/assets/theme/components/form/radio";
import autocomplete from "admin/assets/theme/components/form/autocomplete";
import container from "admin/assets/theme/components/container";
import popover from "admin/assets/theme/components/popover";
import buttonBase from "admin/assets/theme/components/buttonBase";
import icon from "admin/assets/theme/components/icon";
import svgIcon from "admin/assets/theme/components/svgIcon";
import link from "admin/assets/theme/components/link";
import dialog from "admin/assets/theme/components/dialog";
import dialogTitle from "admin/assets/theme/components/dialog/dialogTitle";
import dialogContent from "admin/assets/theme/components/dialog/dialogContent";
import dialogContentText from "admin/assets/theme/components/dialog/dialogContentText";
import dialogActions from "admin/assets/theme/components/dialog/dialogActions";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
