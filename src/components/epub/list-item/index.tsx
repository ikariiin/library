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
    <div
      className="p-3 bg-gray-200 rounded-md grid grid-cols-list-item-layout mb-2 shadow-sm"
      role="button"
    >
      <ListItemCover parser={parser} />
      <div className="p-2 ms-2 grow flex flex-col">
        <div className="text-lg font-semibold text-ellipsis w-100">
          {rootInfo.package.metadata["dc:title"]}
        </div>
        <div className="text-sm text-gray-500 text-ellipsis w-100">
          {rootInfo.package.metadata["dc:creator"]["#text"]}
        </div>
        <div className="text-sm text-gray-500 text-ellipsis w-100">
          {rootInfo.package.metadata["dc:publisher"]}
        </div>
        <div className="grow" />
        <div className="text-sm text-gray-500 text-ellipsis w-100">
          Last read: 2021-09-01
        </div>
      </div>
    </div>
  );
}
