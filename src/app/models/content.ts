export class AemContentResponse {
  name: string;
  path: string;
  title: string;
  assets: Assets;
}

export class Assets {
  href: string;
  localpath: string;
  dam: Dam
}

export class Dam {
  path: string;
  type: string;
  lastModified: string;
  length: number;
}
