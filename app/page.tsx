import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Sparkles, Image } from "lucide-react";
import TextClassifier from "@/components/transformers/text-classifier";
import TextGenerator from "@/components/transformers/text-generator";
import ImageClassifier from "@/components/transformers/image-classifier";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Transformers.js Demo</CardTitle>
            <CardDescription>
              Experience the power of AI directly in your browser using Transformers.js
            </CardDescription>
          </CardHeader>
        </Card>

        <Tabs defaultValue="text-classification" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text-classification" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Text Classification
            </TabsTrigger>
            <TabsTrigger value="text-generation" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Text Generation
            </TabsTrigger>
            <TabsTrigger value="image-classification" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Image Classification
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text-classification">
            <TextClassifier />
          </TabsContent>
          <TabsContent value="text-generation">
            <TextGenerator />
          </TabsContent>
          <TabsContent value="image-classification">
            <ImageClassifier />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}