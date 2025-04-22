import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../components/actions";

export function useLabels() {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hour stale time

    // placeholderData: [
    //   {
    //     id: 69105358,
    //     node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
    //     url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
    //     name: "Browser: Safari",
    //     color: "c7def8",
    //     default: false,
    //   } satisfies GithubLabel,
    // ],

    // initialData: [
    //   {
    //     id: 69105358,
    //     node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
    //     url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
    //     name: "Browser: Safari",
    //     color: "c7def8",
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });

  return { labelsQuery };
}
