export interface CategoryType {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  color: string;
  subcategories: CategoryType[];
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: TagType[];
  image: string;
  refundPolicy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TagType {
  _id: string;
  name: string;
  products: ProductType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserType {
  _id: string;
  username: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
