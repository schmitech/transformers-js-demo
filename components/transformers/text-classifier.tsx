"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Brain } from "lucide-react";
import TransformerService from '@/lib/transformers-service';

export default function TextClassifier() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClassify = async () => {
    if (!input.trim()) {
      setError('Please enter some text to classify');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const service = TransformerService.getInstance();
      const classification = await service.classifyText(input);
      setResult(classification);
    } catch (error) {
      console.error('Classification failed:', error);
      setError(
        error instanceof Error 
          ? error.message 
          : 'Failed to classify text. Please check your API configuration.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          Text Classification
        </CardTitle>
        <CardDescription>
          Analyze the sentiment or classify text using AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter text to classify..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={handleClassify} disabled={loading}>
              {loading ? 'Analyzing...' : 'Classify'}
            </Button>
          </div>
          {error && (
            <div className="rounded-lg bg-destructive/10 p-4 text-destructive">
              {error}
            </div>
          )}
          {result && (
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-medium">Results:</h4>
              <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}