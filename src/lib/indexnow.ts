const HOST = "kinetixsoft.com";
const KEY_LOCATION = `https://${HOST}/indexnow-key.txt`;

export async function pingIndexNow(urls: string[]): Promise<{ ok: boolean; status: number }> {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    throw new Error("INDEXNOW_KEY environment variable is not set");
  }
  if (urls.length === 0) {
    return { ok: true, status: 200 };
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });

  return { ok: res.ok, status: res.status };
}
