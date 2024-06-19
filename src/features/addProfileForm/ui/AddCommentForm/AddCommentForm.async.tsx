import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentnFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));