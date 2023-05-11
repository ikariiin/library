import { EPUBParser } from "@/services/parser";
import { CoverParser } from "@/services/parser/cover";
import { useCallback, useEffect, useState } from "react";

export interface ListItemCoverProps {
  parser: EPUBParser;
}

export function ListItemCover({ parser }: ListItemCoverProps) {
  const [imageBase64, setImageBase64] = useState<string>("");

  const getCover = useCallback(async () => {
    const coverParser = new CoverParser(parser);
    const cover = await coverParser.getCover("base64");
    setImageBase64(cover);
  }, [parser]);

  useEffect(() => {
    getCover();
  }, [getCover]);

  return (
    <div className="p-2">
      <img
        src={imageBase64}
        alt="cover"
        className="w-full h-48 object-cover bg-slate-200 rounded-md"
      />
    </div>
  );
}
