export interface LineLoginPlugin {
  login(options: { permissions: string[] }): Promise<LineLoginResponse>;
}

export interface LineLoginResponse {
  accessToken: AccessToken;
  // permissions: string[];
  userProfile: UserProfile;
  // friendshipStatusChanged?: boolean;
  // IDTokenNonce?: string;
}

export interface AccessToken {
  value: string;
  // expiresIn: number;
  // createdAt: Date;
  // IDToken?: string;
  // refreshToken: string;
  // permissions: string[];
  // tokenType: string;
}

export interface UserProfile {
  userID: string | null;
  // displayName: string;
  // pictureURL?: string;
  // statusMessage?: string;
}
