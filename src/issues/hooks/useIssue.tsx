import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../components/actions";

export default function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60,
    retry: false,
  });

  // const commentsQuery = useQuery({
  //   queryKey: ["issues", issueNumber, "comments"],
  //   queryFn: () => getIssueComments(issueNumber),
  //   staleTime: 1000 * 60,
  //   retry: false,
  // });

  const commentsQuery = useQuery({
    queryKey: ["issues", issueQuery.data?.number, "comments"],
    queryFn: () => getIssueComments(issueNumber),
    staleTime: 1000 * 60,
    retry: false,
    enabled: issueQuery.data !== undefined,
  });

  return { issueQuery, commentsQuery };
}
