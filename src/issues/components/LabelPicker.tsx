import { LoadingSpinners } from "../../share";
import { useLabels } from "../hooks";

interface Props {
  selectedLabels: string[];

  onLabelSelected: (label: string) => void;
}

export const LabelPicker = ({ selectedLabels, onLabelSelected }: Props) => {
  const { labelsQuery } = useLabels();
  const { data, isLoading } = labelsQuery;

  if (isLoading || !data) {
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinners />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data?.length > 1
        ? data.map((label) => (
            <span
              className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer ${
                selectedLabels.includes(label.name) ? "selected-label" : ""
              }`}
              style={{
                border: `1px solid #${label.color}`,
                color: `#${label.color}`,
              }}
              key={label.id}
              onClick={() => onLabelSelected(label.name)}
            >
              {label.name}
            </span>
          ))
        : null}
    </div>
  );
};
