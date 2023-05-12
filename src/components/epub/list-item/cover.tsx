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
    <img
      src={imageBase64}
      alt="cover"
      className="h-40 object-contain rounded-md w-full bg-gray-50"
    />
  );
}
