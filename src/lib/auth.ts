import { db } from "@/db";
import * as schema from "@/db/schema";
import { checkout, polar, portal } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { polarClient } from "./polar";

export const auth = betterAuth({
  socialProviders: {
    google: {
      enabled: true,
      clientId: (process.env.GOOGLE_CLIENT_ID as string) || "",
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET as string) || "",
    },
    github: {
      enabled: true,
      clientId: (process.env.GITHUB_CLIENT_ID as string) || "",
      clientSecret: (process.env.GITHUB_CLIENT_SECRET as string) || "",
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
    },
  }),
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          authenticatedUsersOnly: true,
          successUrl: "/upgrade",
        }),
        portal(),
      ],
    }),
  ],
});
