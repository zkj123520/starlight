import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: '~0.5.0',
  nodeVersion: '18',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "content", type: "markdown" }
          ]
        }
      ]
    })
  ],
  buildCommand: 'npm run build'
});
