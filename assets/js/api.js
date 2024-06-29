

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/vcr1985/js-developer-portfolio/main/index.html';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}