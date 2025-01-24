import { HfInference } from '@huggingface/inference';

// Initialize with API token if available
const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGINGFACE_API_TOKEN);

class TransformerService {
  private static instance: TransformerService;
  private models: Map<string, any>;

  private constructor() {
    this.models = new Map();
  }

  static getInstance() {
    if (!TransformerService.instance) {
      TransformerService.instance = new TransformerService();
    }
    return TransformerService.instance;
  }

  private checkApiToken() {
    if (!process.env.NEXT_PUBLIC_HUGGINGFACE_API_TOKEN) {
      throw new Error('Hugging Face API token is not configured. Please add your API token to the environment variables.');
    }
  }

  async classifyText(text: string) {
    try {
      this.checkApiToken();
      return await hf.textClassification({
        model: 'distilbert-base-uncased-finetuned-sst-2-english',
        inputs: text
      });
    } catch (error) {
      console.error('Text classification failed:', error);
      throw error;
    }
  }

  async generateText(prompt: string) {
    try {
      this.checkApiToken();
      const result = await hf.textGeneration({
        model: 'gpt2',
        inputs: prompt,
        parameters: {
          max_new_tokens: 50,
          temperature: 0.7
        }
      });
      return [{ generated_text: result.generated_text }];
    } catch (error) {
      console.error('Text generation failed:', error);
      throw error;
    }
  }

  async classifyImage(imageUrl: string) {
    try {
      this.checkApiToken();
      return await hf.imageClassification({
        model: 'google/vit-base-patch16-224',
        data: imageUrl
      });
    } catch (error) {
      console.error('Image classification failed:', error);
      throw error;
    }
  }
}

export default TransformerService;