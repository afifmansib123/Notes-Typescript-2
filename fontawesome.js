// fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically

library.add(faCoffee);
