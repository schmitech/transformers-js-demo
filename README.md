# Transformers.js Demo

A Next.js application demonstrating the use of Hugging Face's Transformers.js for AI-powered image and text classification directly in the browser.

Based on Xiuer Old's article [Transformers.js: Seamlessly Integrating AI Capabilities into Web Applications 🚀🧠](https://xiuerold.medium.com/transformers-js-seamlessly-integrating-ai-capabilities-into-web-applications-0d5c599be603).

## Features

- 🖼️ Image Classification: Classify images using state-of-the-art AI models
- 📝 Text Classification: Analyze text sentiment and classify content
- ✨ Text Generation: Generate creative text based on prompts

## Prerequisites

- Node.js 16.x or later
- npm, yarn, or pnpm
- A Hugging Face API token ([Get one here](https://huggingface.co/settings/tokens))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/schmitech/transformers-js-demo.git
cd transformers-js-demo
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Hugging Face API token:
```env
NEXT_PUBLIC_HUGGINGFACE_API_TOKEN=your_token_here
```

4. Start the development server:
```bash
npm run dev
```

## Usage

### Image Classification
1. Navigate to the Image Classification section
2. Enter a valid image URL, for instance https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg
3. Click "Classify" to analyze the image
4. View the classification results below the image

### Text Classification
1. Navigate to the Text Classification section
2. Enter your text in the input field
3. Click "Classify" to analyze the text
4. View the sentiment analysis and classification results

### Text Generation
1. Navigate to the Text Generation section
2. Enter your prompt in the text area
3. Click "Generate Text" to create AI-generated content
4. View the generated text below

## Technical Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Runtime Environment**: Node.js 16+
- **Language**: TypeScript
- **UI Framework**: React 18
- **Component Library**: shadcn/ui
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
- **AI Integration**: 
  - Hugging Face Inference API
  - @huggingface/inference
- **Development Tools**:
  - ESLint
  - Prettier
  - TypeScript Compiler

## Models Used

- Image Classification: `google/vit-base-patch16-224`
- Text Classification: Configured in the TransformerService
- Text Generation: Text generation model from Hugging Face

## Troubleshooting

Common issues and solutions:

1. API Errors
   - Ensure your Hugging Face API token is valid and has necessary permissions
   - Check that the token is correctly set in `.env.local`

2. Image Classification Fails
   - Verify that the image URL is accessible
   - Ensure the image format is supported (jpg, png, etc.)
   - Check that the URL allows cross-origin requests

3. Build Errors
   - Clear the Next.js cache: `rm -rf .next/cache`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Hugging Face](https://huggingface.co/) for their amazing AI models and APIs
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) team for the awesome framework
