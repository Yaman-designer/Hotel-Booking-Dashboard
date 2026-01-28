import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>shadcn/ui is working 🎉</p>
          <Button className="mt-4">Click me</Button>
        </CardContent>
      </Card>
    </div>
  );
}
