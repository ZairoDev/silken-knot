import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className=" flex gap-x-4 mt-8">
      <Input placeholder=" I am an input" />
      <Button variant={"elevated"}>I am a button</Button>
      <Textarea />
      <Progress value={50} />
    </div>
  );
}
