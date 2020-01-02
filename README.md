# Tiltify Total Overlay
Display your total amount raised on Tiltify (regardless of campaign). If you provide a Streamlabs Socket API Token, the overlay will automatically update on donation.

# Installation
- Download and extract the zip file
- Edit (Right-click -> Edit) the **settings.js** file with your tiltify username and preferred style settings.
- Setup the Tiltify access token.
  - Go to https://tiltify.com/@me/dashboard/account/apps/create and create an application.
  - Name it whatever you want. You can use https://example.com/ as the redirect URL.
  - From https://tiltify.com/@me/dashboard/account/apps, under `Your Applications` click **view credentials**
  - Copy and paste the *Access token* value into the *tiltify_access_token* variable in *settings.js*.

- **[Optional]** Setup the Streamlabs socket token.
  - Go to https://streamlabs.com/dashboard#/settings/api-settings
  - Click the `API Settings` tab
  - Copy your *Socket API Token* and paste it into the *streamlabs_token* variable in **settings.js** file

# Copyright

 This overlay was made by **Kruiser8** (https://twitch.tv/kruiser8) and is licensed under the *Creative Commmons Attribution 4.0 International License (CC BY 4.0)*

 For License information, visit https://creativecommons.org/licenses/by/4.0/
