export enum Type {
  Video = 'video',
  Text = 'text',
  Quote = 'quote',
  Photo = 'photo',
  Link = 'link',
}

export interface Video {
  title: string;
  link: string;
  tags?: string[];
}

export interface Text {
  title: string;
  preview: string;
  text: string;
  tags?: string[];
}

export interface Quote {
  text: string;
  author: string;
  tags?: string[];
}

export interface Photo {
  photo: string;
  tags?: string[];
}

export interface Link {
  link: string;
  description?: string;
  tags?: string[];
}

export type Content = Video | Text | Quote | Photo | Link;

export interface Post {
  id?: string;
  type: Type;
  likesQuantity: number;
  commentsQuantity: number;
  userId: string;
  content: Content;
}

