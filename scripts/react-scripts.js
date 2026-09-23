'use strict';

const legacyOpenSslOption = '--openssl-legacy-provider';
const currentNodeOptions = process.env.NODE_OPTIONS || '';

if (!currentNodeOptions.includes(legacyOpenSslOption)) {
  process.env.NODE_OPTIONS = `${currentNodeOptions} ${legacyOpenSslOption}`.trim();
}

require('react-scripts/bin/react-scripts');
