// src/utils/loadProjects.ts

export type ProjectItem = {
  title: string;
  role: string;
  years: string;
  summary: string;
  highlights: string[];
  github?: string;
  image?: string;
};

export async function loadProjectsFromXML(): Promise<ProjectItem[]> {
  const xmlURL = "/data/projects.xml";

  try {
    const response = await fetch(xmlURL);
    if (!response.ok) throw new Error("XML file not found.");

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "text/xml");

    const projectNodes = Array.from(xml.getElementsByTagName("project"));
    const projects: ProjectItem[] = projectNodes.map((node) => {
      const get = (tag: string) =>
        node.getElementsByTagName(tag)[0]?.textContent?.trim() || "";

      return {
        title: get("title"),
        role: get("role"),
        years: get("years"),
        summary: get("summary"),
        github: get("github") || undefined,
        image: get("image") || undefined,
        highlights: Array.from(node.getElementsByTagName("highlight")).map(
          (h) => h.textContent?.trim() || ""
        ),
      };
    });

    return projects;
  } catch (err) {
    console.error("XML parsing failed:", err);
    return [];
  }
}