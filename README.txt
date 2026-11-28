Home v1.0.4 / Build 104
Replace all files in the existing GitHub Pages repository.
Application-wide automatic ambient display on iPad; editors remain protected.
Existing storage keys and synchronization schema unchanged.

Session persistence: project defaults are prefilled; sign in once per device. Existing sessions and local data are preserved. A revoked session or deleted site data requires signing in again. Startup recovery reloads without clearing storage.

LIFX: requires deployed lifx-control Edge Function, LIFX_API_TOKEN and HOME_OWNER_UID secrets, owner sign-in. Lighting scenes target discovered lights in the Bedroom Lights group. No token in frontend. Focus and scheduled routines do not automatically change lights in this release.

Password recovery: set Supabase Authentication > URL Configuration > Site URL and Redirect URLs to https://ihartsock0970-lab.github.io/home-app2/ . Use Forgot password on the hosted app or request a fresh dashboard recovery email after deploying. Default implicit recovery links supported; custom PKCE links require a different flow. Recovery tokens are held in memory, not normal session storage; do not reload the reset screen. After reset sign in with the new password.

Email code setup: change Magic Link and Reset Password email templates to contain {{ .Token }} and no confirmation link. Use existing account only; code login sends create_user:false. Six-digit code assumed; check OTP length in Supabase. Request limits still apply.

Lighting test: deploy the separate lifx-control-test.ts as the existing lifx-control Edge Function, set HOME_LIGHT_TEST_CODE to a private random code of at least 24 characters, and HOME_LIGHT_TEST_UNTIL to an ISO UTC expiry timestamp. Legacy JWT verification must be OFF. Open Lighting > Connect lighting test. Test code stays in memory only; normal account sign-in remains available. Remove both test secrets after testing.

Lighting studio: scenic wallpaper retained, selected-bulb color/white controls, expandable scene library, individual quick controls. No backend changes.
