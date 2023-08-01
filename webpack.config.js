const path = require('path');

const commonConfig = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    'units-converter-ts': 'units-converter-ts',
  },
};

module.exports = [
  {
    ...commonConfig,
    target: 'node',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist', 'cjs'),
      libraryTarget: 'commonjs',
      clean: true,
    },
  },
  {
    ...commonConfig,
    target: 'web',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist', 'esm'),
      libraryTarget: 'umd',
      clean: true,
    },
  },
];
