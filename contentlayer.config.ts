// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const AboutCard = defineNestedType(() => ({
  fields: {
    description: { required: true, type: "string" },
    icon: { required: true, type: "string" },
    technology: { required: true, type: "string" },
  },
  name: "About_Card",
}));

export const Hero = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (post) => `/hero/${post._raw.flattenedPath}`,
      type: "string",
    },
  },
  fields: {
    intro: { required: true, type: "string" },
    introDescription: { required: true, type: "string" },
    navBar: { of: { type: "string" }, required: true, type: "list" },
    profilePicture: { required: true, type: "string" },
  },
  filePathPattern: `hero/**/*.md`,
  name: "Hero",
}));

export const Overview = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (post) => `/overview/${post._raw.flattenedPath}`,
      type: "string",
    },
  },
  fields: {
    cards: { of: AboutCard, type: "list" },
  },
  filePathPattern: `overview/**/*.md`,
  name: "Overview",
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Hero, Overview],
});
