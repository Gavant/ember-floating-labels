// Types for compiled templates
declare module '@gavant/ember-floating-labels/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
