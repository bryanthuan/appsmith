export const WIDGET = {
  INPUT_WIDGET_V2: "inputwidgetv2",
  TEXT: "textwidget",
  PHONE_INPUT_WIDGET: "phoneinputwidget",
  CURRENCY_INPUT_WIDGET: "currencyinputwidget",
  BUTTON_WIDGET: "buttonwidget",
  MULTISELECT_WIDGET: "multiselectwidgetv2",
  TREESELECT_WIDGET: "singleselecttreewidget",
  TAB: "tabswidget",
  TABLE: "tablewidgetv2",
  SWITCHGROUP: "switchgroupwidget",
  SWITCH: "switchwidget",
  SELECT: "selectwidget",
  MULTITREESELECT: "multiselecttreewidget",
  RADIO_GROUP: "radiogroupwidget",
  LIST: "listwidget",
  RATING: "ratewidget",
  CHECKBOXGROUP: "checkboxgroupwidget",
  CHECKBOX: "checkboxwidget",
  AUDIO: "audiowidget",
  AUDIORECORDER: "audiorecorderwidget",
  PHONEINPUT: "phoneinputwidget",
  CAMERA: "camerawidget",
  FILEPICKER: "filepickerwidgetv2"
} as const;

export const PROPERTY_SELECTOR = {
  onClick: ".t--property-control-onclick",
  onSubmit: ".t--property-control-onsubmit",
  text: ".t--property-control-text",
  defaultValue: ".t--property-control-defaultvalue",
};
type ValueOf<T> = T[keyof T];

export const getWidgetSelector = (widget: ValueOf<typeof WIDGET>) =>
  `.t--widget-${widget}`;
export const getWidgetInputSelector = (widget: ValueOf<typeof WIDGET>) =>
  `.t--widget-${widget} input`;
