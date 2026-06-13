export interface ProjectResultsProps {
  results: {
    label: string;
    value: string;
    description?: string;
  }[];
}

export const ProjectResults = ({ results }: ProjectResultsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {results.map((result, i) => (
        <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-center">
          <span className="text-3xl lg:text-4xl font-bold text-blue-600 block mb-1">
            {result.value}
          </span>
          <span className="text-gray-700 font-semibold">{result.label}</span>
          {result.description && (
            <p className="text-gray-500 text-sm mt-1">{result.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};