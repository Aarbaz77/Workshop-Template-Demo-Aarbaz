# JavaScript Modules

Place additional JavaScript files here for better code organization.

## Example Structure

```
assets/js/
├── utils.js       # Utility functions
├── api.js         # API calls
├── validators.js  # Validation functions
└── README.md      # This file
```

## How to Use

Import or include these files in your `index.html`:

```html
<script src="assets/js/utils.js"></script>
<script src="assets/js/api.js"></script>
<script src="script.js"></script> <!-- Main script last -->
```

Or use ES6 modules (if using a bundler):

```javascript
import { utilFunction } from './assets/js/utils.js';
```
