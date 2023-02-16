import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// More on default export: https://storybook.js.org/docs/ember/writing-stories/introduction#default-export
export default {
    title: 'Floating Labels - FlInput',
    // More on argTypes: https://storybook.js.org/docs/ember/api/argtypes
    argTypes: {
        children: { control: 'text' }
    }
};

//   value?: V | null;
// placeholder?: string;
// containerClass?: string;
// inputBaseClass?: string;
// inset?: boolean;
// id?: string;
// name?: string;
// type?: HTMLInputType;
// errors?: string | string[] | (string | string[])[];

// More on component templates: https://storybook.js.org/docs/ember/writing-stories/introduction#using-args
const Template = (args) => ({
    template: hbs`
                <FlInput
                    @placeholder={{this.placeholder}}
                    @value={{this.value}}
                    @containerClass={{this.containerClass}}
                    @inputBaseClass={{this.inputBaseClass}}
                    @inset={{this.inset}}
                    @id={{this.id}}
                    @name={{this.name}}
                    @type={{this.type}}
                />
            `,
    context: args
});

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/ember/writing-stories/args
Basic.args = {
    placeholder: 'Placeholder',
    value: 'My Value'
};

export const Customized = Template.bind({});
Customized.args = {
    placeholder: 'Placeholder',
    value: 'My Value',
    containerClass: 'my-custom-container-class',
    inputBaseClass: 'my-custom-input-base-class',
    inset: true,
    id: 'my-custom-id',
    name: 'my-custom-name',
    type: 'email'
};

export const WithErrorHandling = (args) => ({
    template: hbs`
    <FlInput
        @placeholder={{this.placeholder}}
        @value={{this.value}}
        @containerClass={{this.containerClass}}
        @inputBaseClass={{this.inputBaseClass}}
        @inset={{this.inset}}
        @id={{this.id}}
        @name={{this.name}}
        @type={{this.type}}
        @errors={{this.errors}}
    />
`,
    context: args
});

WithErrorHandling.args = { ...Customized.args, errors: ['This is an error', 'This is another error'] };
