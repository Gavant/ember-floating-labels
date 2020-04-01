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

Usage
------------------------------------------------------------------------------

If your using `ember-cli-sass` in your project, an import statement will automatically be added to your project.
All you need to do is use the `fl-input` component.
```
{{fl-input value=value placeholder="Cool Placeholder"}}
```

It also works with `select` & `textarea` fields.

```
{{fl-select
    options=options
    value=value
    placeholder="Cool Placeholder"
    onchange=(action (mut value))
}}
```

```
{{fl-textarea value=value placeholder="Cool Placeholder" rows=10}}
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
