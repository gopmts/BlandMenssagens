
export interface Contact {
  id: string;
  name: string;
  contact_id?: string;
  phone: string;
  clerk_id?: string;
  image?: string | null;
  created_at: Date;
  isUnknown: boolean;
  phoneNumbers?: { number: string }[];
}

export interface User {
  id: string;
  clerk_id: string;
  name: string | null;
  phone: string;
  imageurl?: string | null;
  email: string | null;
  last_seen: Date;
  isOnline?: boolean;
  search_token?: string;
}

export interface Mensagens {
  contact_name?: string;
  sender?: any;
  receiver?: any;
  id: string
  sender_id: string
  receiver_id: string
  content: string
  legendImage?: string,
  created_at: string
  is_deleted: boolean;
  hidden_by_sender?: boolean;
  hidden_by_receiver?: boolean;
  deleted_at_receiver?: Date;
  deleted_at_sender?: Date;
  contact_image?: string | null;
  images: string[],
  filesUrls: string[],
  status: "send" | "delivered" | "read"
  audioUrl?: string;
  audiosUrls?: string[]
}

export interface MessageProperties {
  item: Mensagens
  user?: any
  userId: string
  colors: any
  imageUser?: string
  handleCopy: (text: string, messageId: string, legendImage: string) => void
  downloadImage: (image: string) => void
  downloadFiles: (filesUrls: string) => void
  deleteMessage: (messageId: string[]) => void;
  updateMessageStatus: (messageId: string, newStatus: string) => void;
}

export interface FilePreview {
  uri: string
  type: string
  name: string
  size?: number
}
export interface AudioConfirmation {
  uri: string
  duration?: number
}

export interface Story {
  isViewed: boolean;
  id: string;
  imageUrl?: string;
  text?: string;
  videoUrl?: string;
  createdAt?: string;
  user_id: string;
  user?: {
    imageUrl: string;
    name: string;
  };
  contact?: {
    imageUrl: string;
    name: string;
  };

}

export interface StoryInterface {
  id: string;
  user_id: string;
  stories: Story[];
  user?: {
    imageUrl: string;
    name: string;
  };
  contact?: {
    imageUrl: string;
    name: string;
  };
}

export type MediaType = 'photo' | 'video';

export type CreateStoryParams = {
  mediaUri: string;
  mediaType: MediaType;
}