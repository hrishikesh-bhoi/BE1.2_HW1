const { initializeDatabase } = require("./db/db.connect.js");
const fs = require("fs");
const Profile = require("./models/profile.models.js")


initializeDatabase();

const jsonData = fs.readFileSync('profiles.json', 'utf-8');
const profilesData = JSON.parse(jsonData);

function seedData() {
    try{
        for(const profileData of profilesData) {
            const newProfile = new Profile({
                fullName: profileData.fullName,
                username: profileData.username,
                bio: profileData.bio,
                profilePicUrl: profileData.profilePicUrl,
                followingCount: profileData.followingCount,
                followerCount: profileData.followerCount,
                companyName: profileData.companyName,
                location: profileData.location,
                portfolioUrl: profileData.portfolioUrl,

            });

            newProfile.save();
        }

    } catch(error) {
        console.log("Error seeding the data", "error");
    }
}
seedData();