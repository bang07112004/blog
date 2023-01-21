import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";
import { getDefaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath: "/studio",
  name: "Bang_Personal_Blogs",
  title: "Bang personal blog",

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
