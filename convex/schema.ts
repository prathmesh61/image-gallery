import { defineSchema, defineTable } from "convex/server";
import { Validator, v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
  }),
  jobs: defineTable({
    title: v.string(),
    company: v.string(),
    location: v.string(),
    type: v.string(),
    salary: v.string(),
    description: v.string(),
    requirements: v.string(),
    responsibilities: v.string(),
    companyLogoUrl: v.id("_storage"),
    recruiter: v.string(),
  }),
  recruiters: defineTable({
    name: v.string(),
    company: v.string(),
    email: v.string(),
    phone: v.number(),
    companyLogoUrl: v.id("_storage"),
  }),
});
