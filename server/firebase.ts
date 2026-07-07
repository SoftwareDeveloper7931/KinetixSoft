import axios from "axios";

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const API_KEY = process.env.FIREBASE_API_KEY;
console.log(`[Firebase] PROJECT_ID=${PROJECT_ID ? "set" : "MISSING"} API_KEY=${API_KEY ? "set" : "MISSING"}`);

const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

function toFirestoreValue(value: unknown): object {
  if (value === null || value === undefined) return { nullValue: null };
  if (typeof value === "string") return { stringValue: value };
  if (typeof value === "number") return { integerValue: String(value) };
  if (typeof value === "boolean") return { booleanValue: value };
  return { stringValue: String(value) };
}

function toFirestoreDoc(data: Record<string, unknown>) {
  const fields: Record<string, object> = {};
  for (const [key, value] of Object.entries(data)) {
    fields[key] = toFirestoreValue(value);
  }
  return { fields };
}

export async function saveToFirestore(collection: string, data: Record<string, unknown>): Promise<string | null> {
  if (!PROJECT_ID || !API_KEY) {
    console.warn("Firestore: credentials not set, skipping save");
    return null;
  }

  try {
    const url = `${BASE_URL}/${collection}?key=${API_KEY}`;
    const response = await axios.post(url, toFirestoreDoc({ ...data, submittedAt: new Date().toISOString() }));
    const docName: string = response.data.name ?? "";
    const docId = docName.split("/").pop() ?? "";
    console.log(`Firestore: saved to ${collection}/${docId}`);
    return docId;
  } catch (err: any) {
    console.error("Firestore save error:", err.response?.data ?? err.message);
    return null;
  }
}
