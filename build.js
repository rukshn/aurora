require("esbuild")
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    platform: "node",
    outdir: "./dist/",
  })
  .catch(() => process.exit(1));
