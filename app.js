import { MDCRipple } from "@material/ripple";
import { MDCTextField } from "@material/textfield";
import { MDCFormField } from "@material/form-field";
import { MDCSelect } from "@material/select";
import { MDCCheckbox } from "@material/checkbox";
import { MDCRadio } from "@material/radio";

const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
const nameField = new MDCTextField(document.querySelector(".mdc-text-field"));
const emailField = new MDCTextField(document.querySelector(".email-field"));
const idField = new MDCTextField(document.querySelector(".id-field"));
const select = new MDCSelect(document.querySelector(".mdc-select"));
const textarea = new MDCTextField(document.querySelector(".mdc-text-field--textarea"));
const formField = new MDCFormField(document.querySelector(".mdc-form-field"));
const checkbox = new MDCCheckbox(document.querySelector(".mdc-checkbox"));
const radio = new MDCRadio(document.querySelector(".mdc-radio"));
const submitButtonRipple = new MDCRipple(document.querySelector(".mdc-button--raised"));
const resetButtonRipple = new MDCRipple(document.querySelector(".reset-btn"));
