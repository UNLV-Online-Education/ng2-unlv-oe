# ng2-unlv-oe
An Angular 2 library of common components used in UNLV Online Education apps (i.e. UNLV OE styles, common app footer, etc.).

## Installation
ng2-unlv-oe is available at npm:
```bash
npm install ng2-unlv-oe --save
```

## Usage
Components are configured as Angular modules.  Once you have installed, modules can be imported from 'ng2-unlv-oe' shorthand in your application code:

```
import { UnlvOeFooterModule } from 'ng2-unlv-oe';
```

`UnlvOeLocalData` is a helper service that will load `assets/data/unlv-oe-local-data.json` as a JSON data file for your project:
```
import { UnlvOeLocalData } from 'ng2-unlv-oe';
```
### Assets
The UNLV OE logo and base styles are also available and must be imported into your project accordingly.  If you are using **Angular CLI**, this is done by configuring your `angular-cli.json` file.  [View the documentation for details](https://github.com/angular/angular-cli#global-library-installation).
