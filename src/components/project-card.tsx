import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-3xl border p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1  hover:underline"
              >
                {title}{" "}
                <div className="ml-1 text-gray-600">
                  <ExternalLink size={14} />
                </div>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant={tag == "NextJs" ? "default" : "secondary"}
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
