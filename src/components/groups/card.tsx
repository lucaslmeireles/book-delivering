import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";

type CardUITypes = {
  title: string;
  description?: string;
  footer?: string;
  cardtype?: "button" | "link" | "progress";
};

export default function CardUI(data: CardUITypes) {
  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        {data.cardtype === "button" && <Button>{data.footer}</Button>}
        {data.cardtype === "link" && <a href="#">{data.footer}</a>}
        {data.cardtype === "progress" && <Progress>{data.footer}</Progress>}
      </CardFooter>
    </Card>
  );
}
