"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import TransformerService from '@/lib/transformers-service';

export default function TextGenerator() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const service = TransformerService.getInstance();
      const generated = await service.generateText(prompt);
      setResult(generated[0].generated_text);
    } catch (error) {
      console.error('Text generation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          Text Generation
        </CardTitle>
        <CardDescription>
          Generate creative text based on your prompt
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px]"
          />
          <Button 
            className="w-full" 
            onClick={handleGenerate} 
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Text'}
          </Button>
          {result && (
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-medium">Generated Text:</h4>
              <p className="text-sm whitespace-pre-wrap">{result}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}