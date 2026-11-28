Home v1.1.3 requires the home-pin Edge Function, HOME_APP_PIN secret and home-pin-setup.sql. See setup instructions supplied separately.
Home v1.1.3 / Build 113
Replace all files in the existing GitHub Pages repository.
Application-wide automatic ambient display on iPad; editors remain protected.
Existing storage keys and synchronization schema unchanged.

Session persistence: project defaults are prefilled; sign in once per device. Existing sessions and local data are preserved. A revoked session or deleted site data requires signing in again. Startup recovery reloads without clearing storage.

LIFX: requires deployed lifx-control Edge Function, LIFX_API_TOKEN and HOME_OWNER_UID secrets, owner sign-in. Lighting scenes target discovered lights in the Bedroom Lights group. No token in frontend. Focus does not automatically change lights. Device-local lighting schedules can activate saved scenes while Home is open.

Password recovery: set Supabase Authentication > URL Configuration > Site URL and Redirect URLs to https://ihartsock0970-lab.github.io/home-app2/ . Use Forgot password on the hosted app or request a fresh dashboard recovery email after deploying. Default implicit recovery links supported; custom PKCE links require a different flow. Recovery tokens are held in memory, not normal session storage; do not reload the reset screen. After reset sign in with the new password.

Email code setup: change Magic Link and Reset Password email templates to contain {{ .Token }} and no confirmation link. Use existing account only; code login sends create_user:false. Six-digit code assumed; check OTP length in Supabase. Request limits still apply.

Lighting test: deploy the separate lifx-control-test.ts as the existing lifx-control Edge Function, set HOME_LIGHT_TEST_CODE to a private random code of at least 24 characters, and HOME_LIGHT_TEST_UNTIL to an ISO UTC expiry timestamp. Legacy JWT verification must be OFF. Open Lighting > Connect lighting test. Test code stays in memory only; normal account sign-in remains available. Remove both test secrets after testing.

Lighting studio: scenic wallpaper retained, selected-bulb color/white controls, expandable scene library, individual quick controls. No backend changes.

108: goal categories, deadlines, notes, milestones, manual progress history, linked activity and habits; scheduled quantitative habits, skip days, streaks, history; rolling period Insights and custom local activity categories. Derived linked progress uses stored records; no database migration. Lighting hero shows selected scene or custom state, power is separate, white-temperature dial is visual with slider control. No scheduled lighting automations in this build.

109: simplified goal/habit forms; existing notes and milestones preserved. Lighting schedules are device-local and run only while Home is visible, authenticated and online (ambient clock included). Enable on one device; missed times are not replayed. No cloud scheduler.

110: Full-screen morning and evening briefings reuse the selected dashboard wallpaper, with live saved task, event, goal, habit and weather data. Configure under Settings > Morning & Bedtime. Automatic briefings default to enabled on iPad (7 AM and 10 PM, or prior routine times) and disabled on other devices. They may appear within an hour of the chosen time, once per day, only while Home is active and unlocked. Tap the greeting or dismissal button, or swipe up on the greeting, to return to Home. Lighting schedules remain independent. Manual briefings also available in Today. Touch-opened dialog buttons suppress unwanted focus outlines; keyboard navigation retains visible focus. No database changes.

111: startup cover remains until PIN session restoration finishes; editable local bulb aliases; consistent dialog controls.

112: Automatic ambient entry respects the configured inactivity timeout day and night; bedtime changes appearance without forcing ambient entry. Page restoration starts a fresh inactivity interval.

113: Phone dock selection slides between tabs; reduced motion respected. Cloud scheduler integration is not included in this dock-only build.

114: Cloud lighting schedules use authenticated home_automations and home_automation_history tables and the deployed home-automation Cron function. No local execution remains. Update every device to 114 to prevent old clients executing local routines. On Lighting, Refresh, then import previous schedules (disabled for review) or create a new schedule. Save requires successful cloud write; existing schedules continue if the app is offline. All times Arizona. Scene settings are snapshots; to change a captured scene recreate the schedule or select a different scene. The server's actual lighting execution must be tested. Remove the temporary cloud-lighting-test row after testing. Rotate any previously exposed scheduler secret. No private scheduler or LIFX token belongs in the frontend.

115: Animated schedule switch, reading and night reading presets, animated schedule dialog. Cloud scheduling contract unchanged. Existing custom scene values retained.

1.1.6: YouTube and Apple TV launchers use App Store CDN artwork. Native schemes are best effort; websites are available in Entertainment.
