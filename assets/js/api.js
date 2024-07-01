

async function fetchProfileData() {
    const url = 'https://github.com/vcr1985/Meu-Portfolio';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}