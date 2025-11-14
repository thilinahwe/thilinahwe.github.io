// src/components/HeadMeta.tsx
import { useEffect } from "react";

type HeadMetaProps = {
  title: string;
  description?: string;
};

export default function HeadMeta({ title, description }: HeadMetaProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (!metaDesc && description) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc?.content;

    if (metaDesc && description) {
      metaDesc.content = description;
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && description) {
        metaDesc.content = prevDesc || "";
      }
    };
  }, [title, description]);

  return null;
}
