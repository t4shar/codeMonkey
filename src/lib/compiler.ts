import axios from "axios";
import CodeOutput from "../types/codeOutput";

const api = process.env.NEXT_PUBLIC_COMPILER_HOST;
const apiKey = process.env.NEXT_PUBLIC_COMPILER_API_KEY;
const languagesApi = process.env.NEXT_PUBLIC_LANGAUGAES;

const body = {
  method: "GET",
  url: languagesApi,
};

async function pollSubmissionResult(token: string, headers: Record<string, string>, timeoutMs = 30000): Promise<CodeOutput> {
  const start = Date.now();
  const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`;

  // Poll until status.id > 2 (Judge0: 1=In Queue, 2=Processing, >=3 = finished)
  while (true) {
    const res = await axios.get(url, { headers });
    const data: CodeOutput = res.data;
    const statusId = data?.status?.id ?? 0;
    if (statusId > 2) return data;

    if (Date.now() - start > timeoutMs) return data;

    // small delay before next poll
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

export const compileCode = async (
  language: string,
  code: string,
  inputArea: string
): Promise<CodeOutput | null> => {
  const API_HEADERS = {
    "content-type": "application/json",
    "X-RapidAPI-Key": apiKey || "",
    "X-RapidAPI-Host": api || "",
  };

  try {
    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false",
      {
        source_code: code,
        language_id: language,
        stdin: inputArea,
      },
      {
        headers: API_HEADERS,
      }
    );

    const token = response.data?.token;
    if (!token) throw new Error("No token returned from Judge0");

    const finalResult = await pollSubmissionResult(token, API_HEADERS, 30000);

    console.log("Result from judge0", finalResult);

    return finalResult;
  } catch (error) {
    console.error("compileCode error:", error);
    return null;
  }
};

export const getAllLangauages = async () => {
  try {
    const response = await axios.request(body);
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
