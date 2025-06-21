import axios from "axios";

const api = process.env.NEXT_PUBLIC_COMPILER_HOST
const apiKey = process.env.NEXT_PUBLIC_COMPILER_API_KEY
const languagesApi = process.env.NEXT_PUBLIC_LANGAUGAES
const JUDGE0_URL = process.env.NEXT_PUBLIC_JUDGEURL

const body = {
    method :'GET',
    url : languagesApi
}



export const compileCode = async(language : string , code : string , inputArea : string) =>{
    const API_HEADERS = {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey,          
        'X-RapidAPI-Host': api
    };
    try {
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false',
      {
        source_code: code,
        language_id: language,
        stdin: inputArea
      },
      {
        headers: API_HEADERS
      }
    );

    const token = response.data.token;
    console.log('Submission token:', token);

    await new Promise(resolve => setTimeout(resolve, 2000));
    const result = await axios.get(
      `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`,
      { headers: API_HEADERS }
    );

    const output = result.data.stdout || result.data.stderr || result.data.compile_output || 'No output';
    console.log('Execution output:\n', output);

    return output;
  } catch (error) {
    console.error('Compilation error:', error);
  }
}
export  const getAllLangauages = async() =>{
    try {
    const response = await axios.request(body); 
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw error;
  }
}
