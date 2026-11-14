import { PageId } from "../components/Navbar";
import { FLAGSHIP_PROGRAMMES, GALLERY_ITEMS } from "../data/organizationData";

const prefetchedUrls = new Set<string>();

function preloadImage(src?: string) {
  if (!src || prefetchedUrls.has(src) || typeof window === "undefined") return;
  prefetchedUrls.add(src);
  const img = new Image();
  img.decoding = "async";
  img.src = src;
}

const PAGE_ASSET_MAP: Record<PageId, string[]> = {
  home: [
    "/drive_assets/royal_sisterhood_official_crest.jpg",
    "/drive_assets/king_adam_kok_v_and_princesses.jpg",
    "/drive_assets/three_princesses_full_standing.jpg",
  ],
  leadership: [
    "/drive_assets/king_adam_kok_v_and_princesses.jpg",
    "/drive_assets/adam_kok_genealogical_tree.jpg",
    "/drive_assets/portrait_princess_cornelia.jpg",
    "/drive_assets/portrait_princess_maggie.jpg",
    "/drive_assets/portrait_princess_may.jpg",
  ],
  programmes: FLAGSHIP_PROGRAMMES.map((p) => p.image).filter(
    (img): img is string => Boolean(img)
  ),
  partners: [
    "/drive_assets/royal_delegation_assembly.jpg",
    "/drive_assets/official_registration_certificate.jpg",
  ],
  support: [
    "/drive_assets/portrait_princess_maggie.jpg",
    "/drive_assets/portrait_princess_cornelia.jpg",
  ],
  "fund-us": [
    "/drive_assets/official_registration_certificate.jpg",
    "/drive_assets/royal_sisterhood_official_crest.jpg",
  ],
  gallery: GALLERY_ITEMS.slice(0, 8).map((item) => item.image),
  contact: ["/drive_assets/royal_sisterhood_official_crest.jpg"],
};

export function prefetchPageAssets(page: PageId): void {
  const urls = PAGE_ASSET_MAP[page] || [];
  urls.forEach(preloadImage);
}

export function prefetchCoreIdle(): void {
  if (typeof window === "undefined") return;
  const run = () => {
    ["leadership", "programmes", "fund-us", "gallery"].forEach((page) => {
      prefetchPageAssets(page as PageId);
    });
  };

  if ("requestIdleCallback" in window) {
    (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(
      run
    );
  } else {
    setTimeout(run, 1500);
  }
}
