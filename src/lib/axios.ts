import axios from "axios";

export const fetchDataGithub = async (username: string) => {
  try {
    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    return {
      ...userResponse.data,
      public_repos: reposResponse.data.map(
        (repo: {
          id: number;
          updated_at: string;
          name: string;
          html_url: string | null;
          description: string;
          forks_count: number;
          stargazers_count: number;
        }) => ({
          id: repo.id,
          updated_at: repo.updated_at,
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          forks_count: repo.forks_count,
          stargazers_count: repo.stargazers_count,
        })
      ),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
