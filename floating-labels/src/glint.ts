// Easily allow apps, which are not yet using strict mode templates, to consume your Glint types, by importing this file.
// Add all your components, helpers and modifiers to the template registry here, so apps don't have to do this.
import { ComponentLike } from '@glint/template';

// See https://typed-ember.gitbook.io/glint/using-glint/ember/authoring-addons
import { FLInputSignature } from './components/fl-input';
import FlSelect from './components/fl-select';
import FlTextarea from './components/fl-textarea';

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        FlInput: ComponentLike<FLInputSignature>;
        FlSelect: typeof FlSelect;
        FlTextarea: typeof FlTextarea;
    }
}
