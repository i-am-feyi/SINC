export {};

declare global {
  interface CustomJwtSessionClaims {
    publicMetadata: {
      isAgent?: boolean;
      isStudent?: boolean;
    };
    unsafeMetadata: {
      isAgent?: boolean;
      isStudent?: boolean;
    };
  }

  interface userRole {
    isAgent?: boolean;
    isStudent?: boolean;
  }
}
