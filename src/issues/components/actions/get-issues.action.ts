import { githubApi } from "../../../api/github.api";
import { sleep } from "../../../helpers/sleep";
import { GithubIssues } from "../../interfaces";

export const getIssues = async (): Promise<GithubIssues[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<GithubIssues[]>("/issues");

  return data;
};
