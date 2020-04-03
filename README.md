# @gavant/ember-floating-labels

Animated floating placeholder form labels for Ember apps.

Demo: https://gavant.github.io/ember-floating-labels/

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install @gavant/ember-floating-labels
```

To use the addon styles, you must use SASS:
```
ember install ember-cli-sass
```

(Upon addon installation, an import statement will be added to your `app.scss`)

Usage
------------------------------------------------------------------------------

An example `<FlInput>` usage, with all available arguments specified. Only `@value` and `@placeholder` are required, and you may pass in normal HTML attributes as well which will be applied to the `<input>` element (e.g. `type="email"`, or `disabled={{true}}`, `class="some-custom-input-class"` etc).

`@inset={{true}}` enables an alternate styling, where the floating label will remain constrained inside of the input element, instead of overlaid on its top border.

```hbs
<FlInput
    @value={{string}}
    @placeholder={{string}}
    @containerClass={{string}}
    @inputBaseClass={{string}}
    @inset={{boolean}}
/>

{{!-- block form is supported too --}}
<FlInput @value={{this.someValue}} @placeholder="Block input">
    <Input @value={{this.someValue}} placeholder="Look ma, block content!" />
</FlInput>
```
**NOTE:** When using block form, make sure to still pass in a `@value`, so the label knows when to remain "floated".

There are also floating label components for `<select>` & `<textarea>` fields:

```hbs
<FlSelect
    @options={{array<object>}}
    @value={{string}}
    @valuePath={{string}}
    @labelPath={{string}}
    @emptyOptionText={{string}}
    @allowClear={{boolean}}
    @onChange={{function}}
    @placeholder={{string}}
    @containerClass={{string}}
    @inputBaseClass={{string}}
    @inset={{boolean}}
/>
```

```hbs
<FlTextarea
    @value={{string}}
    @placeholder={{string}}
    @containerClass={{string}}
    @inputBaseClass={{string}}
    @inset={{boolean}}
/>
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
