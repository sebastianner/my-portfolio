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

const WorkExperienceCard = defineNestedType(() => ({
  fields: {
    company: { required: true, type: "string" },
    companyImage: { required: true, type: "string" },
    date: { of: { type: "string" }, required: true, type: "list" },
    description: { required: true, type: "string" },
    title: { required: true, type: "string" },
  },
  name: "WorkExperienceCard",
}));

export const NavBar = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (post) => `/navBar/${post._raw.flattenedPath}`,
      type: "string",
    },
  },
  fields: {
    navBar: { of: { type: "string" }, required: true, type: "list" },
  },
  filePathPattern: `navBar/**/*.md`,
  name: "NavBar",
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
    cards: { of: AboutCard, required: true, type: "list" },
    info: { required: true, type: "string" },
    title: { required: true, type: "string" },
  },
  filePathPattern: `overview/**/*.md`,
  name: "Overview",
}));

export const WorkExperience = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (post) => `/work/${post._raw.flattenedPath}`,
      type: "string",
    },
  },
  fields: {
    workCard: { of: WorkExperienceCard, required: true, type: "list" },
  },
  filePathPattern: `work/**/*.md`,
  name: "Work",
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Hero, Overview, NavBar, WorkExperience],
});
