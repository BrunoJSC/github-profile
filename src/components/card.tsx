interface CardProps {
  title: string;

  value: string | number;
}

export function Card({ title, value }: CardProps) {
  const displayValue = value ?? "N/A";

  return (
    <div className="bg-[#111729] rounded-lg w-auto py-3 px-6 flex items-center">
      <h2 className="text-[#4A5567] font-medium">{title}</h2>
      <div className="border border-[#4A5567] w-0.5 h-8 mx-4"></div>
      <span className="text-white">{displayValue}</span>
    </div>
  );
}
