export interface IContainer {
  container: {
    rootfiles: {
      rootfile: {
        "full-path": string;
        "media-type": string;
      };
    };
  };
}

export interface IRootFile {
  package: {
    metadata: {
      "dc:title": string;
      "dc:creator": {
        "#text": string;
        "opf:role": string;
        "opf:file-as": string;
      };
      "dc:language": string;
      "dc:identifier": {
        "#text": string;
        "opf:scheme": string;
        id: string;
      };
      "dc:date"?: string;
      "dc:publisher"?: string;
      "dc:contributor"?: {
        "#text": string;
        "opf:role": string;
        "opf:file-as": string;
      };
      "dc:rights"?: string;
      "dc:subject"?: string;
      meta:
        | {
            name: string;
            content: string;
          }[]
        | {
            name: string;
            content: string;
          };
    };
    manifest: {
      item: Array<{
        id: string;
        href: string;
        "media-type": string;
      }>;
    };
    spine: {
      itemref: Array<{
        idref: string;
      }>;
      toc: string;
    };
    guide: {
      reference: {
        type: string;
        title: string;
        href: string;
      };
    };
    "unique-identifier": string;
    version: string;
    xmlns: string;
  };
}

export type EPUBMetadata = IRootFile["package"]["metadata"];
export type EPUBManifest = IRootFile["package"]["manifest"];
