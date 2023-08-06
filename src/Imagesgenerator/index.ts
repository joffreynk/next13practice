import { Configuration, OpenAIApi } from "openai";

export const GenerateImage = async (data: string) => {
try {
  const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: data,
    n: 1,
    size: "256x256",
  });

  if (!response.data) throw new Error('Unable to get image');

  return response
  
} catch (error: any) {
    console.log('====================================');
    console.log("error createImage");
    console.log('====================================');
    throw new Error(error);
}

};
