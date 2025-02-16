### How to setup vue3 with vite on github pages.

1. Make github actions github/workflows/deploy.yml file that will create gh-pages branch,
   build and deploy Vue App to github pages

2. Activate gh-pages branch as your main deploy source branch

   > Settings -> Pages -> Source = Deploy from branch -> Branch = gh-pages

3. If you face this error "remote: Permission to XXX.git denied to github-actions[bot]. fatal: unable to access 'XXX': The requested URL returned error: 403"

> Check if "Read and write permissions" are enabled in Settings -> Actions -> General -> Workflow permissions:
