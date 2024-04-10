import { createOptions, buildOrWatch } from '../../scripts/esbuild-helper.js';

const options = createOptions(
  ['./src/index.ts'],
  './dist/index.js'
);

buildOrWatch(options);
