import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  propertyService,
  teamService,
  analyticsService,
  Property,
  TeamMember,
  CreatePropertyData,
  CreateTeamMemberData,
} from "@/services/api";

// Query Keys
export const queryKeys = {
  properties: ["properties"] as const,
  property: (id: string) => ["properties", id] as const,
  team: ["team"] as const,
  teamMember: (id: number) => ["team", id] as const,
  analytics: {
    stats: (period: string) => ["analytics", "stats", period] as const,
    logs: (page: number) => ["analytics", "logs", page] as const,
    daily: (days: number) => ["analytics", "daily", days] as const,
    pages: ["analytics", "pages"] as const,
  },
};

// Properties Hooks
export const useProperties = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: [...queryKeys.properties, page, limit],
    queryFn: () => propertyService.getAll(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProperty = (id: string) => {
  return useQuery({
    queryKey: queryKeys.property(id),
    queryFn: () => propertyService.getById(id),
    enabled: !!id,
  });
};

export const useCreateProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePropertyData) => propertyService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.properties });
    },
  });
};

export const useUpdateProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreatePropertyData>;
    }) => propertyService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.properties });
      queryClient.invalidateQueries({ queryKey: queryKeys.property(id) });
    },
  });
};

export const useDeleteProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => propertyService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.properties });
    },
  });
};

// Team Hooks
export const useTeam = () => {
  return useQuery({
    queryKey: queryKeys.team,
    queryFn: () => teamService.getAll(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useTeamMember = (id: number) => {
  return useQuery({
    queryKey: queryKeys.teamMember(id),
    queryFn: () => teamService.getById(id),
    enabled: !!id,
  });
};

export const useCreateTeamMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTeamMemberData) => teamService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.team });
    },
  });
};

export const useUpdateTeamMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: Partial<CreateTeamMemberData>;
    }) => teamService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.team });
      queryClient.invalidateQueries({ queryKey: queryKeys.teamMember(id) });
    },
  });
};

export const useDeleteTeamMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => teamService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.team });
    },
  });
};

// Analytics Hooks
export const useAnalyticsStats = (period = "7d") => {
  return useQuery({
    queryKey: queryKeys.analytics.stats(period),
    queryFn: () => analyticsService.getStats(period),
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
};

export const useVisitorLogs = (page = 1, limit = 50) => {
  return useQuery({
    queryKey: queryKeys.analytics.logs(page),
    queryFn: () => analyticsService.getVisitorLogs(page, limit),
    staleTime: 1 * 60 * 1000, // 1 minute
    refetchInterval: 2 * 60 * 1000, // Refetch every 2 minutes
  });
};

export const useDailyStats = (days = 7) => {
  return useQuery({
    queryKey: queryKeys.analytics.daily(days),
    queryFn: () => analyticsService.getDailyStats(days),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const usePageStats = () => {
  return useQuery({
    queryKey: queryKeys.analytics.pages,
    queryFn: () => analyticsService.getPageStats(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useTrackVisit = () => {
  return useMutation({
    mutationFn: (data: any) => analyticsService.trackVisit(data),
    // Don't need to invalidate anything for tracking
  });
};
