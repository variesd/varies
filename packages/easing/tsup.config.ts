import { defineConfig } from 'tsup'

export default defineConfig({
  // entry: ['./src/*.ts'],
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'node14',
  clean: true,
  // dts: true,
  splitting: true,
  shims: true
})
