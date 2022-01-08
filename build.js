require("esbuild")
  .build({
    entryPoints: ["./src/server.ts"],
    bundle: true,
    platform: "node",
    outdir: "./build/",
  })
  .catch(() => process.exit(1));
