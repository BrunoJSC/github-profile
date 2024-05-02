import { GitFork, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface BoxProps {
  updated_at: string;
  name: string;
  description: string;

  forks_count: number;
  stargazers_count: number;
}

export function Box({
  updated_at,
  name,
  description,
  forks_count,
  stargazers_count,
}: BoxProps) {
  const truncateDescription = (description: string, maxLength = 50) => {
    if (description && description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }

    return description || "No description provided.";
  };
  return (
    <div className="bg-gradient-to-l from-[#1D1B48]  to-[#111729] max-w-md rounded-lg p-2">
      <h2 className="text-white">{name}</h2>
      <p className="text-gray-500">{truncateDescription(description)}</p>

      <ul className="flex items-center gap-4 mt-4">
        <li className="flex">
          <GitFork size={24} color="#fff" />
          <span className="text-white inline-block ml-2">
            {forks_count} Fork{forks_count > 1 && "s"}
          </span>
        </li>

        <li className="flex">
          <Star size={24} color="#fff" />
          <span className="text-white inline-block ml-2">
            {stargazers_count} Star{stargazers_count > 1 && "s"}
          </span>
        </li>

        <li>
          <span
            className="text-gray-500 inline-block"
            style={{ textTransform: "capitalize" }}
          >
            Updated{" "}
          </span>{" "}
          <span className="text-gray-500">
            {updated_at &&
              formatDistanceToNow(new Date(updated_at as string), {
                addSuffix: true,
              })}
          </span>
        </li>
      </ul>
    </div>
  );
}
