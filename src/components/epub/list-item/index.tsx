import { EPUBParser } from "@/services/parser";
import { IContainer, IRootFile } from "@/services/parser/interfaces";
import { useCallback, useEffect, useState } from "react";
import { ListItemCover } from "./cover";

export interface ListItemProps {
  file: File;
}

export function ListItem({ file }: ListItemProps) {
  const [rootInfo, setRootInfo] = useState<IRootFile>();
  const [container, setContainer] = useState<IContainer>();
  const [parser, setParser] = useState<EPUBParser>();

  useEffect(() => {
    const parser = new EPUBParser(file);
    parser.parse().then(() => {
      setParser(parser);
    });
  }, [file]);

  const parse = useCallback(async () => {
    if (!parser || !parser.parsed) return;

    setRootInfo(await parser.parseRootInfo());
    setContainer(await parser.parseContainer());
  }, [parser]);

  useEffect(() => {
    parse();
  }, [parse]);

  if (!parser) return <div>parsing</div>;

  if (!rootInfo || !container) return <div>loading</div>;

  return (
    <div className="bg-gray-300 rounded-md grid grid-cols-list-item-layout mb-2">
      <ListItemCover parser={parser} />
      <div className="p-2 grow">
        <div className="text-lg font-semibold text-ellipsis w-100">
          {rootInfo.package.metadata["dc:title"]}
        </div>
      </div>
    </div>
  );
}
