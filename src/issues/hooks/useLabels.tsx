import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../components/actions";

export function useLabels() {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hour stale time
  });

  return { labelsQuery };
}
