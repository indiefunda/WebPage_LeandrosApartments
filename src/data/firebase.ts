/**
 * Firebase web configuration.
 *
 * These values are public by design: they identify the project to the browser.
 * Nothing here grants access — Firestore security rules (firestore.rules) allow
 * only anonymous *creation* of enquiry documents, never reads.
 *
 * Build-time environment variables can override them when deploying the same
 * code to a staging project.
 */
export const firebaseConfig = {
  projectId: 'leandros-apartments',
  appId: '1:117704861313:web:52d4961434b3a38b8a0f80',
  apiKey: 'AIzaSyBk5Y4Nib32DXAqu_ldJ3D1TbSIVTUP5DU',
  authDomain: 'leandros-apartments.firebaseapp.com',
  storageBucket: 'leandros-apartments.firebasestorage.app',
  messagingSenderId: '117704861313',
} as const;

export const enquiryEndpoint = (
  projectId: string = firebaseConfig.projectId,
  apiKey: string = firebaseConfig.apiKey,
) =>
  `https://firestore.googleapis.com/v1/projects/${projectId}/databases/default/documents/enquiries?key=${apiKey}`;
