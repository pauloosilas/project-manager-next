import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="gap-4">
      <Button >
        primary
      </Button>
      <Button variant={"secondary"}>
        secondary
      </Button>
      <Button variant={"destructive"}>
        Destructive
      </Button>
      <Button variant={"ghost"}>
      ghost
      </Button>
      <Button variant={"muted"}>
      muted
      </Button>
      <Button variant={"outline"}>
        link
      </Button>
      <Button variant={"teritrary"}>
      teritrary
      </Button>
    </div>
  );
}
