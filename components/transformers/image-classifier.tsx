"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";
import TransformerService from '@/lib/transformers-service';

export default function ImageClassifier() {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleClassify = async () => {
    if (!imageUrl.trim()) {
      setError('Please enter an image URL');
      return;
    }

    if (!isValidUrl(imageUrl)) {
      setError('Please enter a valid URL');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const service = TransformerService.getInstance();
      const classification = await service.classifyImage(imageUrl);
      setResult(classification);
    } catch (error) {
      console.error('Image classification failed:', error);
      setError(
        error instanceof Error 
          ? error.message 
          : 'Failed to classify image. Please check the URL and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="h-6 w-6" />
          Image Classification
        </CardTitle>
        <CardDescription>
          Classify images using AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter image URL..."
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                setError(null);
              }}
            />
            <Button onClick={handleClassify} disabled={loading}>
              {loading ? 'Processing...' : 'Classify'}
            </Button>
          </div>
          {error && (
            <div className="rounded-lg bg-destructive/10 p-4 text-destructive">
              {error}
            </div>
          )}
          {imageUrl && !error && (
            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
              <img
                src={imageUrl}
                alt="Preview"
                className="object-contain w-full h-full"
              />
            </div>
          )}
          {result && (
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-medium">Classification Results:</h4>
              <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}