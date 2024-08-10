import { defineConfig } from '@badeball/cypress-cucumber-preprocessor';
require('dotenv').config();

defineConfig({
  nonGlobalStepDefinitions: true,
});

require('cypress-parallel/support');
