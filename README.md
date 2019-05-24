# ember-floating-labels

Animated floating placeholder form labels for Ember apps.

Demo: https://gavant.github.io/ember-floating-labels/
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

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
