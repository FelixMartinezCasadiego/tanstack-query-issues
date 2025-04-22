import { useQuery } from "@tanstack/react-query";

import { getLabels } from "./actions/get-labels.action";

export const LabelPicker = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
  });

  if (isLoading || !data) {
    return (
      <div className="flex justify-content items-center h-52">Loading...</div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data?.length > 1
        ? data.map((label) => (
            <span
              className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              style={{
                border: `1px solid #${label.color}`,
                color: `#${label.color}`,
              }}
              key={label.id}
            >
              {label.name}
            </span>
          ))
        : null}
    </div>
  );
};
