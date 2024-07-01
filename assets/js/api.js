

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/vcr1985/Meu-Portfolio/main/assets/js/api.js';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}