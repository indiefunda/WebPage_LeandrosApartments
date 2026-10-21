# Security

## The Firebase web API key is a public client identifier

`src/data/firebase.ts` contains the Firebase web configuration for the
`leandros-apartments` project, including the browser API key (`AIza…`). That
value is **not a secret**: Firebase issues it for client applications, and it is
delivered to every visitor's browser as part of the app configuration. It is
also not a Google account credential — it cannot read Gmail, change a password,
or reach any other Google or Firebase project.

Because this repository is public, GitHub secret scanning flags the key as a
"Google API Key". That alert is expected for any Firebase static site whose
config is committed. Security for a Firebase web app comes from **restrictions
and server-side rules**, not from hiding the key.

## Controls in place

1. **API target restriction.** The key may only call
   `firestore.googleapis.com`. Calls to Firebase Auth / Identity Toolkit,
   Cloud Storage, FCM and every other API are rejected by Google with
   `403` (`API_KEY_SERVICE_BLOCKED`).
   Verified: `identitytoolkit.googleapis.com` → 403 after the restriction.
2. **HTTP referrer restriction.** Allowed referrers are
   `https://leandros-apartments.web.app/*`,
   `https://leandros-apartments.firebaseapp.com/*`,
   `https://sifnosapartments.com/*`, `https://www.sifnosapartments.com/*`
   and the local development ports. Note that Google's Firestore endpoint did
   not enforce this restriction in testing, so it is treated as defence in
   depth rather than the primary control.
3. **Firestore security rules** (`firestore.rules`): anonymous **create only**
   for the `enquiries` collection, with required fields, an email pattern and
   length caps. Reads, updates and deletes are denied — an unauthenticated
   `GET` on the collection returns `403 PERMISSION_DENIED`. The family reads
   enquiries in the Firebase console.
4. **No Gmail or Workspace APIs are enabled** in the project. Gmail access
   requires OAuth user consent and is not possible with an API key.
5. **No tracking, no third-party scripts, self-hosted fonts.** The map loads
   only after a click.

Residual risk: someone who extracts the public key can submit junk enquiries
(create-only, validated, no read access). If that ever becomes a problem, the
next step is Firebase App Check with reCAPTCHA Enterprise, which requires
migrating the form from the Firestore REST call to the Firebase SDK and would
add roughly 50–100 KB of JavaScript.

## If you want to rotate the key anyway

1. Google Cloud Console → APIs & Services → Credentials → create a browser key
   with the same two restrictions.
2. Update `src/data/firebase.ts`, rebuild, `firebase deploy --only hosting`.
3. Delete the old key.

Rotating does not make the new key private — it will also ship to browsers and
may be flagged by secret scanning again. Restrictions and rules are what keep
the project safe.

## Reporting

For anything security-related, contact the site owner directly via the details
on the contact page.
