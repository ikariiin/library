export interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center m-2 p-2 border-2 border-gray-300 rounded-lg">
      <div
        className="text-4xl font-semibold w-full text-center truncate"
        title={value}
        aria-label={value}
      >
        {value}
      </div>
      <div className="text-lg text-gray-600 font-thin" aria-label={title}>
        {title}
      </div>
    </div>
  );
}
