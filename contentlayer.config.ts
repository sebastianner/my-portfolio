// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Hero = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (post) => `/hero/${post._raw.flattenedPath}`,
      type: "string",
    },
  },
  fields: {
    intro: { required: true, type: "string" },
    introSentence: { required: true, type: "string" },
    navBar: { required: true, type: "string" },
    profilePicture: { required: true, type: "string" },
    socialMedia: { required: true, type: "string" },
  },
  filePathPattern: `hero/**/*.md`,
  name: "Hero",
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Hero],
});
