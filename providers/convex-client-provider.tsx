"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

// created a Convex Client Provider which will wrap children inside layout.tsx body.

interface ConvexClientProviderProps {
  children?: React.ReactNode;
}

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  const convex = new ConvexReactClient(convexUrl);
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
