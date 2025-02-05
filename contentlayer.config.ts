// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
      type: "string",
    },
  },
  fields: {
    date: { required: true, type: "date" },
    title: { required: true, type: "string" },
  },
  filePathPattern: `**/*.md`,
  name: "Post",
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
