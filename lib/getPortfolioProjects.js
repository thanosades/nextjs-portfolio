import axios from "axios";

export default async function getPortfolioProjects(token) {
  try {
    if (token) {
      const res = await axios.get("https://api.github.com/search/repositories?q=user:thanosades");
      const repos = res.data.items;
      const portfolioProjects = repos.filter(repo => repo.topics.includes('portfolio-project'));
      return portfolioProjects;
    }
  } catch (err) {
    console.error(err);
  }
}