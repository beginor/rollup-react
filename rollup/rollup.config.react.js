import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './node_modules/object-assign/index.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/object-assign.js'
    },
    external: [],
    plugins: [
      nodeResolve({}),
      commonjs({}),
      terser({ format: { comments: false } })
    ]
  },
  {
    input: 'node_modules/scheduler/cjs/scheduler.development.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/scheduler.development.js'
    },
    external: [],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: 'node_modules/scheduler/cjs/scheduler.production.min.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/scheduler.production.min.js'
    },
    external: [],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
  {
    input: 'node_modules/scheduler/cjs/scheduler-tracing.development.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/scheduler-tracing.development.js'
    },
    external: [],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: 'node_modules/scheduler/cjs/scheduler-tracing.production.min.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/scheduler-tracing.production.min.js'
    },
    external: [],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
  {
    input: './rollup/react.development.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react.development.js'
    },
    external: ['object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: './rollup/react.production.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react.production.min.js'
    },
    external: ['object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
  {
    input: './rollup/react-jsx-runtime.development.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-jsx-runtime.development.js'
    },
    external: ['react', 'object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: './rollup/react-jsx-runtime.production.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-jsx-runtime.production.min.js'
    },
    external: ['react', 'object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
  {
    input: './rollup/react-dom.development.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-dom.development.js'
    },
    external: ['react', 'object-assign', 'scheduler', 'scheduler/tracing'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: './rollup/react-dom.production.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-dom.production.min.js'
    },
    external: ['react', 'object-assign', 'scheduler', 'scheduler/tracing'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
]