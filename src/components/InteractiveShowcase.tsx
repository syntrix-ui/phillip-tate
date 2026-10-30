import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, Heart, Rocket, Layers, CheckCircle2, RefreshCw } from "lucide-react";

export default function InteractiveShowcase() {
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleGreet = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmittedMessage(`Welcome, ${name.trim()}! Your stack is ready to build awesome web apps 🚀`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {/* Interactive Card 1: React Island State */}
      <Card className="border border-border/80 shadow-lg backdrop-blur-sm bg-card/90">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="gap-1.5 py-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              React 19 Island
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">client:load</span>
          </div>
          <CardTitle className="text-xl font-bold mt-2">Interactive Counter & Feedback</CardTitle>
          <CardDescription>
            This component runs via Astro island hydration with dynamic client-side state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/60 border border-border/50 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Love this setup?</p>
              <p className="text-2xl font-black text-primary mt-1">{likes} {likes === 1 ? 'Reaction' : 'Reactions'}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => setLikes((prev) => prev + 1)}
                className="gap-2 cursor-pointer shadow-sm active:scale-95 transition-transform"
              >
                <Heart className="w-4 h-4 fill-current text-rose-400" />
                Like
              </Button>
              {likes > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLikes(0)}
                  className="cursor-pointer"
                  title="Reset counter"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
          </div>

          <form onSubmit={handleGreet} className="space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              Test Interactive Input
            </label>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Apna naam ya website ka naam likhein..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm" variant="secondary" className="cursor-pointer font-semibold">
                Submit
              </Button>
            </div>
          </form>

          {submittedMessage && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-lg text-sm flex items-start gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{submittedMessage}</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground border-t border-border/50 pt-3">
          Powered by shadcn/ui Button, Input & Badge components
        </CardFooter>
      </Card>

      {/* Interactive Card 2: Stack Highlights */}
      <Card className="border border-border/80 shadow-lg backdrop-blur-sm bg-card/90 flex flex-col justify-between">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="gap-1.5 py-1 text-primary">
              <Layers className="w-3.5 h-3.5" />
              Active Stack
            </Badge>
            <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Ready
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold mt-2">Configured Technologies</CardTitle>
          <CardDescription>
            Sab tools successfully integrated aur ready to use hain:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <strong className="font-semibold">Astro 5:</strong> Island Architecture & Blazing Speed
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <strong className="font-semibold">React 19:</strong> Modern UI Components & Client Interactivity
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <strong className="font-semibold">Tailwind CSS v4:</strong> Lightning-fast styling with Vite
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <strong className="font-semibold">shadcn/ui:</strong> Accessible, customizable design system
            </li>
          </ul>

          <div className="pt-2 flex items-center gap-3">
            <Avatar className="w-10 h-10 border border-border">
              <AvatarFallback className="bg-primary/10 text-primary font-bold">PT</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Ready for your project</p>
              <p className="text-xs text-muted-foreground">Ab batao konsi website banani hai!</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground border-t border-border/50 pt-3 flex items-center justify-between">
          <span>Component Library: Base UI / Radix</span>
          <Rocket className="w-4 h-4 text-primary" />
        </CardFooter>
      </Card>
    </div>
  );
}

