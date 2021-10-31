import axios from 'axios';

export default async function getPortfolioProjects() {

  try {
      const res = await axios.get('https://api.github.com/search/repositories?q=user:thanosades');
      const repos = res.data.items;
      const portfolioProjects = repos.filter(repo => repo.topics.includes('portfolio-project'));
      
      const formattedProjects = portfolioProjects.map(project => {
        const current = {
          id: project.node_id,
          name: project.name,
          description: project.description,
          url: project.svn_url
        };
        return current;
      });

      return formattedProjects;
  
  } catch (err) {
    console.error(err);
  }
}
