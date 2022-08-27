import avatar from '@/images/avatar.png';
export interface Author {
  name: string;
  title: string;
  profileUrl: string;
  avatarUrl: string;
}
export interface Post {
  id: number | string;
  title: string;
  publishedDate: string;
  tagList: string[];
  desciption: string;

  slug: string;
  author?: Author;

  mdContent?: string;
  htmlContent?: string;
}
