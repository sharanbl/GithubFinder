class GitHub{
    constructor(){
        this.client_id = '539d506bd3bb778c66c0';
        this.client_secret = 'c7e13f6533799b7b64a6785797f65c4f6afc5f51';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}