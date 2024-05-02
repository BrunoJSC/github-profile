import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl rounded-lg mt-10 relative flex items-center font-bold focus-within:border-blue-700">
        <Search className="absolute z-50 left-3" size={20} color="#4A5567" />
        <input
          className="w-full p-2.5 z-30  px-10 rounded-lg text-white bg-[#364153]"
          {...rest}
        />
      </div>
    </div>
  );
}
