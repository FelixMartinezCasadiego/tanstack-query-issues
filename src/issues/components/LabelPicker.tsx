import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<any[]> => {
  await sleep(1500);

  const resp = await fetch(
    "https://api.github.com/repos/facebook/react/labels"
  ).then((r) => r.json());

  console.log("resp ->", resp);
  return resp;
};

export const LabelPicker = () => {
  const labelsQuery = useQuery({ queryKey: ["labels"], queryFn: getLabels });

  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-content items-center h-52">Loading...</div>
    );
  }

  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
      >
        Primary
      </span>
    </>
  );
};
