Small module for inserting CSS rules from Javascript

## Requirements
This module is intended to be used in a modern JS environment (es6 + async functions). 

## Usage
```javascript
import insertCss from '@tiddo/insertCss';

async function init() {
	await insertCss(`
		h1 {
			font-size: 20px;
		}
	`);
}

init();
```

