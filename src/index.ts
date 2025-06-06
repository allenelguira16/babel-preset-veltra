import { TransformOptions } from "@babel/core";
import { babelPlugin } from "./babelPlugin";
import babelReactPlugin from "@babel/preset-react";

// Main preset function
export default function babelPresetVeltra(api: {
  assertVersion: (range: number) => void;
}): TransformOptions {
  api.assertVersion(7);

  return {
    presets: [
      [
        babelReactPlugin,
        {
          runtime: "automatic",
          importSource: "@veltra/app",
        },
      ],
    ],
    plugins: [babelPlugin],
  };
}
