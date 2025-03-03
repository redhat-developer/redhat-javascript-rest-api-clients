import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'swagger/rhsm-2-swagger.yml',
  output: 'src-generated',
  plugins: ['@hey-api/client-axios'],
});