export interface PackageData {
  /** Package name as in npm, for example, `@sinups/fmap` */
  packageName: string;

  /** Description of the package, displayed below the title in documentation */
  packageDescription: string;

  /** Link to the documentation mdx file, used in "Edit this page button" */
  mdxFileUrl: string;

  /** Link to the repository on GitHub, used in header github icon and in "View source code button" */
  repositoryUrl: string;

  /** Link to the license file */
  licenseUrl?: string;

  /** Information about the author of the package */
  author: {
    /** Package author name, for example, `John Doe` */
    name: string;

    /** Author GitHub username, for example, `webtheory` */
    githubUsername: string;
  };
}

export const PACKAGE_DATA: PackageData = {
  packageName: '@sinups/fmap',
  packageDescription:
    'fmap is a lightweight tool that visualizes your file and folder structure in a clean, readable tree view — perfect for documentation',
  mdxFileUrl: 'https://github.com/sinups/fmap/blob/master/docs/pages/index.mdx',
  repositoryUrl: 'https://github.com/sinups/fmap',
  licenseUrl: 'https://github.com/sinups/fmap/blob/master/LICENSE',
  author: {
    name: 'Andrei Cojocari',
    githubUsername: 'sinups',
  },
};
