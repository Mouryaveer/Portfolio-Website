import { trpc } from "@/lib/trpc";

export function useAuth() {
  const utils = trpc.useUtils();
  const me = trpc.auth.me.useQuery(undefined, {
    retry: false,
  });
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      void utils.auth.me.invalidate();
    },
  });

  return {
    user: me.data ?? null,
    loading: me.isLoading,
    error: me.error,
    isAuthenticated: Boolean(me.data),
    logout: () => logoutMutation.mutate(),
  };
}
