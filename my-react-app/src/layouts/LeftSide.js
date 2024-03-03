import React from "react";
function LeftSide() {
    const profilePictureUrl = 'profile-icon.jpeg';

    const profilePicture = document.getElementById('profile-picture');

    profilePicture.src = profilePictureUrl;
}

export default LeftSide;