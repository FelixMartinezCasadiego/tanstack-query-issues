import { GithubIssues, State } from "../interfaces";
import { IssueItem } from "./IssueItem";

interface Props {
  issues: GithubIssues[];
  state: State;

  onStateChange: (state: State) => void;
}

export const IssueList = ({ issues, onStateChange, state }: Props) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          onClick={() => onStateChange(State.All)}
          className={`btn ${state === State.All ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => onStateChange(State.Open)}
          className={`btn ${state === State.Open ? "active" : ""}`}
        >
          Open
        </button>
        <button
          onClick={() => onStateChange(State.Closed)}
          className={`btn ${state === State.Closed ? "active" : ""}`}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
