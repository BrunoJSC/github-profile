import { useState } from "react";
import { Card } from "./components/card.tsx";
import { Header } from "./components/header.tsx";
import { Input } from "./components/input.tsx";
import { fetchDataGithub } from "./lib/axios.ts";
import { Box } from "./components/Box.tsx";

interface GithubProps {
  avatar_url: string;
  followers: number;
  following: number;
  location: string;
  updated_at: string;
  public_repos: {
    id: number;
    updated_at: string;
    name: string;
    html_url: string | null;
    description: string;
    forks_count: number;
    stargazers_count: number;
  }[];
}

export function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<GithubProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSearchData = async () => {
    const data = await fetchDataGithub(search);
    console.log(data);

    if (data) {
      setData(data);
      setVisibleCount(4);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen bg-[#364153]">
      <Header>
        <Input
          placeholder="username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearchData();
            }
          }}
        />
      </Header>

      <div className="w-full -mt-14 flex items-center justify-around">
        <div className="size-44 border-8 rounded-xl bg-[#20293A] border-[#20293A]">
          <img src={data?.avatar_url} className="rounded-xl" />
        </div>

        <div className="flex -ml-[300px] gap-14">
          <Card title="Followers" value={data?.followers as number} />

          <Card title="Following" value={data?.following as number} />

          <Card title="Location" value={data?.location as string} />
        </div>
      </div>

      <section className="max-w-4xl mx-auto mt-10 flex flex-col">
        <div>
          <h2 className="text-[#CDD5E0] text-xl">GitHub</h2>
          <p className="text-gray-500">How people build software</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          {data?.public_repos &&
            data?.public_repos?.slice(0, visibleCount)?.map((repo) => (
              <div key={repo.id} className="mt-4">
                <Box
                  updated_at={repo.updated_at}
                  name={repo?.name}
                  description={repo?.description}
                  forks_count={repo?.forks_count}
                  stargazers_count={repo?.stargazers_count}
                />
              </div>
            ))}
        </div>

        {data &&
          data.public_repos &&
          visibleCount < data.public_repos.length && (
            <button
              onClick={handleLoadMore}
              className="mt-4 bg-[#20293A] text-white px-4 py-2 rounded-lg"
            >
              Load More
            </button>
          )}
      </section>
    </div>
  );
}
