import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

function ensureInit() {
  if (getApps().length > 0) return true;
  if (!PROJECT_ID || !CLIENT_EMAIL || !PRIVATE_KEY) return false;
  try {
    initializeApp({
      credential: cert({
        projectId: PROJECT_ID,
        clientEmail: CLIENT_EMAIL,
        privateKey: PRIVATE_KEY,
      }),
    });
    console.log("[Firebase Admin] initialized");
    return true;
  } catch (err: any) {
    console.error("[Firebase Admin] init error:", err.message);
    return false;
  }
}

console.log(
  `[Firebase Admin] PROJECT_ID=${PROJECT_ID ? "set" : "MISSING"} ` +
  `CLIENT_EMAIL=${CLIENT_EMAIL ? "set" : "MISSING"} ` +
  `PRIVATE_KEY=${PRIVATE_KEY ? "set" : "MISSING"}`
);

export async function saveToFirestore(
  collection: string,
  data: Record<string, unknown>
): Promise<string | null> {
  if (!ensureInit()) {
    console.warn("Firestore: Admin SDK credentials not set, skipping save");
    return null;
  }
  try {
    const db = getFirestore();
    const docRef = await db.collection(collection).add({
      ...data,
      submittedAt: new Date(),
    });
    console.log(`Firestore: saved to ${collection}/${docRef.id}`);
    return docRef.id;
  } catch (err: any) {
    console.error("Firestore save error:", err.message ?? err);
    return null;
  }
}
