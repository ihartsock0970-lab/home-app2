Home v0.9.8 / Build 098
Replace all files in the existing GitHub Pages repository.
Application-wide automatic ambient display on iPad; editors remain protected.
Existing storage keys and synchronization schema unchanged.

Session persistence: project defaults are prefilled; sign in once per device. Existing sessions and local data are preserved. A revoked session or deleted site data requires signing in again. Startup recovery reloads without clearing storage.

LIFX: requires deployed lifx-control Edge Function, LIFX_API_TOKEN and HOME_OWNER_UID secrets, owner sign-in. Lighting scenes affect all lights in the LIFX account. No token in frontend. Focus and scheduled routines do not automatically change lights in this release.
