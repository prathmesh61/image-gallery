import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
  }),
  jobs: defineTable({
    id: v.string(),
    title: v.string(),
    company: v.string(),
    location: v.string(),
    type: v.string(),
    salary: v.string(),
    postedDate: v.string(),
    description: v.string(),
    requirements: v.array(v.string()),
    responsibilities: v.array(v.string()),
    companyLogoUrl: v.string(),
  }),
});
