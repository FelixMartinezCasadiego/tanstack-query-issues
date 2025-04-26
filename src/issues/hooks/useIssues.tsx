import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../components/actions";
import { State } from "../interfaces";

interface Props {
  state: State;
  selectedLabels: string[];
}

export default function useIssues({ state, selectedLabels }: Props) {
  const issuesQuery = useQuery({
    queryKey: ["issues", { state, selectedLabels }],
    queryFn: () => getIssues(state, selectedLabels),
    staleTime: 1000 * 60,
  });

  return { issuesQuery };
}
