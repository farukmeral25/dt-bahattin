import "server-only";
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

/**
 * Firebase web yapılandırması. Bu değerler gizli değildir (tarayıcıya açık
 * olacak şekilde tasarlanmıştır); erişimi firestore.rules belirler.
 * Firestore yalnızca build sırasında okunur, istemci paketine girmez.
 */
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
    "AIzaSyADGgcyZmgwDVSHIqy9_L0n8nM6fvdOyAI",
  authDomain: "dt-bahattin.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "dt-bahattin",
  appId: "1:136131012931:web:4aca3ad7246d34e37b27f6",
};

const app = getApps()[0] ?? initializeApp(firebaseConfig);

export const db = getFirestore(app);
